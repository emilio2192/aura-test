'use client'
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const userEmail = document.cookie.split(';').find((cookie) => cookie.includes('email'));
  
  if (userEmail) {
    router.push('/dashboard/home');
  } else {
    router.push('/login');
  }

  return <></>;
}