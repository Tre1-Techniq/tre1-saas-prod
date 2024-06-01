import { UserProfile } from "@clerk/nextjs";

export default async function AccountSettingse() {

  return (
    <div className="min-h-screen flex items-center justify-center">
      <UserProfile />
    </div>
  );
}