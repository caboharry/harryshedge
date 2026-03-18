import React from 'react';
import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';

const AccountPage = () => {
  const { data: session } = useSession();

  if (!session) {
    return <div>Please log in to view your account settings.</div>;
  }

  const { email } = session.user;
  const subscriptionStatus = session.user.subscription || 'Free'; // Assuming subscription data is in session user

  return (
    <div>
      <h1>Account Settings</h1>
      <p>Email: {email}</p>
      <p>Subscription Status: {subscriptionStatus}</p>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
};

export default AccountPage;
