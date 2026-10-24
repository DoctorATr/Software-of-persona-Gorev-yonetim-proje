export default function Header({ total, done }) {
  const percent = total === 0 ? 0 : Math.round((done / total) * 100);

  return (
    <header className="mb-8 text-center">
      <h1 className="text-3xl font-bold text-slate-800">📝 Görev Yöneticisi</h1>
      <p className="mt-2 text-slate-500">
        {total} görevden {done} tanesi tamamlandı
      </p>
      <div className="mx-auto mt-4 h-2 max-w-sm overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full bg-indigo-500 transition-all"
          style={{ width: `${percent}%` }}
        />
      </div>
    </header>
  );
}
