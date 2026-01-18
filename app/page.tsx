import { redirect } from 'next/navigation';

export default function HomePage() {
  redirect('/api/frame');
}

export const runtime = 'edge';
