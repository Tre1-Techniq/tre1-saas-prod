import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex flex-col justify-self items-start">
      <h2 className='text-3xl font-bold text-center py-12'>Tre1 Techniq Member Sign In</h2>
      <div className="m-auto"><SignIn /></div>
    </div>
  );
}