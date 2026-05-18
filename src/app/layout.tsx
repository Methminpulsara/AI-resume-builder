import "./globals.css";

export const metadata = {
  title: "AI Resume Builder",
  description: "Create professional resumes using AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}