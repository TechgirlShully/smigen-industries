import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-6 text-center">
      <h1 className="text-7xl font-bold text-[#1E3A8A]">404</h1>

      <h2 className="mt-4 text-3xl font-semibold">
        Page Not Found
      </h2>

      <p className="mt-4 max-w-md text-gray-600">
        The page you're looking for doesn't exist or has been moved.
      </p>

      <Button
        
        className="mt-8 bg-orange-500 hover:bg-orange-600"
      >
        <Link href="/">Back to Home</Link>
      </Button>
    </main>
  );
}