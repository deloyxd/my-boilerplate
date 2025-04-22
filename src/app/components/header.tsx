interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <header className="bg-white border-1 border-gray-100 mx-auto text-black">
      <div className="p-6">
        <a className="text-2xl font-bold hover:text-gray-600" href="/">
          {title}
        </a>
      </div>
    </header>
  );
}
