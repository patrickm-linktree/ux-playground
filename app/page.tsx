import Link from 'next/link';
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen w-full bg-zinc-100 justify-center items-center">
      <Link href="/profile-header">
        <Button variant="outline" size="lg">Drawer Test</Button>
      </Link>
    </main>
  )
}
