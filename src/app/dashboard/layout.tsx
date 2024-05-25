export default function LeftPanelLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <section className="flex flex-wrap">
        <div className="grid w-1/5 h-screen bg-secondary py-12 px-6 text-center font-lg">
            <h2 className='text-3xl font-bold'>Left Panel</h2>
        </div>
        <div className="bg-neutral-900 grid w-4/5 h-screen">
            {children}
        </div>
    </section>
  );
}