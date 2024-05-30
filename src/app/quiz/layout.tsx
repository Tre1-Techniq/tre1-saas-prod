import SidebarDashboard from "~/components/layout/sidebar/SidebarDashboard";

export default function QuizMasterAiLayout({
    children,
    modal,
  }: {
    children: React.ReactNode;
    modal: React.ReactNode;
  }) {
    return (
      <div className="flex items-start justify-between">
        <SidebarDashboard />
        <main className="bg-neutral-900 w-full min-h-screen">
            {children}
        </main>
      </div>
    );
  }