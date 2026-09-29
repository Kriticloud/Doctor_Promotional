import { useState } from "react"

const WHATSAPP_NUMBER = "917483696050"

const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

const FEATURES = [
  {
    number: "01",
    icon: "✳",
    title: "Help patients feel they know you",
    text: "Share your photo, experience and approach to care before their first visit.",
  },
  {
    number: "02",
    icon: "⌖",
    title: "Make your clinic easy to find",
    text: "Put your clinic address, hours and contact number where patients can see them.",
  },
  {
    number: "03",
    icon: "♡",
    title: "Show the care you offer",
    text: "Explain your specialties in simple words and help the right patients reach you.",
  },
]

const FAQS = [
  {
    question: "What do I get for ₹599?",
    answer:
      "A ready-made doctor website design for you to add your photo, qualifications and clinic details. Message us and we’ll explain exactly how it works before you order.",
  },
  {
    question: "Can you make the website for me?",
    answer:
      "Yes. The ₹1,999 plan covers one year of website setup and hosting. To keep your website hosted through this plan after the first year, renew for ₹1,999 per year. A custom web address, such as drmehta.in, is optional and billed separately.",
  },
  {
    question: "Is hosting included in the ₹1,999 setup?",
    answer:
      "Yes. Hosting is included for one year in the ₹1,999 plan. Renew at ₹1,999 each year to continue hosting through this plan. A custom web address is optional and its yearly renewal is paid separately.",
  },
  {
    question: "What is the optional ₹299 monthly help?",
    answer:
      "It’s optional help for small changes after your website is ready. We’ll agree on the kind of changes and what’s covered before you sign up. You don’t need it to buy a website.",
  },
]

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    ["Why patients choose you", "#benefits"],
    ["Getting started", "#how-it-works"],
    ["Pricing", "#pricing"],
    ["FAQs", "#faqs"],
  ]

  return (
    <div className="site-shell">
      <div className="announcement">
        <span className="announcement-dot" />A beautiful website that helps
        patients feel at ease
      </div>

      <header className="site-header">
        <nav className="nav-wrap" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="Carefolio home">
            <span className="brand-mark">c.</span>
            <span>carefolio</span>
          </a>
          <div className="desktop-nav">
            {navLinks.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </div>
          <a className="button button-dark nav-cta" href="#pricing">
            See prices <Arrow />
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </nav>
        {menuOpen && (
          <div className="mobile-nav">
            {navLinks.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
            <a href="#pricing" onClick={() => setMenuOpen(false)}>
              See prices <Arrow />
            </a>
          </div>
        )}
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <p className="eyebrow">
              <span>A PROFESSIONAL WEBSITE, MADE FOR DOCTORS</span>
            </p>
            <h1>
              Let patients see
              <br />
              <em>the doctor you are.</em>
            </h1>
            <p className="hero-description">
              Before a patient visits, they want to know who will care for them.
              Introduce yourself, share your experience and make your clinic
              easy to contact—all in one beautiful website.
            </p>
            <div className="hero-actions">
              <a
                className="button button-dark"
                href={whatsappLink(
                  "Hi, I’m a doctor. I’d like to see how my professional website could look.",
                )}
                target="_blank"
                rel="noreferrer"
              >
                Show me my website <Arrow />
              </a>
              <a className="text-link" href="#pricing">
                See simple prices <Arrow />
              </a>
            </div>
            <div className="hero-note">
              <span className="note-check">✓</span>
              <span>From ₹599 · No monthly fee required</span>
            </div>
          </div>

          <div
            className="hero-visual"
            aria-label="Illustrative doctor portfolio website preview"
          >
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="doctor-photo">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1000&h=1200&fit=crop&auto=format"
                alt="Doctor portrait shown as inspiration for your own website"
              />
              <div className="photo-shade" />
              <div className="photo-intro">
                <span>YOUR PRACTICE. YOUR STORY.</span>
                <strong>
                  A warm welcome
                  <br />
                  starts right here.
                </strong>
              </div>
            </div>
            <div className="floating-note">
              <span className="floating-icon">♡</span>
              <span>
                <strong>Made to feel like you</strong>
                <small>Your photo · Your words · Your clinic</small>
              </span>
            </div>
            <div className="visual-caption">
              A glimpse of your future website
            </div>
          </div>
        </section>

        <section className="intro-strip">
          <div className="section-wrap intro-inner">
            <span>A WEBSITE THAT FEELS PERSONAL</span>
            <p>Because choosing a doctor begins with trust.</p>
          </div>
        </section>

        <section className="benefits section-wrap section-pad" id="benefits">
          <div className="section-heading">
            <p className="eyebrow">
              <span>HELP PATIENTS GET TO KNOW YOU</span>
            </p>
            <h2>Your care deserves a warm welcome.</h2>
            <p className="section-subtitle">
              Share what matters to patients—in a way that feels reassuring,
              clear and unmistakably yours.
            </p>
          </div>
          <div className="feature-grid">
            {FEATURES.map((feature) => (
              <article className="feature-card" key={feature.number}>
                <span className="feature-icon">{feature.icon}</span>
                <span className="feature-number">{feature.number}</span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="details-section">
          <div className="section-wrap details-grid">
            <div className="details-copy">
              <p className="eyebrow eyebrow-light">
                <span>ALL THE IMPORTANT DETAILS, BEAUTIFULLY PRESENTED</span>
              </p>
              <h2>A lovely first impression. A clearer next step.</h2>
              <p>
                Help patients feel comfortable choosing you. Introduce yourself,
                share what you treat, and let them know how to reach your
                clinic.
              </p>
              <a className="button button-light" href="#pricing">
                See what’s included <Arrow />
              </a>
            </div>
            <div className="details-list">
              {[
                [
                  "01",
                  "Meet your doctor",
                  "Your photo, qualifications and a friendly introduction.",
                ],

                [
                  "02",
                  "How you can help",
                  "Your specialties and the care you provide.",
                ],

                [
                  "03",
                  "Find and contact your clinic",
                  "Your location, hours and phone number.",
                ],

                [
                  "04",
                  "Looks good on every phone",
                  "Easy for patients and families to read.",
                ],
              ].map(([number, title, text]) => (
                <div className="detail-row" key={number}>
                  <span>{number}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                  <Arrow diagonal />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="process section-wrap section-pad" id="how-it-works">
          <div className="section-heading">
            <p className="eyebrow">
              <span>A SIMPLE WAY TO GET STARTED</span>
            </p>
            <h2>Three easy steps to your website.</h2>
          </div>
          <div className="process-grid">
            {[
              [
                "01",
                "Tell us about your practice",
                "Share your name, qualifications, clinic details and a photo you love.",
              ],

              [
                "02",
                "We prepare your website",
                "Choose the ready-made design, or have us help put your details in place.",
              ],

              [
                "03",
                "Review and share",
                "Make sure everything feels right, then share your website with patients.",
              ],
            ].map(([number, title, text]) => (
              <article className="process-step" key={number}>
                <span>{number}</span>
                <div className="process-line" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="pricing-section" id="pricing">
          <div className="section-wrap section-pad">
            <div className="section-heading">
              <p className="eyebrow">
                <span>GOOD CARE SHOULD BE EASY TO FIND</span>
              </p>
              <h2>Your website, your way.</h2>
              <p className="section-subtitle">
                Choose a simple starting point—or let us help make it yours.
              </p>
            </div>
            <div className="pricing-grid">
              <article className="price-card">
                <span className="plan-label">MAKE IT YOURSELF</span>
                <h3>Your website design</h3>
                <p className="plan-description">
                  A beautiful ready-made design. Add your photo and clinic
                  details.
                </p>
                <div className="price">
                  ₹599 <small>one-time</small>
                </div>
                <div className="price-divider" />
                <ul>
                  <li>
                    <span>✓</span> A complete doctor website design
                  </li>
                  <li>
                    <span>✓</span> Add your photo, details and clinic
                    information
                  </li>
                  <li>
                    <span>✓</span> Pay once—no monthly website fee
                  </li>
                </ul>
                <a
                  className="button button-outline"
                  href={whatsappLink(
                    "Hi, I’m interested in the ₹599 doctor website design. Please tell me how it works.",
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  Get started on WhatsApp <Arrow />
                </a>
              </article>

              <article className="price-card price-card-featured">
                <span className="popular-label">WE’LL HELP YOU</span>
                <span className="plan-label">A LITTLE MORE PERSONAL HELP</span>
                <h3>We make it yours</h3>
                <p className="plan-description">
                  We help put your details into your website and get it ready to
                  share.
                </p>
                <div className="price">
                  ₹1,999 <small>per year</small>
                </div>
                <div className="price-divider" />
                <ul>
                  <li>
                    <span>✓</span> Personalised with your information
                  </li>
                  <li>
                    <span>✓</span> Website setup and hosting for one year
                  </li>
                  <li>
                    <span>✓</span> Renew yearly at ₹1,999 to keep it hosted
                  </li>
                </ul>
                <a
                  className="button button-dark"
                  href={whatsappLink(
                    "Hi, I’m interested in the ₹1,999/year website plan. Please explain what is included and how yearly renewals work.",
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  Let’s talk on WhatsApp <Arrow />
                </a>
              </article>

              <article className="price-card">
                <span className="plan-label">ONLY IF YOU NEED IT</span>
                <h3>A little help each month</h3>
                <p className="plan-description">
                  Ask us for help with small changes after your website is
                  ready.
                </p>
                <div className="price">
                  ₹299 <small>per month</small>
                </div>
                <div className="price-divider" />
                <ul>
                  <li>
                    <span>✓</span> Completely optional
                  </li>
                  <li>
                    <span>✓</span> Help with small updates
                  </li>
                  <li>
                    <span>✓</span> Agree what you need before signing up
                  </li>
                </ul>
                <a
                  className="button button-outline"
                  href={whatsappLink(
                    "Hi, please tell me what help is included in the optional ₹299/month plan.",
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ask us about monthly help <Arrow />
                </a>
              </article>
            </div>
            <p className="pricing-footnote">
              The ₹1,999 plan includes website setup and hosting for one year.
              Renew yearly at ₹1,999 to continue hosting through this plan. A
              custom web address (like drmehta.in) is optional and costs extra
              each year. Monthly update help is separate and optional.
            </p>
          </div>
        </section>

        <section className="hosting section-wrap">
          <div className="hosting-symbol" aria-hidden="true">
            ↗
          </div>
          <div className="hosting-copy">
            <p className="eyebrow">
              <span>A SIMPLE NOTE ABOUT COST</span>
            </p>
            <h2>One clear yearly plan to keep your website online.</h2>
            <p>
              Your ₹1,999 plan includes website setup and hosting for one year.
              Renew for ₹1,999 each year to continue hosting through this plan.
              A personal web address like dryourname.in is optional and has a
              separate yearly renewal.
            </p>
          </div>
          <div className="hosting-note">
            <span>IN PLAIN WORDS</span>
            <strong>
              ₹1,999 per year
              <br />
              Hosting included · domain extra
            </strong>
            <small>
              Renew yearly to keep hosting through this plan. Your domain renews
              separately.
            </small>
          </div>
        </section>

        <section className="faq-section" id="faqs">
          <div className="section-wrap faq-layout section-pad">
            <div className="faq-heading">
              <p className="eyebrow">
                <span>A FEW THINGS YOU MAY BE WONDERING</span>
              </p>
              <h2>Questions, answered.</h2>
              <p>Not sure what you need? We’re happy to explain—no pressure.</p>
              <a
                className="text-link"
                href={whatsappLink(
                  "Hi, I have a question about the doctor portfolio website.",
                )}
                target="_blank"
                rel="noreferrer"
              >
                Chat with us <Arrow diagonal />
              </a>
            </div>
            <div className="faq-list">
              {FAQS.map((faq) => (
                <details key={faq.question}>
                  <summary>
                    {faq.question}
                    <span>+</span>
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="section-wrap final-cta-inner">
            <p className="eyebrow eyebrow-light">
              <span>YOUR PRACTICE, INTRODUCED PROPERLY</span>
            </p>
            <h2>Let’s make your professional profile feel like you.</h2>
            <p>
              Tell us what you need. We’ll help you choose the right way to get
              started.
            </p>
            <a
              className="button button-light"
              href={whatsappLink(
                "Hi, I am a doctor interested in creating a professional portfolio website. Please help me choose a plan.",
              )}
              target="_blank"
              rel="noreferrer"
            >
              Start a WhatsApp conversation <Arrow diagonal />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-wrap footer-main">
          <a className="brand" href="#top">
            <span className="brand-mark">c.</span>
            <span>carefolio</span>
          </a>
          <p>A welcoming first impression for your medical practice.</p>
          <a
            href={whatsappLink(
              "Hi, I would like to know more about Carefolio.",
            )}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp +91 74836 96050 <Arrow diagonal />
          </a>
        </div>
        <div className="section-wrap footer-legal">
          <span>© {new Date().getFullYear()} Carefolio</span>
          <span>
            The sample design is for introducing your practice—not for medical
            advice or patient care.
          </span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  )
}
