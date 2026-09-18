import Image from "next/image";
import {
  Calendar,
  MapPin,
  Users,
  Star,
  Trophy,
  Medal,
  Target,
  Zap,
  Shield,
  PlayCircle,
  Camera,
  Phone,
} from "lucide-react";
import RegistrationForm from "@/components/RegistrationForm";
import logo from "@/public/logo.png";
import logoMark from "@/public/logo-mark.png";

const scoreboard = [
  { label: "Tournament date", value: "28 Nov 2026", icon: Calendar },
  { label: "Venue", value: "Seven Eleven Turf, Mira Road", icon: MapPin },
  { label: "Teams", value: "10 teams", icon: Users },
  { label: "Icon player", value: "1 per team", icon: Star },
];

const auctionSteps = [
  "The squads will be built.",
  "The strategies will unfold.",
  "The bids will rise.",
];

const prizesTop = [
  {
    title: "Champions",
    amount: "₹2,00,000",
    icon: Trophy,
    badge: "1ST PLACE",
    kicker: "WINNER TAKES ALL",
    description: "Grand trophy, gold medals, and championship bragging rights.",
    tier: "gold",
  },
  {
    title: "Runners-up",
    amount: "₹1,25,000",
    icon: Medal,
    badge: "2ND PLACE",
    kicker: "FINALIST AWARD",
    description: "Runner-up trophy and silver medals for the entire squad.",
    tier: "silver",
  },
];

const prizesAwards = [
  {
    title: "MVP",
    amount: "₹10,000",
    icon: Star,
    badge: "MVP",
    description: "Overall tournament performance.",
  },
  {
    title: "Best Batsman",
    amount: "₹5,000",
    icon: Target,
    badge: "BATTING",
    description: "Highest runs & strike rate.",
  },
  {
    title: "Best Bowler",
    amount: "₹5,000",
    icon: Zap,
    badge: "BOWLING",
    description: "Most wickets & best economy.",
  },
  {
    title: "Best Fielder",
    amount: "₹5,000",
    icon: Shield,
    badge: "FIELDING",
    description: "Most catches & run outs.",
  },
];

const contacts = [
  { name: "Vineet Doshi", phone: "+91 90049 44400", tel: "+919004944400" },
  { name: "Vaibhav Bhatt", phone: "+91 88281 31806", tel: "+918828131806" },
];

export default function Home() {
  return (
    <>
      <header className='topbar'>
        <div className='topbar__inner'>
          <div className='topbar__brand'>
            <Image src={logoMark} alt='' height={32} width={46} />
            B2B SPORTS CLUB
          </div>
          <div className='topbar__status'>
            <span className='topbar__dot' aria-hidden='true' />
            REGISTRATIONS OPEN
          </div>
        </div>
      </header>

      <main>
        {/* ---------------- HERO ---------------- */}
        <section className='hero'>
          <div className='hero__glow' aria-hidden='true' />
          <div className='container hero__inner'>
            <Image
              src={logo}
              alt='B2B Sports Club'
              className='hero__crest'
              priority
            />
            <h1>
              PATH TO GLORY
              <br />
              <span className='gradient-text'>CHAPTER 2</span>
            </h1>
            <span className='hero__chapter'>
              NEW CHAPTER. <b>SAME BROTHERHOOD.</b>
            </span>
            <p className='hero__tagline'>
              The rivalry gets bigger. The stakes get higher.
            </p>
            <p className='hero__body'>
              Step onto the turf, represent your team, battle through every
              over, and chase the ultimate glory — ten teams, one icon player
              each, and a single destination.
            </p>
            <div className='hero__actions'>
              <a className='btn btn--primary' href='#register'>
                Register now
              </a>
              <a className='btn btn--ghost' href='#prizes'>
                Prize money
              </a>
            </div>
          </div>
        </section>

        {/* ---------------- SCOREBOARD STRIP ---------------- */}
        <section className='scoreboard'>
          <div className='container'>
            <div className='scoreboard__grid'>
              {scoreboard.map(({ label, value, icon: Icon }) => (
                <div className='scoreboard__cell' key={label}>
                  <div className='scoreboard__label'>
                    <Icon aria-hidden='true' />
                    {label.toUpperCase()}
                  </div>
                  <div className='scoreboard__value'>{value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- AUCTION ---------------- */}
        <section className='section' id='auction'>
          <div className='container auction'>
            <div>
              <h2 className='section-heading'>THE AUCTION</h2>
              <div className='section-kicker'>
                <span className='eyebrow'>
                  Build your army before you take the field.
                </span>
              </div>
            </div>

            <div className='ticket'>
              <div className='ticket__label'>AUCTION DAY</div>
              <div className='ticket__date'>23 OCT 2026</div>
            </div>
          </div>
        </section>

        {/* ---------------- PRIZE LEDGER ---------------- */}
        <section className='section' id='prizes'>
          <div className='container'>
            <h2 className='section-heading'>THE GLORY HAS A PRICE</h2>
            <div className='section-kicker'>
              <span className='eyebrow'>What&apos;s on the table.</span>
            </div>

            <div className='prize-grid prize-grid--top'>
              {prizesTop.map(
                ({
                  title,
                  amount,
                  icon: Icon,
                  badge,
                  kicker,
                  description,
                  tier,
                }) => (
                  <div className={`prize-card prize-card--${tier}`} key={title}>
                    <div className='prize-card__head'>
                      <div className='prize-card__icon'>
                        <Icon aria-hidden='true' />
                      </div>
                      <span
                        className={`badge${
                          tier === "gold" ? " badge--accent" : ""
                        }`}
                      >
                        {badge}
                      </span>
                    </div>
                    <span className='prize-card__kicker'>{kicker}</span>
                    <h3 className='prize-card__title'>{title}</h3>
                    <div className='prize-card__amount gradient-text'>
                      {amount}
                    </div>
                    <p className='prize-card__desc'>{description}</p>
                  </div>
                )
              )}
            </div>

            <div className='prize-grid prize-grid--awards'>
              {prizesAwards.map(
                ({ title, amount, icon: Icon, badge, description }) => (
                  <div className='prize-card prize-card--award' key={title}>
                    <div className='prize-card__head'>
                      <div className='prize-card__icon'>
                        <Icon aria-hidden='true' />
                      </div>
                      <span className='badge'>{badge}</span>
                    </div>
                    <h3 className='prize-card__title'>{title}</h3>
                    <div className='prize-card__amount gradient-text'>
                      {amount}
                    </div>
                    <p className='prize-card__desc'>{description}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* ---------------- BROADCAST ---------------- */}
        <section className='section'>
          <div className='container'>
            <h2 className='section-heading'>EXPERIENCE THE ACTION</h2>
            <div className='section-kicker'>
              <span className='eyebrow'>Play it. Capture it. Share it.</span>
            </div>

            <div className='broadcast' style={{ marginTop: 36 }}>
              <div className='broadcast__card'>
                <div className='broadcast__icon'>
                  <PlayCircle aria-hidden='true' />
                </div>
                <h3>Live broadcast - YouTube</h3>
              </div>
              <div className='broadcast__card'>
                <div className='broadcast__icon'>
                  <Camera aria-hidden='true' />
                </div>
                <h3>Social media coverage - Instagram</h3>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- CLOSING STATEMENT ---------------- */}
        <section className='statement'>
          <div className='container'>
            <span className='eyebrow'>
              ONE TOURNAMENT. TEN TEAMS. ONE DESTINATION.
            </span>
            <h2 style={{ marginTop: 16 }}>
              This isn&apos;t just about winning matches.
            </h2>
            <p>
              It&apos;s about the moments, the rivalries, the brotherhood and
              the memories that stay long after the final ball.
            </p>
            <p className='statement__brotherhood'>
              Are you ready to write your chapter?
            </p>
          </div>
        </section>

        {/* ---------------- REGISTRATION ---------------- */}
        <section className='register' id='register'>
          <div className='container'>
            <div className='register__head'>
              <h2>REGISTER NOW</h2>
              <span className='eyebrow'>Your Path to Glory starts here.</span>
            </div>
            <RegistrationForm />

            <div className='register__contact'>
              <p className='register__contact-label'>
                For any queries, please contact
              </p>
              <div className='register__contact-list'>
                {contacts.map(({ name, phone, tel }) => (
                  <a
                    className='register__contact-item'
                    href={`tel:${tel}`}
                    key={name}
                  >
                    <Phone aria-hidden='true' />
                    <span>
                      <strong>{name}</strong> — {phone}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className='footer'>
        <div className='container footer__inner'>
          <div className='footer__brand'>
            <Image src={logoMark} alt='' height={28} width={41} />
            <span>B2B SPORTS CLUB</span>
          </div>
          <div className='footer__meta'>
            Path to Glory · Chapter 2 · 28 Nov 2026
          </div>
        </div>
      </footer>
    </>
  );
}
