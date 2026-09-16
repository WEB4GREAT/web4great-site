import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { motion, type Variants } from 'framer-motion'
import {
  FiArrowUpRight,
  FiCode,
  FiCompass,
  FiGithub,
  FiSend,
  FiUsers,
  FiZap,
} from 'react-icons/fi'

const reveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

const work = [
  {
    number: '01',
    name: 'Scout',
    type: 'PRODUCT / WEB3',
    role: 'Founder · Builder',
    year: '2026',
    description:
      'An early-project discovery platform built to surface emerging Web3 projects before they become obvious.',
    tags: ['React', 'TypeScript', 'Blockchain'],
    featured: true,
  },
  {
    number: '02',
    name: 'Spliz',
    type: 'FINTECH / WEB3',
    role: 'Community · Growth',
    year: '2026',
    description:
      'Community and growth contribution for a cross-border bill-splitting product.',
    tags: ['Community', 'Growth'],
  },
  {
    number: '03',
    name: 'Farting Lobster',
    type: 'COMMUNITY / MEME',
    role: 'Community Manager',
    year: '2026',
    description:
      'Community activation and growth around an early-stage memecoin project.',
    tags: ['Community', 'Activation'],
  },
  {
    number: '04',
    name: 'Cryptonia',
    type: 'COMMUNITY / WEB3',
    role: 'Official Community Manager',
    year: '2026',
    description:
      'Community management and ecosystem support for an early Web3 project.',
    tags: ['Community', 'Ecosystem'],
  },
  {
    number: '05',
    name: 'EdenFi',
    type: 'COMMUNITY / WALLET',
    role: 'Moderator',
    year: '2026',
    description:
      'Community moderation and user support for a smart-wallet ecosystem.',
    tags: ['Moderation', 'Web3'],
  },
  {
    number: '06',
    name: 'Streamify',
    type: 'COMMUNITY / WEB3',
    role: 'Moderator',
    year: '2026',
    description:
      'Community support and moderation within an emerging Web3 product.',
    tags: ['Moderation', 'Community'],
  },
]

const capabilities = [
  {
    icon: FiCode,
    number: '01',
    title: 'BUILD',
    text: 'Full-stack products, Web3 tools and interfaces that turn ideas into something people can actually use.',
  },
  {
    icon: FiUsers,
    number: '02',
    title: 'GROW',
    text: 'Community, activation and ecosystem work designed to move people from watching to participating.',
  },
  {
    icon: FiCompass,
    number: '03',
    title: 'DISCOVER',
    text: 'Finding early projects, signals and opportunities before they become crowded.',
  },
  {
    icon: FiZap,
    number: '04',
    title: 'EXECUTE',
    text: 'Fast, hands-on contribution across product, community, growth and Web3 operations.',
  },
]

function App() {
  return (
    <div className="site">
      <div className="grain" />

      <nav className="nav">
        <a className="brand" href="#top" aria-label="WEB4GREAT home">
          WEB4GREAT
        </a>

        <div className="nav-center">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <a className="nav-talk" href="#contact">
          Let&apos;s talk <FiArrowUpRight />
        </a>
      </nav>

      <main id="top">
        <section className="hero">
          <div className="hero-topline">
            <span>WEB3 BUILDER</span>
            <span>COMMUNITY / GROWTH</span>
            <span>2026 — NOW</span>
          </div>

          <div className="hero-main">
            <motion.div
              className="hero-copy"
              initial="hidden"
              animate="visible"
              variants={reveal}
            >
              <p className="hero-kicker">HELLO, I&apos;M</p>

              <h1>
                WEB4
                <span>GREAT</span>
              </h1>

              <p className="hero-statement">
                I build products, grow communities and find opportunities
                before everyone else sees them.
              </p>

              <div className="hero-actions">
                <a className="primary-button" href="#work">
                  Explore work <FiArrowUpRight />
                </a>

                <a className="text-button" href="#about">
                  More about me <span>↓</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              <div className="orb">
                <div className="orb-ring ring-one" />
                <div className="orb-ring ring-two" />
                <div className="orb-core" />
                <div className="orb-label">
                  <span>SCOUT</span>
                  <small>BUILDING NOW</small>
                </div>
              </div>

              <div className="visual-note note-one">01 / PRODUCT</div>
              <div className="visual-note note-two">NG / WEB3</div>
            </motion.div>
          </div>

          <div className="hero-bottom">
            <div className="scroll-mark">
              <span />
              SCROLL TO EXPLORE
            </div>

            <div className="hero-location">
              <span>BASED IN</span>
              <strong>NIGERIA</strong>
            </div>
          </div>
        </section>

        <section className="signal">
          <div className="signal-label">CURRENT SIGNAL</div>
          <div className="signal-line" />
          <div className="signal-text">
            <span className="signal-dot" />
            Building Scout — early Web3 discovery
          </div>
        </section>

        <motion.section
          className="intro-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={reveal}
        >
          <div className="section-index">01 / WHAT I DO</div>

          <div className="intro-content">
            <h2>
              I like being
              <em>early.</em>
            </h2>

            <p>
              My work sits between building products, understanding people and
              moving through Web3 ecosystems quickly. Sometimes that means
              writing code. Sometimes it means building a community. Usually,
              it means doing both.
            </p>
          </div>
        </motion.section>

        <section className="capabilities">
          {capabilities.map((item) => {
            const Icon = item.icon

            return (
              <motion.article
                className="capability"
                key={item.number}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={reveal}
              >
                <div className="capability-top">
                  <span>{item.number}</span>
                  <Icon />
                </div>

                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.article>
            )
          })}
        </section>

        <section className="work-section" id="work">
          <div className="section-heading-large">
            <div>
              <div className="section-index">02 / SELECTED WORK</div>
              <h2>
                Things I&apos;ve
                <br />
                <span>worked on.</span>
              </h2>
            </div>

            <p>
              A selection of products, communities and ecosystems I&apos;ve
              contributed to.
            </p>
          </div>

          <div className="work-list">
            {work.map((project) => (
              <motion.article
                className={`work-item ${project.featured ? 'featured' : ''}`}
                key={project.number}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={reveal}
              >
                <div className="work-number">{project.number}</div>

                <div className="work-main">
                  <div className="work-meta">
                    <span>{project.type}</span>
                    <span>{project.year}</span>
                  </div>

                  <h3>{project.name}</h3>

                  <p className="work-description">{project.description}</p>

                  <div className="work-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="work-side">
                  <span>{project.role}</span>
                  <FiArrowUpRight />
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="scout-feature">
          <div className="scout-top">
            <span>03 / CURRENTLY BUILDING</span>
            <span>2026</span>
          </div>

          <div className="scout-layout">
            <div className="scout-copy">
              <div className="scout-eyebrow">
                <span className="live-dot" />
                LIVE PROJECT
              </div>

              <h2>SCOUT</h2>

              <p>
                Find emerging Web3 projects before they become obvious. Scout
                is being built around one simple idea: opportunity should be
                discoverable while it&apos;s still early.
              </p>

              <div className="scout-actions">
                <span>PRODUCT</span>
                <span>DISCOVERY</span>
                <span>MULTI-CHAIN</span>
              </div>
            </div>

            <div className="scout-screen">
              <div className="screen-header">
                <span>SCOUT / DISCOVERY</span>
                <span>LIVE</span>
              </div>

              <div className="screen-body">
                <div className="screen-line long" />
                <div className="screen-line medium" />
                <div className="screen-grid">
                  <div />
                  <div />
                  <div />
                </div>
                <div className="screen-scan" />
              </div>

              <div className="screen-footer">
                <span>EARLY SIGNALS</span>
                <span>SCANNING →</span>
              </div>
            </div>
          </div>
        </section>

        <section className="story-section" id="about">
          <div className="section-index">04 / THE STORY</div>

          <div className="story-grid">
            <h2>
              From
              <br />
              <span>community</span>
              <br />
              to builder.
            </h2>

            <div className="story-copy">
              <p className="story-large">
                I entered Web3 in 2022 through community and ecosystem work.
                Since then, I&apos;ve moved closer to the products themselves.
              </p>

              <p>
                Today I work across full-stack development, blockchain,
                community and growth. The common thread is simple: I want to
                understand how things work, then make them better.
              </p>

              <div className="timeline">
                <div>
                  <span>2022</span>
                  <p>Entered Web3</p>
                </div>

                <div>
                  <span>2023 — 24</span>
                  <p>Community & ecosystem work</p>
                </div>

                <div>
                  <span>2025 — 26</span>
                  <p>Builder mode</p>
                </div>

                <div>
                  <span>NOW</span>
                  <p>Building Scout</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-number">05</div>

          <div className="contact-content">
            <div className="section-index">LET&apos;S BUILD SOMETHING</div>

            <h2>
              Have an idea?
              <br />
              <span>Let&apos;s talk.</span>
            </h2>

            <p>
              For products, communities, growth work or interesting Web3
              opportunities.
            </p>

            <a className="contact-button" href="mailto:success99940@gmail.com">
              Start a conversation <FiArrowUpRight />
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          WEB4GREAT
          <span>BUILDING IN PUBLIC / WEB3</span>
        </div>

        <div className="footer-links">
          <a href="https://github.com/WEB4GREAT" target="_blank" rel="noreferrer">
            <FiGithub /> GitHub
          </a>

          <a href="https://x.com/WEB4GREAT" target="_blank" rel="noreferrer">
            X <FiArrowUpRight />
          </a>

          <a href="https://t.me/great134" target="_blank" rel="noreferrer">
            <FiSend /> Telegram
          </a>
        </div>

        <div className="footer-bottom">
          <span>© 2026 WEB4GREAT</span>
          <span>WEB3 / PRODUCT / COMMUNITY</span>
        </div>
      </footer>
      <Analytics />
      <SpeedInsights />
    </div>
  )
}

export default App
