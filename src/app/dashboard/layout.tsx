import 'tailwindcss/tailwind.css';
import '../../styles/globals.css';

export default function LeftPanelLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <section className="flex flex-wrap">
        <div className="grid w-1/5 h-screen bg-gray-800 py-12 px-6 text-center text-2xl">
            <h2>Left Panel</h2>
        </div>
        <div className="grid w-4/5 h-screen bg-gray-950">
            {children}
        </div>
    </section>
  );
}