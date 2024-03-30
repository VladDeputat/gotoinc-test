'use client';

import { useParams, useRouter } from 'next/navigation';

const UserPage = () => {
  const router = useRouter();

  const { userId } = useParams();

  router.push(`${userId}/requests`);
  return <></>;
};
export default UserPage;
