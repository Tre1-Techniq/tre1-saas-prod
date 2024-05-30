import SidebarDashboard from "~/components/layout/sidebar/SidebarDashboard";

export default function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="items-start justify-between">
      <SidebarDashboard />
      <main className="bg-neutral-900 w-full min-h-screen">
          {children}
      </main>
    </div>
  );
}