import TaskItem from "./TaskItem.jsx";

export default function TaskList({ tasks, onToggle, onUpdate, onDelete }) {
  if (tasks.length === 0) {
    return (
      <p className="rounded-xl border border-dashed border-slate-300 p-8 text-center text-slate-400">
        Gösterilecek görev yok.
      </p>
    );
  }

  return (
    <ul className="space-y-3">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
