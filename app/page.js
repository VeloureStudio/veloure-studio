'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function Storefront() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await supabase.from('products').select('*, product_prices(*)');
      setProducts(data || []);
    }
    fetchProducts();
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Veloure Studio</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ddd', padding: '10px' }}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <button>Beli Sekarang</button>
          </div>
        ))}
      </div>
    </div>
  );
          }
