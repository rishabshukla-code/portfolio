import { useState, useEffect, useRef } from 'react'
import { personal, about, experiences, projects, skills, categoryColors } from './data'

// ─── Scroll-animation hook ────────────────────────────────────────────────────
function useFadeIn() {
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) } }) },
      { threshold: 0.1 }
    )
    // Observe direct element OR all .fade-in children
    const targets = ref.current.querySelectorAll('.fade-in')
    if (targets.length) targets.forEach(t => observer.observe(t))
    else observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return ref
}

// ─── SVG Icons ───────────────────────────────────────────────────────────────
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
)

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)

// ─── NAVBAR ──────────────────────────────────────────────────────────────────
function Navbar({ onToggleDark, isDark }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('hero')

  const navItems = [
    { id: 'about',      label: 'About'      },
    { id: 'experience', label: 'Experience' },
    { id: 'projects',   label: 'Projects'   },
    { id: 'skills',     label: 'Skills'     },
    { id: 'contact',    label: 'Contact'    },
  ]

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sectionEls = document.querySelectorAll('section[id]')
      let cur = 'hero'
      sectionEls.forEach(s => {
        if (window.scrollY >= s.offsetTop - 90) cur = s.id
      })
      setActive(cur)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <>
      <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          <a href="#hero" className="nav-logo">RS</a>
          <nav className="nav-links">
            {navItems.map(n => (
              <a key={n.id} href={`#${n.id}`} className={active === n.id ? 'active' : ''}>{n.label}</a>
            ))}
          </nav>
          <button className='theme-toggle' onClick={onToggleDark} aria-label='Toggle dark mode'>
            {isDark
              ? <svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><circle cx='12' cy='12' r='5'/><line x1='12' y1='1' x2='12' y2='3'/><line x1='12' y1='21' x2='12' y2='23'/><line x1='4.22' y1='4.22' x2='5.64' y2='5.64'/><line x1='18.36' y1='18.36' x2='19.78' y2='19.78'/><line x1='1' y1='12' x2='3' y2='12'/><line x1='21' y1='12' x2='23' y2='12'/><line x1='4.22' y1='19.78' x2='5.64' y2='18.36'/><line x1='18.36' y1='5.64' x2='19.78' y2='4.22'/></svg>
              : <svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'/></svg>
            }
          </button>
          <button className={`hamburger${menuOpen ? ' open' : ''}`} onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
            <span className="hamburger-bar" />
            <span className="hamburger-bar" />
            <span className="hamburger-bar" />
          </button>
        </div>
      </header>
      <nav className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {navItems.map(n => (
          <a key={n.id} href={`#${n.id}`} className={active === n.id ? 'active' : ''} onClick={close}>{n.label}</a>
        ))}
      </nav>
    </>
  )
}

// ─── STATS ───────────────────────────────────────────────────────────────────
function Stats() {
  const ref = useRef(null)
  const started = useRef(false)
  const statsData = [
    { end: 2,  suffix: '+', label: 'Years of Experience'   },
    { end: 6,  suffix: '+', label: 'Projects Built'        },
    { end: 80, suffix: '+', label: 'Tests Written'         },
    { end: 90, suffix: '%', label: 'API Payload Reduction' },
  ]
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const spans = el.querySelectorAll('.stat-num')
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started.current) return
      started.current = true
      statsData.forEach((s, i) => {
        const span = spans[i]
        const decimal = !Number.isInteger(s.end)
        const steps = 50, dur = 1600
        let step = 0
        const t = setInterval(() => {
          step++
          const p = 1 - Math.pow(1 - step / steps, 3)
          span.textContent = decimal ? (s.end * p).toFixed(1) : Math.floor(s.end * p)
          if (step >= steps) { span.textContent = decimal ? s.end.toFixed(1) : s.end; clearInterval(t) }
        }, dur / steps)
      })
      obs.unobserve(el)
    }, { threshold: 0.4 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return (
    <section className='stats-section' ref={ref}>
      <div className='container'>
        <div className='stats-grid'>
          {statsData.map((s, i) => (
            <div key={i} className='stat-card'>
              <div className='stat-value'>
                <span className='stat-num'>0</span>
                <span className='stat-suffix'>{s.suffix}</span>
              </div>
              <div className='stat-label'>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── TIMELINE ────────────────────────────────────────────────────────────────
function Timeline() {
  const ref = useFadeIn()
  const items = [
    { year: '2018 – 2022',         title: "Bachelor's Degree",             org: 'Visvesvaraya Technological University · Belgaum, India', desc: 'B.E. in Electronics and Communication Engineering',                                                                type: 'edu'     },
    { year: 'Jul 2022 – Aug 2023', title: 'Software Development Engineer',  org: 'Netzwerk.AI · Gulbarga, India',                          desc: 'My first engineering role out of college. Decomposed high traffic workflows into scalable services and built out CI/CD and observability from scratch.',  type: 'work'    },
    { year: 'Sep 2023',            title: "Started Master's Degree",        org: 'Northeastern University · Boston, MA',                   desc: 'MS in Information Systems',                                                                                         type: 'edu'     },
    { year: 'Feb – May 2025',      title: 'Software Engineer Co-op',        org: 'IpserLab · Fort Worth, TX',                              desc: "Worked on a live production platform, building reusable React components and an internal diagnostics dashboard with Spring Boot. Returned to Northeastern to finish my degree after the co-op.",    type: 'work'    },
    { year: 'Dec 2025',            title: 'Graduated',                      org: 'Northeastern University · Boston, MA',                   desc: 'Completed my MS in Information Systems.',                                                                           type: 'edu'     },
    { year: 'Feb 2026 – Present',  title: 'Software Engineer',              org: 'IDLMeals · Fort Worth, TX',                              desc: 'Building and optimizing data intensive backend services. Still open to new opportunities in backend, full stack and AI engineering.',  type: 'current' },
  ]
  return (
    <section className='section section-alt' id='journey' ref={ref}>
      <div className='container'>
        <div className='section-header'>
          <p className='section-eyebrow fade-in'>My Story</p>
          <h2 className='section-title fade-in'>The Journey</h2>
        </div>
      </div>
      <div className='h-timeline fade-in stagger-1'>
        <div className='h-tl-outer'>
          <div className='h-tl-cards'>
            {items.map((item, i) => (
              <div key={i} className='h-tl-card-cell'>
                <div className='h-tl-card-box'>
                  <div className='h-tl-title'>{item.title}</div>
                  <div className='h-tl-org'>{item.org}</div>
                  <div className='h-tl-desc'>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className='h-tl-dots-row'>
            {items.map((item, i) => (
              <div key={i} className='h-tl-dot-cell'>
                <div className='h-tl-dot' data-type={item.type} />
              </div>
            ))}
          </div>
          <div className='h-tl-years'>
            {items.map((item, i) => (
              <div key={i} className='h-tl-year-cell'>
                <div className='h-tl-year'>{item.year}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── CTA BANNER ──────────────────────────────────────────────────────────────
function CTABanner() {
  return (
    <section className='cta-banner'>
      <div className='container'>
        <div className='cta-inner'>
          <div className='cta-text'>
            <h2 className='cta-heading'>Let's build something great together.</h2>
            <p className='cta-sub'>Currently a Software Engineer at IDLMeals and open to new full time roles.</p>
          </div>
          <div className='cta-buttons'>
            <a href={personal.resumeUrl} className='btn btn-white' target='_blank' rel='noreferrer' download="Rishab_Shukla_Resume.pdf">
              <DownloadIcon /> Download Resume
            </a>
            <a href={'mailto:' + personal.email} className='btn btn-outline-white'>
              <MailIcon /> Send an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── HOBBIES ─────────────────────────────────────────────────────────────────
function Hobbies() {
  const ref = useFadeIn()
  const hobbies = [
    { emoji: '🪂', name: 'Adventure Sports', desc: 'If it gets the heart racing, I am probably into it. Adventure sports are my way of stepping outside the comfort zone and feeling fully alive.' },
    { emoji: '🏋️', name: 'Gym & Fitness',    desc: 'I train consistently because it keeps me sharp. Discipline in the gym carries over into how I approach work and problem solving.' },
    { emoji: '🎵', name: 'Music',            desc: 'Music is how I reset. I listen across genres depending on the mood and it genuinely helps me think more clearly.' },
    { emoji: '🤝', name: 'Volunteering',     desc: 'I try to give back where I can, whether through community events or causes that actually make a difference to people.' },
    { emoji: '✈️', name: 'Travelling',       desc: 'Travelling shifts your perspective in ways nothing else does. New places, new food, new people. I try to go somewhere new whenever I get the chance.' },
    { emoji: '🍳', name: 'Cooking',          desc: 'I genuinely enjoy cooking and experimenting with different recipes. There is something satisfying about turning raw ingredients into something good.' },
  ]
  return (
    <section className='section' id='hobbies' ref={ref}>
      <div className='container'>
        <div className='section-header'>
          <p className='section-eyebrow fade-in'>Beyond the Code</p>
          <h2 className='section-title fade-in'>Hobbies & Interests</h2>
          <p className='section-subtitle fade-in'>What I do when I am not building software</p>
        </div>
        <div className='hobbies-grid'>
          {hobbies.map((h, i) => (
            <div key={i} className={`hobby-card fade-in stagger-${(i % 3) + 1}`}>
              <div className='hobby-img-wrap'>
                <div className='hobby-img-placeholder'><span>{h.emoji}</span></div>
              </div>
              <div className='hobby-info'>
                <h3 className='hobby-name'>{h.name}</h3>
                <p className='hobby-desc'>{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── HERO CANVAS ─────────────────────────────────────────────────────────────
function HeroCanvas() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const nodes_data = [
      { text: 'Python',          isCode: false, tip: 'Coder Buddy · RAG Chatbot · Vector-Music' },
      { text: 'Java',            isCode: false, tip: 'IDLMeals · IpserLab · Netzwerk.AI' },
      { text: 'JavaScript',      isCode: false, tip: 'NU Haul · Feed Share' },
      { text: 'TypeScript',      isCode: false, tip: 'IDLMeals' },
      { text: 'React',           isCode: false, tip: 'IpserLab · NU Haul' },
      { text: 'Spring Boot',     isCode: false, tip: 'IDLMeals · IpserLab · Netzwerk.AI' },
      { text: 'Node.js',         isCode: false, tip: 'NU Haul' },
      { text: 'LangChain',       isCode: false, tip: 'RAG Chatbot' },
      { text: 'LangGraph',       isCode: false, tip: 'Coder Buddy' },
      { text: 'Docker',          isCode: false, tip: 'Netzwerk.AI · IpserLab' },
      { text: 'AWS',             isCode: false, tip: 'Netzwerk.AI · Feed Share' },
      { text: 'PostgreSQL',      isCode: false, tip: 'IDLMeals · IpserLab' },
      { text: 'MongoDB',         isCode: false, tip: 'NU Haul' },
      { text: 'Redis',           isCode: false, tip: 'IDLMeals' },
      { text: 'Kafka',           isCode: false, tip: 'Netzwerk.AI' },
      { text: 'SQS',             isCode: false, tip: 'Netzwerk.AI' },
      { text: 'Groq',            isCode: false, tip: 'Coder Buddy' },
      { text: 'RAG',             isCode: false, tip: 'RAG Chatbot · Coder Buddy' },
      { text: 'Hibernate',       isCode: false, tip: 'Netzwerk.AI · Feed Share' },
      { text: 'Express.js',      isCode: false, tip: 'NU Haul' },
      { text: 'MySQL',           isCode: false, tip: 'Netzwerk.AI · Feed Share' },
      { text: 'FAISS',           isCode: false, tip: 'RAG Chatbot' },
      { text: 'OpenAI API',      isCode: false, tip: 'RAG Chatbot' },
      { text: 'Prometheus',      isCode: false, tip: 'Netzwerk.AI' },
      { text: 'Grafana',         isCode: false, tip: 'Netzwerk.AI' },
      { text: 'JUnit',           isCode: false, tip: 'IDLMeals' },
      { text: 'Mockito',         isCode: false, tip: 'IDLMeals' },
      { text: 'GitHub Actions',  isCode: false, tip: 'Netzwerk.AI' },
      { text: 'Git',             isCode: false, tip: 'All Projects' },
      { text: 'Nginx',           isCode: false, tip: 'Feed Share' },
      { text: 'SQL',             isCode: false, tip: 'IDLMeals · Netzwerk.AI' },
      { text: 'CI/CD',           isCode: false, tip: 'Netzwerk.AI · Feed Share' },
      { text: 'Embeddings',      isCode: false, tip: 'RAG Chatbot' },
      { text: '@RestController', isCode: true,  tip: 'IDLMeals · IpserLab · Netzwerk.AI' },
      { text: 'useEffect()',     isCode: true,  tip: 'IpserLab · NU Haul' },
      { text: 'model.invoke()',  isCode: true,  tip: 'Coder Buddy' },
      { text: 'async/await',     isCode: true,  tip: 'NU Haul · Feed Share' },
      { text: '@Entity',         isCode: true,  tip: 'IDLMeals · Feed Share' },
      { text: 'useState()',      isCode: true,  tip: 'IpserLab · NU Haul' },
      { text: 'docker run',      isCode: true,  tip: 'Netzwerk.AI · IpserLab' },
      { text: 'git commit',      isCode: true,  tip: 'All Projects' },
      { text: 'SELECT * FROM',   isCode: true,  tip: 'IDLMeals · Netzwerk.AI' },
      { text: '@Autowired',      isCode: true,  tip: 'IDLMeals · Netzwerk.AI' },
      { text: '@Query',          isCode: true,  tip: 'IDLMeals' },
      { text: 'npm install',     isCode: true,  tip: 'NU Haul · Vector-Music' },
      { text: 'pip install',     isCode: true,  tip: 'RAG Chatbot · Vector-Music' },
      { text: '.map()',          isCode: true,  tip: 'IpserLab · NU Haul' },
      { text: 'fetch()',         isCode: true,  tip: 'Feed Share · NU Haul' },
      { text: '@PostMapping',    isCode: true,  tip: 'IDLMeals · Netzwerk.AI' },
      { text: 'router.get()',    isCode: true,  tip: 'NU Haul' },
    ]

    let nodes = []
    let animId
    let mouseX = -1, mouseY = -1, hoveredIdx = -1

    const resize = () => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      nodes = nodes_data.map(n => ({
        ...n,
        x:  Math.random() * canvas.width,
        y:  Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size: n.isCode ? 11 : 12,
        w: 0,
      }))
    }

    const onMouseMove = e => {
      const r = canvas.getBoundingClientRect()
      mouseX = e.clientX - r.left
      mouseY = e.clientY - r.top
    }
    const onMouseLeave = () => { mouseX = -1; mouseY = -1; hoveredIdx = -1; canvas.style.cursor = 'default' }

    const drawTooltip = n => {
      const dm = document.documentElement.getAttribute('data-theme') === 'dark'
      const px = 12, py = 8, lh = 16
      const label = 'Used in:'
      ctx.font = '700 11px Inter,system-ui,sans-serif'
      const lw = ctx.measureText(label).width
      ctx.font = '400 11px Inter,system-ui,sans-serif'
      const vw = ctx.measureText(n.tip).width
      const bw = Math.max(lw, vw) + px * 2
      const bh = lh * 2 + py * 2
      let tx = n.x + 14, ty = n.y - bh - 12
      if (tx + bw > canvas.width - 8) tx = n.x - bw - 8
      if (ty < 8) ty = n.y + 18

      ctx.shadowColor = 'rgba(0,0,0,0.1)'; ctx.shadowBlur = 14; ctx.shadowOffsetY = 4
      ctx.beginPath()
      const r = 8
      ctx.moveTo(tx+r,ty); ctx.lineTo(tx+bw-r,ty); ctx.quadraticCurveTo(tx+bw,ty,tx+bw,ty+r)
      ctx.lineTo(tx+bw,ty+bh-r); ctx.quadraticCurveTo(tx+bw,ty+bh,tx+bw-r,ty+bh)
      ctx.lineTo(tx+r,ty+bh); ctx.quadraticCurveTo(tx,ty+bh,tx,ty+bh-r)
      ctx.lineTo(tx,ty+r); ctx.quadraticCurveTo(tx,ty,tx+r,ty); ctx.closePath()
      ctx.fillStyle = dm ? 'rgba(30,41,59,0.97)' : 'rgba(255,255,255,0.97)'; ctx.fill()
      ctx.shadowBlur = 0; ctx.shadowOffsetY = 0
      ctx.strokeStyle = n.isCode ? 'rgba(109,40,217,0.25)' : 'rgba(37,99,235,0.25)'
      ctx.lineWidth = 1; ctx.stroke()

      ctx.font = '700 11px Inter,system-ui,sans-serif'
      ctx.fillStyle = n.isCode ? 'rgba(109,40,217,0.85)' : 'rgba(37,99,235,0.85)'
      ctx.fillText(label, tx+px, ty+py+11)
      ctx.font = '400 11px Inter,system-ui,sans-serif'
      ctx.fillStyle = dm ? 'rgba(203,213,225,0.85)' : 'rgba(15,23,42,0.72)'
      ctx.fillText(n.tip, tx+px, ty+py+11+lh)
    }

    const draw = () => {
      const dm = document.documentElement.getAttribute('data-theme') === 'dark'
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy
        if (n.x < 20 || n.x > canvas.width  - 20) n.vx *= -1
        if (n.y < 10 || n.y > canvas.height - 10) n.vy *= -1
      })

      hoveredIdx = -1
      if (mouseX >= 0) {
        nodes.forEach((n, i) => {
          ctx.font = '500 ' + n.size + 'px Inter,system-ui,sans-serif'
          n.w = ctx.measureText(n.text).width
          if (mouseX >= n.x && mouseX <= n.x + n.w + 6 && mouseY >= n.y - n.size && mouseY <= n.y + 5)
            hoveredIdx = i
        })
      }
      canvas.style.cursor = hoveredIdx >= 0 ? 'pointer' : 'default'

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx*dx + dy*dy)
          if (dist < 200) {
            const lit = i === hoveredIdx || j === hoveredIdx
            ctx.beginPath()
            ctx.strokeStyle = (dm ? 'rgba(96,165,250,' : 'rgba(37,99,235,') + ((lit ? 0.65 : 0.18) * (1 - dist/200)) + ')'
            ctx.lineWidth = lit ? 1.5 : 1
            ctx.moveTo(nodes[i].x, nodes[i].y); ctx.lineTo(nodes[j].x, nodes[j].y); ctx.stroke()
          }
        }
      }

      nodes.forEach((n, i) => {
        const hov = i === hoveredIdx
        if (hov) { ctx.shadowColor = n.isCode ? 'rgba(109,40,217,0.45)' : 'rgba(37,99,235,0.45)'; ctx.shadowBlur = 14 }
        ctx.beginPath()
        ctx.arc(n.x, n.y, hov ? 3.5 : 2.5, 0, Math.PI*2)
        ctx.fillStyle = dm ? (n.isCode ? 'rgba(167,139,250,' : 'rgba(96,165,250,') + (hov ? '0.95)' : '0.65)') : (n.isCode ? 'rgba(109,40,217,' : 'rgba(37,99,235,') + (hov ? '0.9)' : '0.5)')
        ctx.fill()
        ctx.shadowBlur = 0
        ctx.font = (hov ? '700 ' : '500 ') + (hov ? n.size+1 : n.size) + 'px Inter,system-ui,sans-serif'
        ctx.fillStyle = dm ? (n.isCode ? (hov ? 'rgba(167,139,250,0.95)' : 'rgba(167,139,250,0.55)') : (hov ? 'rgba(96,165,250,0.95)' : 'rgba(96,165,250,0.5)')) : (n.isCode ? (hov ? 'rgba(109,40,217,0.92)' : 'rgba(109,40,217,0.42)') : (hov ? 'rgba(37,99,235,0.92)' : 'rgba(37,99,235,0.38)'))
        ctx.fillText(n.text, n.x+6, n.y+4)
      })

      if (hoveredIdx >= 0) drawTooltip(nodes[hoveredIdx])
      animId = requestAnimationFrame(draw)
    }

    resize(); draw()
    canvas.addEventListener('mousemove', onMouseMove)
    canvas.addEventListener('mouseleave', onMouseLeave)
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(animId)
      canvas.removeEventListener('mousemove', onMouseMove)
      canvas.removeEventListener('mouseleave', onMouseLeave)
      window.removeEventListener('resize', resize)
    }
  }, [])
  return <canvas ref={canvasRef} className='hero-canvas' />
}

// ─── HERO ────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="hero" id="hero">
      <HeroCanvas />
      <div className="hero-content">
        <p className="hero-greeting">Hi there, I'm</p>
        <h1 className='hero-name'>
          <span className='accent'>{personal.name}</span>
        </h1>
        <p className="hero-title">
          <strong>{personal.title}</strong> &nbsp;·&nbsp; {personal.tagline}
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary btn-lg">View Projects</a>
          <a href="#contact"  className="btn btn-outline btn-lg">Get In Touch</a>
        </div>
      </div>
      <div className="hero-scroll">
        <span>scroll</span>
        <div className="hero-scroll-arrow" />
      </div>
    </section>
  )
}

// ─── ABOUT ───────────────────────────────────────────────────────────────────
function About() {
  const ref = useFadeIn()
  const { bio, educationList } = about
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow fade-in">About Me</p>
          <h2 className="section-title fade-in">Who I Am</h2>
        </div>
        <div className="about-grid">
          <div className="about-avatar-wrap fade-in">
            <div className="avatar">
              <img src='/Profile_Photo.jpg' alt='Rishab Shukla' />
            </div>
            <div className='profile-id-card'>
              <div className='pic-header'>
                <span className='pic-header-dot' />
                <span className='pic-header-dot' />
                <span className='pic-header-dot' />
                <span className='pic-header-title'>Profile</span>
              </div>
              <div className='pic-row'>
                <div className='pic-icon-wrap'>🎓</div>
                <div className='pic-content'>
                  <div className='pic-label'>Education</div>
                  <div className='pic-value'>MS Information Systems</div>
                  <div className='pic-sub'>Northeastern University, Boston</div>
                </div>
              </div>
              <div className='pic-row'>
                <div className='pic-icon-wrap'>💼</div>
                <div className='pic-content'>
                  <div className='pic-label'>Career Focus</div>
                  <div className='pic-value'>Backend · Full-Stack · AI</div>
                </div>
              </div>
              <div className='pic-row'>
                <div className='pic-icon-wrap'>📍</div>
                <div className='pic-content'>
                  <div className='pic-label'>Location</div>
                  <div className='pic-value'>Boston, MA</div>
                  <div className='pic-sub'>Open to Relocation</div>
                </div>
              </div>
              <div className='pic-row'>
                <div className='pic-icon-wrap'>✅</div>
                <div className='pic-content'>
                  <div className='pic-label'>Status</div>
                  <div className='pic-value pic-status'>Open to Work</div>
                  <div className='pic-sub'>Currently at IDLMeals</div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-bio fade-in stagger-1">
            {bio.map((p, i) => <p key={i}>{p}</p>)}

            {educationList.map((edu, i) => (
              <div className='edu-card' key={i} style={i > 0 ? { marginTop: '0.75rem' } : {}}>
                <div className='edu-card-top'>
                  <div>
                    <div className='edu-degree'>{edu.degree}</div>
                    <div className='edu-school'>{edu.school}</div>
                    <div className='edu-meta'>{edu.location} &nbsp;·&nbsp; {edu.period}</div>
                  </div>
                  {edu.gpa && <span className='edu-gpa'>GPA {edu.gpa}</span>}
                </div>
              </div>
            ))}

            <a href={personal.resumeUrl} className="btn btn-outline" target="_blank" rel="noreferrer" download="Rishab_Shukla_Resume.pdf">
              <DownloadIcon /> Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── EXPERIENCE ──────────────────────────────────────────────────────────────
function Experience() {
  const ref = useFadeIn()
  return (
    <section className="section section-alt" id="experience" ref={ref}>
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow fade-in">Work</p>
          <h2 className="section-title fade-in">Experience</h2>
          <p className="section-subtitle fade-in">Where I've built real things</p>
        </div>
        <div className="exp-list">
          {experiences.map((exp, i) => (
            <div key={i} className={`exp-card fade-in stagger-${i + 1}`}>
              <div className="exp-header">
                <div className="exp-title-block">
                  <div className="exp-role">{exp.title}</div>
                  <div className="exp-company">{exp.company} · <span style={{color: 'var(--text-muted)', fontWeight: 400}}>{exp.location}</span></div>
                </div>
                <div className="exp-meta">
                  <span className="exp-period">{exp.period}</span>
                  <span className="exp-type">{exp.type}</span>
                </div>
              </div>
              <ul className="exp-bullets">
                {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
              <div className="exp-tech">
                {exp.tech.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── PROJECTS ────────────────────────────────────────────────────────────────
function Projects() {
  const ref = useFadeIn()
  return (
    <section className="section" id="projects" ref={ref}>
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow fade-in">Work I've Done</p>
          <h2 className="section-title fade-in">Projects</h2>
          <p className="section-subtitle fade-in">A mix of AI systems, full stack apps, and more</p>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => {
            const colors = categoryColors[p.category] || categoryColors['Full Stack']
            const isAI = p.category === 'AI'
            return (
              <div key={i} className={`project-card fade-in stagger-${(i % 3) + 1}${p.featured ? ' featured' : ''}`}>
                <div className="project-top">
                  <span className="project-emoji">{p.emoji}</span>
                  <div className="project-links">
                    {p.github && (
                      <a href={p.github} className="project-link-btn" aria-label="GitHub" target="_blank" rel="noreferrer">
                        <GithubIcon />
                      </a>
                    )}
                    {p.live && (
                      <a href={p.live} className="project-link-btn" aria-label="Live Demo" target="_blank" rel="noreferrer">
                        <ExternalIcon />
                      </a>
                    )}
                  </div>
                </div>
                <div>
                  <span
                    className="project-category-badge"
                    style={{ background: colors.bg, color: colors.text, border: `1px solid ${colors.border}` }}
                  >
                    {p.category}
                  </span>
                </div>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.description}</p>
                <div className="project-tags">
                  {p.tech.map(t => (
                    <span key={t} className={`tag${isAI ? ' tag-purple' : ''}`}>{t}</span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── SKILLS ──────────────────────────────────────────────────────────────────
function Skills() {
  const ref = useFadeIn()
  return (
    <section className="section section-alt" id="skills" ref={ref}>
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow fade-in">Tech Stack</p>
          <h2 className="section-title fade-in">Skills</h2>
          <p className="section-subtitle fade-in">Technologies I work with professionally</p>
        </div>
        <div className="skills-grid fade-in stagger-1">
          {skills.map((group, i) => (
            <div key={i} className="skill-group">
              <div className={`skill-group-label${group.highlight ? ' ai-label' : ''}`}>
                {group.highlight && '✦ '}{group.label}
              </div>
              <div className="skill-chips">
                {group.items.map(item => (
                  <span key={item} className={`chip${group.highlight ? ' chip-ai' : ''}`}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── CONTACT ─────────────────────────────────────────────────────────────────
function Contact() {
  const ref = useFadeIn()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(() => localStorage.getItem('contacted') === 'true' ? 'done' : 'idle')

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/xvzvwvyb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
        localStorage.setItem('contacted', 'true')
        setTimeout(() => setStatus('done'), 4000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 4000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section className='section' id='contact' ref={ref}>
      <div className='container'>
        <div className='section-header'>
          <p className='section-eyebrow fade-in'>Say Hello</p>
          <h2 className='section-title fade-in'>Get In Touch</h2>
        </div>
        <div className='contact-layout fade-in'>
          <div className='contact-info'>
            <p className='contact-blurb'>
              I am currently a Software Engineer at IDLMeals and open to new full-time roles in backend, full-stack or AI focused engineering.
              Whether you have an opportunity, a project idea, or just want to connect, fill out the form or reach out directly.
            </p>
            <a href={'mailto:' + personal.email} className='contact-email-link'>
              <MailIcon /> {personal.email}
            </a>
            <div className='social-row'>
              <a href={personal.github}   className='social-btn' aria-label='GitHub'   target='_blank' rel='noreferrer'><GithubIcon /></a>
              <a href={personal.linkedin} className='social-btn' aria-label='LinkedIn' target='_blank' rel='noreferrer'><LinkedinIcon /></a>
            </div>
          </div>
          {status === 'done' ? (
            <div className='contact-done'>
              <div className='contact-done-icon'>✓</div>
              <h3 className='contact-done-title'>Message Received!</h3>
              <p className='contact-done-text'>Thanks for reaching out. If you would like to contact me again, you can email me directly at</p>
              <a href={'mailto:' + personal.email} className='contact-done-email'>{personal.email}</a>
            </div>
          ) : (
            <form className='contact-form' onSubmit={handleSubmit}>
              <div className='form-group'>
                <label htmlFor='cf-name'>Your Name</label>
                <input id='cf-name' name='name' type='text' placeholder='John Doe' value={form.name} onChange={handleChange} required />
              </div>
              <div className='form-group'>
                <label htmlFor='cf-email'>Your Email</label>
                <input id='cf-email' name='email' type='email' placeholder='john@company.com' value={form.email} onChange={handleChange} required />
              </div>
              <div className='form-group'>
                <label htmlFor='cf-msg'>Message</label>
                <textarea id='cf-msg' name='message' rows={5} placeholder={'Hi Rishab, I\u2019d love to connect about...'} value={form.message} onChange={handleChange} required />
              </div>
              <button type='submit' className='btn btn-primary btn-lg form-submit' disabled={status === 'sending'}>
                {status === 'sent'
                  ? '\u2713 Message sent!'
                  : status === 'error'
                  ? 'Something went wrong. Try again.'
                  : status === 'sending'
                  ? 'Sending...'
                  : <><MailIcon /> Send Message</>
                }
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="footer">
      <p>
        Designed &amp; Built by <a href={personal.github} target="_blank" rel="noreferrer">{personal.name}</a>
        &nbsp;·&nbsp; 2026
      </p>
    </footer>
  )
}

// ─── APP ROOT ────────────────────────────────────────────────────────────────
export default function App() {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark')
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])
  return (
    <>
      <Navbar onToggleDark={() => setDark(d => !d)} isDark={dark} />
      <main>
        <Hero />
        <Stats />
        <About />
        <Timeline />
        <Experience />
        <Projects />
        <Skills />
        <Hobbies />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
