import { auth, currentUser } from "@clerk/nextjs/server";

export default async function DashboardPage() {
  const { userId } = auth();

  if (userId) {
    const user = await currentUser();

    return (
      <div className="h-full w-full text-center font-lg pt-12 pl-12">
        <h2 className='text-3xl font-bold'>Tre1 Techniq Member Dashboard</h2>
        <p>Hello, {user?.firstName}! Welcome to your Dashboard.</p>
      </div>
    );
  } else if (!userId) {
    return (
      <div className="h-full w-full text-center font-lg p-12 pl-12">
        <h2 className='text-3xl font-bold'>Tre1 Techniq Member Dashboard</h2>
        <p>Sign in to view the Tre1 Techniq Member Dashboard.</p>
      </div>
    );
  }
}