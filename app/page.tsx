import Image from 'next/image';
import { Button } from '@mantine/core';
import Link from 'next/link';
export default function Home() {
  return (
    <div className="flex py-24 flex-row items-center justify-center gap-4 flex-wrap">
      <Link target="_blank" rel="noopener" href={'/users'}>
        <Button variant="light" size="xl" radius={'lg'}>
          View All Users
        </Button>
      </Link>
      <Link target="_blank" rel="noopener" href={'/create-user'}>
        <Button variant="light" size="xl" radius={'lg'}>
          Create A User
        </Button>
      </Link>
    </div>
  );
}
