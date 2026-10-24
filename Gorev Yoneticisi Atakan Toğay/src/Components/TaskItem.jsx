import { useState } from "react";
import TaskForm from "./TaskForm.jsx";
import { PRIORITIES } from "../Interfaces/task.js";

export default function TaskItem({ task, onToggle, onUpdate, onDelete }) {
  const [editing, setEditing] = useState(false);
  const priority = PRIORITIES.find((p) => p.value === task.priority);

  if (editing) {
    return (
      <li>
        <TaskForm
          initialValues={{
            title: task.title,
            description: task.description,
            priority: task.priority,
          }}
          submitLabel="Kaydet"
          onCancel={() => setEditing(false)}
          onSubmit={(values) => {
            onUpdate(task.id, values);
            setEditing(false);
          }}
        />
      </li>
    );
  }

  return (
    <li className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        className="mt-1.5 h-5 w-5 cursor-pointer accent-indigo-600"
        aria-label="Tamamlandı olarak işaretle"
      />

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3
            className={`font-semibold ${
              task.completed ? "text-slate-400 line-through" : "text-slate-800"
            }`}
          >
            {task.title}
          </h3>
          <span className={`rounded-full px-2 py-0.5 text-xs ${priority?.badge}`}>
            {priority?.label}
          </span>
        </div>
        {task.description && (
          <p className="mt-1 text-sm text-slate-500">{task.description}</p>
        )}
        <p className="mt-1 text-xs text-slate-400">
          {new Date(task.createdAt).toLocaleString("tr-TR")}
        </p>
      </div>

      <div className="flex gap-1">
        <button
          onClick={() => setEditing(true)}
          className="rounded-lg px-3 py-1 text-sm text-indigo-600 hover:bg-indigo-50"
        >
          Düzenle
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="rounded-lg px-3 py-1 text-sm text-rose-600 hover:bg-rose-50"
        >
          Sil
        </button>
      </div>
    </li>
  );
}
