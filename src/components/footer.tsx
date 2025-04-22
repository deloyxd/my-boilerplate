import Link from "next/link";
import Image from "next/image";
import {
  getMetadataTitle,
  getMetadataDescription,
  getMetadataGithub,
} from "@/config/metadata";

export default function Footer() {
  return (
    <footer className="border-1 border-gray-100 bg-white text-black">
      <div className="flex flex-col items-center justify-center py-8">
        <a className="text-2xl font-bold hover:text-gray-600" href="/">
          {getMetadataTitle()}
        </a>
        <p className="mt-3 text-gray-900">{getMetadataDescription()}</p>
        <Link
          className="mt-6 inline-flex items-center text-gray-900 hover:text-gray-500"
          href={`https://github.com/${getMetadataGithub()}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/github-mark.png"
            alt="GitHub Logo"
            width={20}
            height={20}
            className="h-5 w-5"
          />
          <span className="ml-2">View on GitHub</span>
        </Link>
      </div>
    </footer>
  );
}
