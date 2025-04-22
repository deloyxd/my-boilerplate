import { getMetadataTitle } from "@/config/metadata";

export default function Header() {
  return (
    <header className="mx-auto border-1 border-gray-100 bg-white text-black">
      <div className="p-6">
        <a className="text-2xl font-bold hover:text-gray-600" href="/">
          {getMetadataTitle()}
        </a>
      </div>
    </header>
  );
}
