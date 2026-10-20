import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* ========================================
          HERO
          ======================================== */}

      <section className="hero">
        <div className="hero-container">

          {/* Hero text */}

          <div className="hero-content">

            <p className="hero-eyebrow">
              NEXKARA STUDIO
            </p>

            <h1 className="hero-title">
              Desain, cetak,
              <br />
              dan solusi digital
              <br />
              <span>untuk bisnismu.</span>
            </h1>

            <p className="hero-description">
              Dari identitas brand dan kebutuhan cetak hingga solusi teknologi, kami membantu mewujudkan ide yang sesuai dengan kebutuhanmu.
            </p>

            <div className="hero-actions">
              <Link href="/contact" className="hero-button hero-button-primary">
                Mulai Proyek
                <span aria-hidden="true">{"\u2197"}</span>
              </Link>

              <Link href="/products" className="hero-button hero-button-secondary">
                Lihat Produk
              </Link>
            </div>

            <ul className="hero-capabilities" aria-label="Kapabilitas NEXKARA">
              <li>Creative &amp; Branding</li>
              <li>Printing &amp; Merchandise</li>
              <li>IT &amp; Digital Solutions</li>
            </ul>

          </div>


          {/* Hero visual */}

          <div className="hero-visual">
            <div className="hero-glow hero-glow-blue" aria-hidden="true" />
            <div className="hero-glow hero-glow-magenta" aria-hidden="true" />
            <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
            <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
            <div className="hero-print-composition" role="img" aria-label="Ilustrasi abstrak materi cetak berupa kartu, lembar stiker, dan kemasan; bukan foto produk aktual.">
              <span className="hero-print-caption">ILUSTRASI VISUAL / MATERI CETAK</span>
              <div className="hero-print-package"><i /><b /><em /></div>
              <div className="hero-print-label-sheet"><i /><i /><b /><b /><em /></div>
              <div className="hero-print-business-card"><i /><b /></div>
              <div className="hero-print-sticker"><i /></div>
            </div>
          </div>

        </div>


        {/* Bottom information */}

        <div className="hero-bottom">

          <div className="hero-scroll">
            <span>Scroll untuk menjelajah</span>
            <span className="hero-scroll-arrow">↓</span>
          </div>

        </div>

      </section>


      {/* ========================================
          OUR SOLUTIONS — PREVIEW
          ======================================== */}

      <section className="solutions-preview">

        <div className="container">

          <div className="solutions-heading">

            <p className="section-eyebrow">
              Apa yang kami lakukan
            </p>

            <h2>
              Satu tempat untuk
              <br />
              berbagai kebutuhan.
            </h2>

            <p>
              Dari ide visual hingga kebutuhan produksi dan teknologi,
              kami membantu mewujudkan apa yang kamu butuhkan.
            </p>

          </div>


          <div className="solutions-grid">

            <a href="/services/design" className="solution-card">

              <div className="solution-art solution-art-design" aria-hidden="true">
                <span className="design-art-index">N° 01 / VISUAL</span>
                <span className="design-art-word">form<span>—</span></span>
                <span className="design-art-orbit" />
                <span className="design-art-block" />
                <span className="design-art-caption">IDEA → IDENTITY</span>
              </div>

              <div className="solution-card-number">
                01
              </div>

              <div className="solution-card-content">
                <p className="solution-card-label">
                  Layanan
                </p>

                <h3>Desain</h3>

                <p>
                  Identitas visual, grafis, vector, animasi,
                  dan kebutuhan kreatif untuk membangun
                  karakter brand.
                </p>
              </div>

              <span className="solution-card-arrow" aria-hidden="true">
                <img
                  src="/images/nexkara-simbol.png"
                  alt=""
                />
              </span>

            </a>


            <a href="/products" className="solution-card">

              <div className="solution-art solution-art-print" aria-hidden="true">
                <span className="print-art-sheet print-art-sheet-back" />
                <span className="print-art-sheet print-art-sheet-front">
                  <span>GOOD<br />THINGS<br />PRINTED.</span>
                  <i />
                  <small>NEXKARA · EDITION 01</small>
                </span>
                <span className="print-art-stamp">INK<br />＋<br />PAPER</span>
              </div>

              <div className="solution-card-number">
                02
              </div>

              <div className="solution-card-content">
                <p className="solution-card-label">
                  Produk
                </p>

                <h3>Printing</h3>

                <p>
                  Berbagai kebutuhan cetak dan merchandise
                  untuk mendukung bisnis, acara, maupun
                  kebutuhan personal.
                </p>
              </div>

              <span className="solution-card-arrow" aria-hidden="true">
                <img
                  src="/images/nexkara-simbol.png"
                  alt=""
                />
              </span>

            </a>


            <a href="/services/it" className="solution-card">

              <div className="solution-art solution-art-it" aria-hidden="true">
                <div className="it-art-window">
                  <div className="it-art-top"><i /><i /><i /><span>WORKSPACE / 01</span></div>
                  <div className="it-art-body">
                    <div className="it-art-sidebar"><i /><i /><i /><i /></div>
                    <div className="it-art-panel">
                      <span className="it-art-kicker">SYSTEM STATUS</span>
                      <span className="it-art-status"><i /> All systems ready</span>
                      <span className="it-art-lines"><i /><i /><i /></span>
                    </div>
                  </div>
                </div>
                <span className="it-art-node">01<br /><small>CONNECTED</small></span>
              </div>

              <div className="solution-card-number">
                03
              </div>

              <div className="solution-card-content">
                <p className="solution-card-label">
                  Layanan
                </p>

                <h3>IT Solution</h3>

                <p>
                  Website, sistem, dan solusi teknologi
                  yang dirancang sesuai kebutuhan
                  dan cara kerja bisnis.
                </p>
              </div>

              <span className="solution-card-arrow" aria-hidden="true">
                <img
                  src="/images/nexkara-simbol.png"
                  alt=""
                />
              </span>

            </a>

          </div>

        </div>

      </section>

      {/* ========================================
          SELECTED WORK
          ======================================== */}

      <section className="selected-work" aria-labelledby="selected-work-title">
        <div className="container">
          <div className="selected-work-heading">
            <div>
              <p className="section-eyebrow">KARYA PILIHAN</p>
              <h2 id="selected-work-title">Ide menjadi nyata.</h2>
            </div>
            <p>
              Beberapa karya yang mewakili cara kami mengolah ide menjadi desain,
              produk, dan solusi digital.
            </p>
          </div>

          <div className="work-empty-state">Karya yang siap dipublikasikan akan ditampilkan di sini.</div>
        </div>
      </section>

      {/* ========================================
          HOW WE WORK
          ======================================== */}

      <section className="how-we-work" aria-labelledby="how-we-work-title">
        <div className="container">
          <div className="how-we-work-heading">
            <div>
              <p className="section-eyebrow">CARA KAMI BEKERJA</p>
              <h2 id="how-we-work-title">Dari ide, menjadi nyata.</h2>
            </div>
            <p>Proses yang jelas membantu kita mewujudkan solusi yang sesuai dengan kebutuhanmu.</p>
          </div>

          <ol className="process-steps">
            <li className="process-step">
              <div className="process-step-marker">
                <span>01</span>
              </div>
              <h3>Kenali kebutuhanmu</h3>
              <p>Kita mulai dengan memahami ide, tujuan, kebutuhan, dan ruang lingkup proyek.</p>
            </li>
            <li className="process-step">
              <div className="process-step-marker">
                <span>02</span>
              </div>
              <h3>Rancang solusinya</h3>
              <p>Kita menyepakati konsep, kebutuhan teknis atau produksi, estimasi biaya, dan jadwal.</p>
            </li>
            <li className="process-step">
              <div className="process-step-marker">
                <span>03</span>
              </div>
              <h3>Wujudkan bersama</h3>
              <p>Proses desain, pengembangan, atau produksi berjalan sesuai kesepakatan, dengan komunikasi dan revisi yang jelas.</p>
            </li>
            <li className="process-step">
              <div className="process-step-marker">
                <span>04</span>
              </div>
              <h3>Serahkan hasilnya</h3>
              <p>Kita melakukan pengecekan akhir dan menyerahkan hasil sesuai ruang lingkup proyek yang disepakati.</p>
            </li>
          </ol>
        </div>
      </section>

      {/* ========================================
          TRUST & CREDIBILITY
          ======================================== */}

      <section className="trust-section" aria-labelledby="trust-title">
        <div className="container">
          <div className="trust-heading">
            <div>
              <p className="section-eyebrow">KENAPA NEXKARA</p>
              <h2 id="trust-title">Ide kreatif. Solusi yang bisa digunakan.</h2>
            </div>
            <p>
              Dari kebutuhan visual hingga teknologi, setiap proyek dimulai dengan
              memahami kebutuhan dan tujuan yang ingin dicapai.
            </p>
          </div>

          <ul className="trust-points">
            <li className="trust-point">
              <span className="trust-point-number" aria-hidden="true">01</span>
              <div>
                <h3>Desain &amp; Kreativitas</h3>
                <p>Identitas visual dan kebutuhan grafis.</p>
              </div>
            </li>
            <li className="trust-point">
              <span className="trust-point-number" aria-hidden="true">02</span>
              <div>
                <h3>Produksi &amp; Printing</h3>
                <p>Kebutuhan cetak untuk bisnis dan personal.</p>
              </div>
            </li>
            <li className="trust-point">
              <span className="trust-point-number" aria-hidden="true">03</span>
              <div>
                <h3>Web &amp; Sistem</h3>
                <p>Website dan solusi digital sesuai kebutuhan.</p>
              </div>
            </li>
            <li className="trust-point">
              <span className="trust-point-number" aria-hidden="true">04</span>
              <div>
                <h3>Kolaborasi Fleksibel</h3>
                <p>Ruang lingkup dan proses disesuaikan dengan proyek.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* ========================================
          ABOUT NEXKARA
          ======================================== */}

      <section className="about-nexkara" aria-labelledby="about-nexkara-title">
        <div className="container">
          <div className="about-nexkara-intro">
            <div>
              <p className="section-eyebrow">TENTANG NEXKARA</p>
              <h2 id="about-nexkara-title">Kami menghubungkan ide, desain, dan teknologi.</h2>
            </div>
            <p className="about-nexkara-description">
              NEXKARA adalah creative digital studio yang membantu mewujudkan
              kebutuhan visual, produk cetak, dan solusi teknologi melalui pendekatan
              yang kreatif, praktis, dan sesuai kebutuhan.
            </p>
          </div>

          <div className="about-principles">
            <article className="about-principle">
              <span className="about-principle-number">01</span>
              <div>
                <h3>Think creatively</h3>
                <p>Melihat kebutuhan dari sudut pandang yang berbeda.</p>
              </div>
            </article>
            <article className="about-principle">
              <span className="about-principle-number">02</span>
              <div>
                <h3>Build practically</h3>
                <p>Mengubah ide menjadi hasil yang benar-benar bisa digunakan.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ========================================
          CONTACT CTA
          ======================================== */}

      <section className="contact-cta" aria-labelledby="contact-cta-title">
        <div className="container contact-cta-inner">
          <div className="contact-cta-copy">
            <p className="contact-cta-eyebrow">NEXKARA STUDIO · LET&apos;S COLLABORATE</p>
            <h2 id="contact-cta-title">Punya ide? Yuk, wujudkan bersama.</h2>
          </div>
          <div className="contact-cta-action">
            <p>
              Ceritakan kebutuhanmu. Mari temukan solusi yang tepat, dari desain
              kreatif hingga teknologi.
            </p>
            <a className="contact-cta-button" href="/contact">
              Mulai Proyek <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
