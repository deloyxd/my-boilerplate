import Header from "@/components/header";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Header />
      <div>
        Home
        <Link href="/login">Login</Link>
        <Link href="/signup">Sign up</Link>
      </div>
    </>
  );
}
