import QuizHeader from "../../components/containers/qmai/QuizHeader";

export default function QuizMasterAiLayout({
    children,
    modal,
  }: {
    children: React.ReactNode;
    modal: React.ReactNode;
  }) {
    return (
      <section className="flex flex-wrap">
        <div className="grid w-1/3 h-screen bg-secondary py-12 px-6 text-center font-lg">
          <QuizHeader />
          <h2 className="text-3xl font-bold">QuizMaster AI</h2>
        </div>
        <div className="bg-neutral-900 grid w-2/3 h-screen">
          {children}
        </div>
      </section>
    );
  }