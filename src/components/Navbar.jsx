import Link from 'next/link.js';
import React from 'react';

export default function Navbar() {
  const arrayRoutes = [
    {
      id: 'characters',
      path: '/characters',
      label: 'Characters',
    },
    {
      id: 'location',
      path: '/location',
      label: 'Location',
    },

    {
      id: 'episode',
      path: '/episode',
      label: 'Episode',
    },
    {
      id: 'about',
      path: '/about',
      label: 'About',
    },
  ];
  return (
    <nav>
      <div className='title-div'>
        <Link href={'/'}>
          <h1
            style={{
              cursor: 'pointer',
            }}
          >
            RICK & MORTY
          </h1>
        </Link>
      </div>
      <ul style={{ display: 'flex', gap: '2rem' }}>
        {arrayRoutes.map((route) => (
          <li key={route.id}>
            <Link href={route.path}>{route.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
