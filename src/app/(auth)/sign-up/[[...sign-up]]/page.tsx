import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex flex-col justify-self items-start">
      <h2 className='text-3xl font-bold text-center py-12'>Become a Tre1 Techniq Member</h2>
      <div className="m-auto"><SignUp /></div>
    </div>
  );
}