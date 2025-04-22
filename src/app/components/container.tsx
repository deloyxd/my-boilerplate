export default function Container({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="mx-auto w-full max-w-7xl flex-1 overflow-y-auto shadow-lg">
      {children}
    </div>
  );
}
