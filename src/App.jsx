
import { useEffect, useState } from 'react'
import WeatherPage from './WeatherPage'
import {
  ArrowLeft, ArrowRight, Camera, Check, CheckCircle2, Clipboard,
  FileText, Home, Info, Leaf, MapPin, Mic, Phone, PhoneCall,
  Sprout, UserRound, Volume2, Waves,
} from 'lucide-react'

const copy = {
  mr: {
    language: 'मराठी',
    other: 'English',
    tagline: 'शेतकऱ्यांसाठी साथ',
    listen: 'ऐका',
    profile: 'मनोज पाटील',
    nav: ['होम', 'माझी पिके', 'माझी माहिती', 'माझे रिपोर्ट'],
    more: 'अधिक',
    footer: <>शेतकऱ्यांसाठी सुरक्षित आणि सोपी<br />माहिती</>,
    pages: {
      crops: 'माझी पिके',
      cropsHint: 'तुमच्या शेतातील पिकांची माहिती',
      profile: 'माझी माहिती',
      profileHint: 'तुमची जतन केलेली वैयक्तिक माहिती',
      reports: 'माझे रिपोर्ट',
      reportsHint: 'तुमचे नुकसान रिपोर्ट येथे दिसतील.',
      empty: 'अजून कोणताही रिपोर्ट नाही.',
    },
    greeting: 'नमस्कार, शेतकरी',
    intro: 'तुमची पिकांची माहिती तयार आहे.',
    field: 'हिरवे शेत, डोंगर आणि घर',
    damage: 'नुकसान झाले?',
    damageHint: 'तात्काळ नोंदवा आणि पुढची पावले घ्या',
    weather: 'हवामान आणि पीक संरक्षण',
    weatherHint: 'हवामान तपासा आणि नुकसानाचे पुरावे जतन करा',
    profileForm: {
      name: 'नाव', phone: 'मोबाईल नंबर', company: 'विमा कंपनी',
      age: 'वय', village: 'गाव', plot: 'शेताचा प्लॉट नंबर',
      state: 'राज्य', policy: 'पॉलिसी नंबर', district: 'जिल्हा',
      season: 'हंगाम / पिकाचे वय', crop: 'पीक', choose: 'निवडा',
      note: 'प्रत्येक पिकासाठी वेगळा प्लॉट नंबर जोडू शकता.',
      save: 'जतन करा', saved: 'माहिती जतन झाली',
      phoneInvalid: 'कृपया १० अंकी मोबाईल नंबर भरा.',
      ageInvalid: 'वय १८ ते १०० दरम्यान असावे.',
    },
    flow: {
      steps: ['घटना', 'पुरावे', 'रिपोर्ट'],
      when: 'नुकसान कधी झाले?',
      whenHint: 'घटनेची माहिती भरा आणि ७२ तासांचा कालावधी सुरू करा.',
      date: 'नुकसानाची तारीख', time: 'वेळ',
      clock: 'तुमचे ७२ तास सुरू झाले',
      clockHint: 'या कालावधीत नुकसानाची माहिती रिपोर्ट करणे आवश्यक आहे.',
      location: 'शेताचे स्थान (GPS)', gps: 'GPS मिळाले',
      crop: 'पीक', collect: 'पुरावे गोळा करा',
      evidence: 'पुरावे तयार करा',
      evidenceHint: 'जितका मजबूत पुरावा तितका दावा अधिक मजबूत.',
      strength: 'पुराव्याची ताकद',
      gpsHint: 'प्रत्येक फोटोसाठी उपलब्ध असल्यास GPS आणि वेळ नोंदवा.',
      tasks: [
        'संपूर्ण शेताचा फोटो', 'नुकसान झालेल्या पिकाचा फोटो',
        'ओळखता येईल अशी जागा/लँडमार्क सहित फोटो', 'नुकसानाची छोटी नोंद',
      ],
      hints: [
        'शेताचा दूरचा/वाईड फोटो घ्या.',
        'नुकसान स्पष्ट दिसेल असा जवळचा फोटो घ्या.',
        'ओळखता येणारी जागा दाखवा.',
        'काय नुकसान झाले ते थोडक्यात नोंदवा.',
      ],
      ready: 'सर्व पुरावे तयार आहेत!',
      report: 'आता रिपोर्ट करा',
      reportHint: 'तुमच्या पुराव्यांसह ७२ तासांच्या आत रिपोर्ट करा.',
      call: '१४४४७ वर कॉल करा',
      callHint: 'आत्ताच कॉल करा आणि तक्रार नोंदवा.',
      script: 'तुम्हाला काय सांगायचे आहे?',
      name: 'नाव', village: 'गाव', policy: 'पॉलिसी नंबर',
      speak: 'ऐका', copy: 'कॉपी करा',
      escalation: 'पुढील पायऱ्या', current: 'सध्याची पायरी',
      ladder: [
        '०–२४ तास → १४४४७ वर कॉल करा',
        '२४–४८ तास → पुढील मदत केंद्र',
        '४८–७२ तास → बँक / कृषी कार्यालय',
      ],
      ticketTitle: 'तिकीट नंबर सेव्ह करा',
      ticketHint: 'कॉलनंतर मिळालेला तिकीट नंबर येथे भरा.',
      ticket: 'तिकीट नंबर', save: 'तिकीट सेव्ह करा',
      saved: 'रिपोर्ट आणि तिकीट सेव्ह झाले',
      invalidDate: 'कृपया नुकसानाची तारीख निवडा.',
      invalidEvidence: 'पुढे जाण्यासाठी सर्व पुरावे पूर्ण करा.',
      invalidTicket: 'कृपया तिकीट नंबर भरा.',
    },
  },
  en: {
    language: 'English',
    other: 'मराठी',
    tagline: 'Support for farmers',
    listen: 'Listen',
    profile: 'Farmer profile',
    nav: ['Home', 'My crops', 'My information', 'My reports'],
    more: 'More',
    footer: <>Safe and simple<br />information for farmers</>,
    pages: {
      crops: 'My crops',
      cropsHint: 'Information about the crops on your farm',
      profile: 'My information',
      profileHint: 'Your saved personal information',
      reports: 'My reports',
      reportsHint: 'Your damage reports will appear here.',
      empty: 'No reports yet.',
    },
    greeting: 'Hello, farmer',
    intro: 'Your crop information is ready.',
    field: 'Green fields, hills, and a farmhouse',
    damage: 'Crop damage?',
    damageHint: 'Report it now and take the next steps',
    weather: 'Weather & Crop Protection',
    weatherHint: 'Check weather and keep crop damage evidence',
    profileForm: {
      name: 'Name', phone: 'Mobile number',
      company: 'Insurance company', age: 'Age',
      village: 'Village', plot: 'Farm plot number',
      state: 'State', policy: 'Policy number', district: 'District',
      season: 'Season / crop age', crop: 'Crop', choose: 'Choose',
      note: 'Add a separate plot number for each crop if needed.',
      save: 'Save information', saved: 'Information saved',
      phoneInvalid: 'Enter a valid 10-digit mobile number.',
      ageInvalid: 'Age must be between 18 and 100.',
    },
    flow: {
      steps: ['Incident', 'Evidence', 'Report'],
      when: 'When did the damage happen?',
      whenHint: 'Add incident details and start the 72-hour window.',
      date: 'Damage date', time: 'Time',
      clock: 'Your 72 hours have started',
      clockHint: 'You must report the damage within this window.',
      location: 'Farm location (GPS)', gps: 'GPS found',
      crop: 'Crop', collect: 'Collect evidence',
      evidence: 'Build your evidence',
      evidenceHint: 'Stronger evidence makes a stronger claim.',
      strength: 'Evidence strength',
      gpsHint: 'Record GPS and capture time when available.',
      tasks: [
        'Full field photo', 'Damaged crop close-up',
        'Recognizable landmark photo', 'Short damage note',
      ],
      hints: [
        'Take a wide photo of your field.',
        'Take a close-up where damage is clear.',
        'Include a recognizable place.',
        'Briefly describe what was damaged.',
      ],
      ready: 'All evidence is ready!',
      report: 'Report now',
      reportHint: 'Report your damage with evidence within 72 hours.',
      call: 'Call 14447',
      callHint: 'Call now to register your complaint.',
      script: 'What should you say?',
      name: 'Name', village: 'Village', policy: 'Policy number',
      speak: 'Listen', copy: 'Copy',
      escalation: 'Next steps', current: 'CURRENT STEP',
      ladder: [
        '0–24 hours → Call 14447',
        '24–48 hours → Next support center',
        '48–72 hours → Bank / Agriculture Office',
      ],
      ticketTitle: 'Save your ticket number',
      ticketHint: 'Enter the ticket number you receive after calling.',
      ticket: 'Ticket number', save: 'Save ticket',
      saved: 'Report and ticket saved',
      invalidDate: 'Please select the damage date.',
      invalidEvidence: 'Complete all evidence items before continuing.',
      invalidTicket: 'Please enter a ticket number.',
    },
  },
}

const navIcons = [Home, Camera, UserRound, FileText]
const FLOW_TIME = 72 * 60 * 60 * 1000

function timerValue(startedAt, now) {
  const left = Math.max(0, FLOW_TIME - (now - startedAt))
  const h = Math.floor(left / 3600000)
  const m = Math.floor((left % 3600000) / 60000)
  const s = Math.floor((left % 60000) / 1000)
  return `${String(h).padStart(2, '0')} : ${String(m).padStart(2, '0')} : ${String(s).padStart(2, '0')}`
}

function App() {
  const [language, setLanguage] = useState('mr')
  const [view, setView] = useState('dashboard')
  const [weather, setWeather] = useState(null)
  const [weatherError, setWeatherError] = useState(false)
  const [stage, setStage] = useState(1)
  const [startedAt, setStartedAt] = useState(0)
  const [now, setNow] = useState(Date.now())
  const [damageDate, setDamageDate] = useState('')
  const [evidence, setEvidence] = useState([false, false, false, false])
  const [evidenceDetails, setEvidenceDetails] = useState([null, null, null, null])
  const [ticket, setTicket] = useState('')
  const [message, setMessage] = useState('')
  const [cameraTask, setCameraTask] = useState(null)
  const [noteTask, setNoteTask] = useState(false)
  const t = copy[language]

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  useEffect(() => {
    let cancelled = false

    async function fetchWeather() {
      try {
        const response = await fetch(
          'http://localhost:5001/api/weather?latitude=18.5204&longitude=73.8567'
        )
        if (!response.ok) throw new Error('Weather request failed')
        const data = await response.json()
        if (!cancelled) {
          setWeather(data)
          setWeatherError(false)
        }
      } catch (error) {
        console.error('Weather fetch failed:', error)
        if (!cancelled) setWeatherError(true)
      }
    }

    fetchWeather()
    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    if (!startedAt) return undefined
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [startedAt])

  function startFlow() {
    const start = Date.now()
    setStartedAt(start)
    setNow(start)
    setDamageDate(new Date(start).toISOString().slice(0, 10))
    setEvidence([false, false, false, false])
    setEvidenceDetails([null, null, null, null])
    setTicket('')
    setMessage('')
    setStage(1)
    setView('flow')
  }

  function openSidebarPage(index) {
    setView(
      index === 0 ? 'dashboard'
        : index === 1 ? 'crops'
          : index === 2 ? 'profile' : 'reports'
    )
  }

  if (view === 'weather') {
    return <WeatherPage onBack={() => setView('dashboard')} />
  }

  return (
    <main className="app-shell">
      <header className="topbar">
        <div className="brand-lockup">
          <div className="brand-mark"><Leaf size={28} /></div>
          <div>
            <div className="brand-name">PeekKavach</div>
            <div className="brand-tagline">{t.tagline}</div>
          </div>
        </div>

        <div className="header-actions">
          <button
            className="language-toggle"
            onClick={() => setLanguage(language === 'mr' ? 'en' : 'mr')}
          >
            <strong>{t.language}</strong><span>|</span><span>{t.other}</span>
          </button>
          <button className="icon-button" aria-label={t.listen}>
            <Volume2 size={19} />
          </button>
          <button className="profile-button" onClick={() => setView('profile')}>
            <span className="profile-avatar"><UserRound size={18} /></span>
            <span>{t.profile}</span>
          </button>
        </div>
      </header>

      <div className="workspace">
        <aside className="sidebar">
          <nav>
            {t.nav.map((label, index) => {
              const Icon = navIcons[index]
              const active =
                (index === 0 && view === 'dashboard') ||
                (index === 1 && view === 'crops') ||
                (index === 2 && view === 'profile') ||
                (index === 3 && view === 'reports')

              return (
                <button
                  className={`nav-item ${active ? 'active' : ''}`}
                  key={label}
                  onClick={() => openSidebarPage(index)}
                >
                  <Icon size={20} />
                  <span>{label}</span>
                </button>
              )
            })}
            <button className="nav-item">
              <span className="more-dots">•••</span><span>{t.more}</span>
            </button>
          </nav>
          <div className="sidebar-footer">
            <Leaf size={25} /><span>{t.footer}</span>
          </div>
        </aside>

        <section className={view === 'flow' ? 'flow-content' : 'dashboard-content'}>
          {view === 'flow' ? (
            <DamageFlow
              t={t.flow}
              stage={stage}
              setStage={setStage}
              startedAt={startedAt}
              now={now}
              date={damageDate}
              setDate={setDamageDate}
              evidence={evidence}
              setEvidence={setEvidence}
              evidenceDetails={evidenceDetails}
              ticket={ticket}
              setTicket={setTicket}
              message={message}
              setMessage={setMessage}
              onOpenCamera={(index) =>
                index === 3 ? setNoteTask(true) : setCameraTask(index)
              }
            />
          ) : view === 'crops' ? (
            <SidebarPage title={t.pages.crops} hint={t.pages.cropsHint} icon={Sprout}>
              <div className="page-summary">
                <Sprout size={30} />
                <strong>{language === 'mr' ? 'कापूस' : 'Cotton'}</strong>
                <span>{language === 'mr' ? 'खरीप हंगाम' : 'Kharif season'}</span>
              </div>
            </SidebarPage>
          ) : view === 'profile' ? (
            <ProfilePage t={t} />
          ) : view === 'reports' ? (
            <SidebarPage title={t.pages.reports} hint={t.pages.reportsHint} icon={FileText}>
              <div className="empty-page"><FileText size={38} /><span>{t.pages.empty}</span></div>
            </SidebarPage>
          ) : (
            <Dashboard
              t={t}
              onDamage={startFlow}
              weather={weather}
              weatherError={weatherError}
              onWeather={() => setView('weather')}
            />
          )}
        </section>
      </div>

      {cameraTask !== null && (
        <CameraModal
          taskIndex={cameraTask}
          language={language}
          onClose={() => setCameraTask(null)}
          onSaved={(detail) => {
            setEvidence((current) =>
              current.map((done, index) => index === cameraTask ? true : done)
            )
            setEvidenceDetails((current) =>
              current.map((item, index) => index === cameraTask ? detail : item)
            )
            setCameraTask(null)
          }}
        />
      )}

      {noteTask && (
        <NoteModal
          language={language}
          onClose={() => setNoteTask(false)}
          onSaved={() => {
            setEvidence((current) =>
              current.map((done, index) => index === 3 ? true : done)
            )
            setNoteTask(false)
          }}
        />
      )}
    </main>
  )
}

function ProfilePage({ t }) {
  const fields = t.profileForm
  const [form, setForm] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('peekkavach-profile')) || {
        name: '', phone: '', company: '', age: '', village: '',
        plot: '', state: '', policy: '', district: '', season: '', crop: '',
      }
    } catch {
      return {
        name: '', phone: '', company: '', age: '', village: '',
        plot: '', state: '', policy: '', district: '', season: '', crop: '',
      }
    }
  })
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState('')

  function update(field, value) {
    setSaved(false)
    setForm((current) => ({ ...current, [field]: value }))
  }

  function save(event) {
    event.preventDefault()

    if (!/^\d{10}$/.test(form.phone)) {
      setError(fields.phoneInvalid)
      return
    }

    if (!/^\d+$/.test(form.age) || Number(form.age) < 18 || Number(form.age) > 100) {
      setError(fields.ageInvalid)
      return
    }

    try {
      localStorage.setItem('peekkavach-profile', JSON.stringify(form))
      setError('')
      setSaved(true)
    } catch {
      setError('Unable to save information in this browser.')
    }
  }

  return (
    <div className="profile-page">
      <div className="profile-page-heading">
        <div className="profile-heading-icon"><UserRound size={26} /></div>
        <div>
          <h1>{t.pages.profile}</h1>
          <p>{t.language === 'मराठी' ? 'तुमची माहिती एकदाच भरा आणि जतन करा.' : 'Add your details once and save them securely on this device.'}</p>
        </div>
      </div>

      <form className="profile-form" onSubmit={save}>
        <div className="profile-form-grid">
          <ProfileField label={fields.name} value={form.name} onChange={(v) => update('name', v)} required />
          <ProfileField label={fields.phone} value={form.phone} onChange={(v) => update('phone', v)} required type="tel" inputMode="numeric" maxLength={10} placeholder="9876543210" />
          <ProfileField label={fields.age} value={form.age} onChange={(v) => update('age', v)} required type="number" min={18} max={100} />
          <ProfileField label={fields.village} value={form.village} onChange={(v) => update('village', v)} required />
          <ProfileField label={fields.state} value={form.state} onChange={(v) => update('state', v)} required options={[fields.choose, 'Maharashtra', 'Gujarat', 'Madhya Pradesh', 'Rajasthan', 'Karnataka']} />
          <ProfileField label={fields.district} value={form.district} onChange={(v) => update('district', v)} required />
          <ProfileField label={fields.crop} value={form.crop} onChange={(v) => update('crop', v)} required options={[fields.choose, 'Cotton', 'Soybean', 'Wheat', 'Rice', 'Sugarcane', 'Other']} />
          <ProfileField label={fields.season} value={form.season} onChange={(v) => update('season', v)} required options={[fields.choose, 'Kharif', 'Rabi', 'Zaid']} />
          <ProfileField label={fields.company} value={form.company} onChange={(v) => update('company', v)} required />
          <ProfileField label={fields.policy} value={form.policy} onChange={(v) => update('policy', v)} required />
          <ProfileField label={fields.plot} value={form.plot} onChange={(v) => update('plot', v)} required />
        </div>

        <div className="profile-note"><Info size={17} />{fields.note}</div>
        {error && <div className="profile-error" role="alert"><Info size={17} />{error}</div>}

        <div className="profile-form-footer">
          <span>{saved ? <><CheckCircle2 size={18} /> {fields.saved}</> : ''}</span>
          <button className="profile-save" type="submit"><Check size={18} />{saved ? fields.saved : fields.save}</button>
        </div>
      </form>
    </div>
  )
}

function ProfileField({
  label, value, onChange, required = false, type = 'text',
  inputMode, maxLength, min, max, placeholder, options,
}) {
  return (
    <label className="profile-field">
      <span>{label}{required && <b>*</b>}</span>
      {options ? (
        <select
          value={value}
          onChange={(event) => onChange(event.target.value)}
          required={required}
        >
          {options.map((option, index) => (
            <option key={option} value={index === 0 ? '' : option}>{option}</option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          value={value}
          placeholder={placeholder || label}
          onChange={(event) => onChange(event.target.value)}
          required={required}
          inputMode={inputMode}
          maxLength={maxLength}
          min={min}
          max={max}
        />
      )}
    </label>
  )
}

function SidebarPage({ title, hint, icon: Icon, children }) {
  return (
    <div className="sidebar-page">
      <div className="sidebar-page-heading">
        <Icon size={28} />
        <div><h1>{title}</h1><p>{hint}</p></div>
      </div>
      <div className="sidebar-page-body">{children}</div>
    </div>
  )
}

function Dashboard({ t, onDamage, weather, weatherError, onWeather }) {
  return (
    <>
      <div className="welcome-copy">
        <h1>{t.greeting} <span>👋</span></h1>
        <p>{t.intro}</p>
      </div>

      <div className="dashboard-grid">
        <div className="main-column">
          <div className="field-illustration" role="img" aria-label={t.field} />

          <button className="action-card damage-card" onClick={onDamage}>
            <span className="action-icon alert-icon"><Waves size={28} /></span>
            <span className="action-text"><strong>{t.damage}</strong><small>{t.damageHint}</small></span>
            <ArrowRight className="action-arrow" size={25} />
          </button>

          <button className="action-card weather-card" onClick={onWeather}>
            <span className="action-icon rain-icon"><Waves size={29} /></span>
            <span className="action-text">
              <strong>{weather ? `${weather.current.temperature_2m}°C · ${weather.current.relative_humidity_2m}% humidity` : t.weather}</strong>
              <small>{weather ? `Rain: ${weather.current.rain} mm · Wind: ${weather.current.wind_speed_10m} km/h` : weatherError ? 'Weather currently unavailable' : t.weatherHint}</small>
            </span>
            <ArrowRight className="action-arrow" size={25} />
          </button>

          {weatherError && <p className="weather-inline-error" role="status">Live weather is unavailable. Check the weather service.</p>}

          {weather?.daily && (
            <section className="weather-forecast">
              <h3>3-Day Weather Forecast</h3>
              <div className="forecast-days">
                {weather.daily.time.map((date, index) => (
                  <div className="forecast-day" key={date}>
                    <strong>{new Date(`${date}T12:00:00`).toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' })}</strong>
                    <span>{weather.daily.temperature_2m_max[index]}° / {weather.daily.temperature_2m_min[index]}°C</span>
                    <small>Rain: {weather.daily.precipitation_sum[index]} mm</small>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        <aside className="farmer-card">
          <div className="farmer-card-header"><h2>Farmer information</h2></div>
          {[
            ['Name', 'Ramesh Patil'], ['Village', 'Amargaon'],
            ['Crop', 'Cotton'], ['District', 'Amravati'],
            ['Policy', 'PMFBY123456'],
          ].map(([label, value]) => (
            <div className="detail-row" key={label}>
              <Info size={18} /><span>{label}</span><strong>{value}</strong>
            </div>
          ))}
        </aside>
      </div>
    </>
  )
}

function DamageFlow({
  t, stage, setStage, startedAt, now, date, setDate, evidence,
  setEvidence, evidenceDetails, ticket, setTicket, message, setMessage,
  onOpenCamera,
}) {
  const [error, setError] = useState('')
  const [callStarted, setCallStarted] = useState(false)
  const [showNextSteps, setShowNextSteps] = useState(false)
  const percent = evidence.filter(Boolean).length * 25

  function continueStart(event) {
    event.preventDefault()
    if (!date) return setError(t.invalidDate)
    setError('')
    setStage(2)
  }

  function continueEvidence() {
    if (percent < 100) return setError(t.invalidEvidence)
    setError('')
    setStage(3)
  }

  function saveTicket(event) {
    event.preventDefault()
    if (!ticket.trim()) return setError(t.invalidTicket)
    setError('')
    setMessage(t.saved)
  }

  const script = `${t.name}: Ramesh Patil\n${t.crop}: Cotton\n${t.village}: Amargaon\n${t.policy}: PMFBY123456\n${t.date}: ${date}`

  return (
    <div className="flow-layout">
      <div className="flow-stepper">
        {t.steps.map((step, index) => (
          <div className={`flow-step ${stage === index + 1 ? 'current' : stage > index + 1 ? 'done' : ''}`} key={step}>
            <span>{stage > index + 1 ? '✓' : index + 1}</span>{step}
          </div>
        ))}
      </div>

      <div className="flow-main">
        {stage === 1 && (
          <form className="flow-panel" onSubmit={continueStart}>
            <h1>{t.when}</h1>
            <p className="flow-subtitle">{t.whenHint}</p>
            <div className="incident-card">
              <label>{t.date}<input type="date" value={date} onChange={(event) => setDate(event.target.value)} /></label>
              <label>{t.time}<input type="time" defaultValue={new Date(startedAt).toTimeString().slice(0, 5)} /></label>
            </div>
            <div className="countdown-card">
              <div><strong>{t.clock}</strong><small>{t.clockHint}</small></div>
              <Timer t={t} startedAt={startedAt} now={now} />
            </div>
            <div className="flow-info-grid">
              <div><MapPin size={22} /><span>{t.location}<strong>Amravati, Maharashtra</strong><small>{t.gps}</small></span></div>
              <div><Sprout size={22} /><span>{t.crop}<strong>Cotton</strong></span></div>
            </div>
            <button className="flow-primary" type="submit">{t.collect}<ArrowRight size={19} /></button>
            {error && <Error text={error} />}
          </form>
        )}

        {stage === 2 && (
          <div className="flow-panel">
            <div className="flow-heading-row">
              <button className="flow-back" onClick={() => setStage(1)}><ArrowLeft size={19} />{t.steps[0]}</button>
              <Timer t={t} startedAt={startedAt} now={now} compact />
            </div>
            <h1>{t.evidence}</h1>
            <p className="flow-subtitle">{t.evidenceHint}</p>
            <div className="strength-meter">
              <div><strong>{t.strength}</strong><b>{percent}%</b></div>
              <span><i style={{ width: `${percent}%` }} /></span>
            </div>
            <div className="flow-note"><CheckCircle2 size={16} />{t.gpsHint}</div>

            <div className="evidence-list">
              {t.tasks.map((task, index) => (
                <div className={`evidence-entry ${evidence[index] ? 'complete' : ''}`} key={task}>
                  <button type="button" className="evidence-item" onClick={() => onOpenCamera(index)}>
                    <span className="evidence-number">{evidence[index] ? '✓' : index + 1}</span>
                    <span><strong>{task}</strong><small>{t.hints[index]}</small></span>
                    {evidence[index] ? <CheckCircle2 size={22} /> : index === 3 ? <Mic size={21} /> : <Camera size={21} />}
                  </button>

                  {evidenceDetails[index] && index < 3 && (
                    <div className="captured-evidence">
                      <img src={evidenceDetails[index].preview} alt={`${task} preview`} />
                      <div>
                        <span>Timestamp: {new Date(evidenceDetails[index].capturedAt).toLocaleString()}</span>
                        <span>GPS: {evidenceDetails[index].location ? `${evidenceDetails[index].location.latitude.toFixed(6)}, ${evidenceDetails[index].location.longitude.toFixed(6)}` : 'Unavailable'}</span>
                      </div>
                      <button type="button" onClick={() => onOpenCamera(index)}>Retake image</button>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {percent === 100 && <div className="ready-banner"><CheckCircle2 size={17} />{t.ready}</div>}
            <button className="flow-primary" onClick={continueEvidence}>{t.report}<ArrowRight size={18} /></button>
            {error && <Error text={error} />}
          </div>
        )}

        {stage === 3 && (
          <div className="flow-panel">
            <div className="flow-heading-row">
              <button className="flow-back" onClick={() => setStage(2)}><ArrowLeft size={19} />{t.steps[1]}</button>
              <Timer t={t} startedAt={startedAt} now={now} compact />
            </div>
            <h1>{t.report}</h1>
            <p className="flow-subtitle">{t.reportHint}</p>

            <div className="call-card">
              <div><PhoneCall size={24} /><strong>{t.call}</strong><small>{t.callHint}</small></div>
              <a href="tel:14447"><Phone size={18} />{t.call}</a>
            </div>

            <div className="script-card">
              <h2>{t.script}</h2>
              <p>{script.replaceAll('\n', ' · ')}</p>
              <div className="script-actions">
                <button onClick={() => window.speechSynthesis?.speak(new SpeechSynthesisUtterance(script))}><Volume2 size={17} />{t.speak}</button>
                <button onClick={() => navigator.clipboard?.writeText(script)}><Clipboard size={17} />{t.copy}</button>
              </div>
            </div>

            <div className={`next-steps-layout ${showNextSteps ? 'open' : ''}`}>
              <button className="next-steps-trigger" onClick={() => setShowNextSteps((open) => !open)}>
                <span>{t.escalation}</span><ArrowRight size={20} />
              </button>
              {showNextSteps && (
                <div className="escalation-card">
                  <h2>{t.escalation}</h2>
                  {t.ladder.map((item, index) => (
                    <div className={index === 0 ? 'current-ladder' : ''} key={item}>
                      <span>{index + 1}</span>{item}{index === 0 && <em>{t.current}</em>}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <form className="ticket-card" onSubmit={saveTicket}>
              <label><strong>{t.ticketTitle}</strong><small>{t.ticketHint}</small><input value={ticket} onChange={(event) => setTicket(event.target.value)} placeholder={t.ticket} /></label>
              <button className="flow-primary" type="submit">{t.save}<Check size={17} /></button>
            </form>
            {error && <Error text={error} />}
            {message && <div className="toast"><Check size={16} />{message}</div>}
          </div>
        )}
      </div>
    </div>
  )
}

function Timer({ t, startedAt, now, compact = false }) {
  return <div className={`flow-timer ${compact ? 'compact' : ''}`}><strong>{timerValue(startedAt, now)}</strong><small>{t.time}</small></div>
}

function Error({ text }) {
  return <div className="validation-message" role="alert"><Info size={16} />{text}</div>
}

function CameraModal({ taskIndex, language, onClose, onSaved }) {
  const [videoElement, setVideoElement] = useState(null)
  const [stream, setStream] = useState(null)
  const [preview, setPreview] = useState(null)
  const [capturedAt, setCapturedAt] = useState(null)
  const [location, setLocation] = useState(null)
  const [status, setStatus] = useState('Opening camera...')
  const [error, setError] = useState('')

  const cameraText = language === 'mr'
    ? {
        labels: ['संपूर्ण शेताचा फोटो', 'नुकसान झालेल्या पिकाचा फोटो', 'ओळखता येईल अशी जागा/लँडमार्क सहित फोटो'],
        evidence: 'पुरावा', ready: 'कॅमेरा तयार आहे. फोटो काढा.',
        unavailable: 'कॅमेरा उपलब्ध नाही', review: 'फोटो तपासा आणि जतन करा.',
        retry: 'कॅमेरा तयार नाही. पुन्हा प्रयत्न करा.',
        failed: 'फोटो काढता आला नाही.', keep: 'फोटो जतन करा',
        retake: 'पुन्हा फोटो', close: 'कॅमेरा बंद करा',
      }
    : {
        labels: ['Full field photo', 'Damaged crop close-up', 'Recognizable landmark photo'],
        evidence: 'Evidence', ready: 'Camera ready. Frame your evidence and capture it.',
        unavailable: 'Camera unavailable', review: 'Review your photo, then save it.',
        retry: 'Camera is not ready yet. Try again.',
        failed: 'Photo capture failed.', keep: 'Keep photo',
        retake: 'Retake', close: 'Close camera',
      }

  useEffect(() => {
    let active = true
    let currentStream

    async function openCamera() {
      try {
        if (!navigator.mediaDevices?.getUserMedia) {
          throw new Error('Camera requires HTTPS or localhost.')
        }
        currentStream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: { ideal: 'environment' } },
          audio: false,
        })
        if (!active) {
          currentStream.getTracks().forEach((track) => track.stop())
          return
        }
        setStream(currentStream)
        setStatus(cameraText.ready)
      } catch (cameraError) {
        setError(`${cameraText.unavailable}: ${cameraError.message}`)
      }
    }

    openCamera()
    return () => {
      active = false
      currentStream?.getTracks().forEach((track) => track.stop())
      if (preview) URL.revokeObjectURL(preview)
    }
  }, [])

  useEffect(() => {
    if (videoElement && stream) {
      videoElement.srcObject = stream
      videoElement.play().catch(() => {})
    }
  }, [videoElement, stream])

  async function capture() {
    if (!videoElement?.videoWidth) {
      setError(cameraText.retry)
      return
    }

    const canvas = document.createElement('canvas')
    canvas.width = videoElement.videoWidth
    canvas.height = videoElement.videoHeight
    const context = canvas.getContext('2d')
    if (!context) {
      setError(cameraText.failed)
      return
    }

    context.drawImage(videoElement, 0, 0)
    const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/jpeg', 0.9))
    if (!blob) {
      setError(cameraText.failed)
      return
    }

    let location = null
    if (navigator.geolocation) {
      location = await new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition(
          (position) => resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }),
          () => resolve(null),
          { enableHighAccuracy: true, timeout: 5000 }
        )
      })
    }

    setCapturedAt(new Date().toISOString())
    setLocation(location)
    setPreview(URL.createObjectURL(blob))
    setStatus(cameraText.review)
    stream?.getTracks().forEach((track) => track.stop())
    setStream(null)
  }

  async function keep() {
    if (!preview || !capturedAt) return
    try {
      const response = await fetch(preview)
      const blob = await response.blob()
      const reader = new FileReader()
      reader.onloadend = () => {
        onSaved({
          capturedAt,
          location,
          taskIndex,
          preview: reader.result,
        })
      }
      reader.readAsDataURL(blob)
    } catch {
      setError(cameraText.failed)
    }
  }

  async function retake() {
    if (preview) URL.revokeObjectURL(preview)
    setPreview(null)
    setCapturedAt(null)
    setLocation(null)
    setError('')
    setStatus('Opening camera...')
    try {
      const nextStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: 'environment' } },
        audio: false,
      })
      setStream(nextStream)
    } catch (cameraError) {
      setError(`${cameraText.unavailable}: ${cameraError.message}`)
    }
  }

  function close() {
    stream?.getTracks().forEach((track) => track.stop())
    onClose()
  }

  const title = cameraText.labels[taskIndex] || 'Crop damage photo'

  return (
    <div className="camera-overlay" role="dialog" aria-modal="true" aria-label={title}>
      <div className="camera-modal">
        <div className="camera-modal-heading">
          <div><strong>{title}</strong><small>{cameraText.evidence} {taskIndex + 1} of 3</small></div>
          <button type="button" onClick={close} aria-label={cameraText.close}>×</button>
        </div>

        {preview
          ? <img className="camera-preview" src={preview} alt="Captured evidence preview" />
          : <video className="camera-video" ref={setVideoElement} autoPlay playsInline muted />}

        {capturedAt && (
          <div className="camera-metadata">
            <span>Timestamp: {new Date(capturedAt).toLocaleString()}</span>
            <span>GPS: {location ? `${location.latitude.toFixed(6)}, ${location.longitude.toFixed(6)}` : 'Unavailable'}</span>
          </div>
        )}

        <p className="camera-status" role="status">{status}</p>
        {error && <div className="camera-error" role="alert">{error}</div>}

        <div className="camera-actions">
          {preview ? (
            <>
              <button type="button" onClick={retake}>{cameraText.retake}</button>
              <button type="button" className="camera-keep" onClick={keep}><Check size={17} />{cameraText.keep}</button>
            </>
          ) : (
            <button type="button" className="camera-capture" onClick={capture} disabled={!stream}>
              <Camera size={20} />{language === 'mr' ? 'फोटो काढा' : 'Capture photo'}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

function NoteModal({ language, onClose, onSaved }) {
  const [note, setNote] = useState('')
  const [error, setError] = useState('')
  const mr = language === 'mr'

  const text = mr
    ? {
        title: 'नुकसानाची छोटी नोंद',
        hint: 'काय नुकसान झाले ते थोडक्यात लिहा.',
        placeholder: 'उदा. पावसामुळे कापसाचे पीक आडवे झाले...',
        cancel: 'रद्द करा', save: 'नोंद जतन करा',
        required: 'कृपया नुकसानाची नोंद लिहा.',
      }
    : {
        title: 'Short damage note',
        hint: 'Briefly describe what was damaged.',
        placeholder: 'e.g. Heavy rain flattened the cotton crop...',
        cancel: 'Cancel', save: 'Save note',
        required: 'Please enter a damage note.',
      }

  function save(event) {
    event.preventDefault()
    if (!note.trim()) {
      setError(text.required)
      return
    }
    onSaved(note.trim())
  }

  return (
    <div className="camera-overlay" role="dialog" aria-modal="true" aria-label={text.title}>
      <form className="note-modal" onSubmit={save}>
        <div className="camera-modal-heading">
          <div><strong>{text.title}</strong><small>{text.hint}</small></div>
          <button type="button" onClick={onClose} aria-label="Close note">×</button>
        </div>
        <textarea autoFocus value={note} onChange={(event) => setNote(event.target.value)} placeholder={text.placeholder} rows={7} />
        {error && <div className="camera-error" role="alert">{error}</div>}
        <div className="camera-actions">
          <button type="button" onClick={onClose}>{text.cancel}</button>
          <button className="camera-keep" type="submit"><Check size={17} />{text.save}</button>
        </div>
      </form>
    </div>
  )
}

export default App
