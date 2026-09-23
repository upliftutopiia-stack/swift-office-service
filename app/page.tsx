"use client";

import { useState } from "react";

const phoneDisplay = "021 330 415";
const phoneHref = "tel:+6421330415";
const email = "joy.swift@swiftoffice.co.nz";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <div className="nav-wrap">
          <a
            href="#home"
            className="brand"
            aria-label="Swift Office Service home"
            onClick={closeMenu}
          >
            <span className="brand-icon">S</span>

            <span className="brand-copy">
              <strong>Swift Office Service</strong>
              <small>Bookkeeping · Auckland</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#bookkeeping">Bookkeeping</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="header-contact" href={`mailto:${email}`}>
            Contact Joy
            <span aria-hidden="true">↗</span>
          </a>

          <button
            className={`menu-button ${menuOpen ? "active" : ""}`}
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span />
            <span />
          </button>
        </div>

        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <nav aria-label="Mobile navigation">
            <a href="#home" onClick={closeMenu}>
              <span>01</span>
              Home
            </a>

            <a href="#about" onClick={closeMenu}>
              <span>02</span>
              About
            </a>

            <a href="#bookkeeping" onClick={closeMenu}>
              <span>03</span>
              Bookkeeping
            </a>

            <a href="#contact" onClick={closeMenu}>
              <span>04</span>
              Contact
            </a>
          </nav>

          <div className="mobile-contact">
            <a href={`mailto:${email}`}>{email}</a>
            <a href={phoneHref}>{phoneDisplay}</a>
          </div>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-decoration hero-decoration-one" />
        <div className="hero-decoration hero-decoration-two" />

        <div className="page-width hero-inner">
          <div className="hero-main">
            <p className="overline">
              <span />
              Bookkeeping · Auckland
            </p>

            <h1>
              Keeping the
              <br />
              numbers <em>clear.</em>
            </h1>

            <p className="hero-description">
              Swift Office Service provides bookkeeping support in Auckland,
              with direct, personal communication from Joy Swift.
            </p>

            <div className="hero-buttons">
              <a href={`mailto:${email}`} className="primary-button">
                Get in touch
                <span aria-hidden="true">↗</span>
              </a>

              <a href="#about" className="secondary-link">
                Discover more
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <aside className="hero-side">
            <div className="hero-number">01</div>

            <div className="hero-side-content">
              <p>Direct contact</p>
              <h2>Joy Swift</h2>

              <div className="side-details">
                <a href={`mailto:${email}`}>{email}</a>
                <a href={phoneHref}>{phoneDisplay}</a>
                <span>Auckland, New Zealand</span>
              </div>
            </div>
          </aside>
        </div>

        <div className="hero-bottom page-width">
          <span>Swift Office Service</span>
          <span>Professional bookkeeping</span>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="page-width">
          <div className="section-top">
            <p className="section-number">01 / ABOUT</p>
            <div className="section-rule" />
          </div>

          <div className="about-grid">
            <div className="about-heading">
              <p className="mini-heading">A personal point of contact</p>

              <h2>
                Bookkeeping with a
                <br />
                <em>human connection.</em>
              </h2>
            </div>

            <div className="about-copy">
              <p className="large-copy">
                Swift Office Service is associated with bookkeeper Joy Swift
                in Auckland.
              </p>

              <p>
                For businesses looking for bookkeeping support, Swift Office
                Service provides a straightforward way to make an enquiry and
                speak directly with Joy about what you need.
              </p>

              <a href={`mailto:${email}`} className="inline-link">
                Talk to Joy
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bookkeeping-section" id="bookkeeping">
        <div className="page-width">
          <div className="section-top section-top-light">
            <p className="section-number">02 / BOOKKEEPING</p>
            <div className="section-rule" />
          </div>

          <div className="bookkeeping-grid">
            <div className="bookkeeping-intro">
              <p className="mini-heading light">What we do</p>

              <h2>
                Support for the
                <br />
                financial side of
                <br />
                <em>your business.</em>
              </h2>
            </div>

            <div className="bookkeeping-content">
              <div className="statement">
                <span>01</span>

                <div>
                  <h3>Bookkeeping support</h3>
                  <p>
                    Contact Swift Office Service to discuss your bookkeeping
                    requirements and the support you are looking for.
                  </p>
                </div>
              </div>

              <div className="statement">
                <span>02</span>

                <div>
                  <h3>Direct communication</h3>
                  <p>
                    Enquiries go directly to Joy, giving you a clear point of
                    contact from the beginning.
                  </p>
                </div>
              </div>

              <div className="statement">
                <span>03</span>

                <div>
                  <h3>Auckland based</h3>
                  <p>
                    Swift Office Service is based in Auckland, New Zealand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="approach-section">
        <div className="page-width approach-grid">
          <div className="approach-marker">
            <span>S</span>
          </div>

          <div className="approach-copy">
            <p className="mini-heading">Simple by design</p>

            <h2>
              Start with a
              <br />
              conversation.
            </h2>

            <p>
              Every business has different bookkeeping requirements. Get in
              touch directly with Joy to discuss what you need.
            </p>
          </div>

          <a className="round-link" href={`mailto:${email}`}>
            <span>Contact</span>
            <span>Joy ↗</span>
          </a>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="page-width">
          <div className="section-top section-top-light">
            <p className="section-number">03 / CONTACT</p>
            <div className="section-rule" />
          </div>

          <div className="contact-heading">
            <p className="mini-heading light">Let's talk</p>

            <h2>
              Need bookkeeping
              <br />
              support?
            </h2>
          </div>

          <div className="contact-links">
            <a href={`mailto:${email}`}>
              <div>
                <span>Email Joy</span>
                <strong>{email}</strong>
              </div>

              <b aria-hidden="true">↗</b>
            </a>

            <a href={phoneHref}>
              <div>
                <span>Call Joy</span>
                <strong>{phoneDisplay}</strong>
              </div>

              <b aria-hidden="true">↗</b>
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="page-width footer-inner">
          <div className="footer-brand">
            <span className="brand-icon footer-icon">S</span>

            <div>
              <strong>Swift Office Service</strong>
              <p>Bookkeeping · Auckland, New Zealand</p>
            </div>
          </div>

          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}