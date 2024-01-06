import React from 'react';

type Props = {};
const LINKS = [
  { href: '/dashboard', label: 'dashboard' },
  { href: '/account', label: 'Account' },
  { href: '/contact', label: 'Contact' },
];
export default function NavBar({}: Props) {
  return (
    <div>
      {LINKS.map((link) => (
        <div key={link.href}>{link.label}</div>
      ))}
    </div>
  );
}