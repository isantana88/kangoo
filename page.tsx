import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PublicBookingFlow } from '@/components/mvp/public-booking-flow';
import { getPublicShopBySlug } from '@/lib/server/kangoo';

export default async function PublicShopPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const shop = await getPublicShopBySlug(slug);
  if (!shop) notFound();

  return (
    <main className="page">
      <div className="container">
        <header className="topbar">
          <Link href="/" className="brand">
            <span className="brand-mark">K</span>
            <span>Kangoo</span>
          </Link>
        </header>
        <PublicBookingFlow shop={shop} />
      </div>
    </main>
  );
}
