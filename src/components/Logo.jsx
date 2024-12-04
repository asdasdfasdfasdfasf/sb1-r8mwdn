export default function Logo() {
  return (
    <div className="flex items-center">
      <img
        src="/logo.svg"
        alt="IT Trailblazers"
        className="h-8 w-auto"
      />
      <span className="ml-2 text-xl font-bold text-blue-900">IT TRAILBLAZERS</span>
    </div>
  );
}