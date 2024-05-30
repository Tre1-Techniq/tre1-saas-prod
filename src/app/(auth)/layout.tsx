
export default function LeftPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div className="min-h-screen w-full flex flex-wrap items-start justify-center bg-neutral-900">
        <main>{children}</main>
      </div>
  );
}