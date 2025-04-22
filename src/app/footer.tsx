import Link from "next/link";
import Image from "next/image";

interface FooterProps {
  title: string;
  description: string;
  github: string;
}

export default function Footer({ title, description, github }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center">
          <a className="text-2xl font-bold hover:text-gray-300" href="/">
            {title}
          </a>
          <p className="mt-3 text-gray-400">{description}</p>
          <Link
            className="inline-flex items-center mt-6 text-gray-400 hover:text-gray-300"
            href={`https://github.com/${github}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/github-mark-white.png"
              alt="GitHub Logo"
              width={20}
              height={20}
              className="w-5 h-5"
            />
            <span className="ml-2">View on GitHub</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
