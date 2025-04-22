export default function Container({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex-1 shadow-lg overflow-y-auto w-full max-w-7xl mx-auto">
      {children}
    </div>
  );
}
