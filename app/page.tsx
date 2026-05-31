export default function Home() {
  return (
    <main style={{ minHeight: '100vh', background: '#0A0A0A', color: '#fff' }}>

      {/* NAV */}
      <nav style={{ padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1a1a1a' }}>
        <span style={{ fontSize: '18px', fontWeight: '700', letterSpacing: '0.05em' }}>KÉVIN PALMA</span>
        <div style={{ display: 'flex', gap: '32px', fontSize: '13px', color: '#888' }}>
          <a href="#offres" style={{ color: '#888', textDecoration: 'none' }}>Offres</a>
          <a href="#methode" style={{ color: '#888', textDecoration: 'none' }}>Méthode</a>
          <a href="#contact" style={{ color: '#888', textDecoration: 'none' }}>Contact</a>
        </div>
        <a href="#offres" style={{ background: '#FF2200', color: '#fff', padding: '10px 20px', borderRadius: '6px', fontSize: '13px', fontWeight: '600', textDecoration: 'none' }}>
          Voir les programmes →
        </a>
      </nav>

      {/* HERO */}
      <section style={{ padding: '100px 40px 80px', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ display: 'inline-block', background: '#FF2200', color: '#fff', fontSize: '11px', fontWeight: '700', padding: '4px 12px', borderRadius: '4px', letterSpacing: '0.1em', marginBottom: '24px' }}>
          HYROX PRO · 1H09 · TOP MONDIAL
        </div>
        <h1 style={{ fontSize: '56px', fontWeight: '700', lineHeight: '1.1', marginBottom: '24px' }}>
          Atteins ton<br />
          <span style={{ color: '#FF2200' }}>meilleur chrono.</span><br />
          Transforme ton corps.
        </h1>
        <p style={{ fontSize: '18px', color: '#aaa', lineHeight: '1.7', maxWidth: '600px', margin: '0 auto 40px' }}>
          Coach HYROX Pro et spécialiste transformation physique. Je compète encore en division élite — 
          je t&apos;entraîne avec la même méthode qui m&apos;a amené dans le top mondial.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#offres" style={{ background: '#FF2200', color: '#fff', padding: '16px 32px', borderRadius: '8px', fontSize: '15px', fontWeight: '700', textDecoration: 'none' }}>
            Voir les programmes
          </a>
          <a href="https://instagram.com" style={{ background: 'transparent', color: '#fff', padding: '16px 32px', borderRadius: '8px', fontSize: '15px', fontWeight: '600', textDecoration: 'none', border: '1px solid #333' }}>
            Mon Instagram →
          </a>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: '#111', padding: '48px 40px', display: 'flex', justifyContent: 'center', gap: '80px', flexWrap: 'wrap' }}>
        {[
          { val: '1h09', label: 'HYROX Pro' },
          { val: 'Top', label: 'Division Elite' },
          { val: '12', label: 'Semaines de programme' },
          { val: '100%', label: 'Personnalisé' },
        ].map((s) => (
          <div key={s.label} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '36px', fontWeight: '700', color: '#FF2200' }}>{s.val}</div>
            <div style={{ fontSize: '12px', color: '#666', marginTop: '4px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{s.label}</div>
          </div>
        ))}
      </section>

      {/* OFFRES */}
      <section id="offres" style={{ padding: '80px 40px', maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '36px', fontWeight: '700', textAlign: 'center', marginBottom: '12px' }}>Programmes</h2>
        <p style={{ textAlign: 'center', color: '#888', marginBottom: '48px', fontSize: '16px' }}>Choisis ton objectif. Je m&apos;occupe du reste.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          <div style={{ background: '#111', border: '1px solid #FF2200', borderRadius: '12px', padding: '32px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '16px', right: '16px', background: '#FF2200', color: '#fff', fontSize: '10px', fontWeight: '700', padding: '3px 8px', borderRadius: '4px' }}>BEST SELLER</div>
            <div style={{ fontSize: '11px', color: '#FF2200', fontWeight: '700', letterSpacing: '0.1em', marginBottom: '12px' }}>HYROX PERSONNALISÉ</div>
            <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '8px' }}>Programme HYROX<br />sur mesure</h3>
            <div style={{ fontSize: '36px', fontWeight: '700', margin: '20px 0 8px' }}>329€</div>
            <div style={{ fontSize: '12px', color: '#666', marginBottom: '24px' }}>12 semaines · Accès app inclus</div>
            <ul style={{ listStyle: 'none', marginBottom: '32px' }}>
              {['Bilan niveau + course cible', 'Plan périodisé 100% sur mesure', 'Stations HYROX ciblées', 'Suivi check-in bi-mensuel', 'Accès app de suivi'].map(item => (
                <li key={item} style={{ fontSize: '14px', color: '#ccc', padding: '6px 0', borderBottom: '1px solid #1a1a1a', display: 'flex', gap: '8px' }}>
                  <span style={{ color: '#FF2200' }}>✓</span> {item}
                </li>
              ))}
            </ul>
            <a href="https://buy.stripe.com/4gMaERcg5e81cbjgvN9AA00" style={{ display: 'block', background: '#FF2200', color: '#fff', padding: '14px', borderRadius: '8px', textAlign: 'center', fontWeight: '700', textDecoration: 'none', fontSize: '14px' }}>
              Commander maintenant →
            </a>
          </div>
          <div style={{ background: '#111', border: '1px solid #2a2a2a', borderRadius: '12px', padding: '32px' }}>
            <div style={{ fontSize: '11px', color: '#FF2200', fontWeight: '700', letterSpacing: '0.1em', marginBottom: '12px' }}>MUSCULATION PERSONNALISÉE</div>
            <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '8px' }}>Programme Muscu<br />sur mesure</h3>
            <div style={{ fontSize: '36px', fontWeight: '700', margin: '20px 0 8px' }}>249€</div>
            <div style={{ fontSize: '12px', color: '#666', marginBottom: '24px' }}>12 semaines · Accès app inclus</div>
            <ul style={{ listStyle: 'none', marginBottom: '32px' }}>
              {['Analyse morpho + objectif', 'Plan adapté à ton équipement', 'Nutrition de base incluse', 'Suivi mensuel', 'Accès app de suivi'].map(item => (
                <li key={item} style={{ fontSize: '14px', color: '#ccc', padding: '6px 0', borderBottom: '1px solid #1a1a1a', display: 'flex', gap: '8px' }}>
                  <span style={{ color: '#FF2200' }}>✓</span> {item}
                </li>
              ))}
            </ul>
            <a href="https://buy.stripe.com/6oUcMZ4ND4xrfnv93l9AA01" style={{ display: 'block', background: '#1a1a1a', color: '#fff', padding: '14px', borderRadius: '8px', textAlign: 'center', fontWeight: '700', textDecoration: 'none', fontSize: '14px', border: '1px solid #333' }}>
              Commander maintenant →
            </a>
          </div>
          <div style={{ background: '#111', border: '1px solid #2a2a2a', borderRadius: '12px', padding: '32px' }}>
            <div style={{ fontSize: '11px', color: '#FF2200', fontWeight: '700', letterSpacing: '0.1em', marginBottom: '12px' }}>PROGRAMMES THÉMATIQUES</div>
            <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '8px' }}>Programmes<br />spécialisés</h3>
            <div style={{ fontSize: '36px', fontWeight: '700', margin: '20px 0 8px' }}>69€ <span style={{ fontSize: '16px', color: '#666' }}>/ 99€</span></div>
            <div style={{ fontSize: '12px', color: '#666', marginBottom: '24px' }}>8 à 12 semaines</div>
            <ul style={{ listStyle: 'none', marginBottom: '32px' }}>
              {['Sled Push HYROX — 69€', 'Fessiers Musculation — 99€', 'Autres thèmes à venir', 'Livraison immédiate', 'Accès app inclus'].map(item => (
                <li key={item} style={{ fontSize: '14px', color: '#ccc', padding: '6px 0', borderBottom: '1px solid #1a1a1a', display: 'flex', gap: '8px' }}>
                  <span style={{ color: '#FF2200' }}>✓</span> {item}
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', gap: '8px' }}>
              <a href="https://buy.stripe.com/aFa8wJbc12pjdfncfx9AA02" style={{ flex: 1, background: '#1a1a1a', color: '#fff', padding: '12px', borderRadius: '8px', textAlign: 'center', fontWeight: '600', textDecoration: 'none', fontSize: '12px', border: '1px solid #333' }}>Sled Push →</a>
              <a href="https://buy.stripe.com/dRm00ddk93tn7V3enF9AA03" style={{ flex: 1, background: '#1a1a1a', color: '#fff', padding: '12px', borderRadius: '8px', textAlign: 'center', fontWeight: '600', textDecoration: 'none', fontSize: '12px', border: '1px solid #333' }}>Fessiers →</a>
            </div>
          </div>
        </div>
      </section>

      {/* METHODE */}
      <section id="methode" style={{ background: '#111', padding: '80px 40px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '20px' }}>La méthode</h2>
          <p style={{ color: '#aaa', fontSize: '16px', lineHeight: '1.8', marginBottom: '48px' }}>
            Je ne coach pas depuis un bureau. Je compète encore activement en HYROX Pro avec un chrono de 1h09. Chaque programme que je conçois est basé sur ce qui fonctionne réellement en compétition et en salle — pas sur de la théorie.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {[
              { num: '01', title: 'Bilan complet', desc: 'Niveau, objectifs, contraintes, équipement disponible' },
              { num: '02', title: 'Programme sur mesure', desc: 'Généré selon ta méthode, validé par moi' },
              { num: '03', title: 'Accès app', desc: 'Tes séances semaine par semaine sur ton téléphone' },
              { num: '04', title: 'Suivi & ajustements', desc: 'Je modifie le programme selon ta progression' },
            ].map(step => (
              <div key={step.num} style={{ background: '#0A0A0A', padding: '24px', borderRadius: '10px', textAlign: 'left' }}>
                <div style={{ fontSize: '28px', fontWeight: '700', color: '#FF2200', marginBottom: '8px' }}>{step.num}</div>
                <div style={{ fontSize: '14px', fontWeight: '700', marginBottom: '6px' }}>{step.title}</div>
                <div style={{ fontSize: '12px', color: '#666', lineHeight: '1.5' }}>{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" style={{ padding: '80px 40px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '40px', fontWeight: '700', marginBottom: '16px' }}>Prêt à passer au niveau<br /><span style={{ color: '#FF2200' }}>supérieur ?</span></h2>
        <p style={{ color: '#888', fontSize: '16px', marginBottom: '40px' }}>Choisis ton programme et commence dès aujourd&apos;hui.</p>
        <a href="#offres" style={{ background: '#FF2200', color: '#fff', padding: '18px 48px', borderRadius: '8px', fontSize: '16px', fontWeight: '700', textDecoration: 'none', display: 'inline-block' }}>Voir les programmes →</a>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#050505', padding: '24px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #1a1a1a' }}>
        <span style={{ fontWeight: '700', fontSize: '14px' }}>KÉVIN PALMA</span>
        <span style={{ fontSize: '12px', color: '#555' }}>© 2026 · Coach HYROX Pro & Transformation</span>
        <a href="https://instagram.com" style={{ color: '#FF2200', fontSize: '13px', textDecoration: 'none', fontWeight: '600' }}>Instagram →</a>
      </footer>

    </main>
  )
}