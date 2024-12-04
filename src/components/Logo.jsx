export default function Logo() {
  return (
    <div className="flex items-center">
      <img
        src="/magistaniclogo.png"
        alt="Magista Inc"
        className="h-8 w-auto"
      />
      <span className="ml-2 text-xl font-bold text-blue-900">MAGISTA INC</span>
    </div>
  );
}