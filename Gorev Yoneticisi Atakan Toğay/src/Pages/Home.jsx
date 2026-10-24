import { useMemo, useState } from "react";
import Header from "../Components/Header.jsx";
import TaskForm from "../Components/TaskForm.jsx";
import FilterBar from "../Components/FilterBar.jsx";
import TaskList from "../Components/TaskList.jsx";
import { useLocalStorage } from "../hooks/useLocalStorage.js";
import { createTask } from "../Interfaces/task.js";

export default function Home() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  // EKLE (Create)
  const addTask = (values) => setTasks([createTask(values), ...tasks]);

  // GÜNCELLE (Update)
  const updateTask = (id, values) =>
    setTasks(
      tasks.map((t) =>
        t.id === id
          ? {
              ...t,
              title: values.title.trim(),
              description: values.description.trim(),
              priority: values.priority,
            }
          : t
      )
    );

  const toggleTask = (id) =>
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));

  // SİL (Delete)
  const deleteTask = (id) => {
    if (window.confirm("Bu görevi silmek istediğine emin misin?")) {
      setTasks(tasks.filter((t) => t.id !== id));
    }
  };

  // LİSTELE (Read) — filtre + arama uygulanmış liste
  const visibleTasks = useMemo(() => {
    const q = search.trim().toLowerCase();
    return tasks.filter((t) => {
      const matchesFilter =
        filter === "all" || (filter === "done" ? t.completed : !t.completed);
      const matchesSearch =
        !q ||
        t.title.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q);
      return matchesFilter && matchesSearch;
    });
  }, [tasks, filter, search]);

  return (
    <main className="min-h-screen bg-slate-300 px-4 py-10">
      <div className="mx-auto max-w-2xl space-y-5">
        <Header total={tasks.length} done={tasks.filter((t) => t.completed).length} />
        <TaskForm onSubmit={addTask} />
        <FilterBar
          filter={filter}
          onFilterChange={setFilter}
          search={search}
          onSearchChange={setSearch}
        />
        <TaskList
          tasks={visibleTasks}
          onToggle={toggleTask}
          onUpdate={updateTask}
          onDelete={deleteTask}
        />
      </div>
    </main>
  );
}
