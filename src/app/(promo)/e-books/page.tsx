import { auth, currentUser } from "@clerk/nextjs/server";

export default async function Tre1ULandingPage() {
  const { userId } = auth();

  if (userId) {
    const user = await currentUser();

    return (
      <div className="min-h-screen w-full text-center font-lg">
        <h2 className='text-3xl font-bold'>Hello, {user?.firstName}!</h2>
        <p>Welcome to the Tre1 U eBook Library.</p>
      </div>
    );
  } else if (!userId) {
    return (
      <div className="min-h-screen w-full text-center font-lg">
        <h2 className='text-3xl font-bold'>Tre1 U eBook Library</h2>
        <p>Register to unlock exclusive member benefits. It&apos;s FREE!</p>
      </div>
    );
  }
}