interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <header className="mx-auto border-1 border-gray-100 bg-white text-black">
      <div className="p-6">
        <a className="text-2xl font-bold hover:text-gray-600" href="/">
          {title}
        </a>
      </div>
    </header>
  );
}
