import Link from 'next/link.js';
import React from 'react';

export default function LayoutShop({ children }) {
  return (
    <>
      {children}

      <nav>
        <h2>shop Section</h2>
        <ul>
          <Link href={'/shop/notebook'}>
            <li>Notebook</li>
          </Link>
          <Link href={'/shop/tvs'}>
            <li>Tv's</li>
          </Link>
        </ul>
      </nav>
    </>
  );
}
