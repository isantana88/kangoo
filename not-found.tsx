import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="page">
      <div className="container">
        <section className="card" style={{ maxWidth: 620, margin: '72px auto 0' }}>
          <span className="kicker">Página não encontrada</span>
          <h1 className="section-title">Esse link não existe ou não está mais disponível.</h1>
          <p className="section-copy">Confira o endereço da agenda ou volte para a página inicial.</p>
          <div className="row-actions">
            <Link href="/" className="btn btn-primary">Voltar para o início</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
