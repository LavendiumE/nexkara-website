import Image from "next/image";

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
              Ide yang layak
              <br />
              <span>diwujudkan.</span>
            </h1>

            <p className="hero-description">
              Kami membantu mengubah ide menjadi desain,
              produk, dan solusi digital yang benar-benar
              bisa digunakan.
            </p>

            <div className="hero-actions">
              <a href="/contact" className="hero-button hero-button-primary">
                Mulai Proyek
                <span aria-hidden="true">↗</span>
              </a>

              <a href="/portfolio" className="hero-button hero-button-secondary">
                Lihat Karya
              </a>
            </div>

          </div>


          {/* Hero visual */}

          <div className="hero-visual" aria-hidden="true">

            <div className="hero-glow hero-glow-blue" />
            <div className="hero-glow hero-glow-magenta" />

            <div className="hero-symbol-wrapper">
              <Image
                src="/images/nexkara.png"
                alt=""
                width={520}
                height={520}
                priority
                className="hero-symbol"
              />
            </div>

            <div className="hero-orbit hero-orbit-one" />
            <div className="hero-orbit hero-orbit-two" />

          </div>

        </div>


        {/* Bottom information */}

        <div className="hero-bottom">

          <div className="hero-bottom-item">
            <span className="hero-bottom-label">01</span>
            <span>Desain</span>
          </div>

          <div className="hero-bottom-item">
            <span className="hero-bottom-label">02</span>
            <span>Printing</span>
          </div>

          <div className="hero-bottom-item">
            <span className="hero-bottom-label">03</span>
            <span>IT Solution</span>
          </div>

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

    </main>
  );
}