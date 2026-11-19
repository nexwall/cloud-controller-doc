import type { ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useBaseUrl from '@docusaurus/useBaseUrl'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { translate } from '@docusaurus/Translate'
import styles from './index.module.css'

const t = (id: string, message: string) => translate({ id, message })

const cards = [
  {
    "key": "start",
    "to": "/docs/getting-started/overview",
    "title": "Getting started",
    "text": "What the Cloud Controller is and how the interface is organized."
  },
  {
    "key": "firewalls",
    "to": "/docs/firewalls/adding-a-firewall",
    "title": "Firewalls",
    "text": "Add a firewall, open it, update it and use the remote terminal."
  },
  {
    "key": "groups",
    "to": "/docs/groups/firewall-groups",
    "title": "Groups",
    "text": "Organize firewalls in groups and control who can manage them."
  },
  {
    "key": "reports",
    "to": "/docs/reports/executive-reports",
    "title": "Reports",
    "text": "Executive reports for one firewall or a whole group, saved and ready to download."
  },
  {
    "key": "admin",
    "to": "/docs/administration/users",
    "title": "Administration",
    "text": "Controller users, your account, password, 2FA and SSH key."
  },
  {
    "key": "help",
    "to": "/docs/help/troubleshooting",
    "title": "Help",
    "text": "Fix the most common problems."
  }
]

const slides = [
  {
    "key": "units",
    "caption": "Every firewall, with its status, in one list"
  },
  {
    "key": "add-firewall",
    "caption": "Add a firewall with a join code"
  },
  {
    "key": "terminal",
    "caption": "Remote terminal without sharing passwords"
  },
  {
    "key": "groups",
    "caption": "Groups to organize your customers"
  },
  {
    "key": "reports",
    "caption": "Executive reports for the whole fleet"
  }
]

function HeroSlider(): ReactNode {
  const { i18n } = useDocusaurusContext()
  const base = useBaseUrl('/img/screenshots')
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [gone, setGone] = useState<Record<string, boolean>>({})
  const [fallback, setFallback] = useState<Record<string, boolean>>({})
  const reduced = useRef(false)
  const shown = slides.filter((s) => !gone[s.key])
  useEffect(() => {
    reduced.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])
  useEffect(() => {
    if (paused || reduced.current || shown.length < 2) return
    const id = window.setInterval(() => setIndex((c) => (c + 1) % shown.length), 5000)
    return () => window.clearInterval(id)
  }, [paused, shown.length])
  if (shown.length === 0) return null
  const goTo = (n: number) => setIndex(((n % shown.length) + shown.length) % shown.length)
  const pos = Math.min(index, shown.length - 1)
  const cur = shown[pos]
  const folder = (s: { key: string }) => (fallback[s.key] || i18n.currentLocale === 'en' ? 'en' : i18n.currentLocale)
  return (
    <div className={styles.slider} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className={styles.sliderFrame}>
        {shown.map((s) => (
          <img
            key={s.key + folder(s)}
            className={styles.sliderImage}
            data-active={s.key === cur.key}
            src={`${base}/${folder(s)}/${s.key}.png`}
            alt={t(`home.slide.${s.key}`, s.caption)}
            aria-hidden={s.key === cur.key ? undefined : true}
            onError={() => (folder(s) === 'en' ? setGone((g) => ({ ...g, [s.key]: true })) : setFallback((f) => ({ ...f, [s.key]: true })))}
          />
        ))}
        <button type="button" className={`${styles.sliderArrow} ${styles.sliderArrowPrev}`} onClick={() => goTo(pos - 1)} aria-label={t('home.slide.prev', 'Previous screenshot')}>‹</button>
        <button type="button" className={`${styles.sliderArrow} ${styles.sliderArrowNext}`} onClick={() => goTo(pos + 1)} aria-label={t('home.slide.next', 'Next screenshot')}>›</button>
        <div className={styles.sliderCaption}>{t(`home.slide.${cur.key}`, cur.caption)}</div>
      </div>
      <div className={styles.sliderDots}>
        {shown.map((s, i) => (
          <button key={s.key} type="button" className={styles.sliderDot} data-active={s.key === cur.key} onClick={() => goTo(i)} aria-label={t('home.slide.goTo', 'Show screenshot {n}').replace('{n}', String(i + 1))} />
        ))}
      </div>
    </div>
  )
}

export default function Home(): ReactNode {
  return (
    <Layout title={t('home.title', "Nexwall Cloud Controller Documentation")} description={"Nexwall Cloud Controller Documentation"}>
      <header className={styles.hero}>
        <h1 className={styles.heroTitle}>{t('home.title', "Nexwall Cloud Controller Documentation")}</h1>
        <p className={styles.heroSubtitle}>{t('home.subtitle', "Register firewalls, open them remotely, group them, update them and produce reports, all from the Nexwall Cloud Controller.")}</p>
        <div className={styles.buttons}>
          <Link className="button button--lg button--secondary" to="/docs/getting-started/overview">
            {t('home.start', 'Get started')}
          </Link>
        </div>
      </header>
      <main className="container">
        <div className={styles.grid}>
          {cards.map((card) => (
            <Link key={card.key} className={styles.card} to={card.to}>
              <h2 className={styles.cardTitle}>{t(`home.card.${card.key}.title`, card.title)}</h2>
              <p className={styles.cardText}>{t(`home.card.${card.key}.text`, card.text)}</p>
            </Link>
          ))}
        </div>
        <HeroSlider />
      </main>
    </Layout>
  )
}
