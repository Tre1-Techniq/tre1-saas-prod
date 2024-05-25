import 'tailwindcss/tailwind.css';
import '../../../styles/globals.css';

export default function LeftPanelLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <section className="flex flex-wrap items-center justify-center">
      <div className="w-full flex flex-wrap items-center justify-center h-screen bg-gray-800">
        {/* <div className="w-full h-20 py-12 flex justify-center">
          <h2>SIGN IN</h2>
        </div> */}
        {children}
      </div>
    </section>
  );
}