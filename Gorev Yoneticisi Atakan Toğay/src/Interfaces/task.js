/**
 * Görev nesnesinin yapısı (Interface yerine JSDoc ile tanımlandı).
 *
 * @typedef {Object} Task
 * @property {string}  id          Benzersiz kimlik
 * @property {string}  title       Görev başlığı
 * @property {string}  description Açıklama
 * @property {"low"|"medium"|"high"} priority Öncelik
 * @property {boolean} completed   Tamamlandı mı?
 * @property {string}  createdAt   Oluşturulma tarihi (ISO)
 */

export const PRIORITIES = [
  { value: "low", label: "Düşük", badge: "bg-emerald-100 text-emerald-700" },
  { value: "medium", label: "Orta", badge: "bg-amber-100 text-amber-700" },
  { value: "high", label: "Yüksek", badge: "bg-rose-100 text-rose-700" },
];

export const FILTERS = [
  { value: "all", label: "Tümü" },
  { value: "active", label: "Devam Eden" },
  { value: "done", label: "Tamamlanan" },
];

/** @returns {Task} */
export function createTask({ title, description, priority }) {
  return {
    id: crypto.randomUUID(),
    title: title.trim(),
    description: description.trim(),
    priority,
    completed: false,
    createdAt: new Date().toISOString(),
  };
}
