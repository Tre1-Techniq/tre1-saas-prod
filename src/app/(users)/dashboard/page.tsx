import { currentUser } from "@clerk/nextjs/server";

export default async function DashboardPage() {
  const user = await currentUser();

  return (
    <div className="min-h-screen w-full text-center font-lg">
      <h2 className='text-3xl font-bold'>Hello, {user?.firstName}!</h2>
      <p> Welcome to your Tre1 Techniq Dashboard.</p>
    </div>
  );
}