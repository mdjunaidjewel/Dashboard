export default function Header() {
  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="font-semibold text-lg">Analytics Dashboard</h1>

      <div className="flex items-center gap-4">
        🔔
        <div className="w-8 h-8 rounded-full bg-gray-300" />
      </div>
    </header>
  );
}
