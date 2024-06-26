'use client'

import { useClerk } from '@clerk/nextjs';
import { Button } from '../ui/button';

export const SignOutButton = () => {
  const { signOut } = useClerk();

  return (
    <Button onClick={() => signOut({ redirectUrl: '/tre1-u' })}>
    Sign Out
    </Button>
  );
};