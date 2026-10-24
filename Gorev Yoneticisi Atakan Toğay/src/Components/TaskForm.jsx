import { useState } from "react";
import { PRIORITIES } from "../Interfaces/task.js";

const EMPTY = { title: "", description: "", priority: "medium" };

/**
 * Hem EKLE hem GÜNCELLE için kullanılan form.
 * onCancel verilirse düzenleme modunda çalışır.
 */
export default function TaskForm({
  initialValues = EMPTY,
  onSubmit,
  onCancel,
  submitLabel = "Ekle",
}) {
  const [form, setForm] = useState(initialValues);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) {
      setError("Görev başlığı boş olamaz.");
      return;
    }
    onSubmit(form);
    if (!onCancel) setForm(EMPTY);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200"
    >
      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Görev başlığı"
        className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-indigo-500 focus:outline-none"
      />
      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Açıklama (opsiyonel)"
        rows={2}
        className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-indigo-500 focus:outline-none"
      />
      {error && <p className="text-sm text-rose-600">{error}</p>}

      <div className="flex flex-wrap items-center gap-2">
        <select
          name="priority"
          value={form.priority}
          onChange={handleChange}
          className="rounded-lg border border-slate-300 px-3 py-2"
        >
          {PRIORITIES.map((p) => (
            <option key={p.value} value={p.value}>
              Öncelik: {p.label}
            </option>
          ))}
        </select>

        <div className="ml-auto flex gap-2">
          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="rounded-lg px-4 py-2 text-slate-600 hover:bg-slate-100"
            >
              Vazgeç
            </button>
          )}
          <button
            type="submit"
            className="rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700"
          >
            {submitLabel}
          </button>
        </div>
      </div>
    </form>
  );
}
