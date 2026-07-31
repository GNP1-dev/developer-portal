import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import OpenStickyButton from "@site/src/components/buttons/OpenStickyButton";

/* --- DATA --- */

const sdks = [
  {
    name: "TypeScript",
    targetUrl: "tools/?tags=sdk&tags=typescript",
    icon: "img/icons/typescript-original.svg",
  },
  {
    name: "Python",
    targetUrl: "tools/?tags=sdk&tags=python",
    icon: "img/icons/python-original.svg",
  },
  {
    name: "Rust",
    targetUrl: "tools/?tags=sdk&tags=rust",
    icon: "img/icons/rust-original.svg",
  },
  {
    name: "Go",
    targetUrl: "tools/?tags=sdk&tags=golang",
    icon: "img/icons/go-original.svg",
  },
  {
    name: "Java",
    targetUrl: "tools/?tags=sdk&tags=java",
    icon: "img/icons/java-original.svg",
  },
  {
    name: "C",
    targetUrl: "tools/?tags=sdk&tags=c",
    icon: "img/icons/c-original.svg",
  },
  {
    name: "Swift",
    targetUrl: "tools/?tags=sdk&tags=swift",
    icon: "img/icons/swift-original.svg",
  },
];

/* Line-icon marks for the colour-block cards. Kept small and inside a tinted
   tile so they read as marks rather than as the card's identity. */
const icons = {
  templates: (
    <>
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </>
  ),
  package: (
    <>
      <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </>
  ),
  shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  radio: (
    <>
      <circle cx="12" cy="12" r="2" />
      <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" />
    </>
  ),
  cpu: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" />
      <line x1="20" y1="14" x2="23" y2="14" />
      <line x1="1" y1="9" x2="4" y2="9" />
      <line x1="1" y1="14" x2="4" y2="14" />
    </>
  ),
  wifi: (
    <>
      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
      <path d="M1.42 9a16 16 0 0 1 21.16 0" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
      <line x1="12" y1="20" x2="12.01" y2="20" />
    </>
  ),
  book: (
    <>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </>
  ),
  building: (
    <>
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <line x1="9" y1="7" x2="9" y2="7.01" />
      <line x1="15" y1="7" x2="15" y2="7.01" />
      <line x1="9" y1="12" x2="9" y2="12.01" />
      <line x1="15" y1="12" x2="15" y2="12.01" />
      <path d="M10 22v-4h4v4" />
    </>
  ),
};

const tracks = [
  {
    title: "Ship to Production",
    desc: "Pre-mainnet checklist, chain access, and scaling.",
    to: "docs/developers/curriculum/production/overview",
    icon: icons.package,
  },
  {
    title: "Contract security",
    desc: "Vulnerability classes, audits, and the CTF.",
    to: "docs/developers/curriculum/smart-contracts/security",
    icon: icons.shield,
  },
  {
    title: "Oracles & real-world data",
    desc: "Pyth, prediction markets, on-chain randomness.",
    to: "docs/developers/curriculum/dapps/oracles/overview",
    icon: icons.radio,
  },
  {
    title: "AI agents",
    desc: "Masumi and MCP, for agents that transact.",
    to: "docs/developers/curriculum/dapps/ai-agents/overview",
    icon: icons.cpu,
  },
  {
    title: "Internet of Things",
    desc: "Five hardware workshops, setup to on-chain.",
    to: "docs/developers/curriculum/dapps/iot/",
    icon: icons.wifi,
  },
];

/* --- SHARED --- */

function RailLabel({ children }) {
  return <p className={styles.railLabel}>{children}</p>;
}

/* Colour-block card. Carries no illustration: a soft corner wash and a tinted
   mark, in a single blue, keep it quiet next to the illustrated cards without
   needing new art. */
function BlockCard({ to, title, desc, icon, className }) {
  return (
    <Link to={useBaseUrl(to)} className={clsx(styles.blockCard, className)}>
      <span className={styles.blockWash} aria-hidden="true" />
      <span className={styles.blockMark}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {icon}
        </svg>
      </span>
      <span className={styles.blockText}>
        <span className={styles.blockTitle}>{title}</span>
        <span className={styles.blockDesc}>{desc}</span>
      </span>
      <span className={styles.blockArrow}>→</span>
    </Link>
  );
}

/* --- COMPONENTS --- */

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <img
          src={useBaseUrl("img/home/hero-background.webp")}
          alt=""
          className={styles.heroBackgroundImage}
        />
        <div className={styles.heroOverlay} />
      </div>
      <div className="container">
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Cardano Developer Portal</h1>
          <p className={styles.heroSubtitle}>
            From the first transaction to the production dApp and everything in
            between. Docs, tools, and SDKs for everything Cardano.
          </p>
          <div className={styles.heroActions}>
            <Link to={useBaseUrl("docs/developers/")} className={styles.heroCta}>
              Start Here
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function DevSkillsBand() {
  const [copied, setCopied] = React.useState(false);
  const command = "/plugin marketplace add cardano-foundation/cardano-dev-skills";

  const copyCommand = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className={styles.skillsBand}>
      <div className="container">
        <div className={styles.skillsInner}>
          <div className={styles.skillsCopy}>
            <span className={styles.skillsBadge}>AI-assisted development</span>
            <span className={styles.skillsText}>
              <strong>Cardano Dev Skills</strong> gives your coding assistant
              current, authoritative Cardano context instead of stale training
              data.
            </span>
          </div>
          <div className={styles.skillsAction}>
            <div className={styles.cliMockup}>
              <code>{command}</code>
              <button
                className={styles.copyBtn}
                onClick={copyCommand}
                aria-label="Copy command"
              >
                {copied ? (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.copyIcon}><polyline points="20 6 9 17 4 12" /></svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.copyIcon}><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
                )}
              </button>
            </div>
            <Link
              to={useBaseUrl("docs/developers/curriculum/start-building/ai-assisted-development")}
              className={styles.skillsLink}
            >
              Set it up →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function StartHereSection() {
  return (
    <section className={styles.bento}>
      <div className="container">
        <RailLabel>Start here</RailLabel>
        <div className={styles.bentoGrid}>
          {/* The curriculum */}
          <Link
            to={useBaseUrl("docs/developers/")}
            className={clsx(styles.bentoCard, styles.bentoLarge, styles.bentoAccent)}
          >
            <div className={styles.bentoCardContent}>
              <h3>The Curriculum</h3>
              <p>
                Seven modules that build on each other, from blockchain
                fundamentals to a production dApp.
              </p>
              <span className={styles.bentoLink}>Start the curriculum →</span>
            </div>
            <img
              src={useBaseUrl("img/home/card-get-started.svg")}
              alt=""
              className={styles.bentoCardImage}
            />
          </Link>

          {/* Templates */}
          <BlockCard
            to="templates"
            title="Templates"
            desc="Scaffold a wallet-connected dApp in one command."
            icon={icons.templates}
            className={styles.blockThird}
          />

          {/* Smart contracts */}
          <Link
            to={useBaseUrl("docs/developers/curriculum/smart-contracts/overview")}
            className={clsx(styles.bentoCard, styles.bentoThird)}
          >
            <img
              src={useBaseUrl("img/home/card-smart-contracts.svg")}
              alt=""
              className={styles.bentoThirdImage}
            />
            <div className={styles.bentoThirdContent}>
              <h3>Smart Contracts</h3>
              <p>Validators, the eUTXO model, and the security that follows from it.</p>
              <span className={styles.bentoLink}>Start building →</span>
            </div>
          </Link>

          {/* Build a dApp */}
          <Link
            to={useBaseUrl("docs/developers/curriculum/dapps/overview")}
            className={clsx(styles.bentoCard, styles.bentoThird)}
          >
            <img
              src={useBaseUrl("img/home/card-integrate-cardano.svg")}
              alt=""
              className={styles.bentoThirdImage}
            />
            <div className={styles.bentoThirdContent}>
              <h3>Build a dApp</h3>
              <p>Connect wallets, take payments, and build protocols on eUTXO.</p>
              <span className={styles.bentoLink}>Learn more →</span>
            </div>
          </Link>

          {/* Builder tools */}
          <Link
            to={useBaseUrl("tools")}
            className={clsx(styles.bentoCard, styles.bentoThird)}
          >
            <img
              src={useBaseUrl("img/home/card-transaction-metadata.svg")}
              alt=""
              className={styles.bentoThirdImage}
            />
            <div className={styles.bentoThirdContent}>
              <h3>Builder Tools</h3>
              <p>Curated SDKs, APIs, indexers, and libraries.</p>
              <span className={styles.bentoLink}>Browse tools →</span>
            </div>
          </Link>

          {/* Native tokens */}
          <Link
            to={useBaseUrl("docs/developers/curriculum/native-tokens/overview")}
            className={clsx(styles.bentoCard, styles.bentoHalf)}
          >
            <img
              src={useBaseUrl("img/home/card-native-tokens.svg")}
              alt=""
              className={styles.bentoHalfImage}
            />
            <div className={styles.bentoHalfContent}>
              <h3>Native Tokens &amp; NFTs</h3>
              <p>Mint on the ledger itself. No token contract to write or exploit.</p>
              <span className={styles.bentoLink}>Explore →</span>
            </div>
          </Link>

          {/* Staking & governance */}
          <Link
            to={useBaseUrl("docs/developers/curriculum/staking-governance/overview")}
            className={clsx(styles.bentoCard, styles.bentoHalf)}
          >
            <img
              src={useBaseUrl("img/home/card-governance.svg")}
              alt=""
              className={styles.bentoHalfImage}
            />
            <div className={styles.bentoHalfContent}>
              <h3>Staking &amp; Governance</h3>
              <p>Delegation, rewards, DReps, and voting from inside your app.</p>
              <span className={styles.bentoLink}>Learn more →</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

function TracksStrip() {
  return (
    <section className={styles.tracks}>
      <div className="container">
        <RailLabel>Go deeper</RailLabel>
        <div className={styles.tracksGrid}>
          {tracks.map((track) => (
            <BlockCard
              key={track.title}
              to={track.to}
              title={track.title}
              desc={track.desc}
              icon={track.icon}
              className={styles.blockTrack}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function OtherPathsSection() {
  return (
    <section className={styles.otherPaths}>
      <div className="container">
        <RailLabel>Other paths</RailLabel>
        <div className={styles.otherPathsGrid}>
          <Link
            to={useBaseUrl("docs/operators/")}
            className={clsx(styles.bentoCard, styles.bentoHalf)}
          >
            <img
              src={useBaseUrl("img/home/card-operate-a-stake-pool.svg")}
              alt=""
              className={styles.bentoHalfImage}
            />
            <div className={styles.bentoHalfContent}>
              <h3>Operate a Stake Pool</h3>
              <p>The operator handbook, from hardware to on-chain governance.</p>
              <span className={styles.bentoLink}>Get started →</span>
            </div>
          </Link>

          <BlockCard
            to="docs/developers/exchange-integrations"
            title="Exchange Integration"
            desc="Custodial deposits and withdrawals for exchanges."
            icon={icons.building}
            className={styles.blockRow}
          />
        </div>
      </div>
    </section>
  );
}

function DeveloperSection() {
  const [copied, setCopied] = React.useState(false);
  const command = "yaci-devkit up";

  const copyCommand = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className={styles.developer}>
      <div className="container">
        <div className={styles.devHeader}>
          <h2>Start Building</h2>
          <p>Everything you need to build on Cardano</p>
        </div>
        <div className={styles.devGrid}>
          {/* SDKs */}
          <div className={styles.devSdkCard}>
            <div className={styles.devSdkHeader}>
              <h2>Build in Your Language</h2>
              <p>Production-ready SDKs for every stack</p>
            </div>
            <div className={styles.sdkGrid}>
              {sdks.map((sdk) => (
                <Link
                  key={sdk.name}
                  to={useBaseUrl(sdk.targetUrl)}
                  className={styles.sdkItem}
                >
                  <img
                    src={useBaseUrl(sdk.icon)}
                    alt={`${sdk.name} logo`}
                  />
                  <span>{sdk.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Code sample */}
          <div className={styles.devCodeCard}>
            <div className={styles.codeBlock}>
              <div className={styles.codeHeader}>
                <span className={styles.codeDot} />
                <span className={styles.codeDot} />
                <span className={styles.codeDot} />
                <span className={styles.codeTitle}>transaction.ts</span>
              </div>
              <code>
                <span className={styles.codeComment}>// Build a payment transaction</span>
                <br />
                <span className={styles.codeKeyword}>const</span>{" "}
                <span className={styles.codeVariable}>tx</span> ={" "}
                <span className={styles.codeKeyword}>await</span>{" "}
                <span className={styles.codeVariable}>txBuilder</span>
                <br />
                {"  "}.
                <span className={styles.codeFunction}>payToAddress</span>(
                <span className={styles.codeVariable}>address</span>,{" "}
                <span className={styles.codeFunction}>lovelace</span>(
                <span className={styles.codeVariable}>2_000_000n</span>))
                <br />
                {"  "}.
                <span className={styles.codeFunction}>build</span>();
                <br />
                <br />
                <span className={styles.codeComment}>// Sign and submit</span>
                <br />
                <span className={styles.codeKeyword}>const</span>{" "}
                <span className={styles.codeVariable}>signedTx</span> ={" "}
                <span className={styles.codeKeyword}>await</span>{" "}
                <span className={styles.codeVariable}>wallet</span>.
                <span className={styles.codeFunction}>sign</span>(
                <span className={styles.codeVariable}>tx</span>);
                <br />
                <span className={styles.codeKeyword}>const</span>{" "}
                <span className={styles.codeVariable}>txHash</span> ={" "}
                <span className={styles.codeKeyword}>await</span>{" "}
                <span className={styles.codeVariable}>wallet</span>.
                <span className={styles.codeFunction}>submit</span>(
                <span className={styles.codeVariable}>signedTx</span>);
              </code>
            </div>
          </div>

          {/* Cardano Apps */}
          <a
            href="https://cardano.org/apps/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.devLinkCard}
          >
            <div className={styles.devLinkIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
            </div>
            <div className={styles.devLinkText}>
              <span className={styles.devLinkTitle}>Cardano Apps</span>
              <span className={styles.devLinkDesc}>Explore the ecosystem</span>
            </div>
            <span className={styles.devLinkArrow}>↗</span>
          </a>

          {/* Community */}
          <Link
            to={useBaseUrl("docs/community/cardano-developer-community")}
            className={styles.devLinkCard}
          >
            <div className={styles.devLinkIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div className={styles.devLinkText}>
              <span className={styles.devLinkTitle}>Community</span>
              <span className={styles.devLinkDesc}>Connect with developers</span>
            </div>
            <span className={styles.devLinkArrow}>→</span>
          </Link>

          {/* Infrastructure */}
          <Link
            to={useBaseUrl("docs/developers/curriculum/production/connecting-to-the-chain")}
            className={styles.devLinkCard}
          >
            <div className={styles.devLinkIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                <line x1="6" y1="6" x2="6.01" y2="6" />
                <line x1="6" y1="18" x2="6.01" y2="18" />
              </svg>
            </div>
            <div className={styles.devLinkText}>
              <span className={styles.devLinkTitle}>Infrastructure</span>
              <span className={styles.devLinkDesc}>Nodes, APIs, and services</span>
            </div>
            <span className={styles.devLinkArrow}>→</span>
          </Link>

          {/* Dev blog */}
          <Link to={useBaseUrl("blog")} className={styles.devLinkCard}>
            <div className={styles.devLinkIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
            </div>
            <div className={styles.devLinkText}>
              <span className={styles.devLinkTitle}>Dev Blog</span>
              <span className={styles.devLinkDesc}>Updates and deep dives</span>
            </div>
            <span className={styles.devLinkArrow}>→</span>
          </Link>

          {/* Devnet (YACI) */}
          <div className={clsx(styles.devQuickstartCard2, styles.devQuickstartFull)}>
            <div className={styles.quickstartLeft}>
              <span className={styles.quickstartBadge2}>Devnet</span>
              <span className={styles.quickstartText}>Local development network, ready in one command</span>
            </div>
            <div className={styles.quickstartRight}>
              <div className={styles.cliMockup}>
                <span className={styles.cliPrompt}>$</span>
                <code>{command}</code>
                <button
                  className={styles.copyBtn}
                  onClick={copyCommand}
                  aria-label="Copy command"
                >
                  {copied ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.copyIcon}><polyline points="20 6 9 17 4 12" /></svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.copyIcon}><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
                  )}
                </button>
              </div>
              <a href="https://devkit.yaci.xyz/" target="_blank" rel="noopener noreferrer" className={styles.quickstartDocBtn} aria-label="YACI DevKit Docs">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.quickstartDocIcon}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PracticeSection() {
  return (
    <section className={styles.smartContracts}>
      <div className="container">
        <div className={styles.scHeader}>
          <h2>Learn by Doing</h2>
          <p>Reference contracts to read, and challenges to break</p>
        </div>
        <div className={styles.scGrid}>
          {/* Contract library */}
          <BlockCard
            to="templates/contracts"
            title="Contract Library"
            desc="Audited, open-source contracts to read or start from."
            icon={icons.book}
            className={styles.blockTall}
          />

          {/* Asteria */}
          <a
            href="https://asteria.txpipe.io/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.asteriaCard}
          >
            <img
              src={useBaseUrl("img/home/asteria-game.jpg")}
              alt="Asteria space game for learning eUTxO development"
              className={styles.asteriaImage}
            />
            <div className={styles.asteriaOverlay} />
            <div className={styles.asteriaContent}>
              <h3>Asteria</h3>
              <p>Learn development with eUTxOs by building bots that compete in a 2D space game</p>
              <span className={styles.asteriaLink}>Explore universe →</span>
            </div>
          </a>

          {/* CTF */}
          <Link
            to={useBaseUrl("docs/developers/curriculum/smart-contracts/security/ctf")}
            className={styles.scCTFCard}
          >
            <img
              src={useBaseUrl("img/home/cardano-ctf.jpeg")}
              alt="Cardano Capture The Flag security challenge"
              className={styles.scCTFImage}
            />
            <div className={styles.scCTFOverlay} />
            <div className={styles.scCTFContent}>
              <h3>Cardano CTF</h3>
              <p>Find vulnerabilities, exploit contracts, earn rewards</p>
              <span className={styles.scCTFLink}>Start hacking →</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className={styles.cta}>
      <div className="container">
        <div className={styles.ctaHeader}>
          <h2>Join the Ecosystem</h2>
          <p>Connect, build, and get funded</p>
        </div>
        <div className={styles.ctaRow}>
          {/* Talent Pool */}
          <Link to={useBaseUrl("talent")} className={styles.ctaHackathons}>
            <img
              src={useBaseUrl("img/home/hackathons/hackathon.jpg")}
              alt="Cardano developers"
              className={styles.ctaHackathonsImage}
            />
            <div className={styles.ctaHackathonsOverlay} />
            <div className={styles.ctaHackathonsContent}>
              <h3>Talent Pool</h3>
              <p>Hear about Cardano hackathons, jobs, and grants for developers</p>
              <span className={styles.ctaHackathonsLink}>Join the pool →</span>
            </div>
          </Link>

          {/* Events */}
          <a
            href="https://cardano.org/events/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaEvents}
          >
            <img
              src={useBaseUrl("img/home/card-cardano-events.png")}
              alt="Cardano community events"
              className={styles.ctaEventsImage}
            />
            <div className={styles.ctaEventsOverlay} />
            <div className={styles.ctaEventsContent}>
              <h3>Cardano Events</h3>
              <p>Meet developers and community members at events worldwide</p>
              <span className={styles.ctaEventsLink}>Find events ↗</span>
            </div>
          </a>

          {/* Funding */}
          <Link to={useBaseUrl("docs/community/funding")} className={styles.ctaFunding}>
            <img
              src={useBaseUrl("img/home/card-get-funded.jpg")}
              alt="Cardano funding and grants"
              className={styles.ctaFundingImage}
            />
            <div className={styles.ctaFundingOverlay} />
            <div className={styles.ctaFundingContent}>
              <h3>Get Funded</h3>
              <p>Grants and funding opportunities to bring your ideas to life</p>
              <span className={styles.ctaFundingLink}>Explore grants →</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

function OfficeHoursSection() {
  return (
    <section className={styles.officeHours}>
      <div className="container">
        <div className={styles.officeHoursInner}>
          <div className={styles.officeHoursContent}>
            <span className={styles.officeHoursBadge}>Every week</span>
            <h2>Developer Office Hours</h2>
            <p>
              Get your questions answered live by Cardano Foundation engineers.
              Each session features a different topic followed by open Q&A. All
              recordings available on YouTube.
            </p>
            <div className={styles.officeHoursActions}>
              <a
                href="https://www.addevent.com/calendar/TG807216"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.officeHoursBtn}
              >
                Add to Calendar
              </a>
              <a
                href="https://www.youtube.com/playlist?list=PLCuyQuWCJVQ3IZiQQvHtczEM-cFAqoHBr"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.officeHoursBtnSecondary}
              >
                Watch Recordings ↗
              </a>
            </div>
          </div>
          <div className={styles.officeHoursImageCard}>
            <img
              src={useBaseUrl("img/home/card-office-hours.png")}
              alt="Cardano Developers Calendar"
              className={styles.officeHoursImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- MAIN PAGE --- */

function Home() {
  return (
    <Layout description="Cardano Developer Portal - Build the future on Cardano">
      <Hero />
      <main>
        <DevSkillsBand />
        <StartHereSection />
        <TracksStrip />
        <OtherPathsSection />
        <DeveloperSection />
        <PracticeSection />
        <CTASection />
        <OfficeHoursSection />
      </main>
      <OpenStickyButton />
    </Layout>
  );
}

export default Home;
