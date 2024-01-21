import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <h1 className="text-6xl font-bold mb-4">404 - Not Found</h1>
      <p className="text-xl mb-6">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href="/en">Go back to the home page</Link>
    </div>
  );
}
