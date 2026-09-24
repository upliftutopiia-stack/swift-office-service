"use client";

import { useState } from "react";

const email = "joy.swift@swiftoffice.co.nz";
const phone = "021 330 415";
const phoneLink = "tel:+6421330415";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="header">
        <div className="container nav">
          <a href="#home" className="logo" onClick={closeMenu}>
            <span className="logoMark">S</span>

            <span className="logoText">
              <strong>Swift Office Service</strong>
              <small>Bookkeeping · Auckland</small>
            </span>
          </a>

          <nav className="desktopNav">
            <a href="#about">About</a>
            <a href="#bookkeeping">Bookkeeping</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="navCta" href={`mailto:${email}`}>
            Contact Joy
            <span>↗</span>
          </a>

          <button
            className={`menuButton ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
          </button>
        </div>

        <div className={`mobileMenu ${menuOpen ? "show" : ""}`}>
          <nav>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
            <a href="#bookkeeping" onClick={closeMenu}>
              Bookkeeping
            </a>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </nav>

          <div className="mobileDetails">
            <a href={`mailto:${email}`}>{email}</a>
            <a href={phoneLink}>{phone}</a>
          </div>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="heroCircle circleOne" />
        <div className="heroCircle circleTwo" />

        <div className="container heroGrid">
          <div className="heroContent">
            <p className="eyebrow">
              <span />
              Bookkeeping · Auckland
            </p>

            <h1>
              Bookkeeping,
              <br />
              kept <em>clear.</em>
            </h1>

            <p className="heroIntro">
              Straightforward bookkeeping support with a direct point of
              contact in Auckland.
            </p>

            <div className="heroActions">
              <a className="primaryButton" href={`mailto:${email}`}>
                Contact Joy
                <span>↗</span>
              </a>

              <a className="textButton" href="#bookkeeping">
                Explore bookkeeping
                <span>↓</span>
              </a>
            </div>
          </div>

          <aside className="profileCard">
            <div className="profileTop">
              <span>SWIFT</span>
              <span>01</span>
            </div>

            <div className="monogram">S</div>

            <div className="profileBottom">
              <p>Your point of contact</p>
              <h2>Joy Swift</h2>

              <div className="profileLinks">
                <a href={`mailto:${email}`}>{email}</a>
                <a href={phoneLink}>{phone}</a>
                <span>Auckland, New Zealand</span>
              </div>
            </div>
          </aside>
        </div>

        <div className="container heroFooter">
          <span>Swift Office Service</span>
          <span>Professional bookkeeping</span>
        </div>
      </section>

      <section className="about" id="about">
        <div className="container">
          <div className="sectionLabel">
            <span>01</span>
            <p>About</p>
            <div />
          </div>

          <div className="aboutGrid">
            <div>
              <p className="smallHeading">A personal point of contact</p>

              <h2>
                A straightforward
                <br />
                approach to
                <br />
                <em>bookkeeping.</em>
              </h2>
            </div>

            <div className="aboutText">
              <p className="lead">
                Swift Office Service is associated with bookkeeper Joy Swift
                in Auckland.
              </p>

              <p>
                If you are looking for bookkeeping support, you can contact Joy
                directly to discuss your requirements and find out whether
                Swift Office Service is the right fit.
              </p>

              <a href={`mailto:${email}`} className="underlinedLink">
                Start a conversation
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="bookkeeping">
        <div className="container">
          <div className="sectionLabel lightLabel">
            <span>02</span>
            <p>Bookkeeping</p>
            <div />
          </div>

          <div className="servicesGrid">
            <div className="servicesHeading">
              <p className="smallHeading lightText">Bookkeeping support</p>

              <h2>
                Focus on your
                <br />
                business.
                <br />
                <em>Keep things clear.</em>
              </h2>
            </div>

            <div className="serviceList">
              <article>
                <span>01</span>

                <div>
                  <h3>Bookkeeping</h3>
                  <p>
                    Contact Swift Office Service to discuss your bookkeeping
                    requirements and the support you need.
                  </p>
                </div>
              </article>

              <article>
                <span>02</span>

                <div>
                  <h3>Direct communication</h3>
                  <p>
                    Speak directly with Joy about your enquiry from the
                    beginning.
                  </p>
                </div>
              </article>

              <article>
                <span>03</span>

                <div>
                  <h3>Auckland based</h3>
                  <p>
                    A local point of contact for bookkeeping enquiries in
                    Auckland, New Zealand.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="conversation">
        <div className="container conversationGrid">
          <div className="bigMark">S</div>

          <div className="conversationText">
            <p className="smallHeading">Start simply</p>

            <h2>
              Begin with a
              <br />
              conversation.
            </h2>

            <p>
              Every business has different requirements. Contact Joy directly
              to discuss the bookkeeping support you are looking for.
            </p>
          </div>

          <a className="circleButton" href={`mailto:${email}`}>
            <span>Contact</span>
            <strong>Joy ↗</strong>
          </a>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="container">
          <div className="sectionLabel lightLabel">
            <span>03</span>
            <p>Contact</p>
            <div />
          </div>

          <div className="contactIntro">
            <p className="smallHeading lightText">Get in touch</p>

            <h2>
              Let&apos;s talk
              <br />
              bookkeeping.
            </h2>
          </div>

          <div className="contactOptions">
            <a href={`mailto:${email}`}>
              <div>
                <span>Email</span>
                <strong>{email}</strong>
              </div>

              <b>↗</b>
            </a>

            <a href={phoneLink}>
              <div>
                <span>Phone</span>
                <strong>{phone}</strong>
              </div>

              <b>↗</b>
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footerInner">
          <div className="footerBrand">
            <span className="logoMark footerMark">S</span>

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