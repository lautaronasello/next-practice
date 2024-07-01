'use client';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <div>
      <h1>pagina no encontrada</h1>
      <button onClick={handleBack}>Go Back</button>
    </div>
  );
}
