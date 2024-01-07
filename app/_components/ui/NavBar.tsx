
import Link from 'next/link';

import {ModeToggle} from "../../_components/ui/ModeToggle";


type Props = {};
const LINKS = [
  { href: '/dashboard', id: 'Dashboard' },
  { href: '/targets', id: 'Targets' },
  { href: '/account', id: 'Account' },
];
export default function NavBar({}: Props) {
  return (
    <div className="flex flex-row h-10 items-center">
      <h3 className="flex mx-6">Logo</h3>
      <div className="flex flex-row">
        {LINKS.map((link) => (
          <Link href={link.href} className="mr-2" key={link.id}>
            {link.id}
          </Link>
        ))}
      </div>
      <ModeToggle />
    </div>
  );
}