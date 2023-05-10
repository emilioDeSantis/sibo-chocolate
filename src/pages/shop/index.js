// pages/shop.js
import Head from 'next/head';
import Link from 'next/link';
import categories from '@/data/categories';
import Layout from '@/components/Layout';

export default function Shop() {
  return (
    <Layout>
      <Head>
        <title>Chocolate Shop</title>
      </Head>
      <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
        <h1>Chocolate Shop</h1>
        <ul>
          {categories.map((category) => (
            <li key={category.id} style={{ margin: '10px' }}>
              <Link href={`/shop/${category.slug}`}>
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}
