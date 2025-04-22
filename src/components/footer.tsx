import Link from "next/link";
import Image from "next/image";

interface FooterProps {
  title: string;
  description: string;
  github: string;
}

export default function Footer({ title, description, github }: FooterProps) {
  return (
    <footer className="border-1 border-gray-100 bg-white text-black">
      <div className="flex flex-col items-center justify-center py-8">
        <a className="text-2xl font-bold hover:text-gray-600" href="/">
          {title}
        </a>
        <p className="mt-3 text-gray-900">{description}</p>
        <Link
          className="mt-6 inline-flex items-center text-gray-900 hover:text-gray-500"
          href={`https://github.com/${github}`}
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
