import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      
      <h1 className="text-6xl font-bold text-center leading-tight">
        Build Professional <br />
        Resumes Using AI
      </h1>

      <p className="text-gray-400 text-center mt-6 max-w-2xl">
        Create modern ATS-friendly resumes instantly using AI-powered tools.
      </p>

      <Link
        href="/resume-builder"
        className="mt-8 bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-2xl font-semibold"
      >
        Build Resume
      </Link>

    </main>
  );
}