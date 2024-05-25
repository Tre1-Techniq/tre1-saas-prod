"use client"

import { useUser } from "@clerk/nextjs";

const Dashboard = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) {
    // Optional: You can render a loading indicator here
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    // Redirect the user to the sign-in page if they are not signed in
    // You might want to use Next.js router for this
    // Example: router.push('/signin');
    return <div>Please sign in to view your Dashboard.</div>;
  }

  return (
    <div className="w-full text-center">
      <h2 className='text-3xl font-bold'>Dashboard</h2>
      <p>Hello, {user.firstName}! Welcome to your Dashboard.</p>
      {/* You can render additional user information here */}
    </div>
  );
};

export default Dashboard;
