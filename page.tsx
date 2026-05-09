import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="page">
      <div className="container">
        <header className="topbar">
          <Link href="/" className="brand">
            <span className="brand-mark">K</span>
            <span>Kangoo</span>
          </Link>
          <div className="topbar-actions">
            <Link href="/entrar" className="btn btn-secondary">
              Entrar
            </Link>
          </div>
        </header>

        <section className="hero hero-grid">
          <article className="hero-card">
            <span className="hero-kicker">MVP simples, rápido e publicável</span>
            <h1>A agenda premium da sua barbearia em poucos minutos.</h1>
            <p>
              O Kangoo cria um link real para sua barbearia receber agendamentos com login Google, cadastro rápido,
              horários disponíveis e gestão simples de remarcar, cancelar e avisar atraso.
            </p>
            <div className="hero-actions">
              <Link href="/entrar" className="btn btn-primary">
                Começar agora
              </Link>
              <a href="#como-funciona" className="btn btn-secondary">
                Ver fluxo
              </a>
            </div>
          </article>

          <aside className="card">
            <div className="info-grid">
              <div className="stat-card">
                <span className="muted">Fluxo</span>
                <strong>Login → agenda → link</strong>
              </div>
              <div className="stat-card">
                <span className="muted">Cliente</span>
                <strong>Google + 2 toques</strong>
              </div>
              <div className="stat-card">
                <span className="muted">UX</span>
                <strong>Mobile-first Nubank style</strong>
              </div>
            </div>
          </aside>
        </section>

        <section id="como-funciona" className="two-col" style={{ marginTop: 18 }}>
          <article className="panel">
            <span className="kicker">Barbeiro</span>
            <h2 className="section-title">Cadastre e compartilhe.</h2>
            <div className="list-stack">
              <div className="list-row"><span>1. Entrar com Google</span><span className="badge">rápido</span></div>
              <div className="list-row"><span>2. Preencher nome, telefone, serviços e horários</span><span className="badge">sem ERP</span></div>
              <div className="list-row"><span>3. Receber link personalizado</span><span className="badge success">pronto para usar</span></div>
            </div>
          </article>
          <article className="panel">
            <span className="kicker">Cliente final</span>
            <h2 className="section-title">Agende em segundos.</h2>
            <div className="list-stack">
              <div className="list-row"><span>1. Entrar com Google</span><span className="badge">seguro</span></div>
              <div className="list-row"><span>2. Escolher serviço, barbeiro e horário</span><span className="badge">intuitivo</span></div>
              <div className="list-row"><span>3. Confirmar e gerenciar agendamento</span><span className="badge success">real</span></div>
            </div>
          </article>
        </section>

        <p className="footer-note">Feito para lançar rápido, validar e já colocar barbearias usando.</p>
      </div>
    </main>
  );
}
