import { useEffect, useState } from 'react'
import {
  ArrowLeft, ArrowRight, Camera, Check, CheckCircle2, Clipboard, FileText,
  Home, Info, Leaf, MapPin, Mic, Phone, PhoneCall, Sprout, UserRound,
  Volume2, Waves,
} from 'lucide-react'

const copy = {
  mr: {
    language: 'मराठी', other: 'English', tagline: 'शेतकऱ्यांसाठी साथ', listen: 'ऐका', profile: 'मनोज पाटील',
    nav: ['होम', 'माझे पिकाचे', 'माझी माहिती', 'माझे रिपोर्ट'], more: 'अधिक', footer: <>शेतकऱ्यांसाठी सुरक्षित आणि सोपी<br />माहिती</>, pages: { crops: 'माझी पिके', cropsHint: 'तुमच्या शेतातील पिकांची माहिती', profile: 'माझी माहिती', profileHint: 'तुमची जतन केलेली वैयक्तिक माहिती', reports: 'माझे रिपोर्ट', reportsHint: 'तुमचे नुकसान रिपोर्ट येथे दिसतील.', empty: 'अजून कोणताही रिपोर्ट नाही.' },
    greeting: 'नमस्कार, शेतकरी', intro: 'तुमची पिकांची माहिती तयार आहे.', field: 'हिरवे शेत, डोंगर आणि घर', damage: 'नुकसान झाले?', damageHint: 'तात्काळ नोंदवा आणि पुढची पावले घ्या', weather: 'वादळाची शक्यता आहे?', weatherHint: 'आज रात्री पाऊस होण्याची शक्यता',
    flow: { steps: ['घटना', 'पुरावे', 'रिपोर्ट'], when: 'नुकसान कधी झाले?', whenHint: 'घटनेची माहिती भरा आणि ७२ तासांचा कालावधी सुरू करा.', date: 'नुकसानाची तारीख', time: 'वेळ', clock: 'तुमचे ७२ तास सुरू झाले', clockHint: 'या कालावधीत नुकसानाची माहिती रिपोर्ट करणे आवश्यक आहे.', location: 'शेताचे स्थान (GPS)', gps: 'GPS मिळाले', crop: 'पीक', collect: 'पुरावे गोळा करा', evidence: 'पुरावे तयार करा', evidenceHint: 'जितका मजबूत पुरावा तितका दावा अधिक मजबूत.', strength: 'पुराव्याची ताकद', gpsHint: 'प्रत्येक फोटोमध्ये GPS आणि वेळ आपोआप जोडली जाईल.', tasks: ['संपूर्ण शेताचा फोटो', 'नुकसान झालेल्या पिकाचा फोटो', 'ओळखता येईल अशी जागा/लँडमार्क सहित फोटो', 'नुकसानाची छोटी नोंद'], hints: ['शेताचा दूरचा/वाईड फोटो घ्या.', 'नुकसान स्पष्ट दिसेल असा जवळचा फोटो घ्या.', 'ओळखता येणारी जागा दाखवा.', 'काय नुकसान झाले ते थोडक्यात नोंदवा.'], ready: 'सर्व पुरावे तयार आहेत!', next: 'पुढे — नुकसानाचा प्रकार', report: 'आता रिपोर्ट करा', reportHint: 'तुमच्या पुराव्यांसह ७२ तासांच्या आत रिपोर्ट करणे आवश्यक आहे.', call: '१४४४७ वर कॉल करा', callHint: 'आत्ताच कॉल करा आणि तक्रार नोंदवा.', script: 'तुम्हाला काय सांगायचे आहे?', name: 'नाव', village: 'गाव', policy: 'पॉलिसी नंबर', speak: 'ऐका', copy: 'कॉपी करा', escalation: 'पुढील पायऱ्या', current: 'सध्याची पायरी', ladder: ['०–२४ तास → १४४४७ वर कॉल करा', '२४–४८ तास → पुढील मदत केंद्र', '४८–७२ तास → बँक / कृषी कार्यालय'], ticketTitle: 'तिकीट नंबर सेव्ह करा', ticketHint: 'कॉलनंतर मिळालेला तिकीट नंबर येथे भरा.', ticket: 'तिकीट नंबर', save: 'तिकीट सेव्ह करा', saved: 'रिपोर्ट आणि तिकीट सेव्ह झाले', invalidDate: 'कृपया नुकसानाची तारीख निवडा.', invalidEvidence: 'पुढे जाण्यासाठी सर्व पुरावे पूर्ण करा.', invalidTicket: 'कृपया तिकीट नंबर भरा.' },
  },
  en: {
    language: 'English', other: 'मराठी', tagline: 'Support for farmers', listen: 'Listen', profile: 'Manoj Patil',
    nav: ['Home', 'My crops', 'My information', 'My reports'], more: 'More', footer: <>Safe and simple<br />information for farmers</>, pages: { crops: 'My crops', cropsHint: 'Information about the crops on your farm', profile: 'My information', profileHint: 'Your saved personal information', reports: 'My reports', reportsHint: 'Your damage reports will appear here.', empty: 'No reports yet.' },
    greeting: 'Hello, farmer', intro: 'Your crop information is ready.', field: 'Green fields, hills, and a farmhouse', damage: 'Crop damage?', damageHint: 'Report it now and take the next steps', weather: 'Storm expected?', weatherHint: 'Rain is possible tonight',
    flow: { steps: ['Incident', 'Evidence', 'Report'], when: 'When did the damage happen?', whenHint: 'Add incident details and start the 72-hour window.', date: 'Damage date', time: 'Time', clock: 'Your 72 hours have started', clockHint: 'You must report the damage within this window.', location: 'Farm location (GPS)', gps: 'GPS found', crop: 'Crop', collect: 'Collect evidence', evidence: 'Build your evidence', evidenceHint: 'Stronger evidence makes a stronger claim.', strength: 'Evidence strength', gpsHint: 'GPS and timestamp are added automatically to every photo.', tasks: ['Full field photo', 'Damaged crop close-up', 'Photo with a recognizable landmark', 'Short damage note'], hints: ['Take a wide photo of your field.', 'Take a close-up where damage is clear.', 'Include a recognizable place.', 'Briefly describe what was damaged.'], ready: 'All evidence is ready!', next: 'Next — damage type', report: 'Report now', reportHint: 'Report your damage with evidence within 72 hours.', call: 'Call 14447', callHint: 'Call now to register your complaint.', script: 'What should you say?', name: 'Name', village: 'Village', policy: 'Policy number', speak: 'Listen', copy: 'Copy', escalation: 'Next steps', current: 'CURRENT STEP', ladder: ['0–24 hours → Call 14447', '24–48 hours → Next support center', '48–72 hours → Bank / Agriculture Office'], ticketTitle: 'Save your ticket number', ticketHint: 'Enter the ticket number you receive after calling.', ticket: 'Ticket number', save: 'Save ticket', saved: 'Report and ticket saved', invalidDate: 'Please select the damage date.', invalidEvidence: 'Complete all evidence items before continuing.', invalidTicket: 'Please enter a ticket number.' },
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

  useEffect(() => { document.documentElement.lang = language }, [language])
  useEffect(() => { if (!startedAt) return undefined; const id = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(id) }, [startedAt])

  function startFlow() {
    const start = Date.now()
    setStartedAt(start); setNow(start); setDamageDate(new Date(start).toISOString().slice(0, 10)); setEvidence([false, false, false, false]); setEvidenceDetails([null, null, null, null]); setTicket(''); setMessage(''); setStage(1); setView('flow')
  }

  function openSidebarPage(index) {
    setView(index === 0 ? 'dashboard' : index === 1 ? 'crops' : index === 2 ? 'profile' : 'reports')
  }

  return <main className="app-shell">
    <header className="topbar"><div className="brand-lockup"><div className="brand-mark"><Leaf size={28} /></div><div><div className="brand-name">PeekKavach</div><div className="brand-tagline">{t.tagline}</div></div></div><div className="header-actions"><button className="language-toggle" onClick={() => setLanguage(language === 'mr' ? 'en' : 'mr')}><strong>{t.language}</strong><span>|</span><span>{t.other}</span></button><button className="icon-button" aria-label={t.listen}><Volume2 size={19} /></button><button className="profile-button"><span className="profile-avatar"><UserRound size={18} /></span><span>{t.profile}</span></button></div></header>
    <div className="workspace"><aside className="sidebar"><nav>{t.nav.map((label, index) => { const Icon = navIcons[index]; return <button className={`nav-item ${((index === 0 && view === 'dashboard') || (index === 1 && view === 'crops') || (index === 2 && view === 'profile') || (index === 3 && view === 'reports')) ? 'active' : ''}`} key={label} onClick={() => openSidebarPage(index)}><Icon size={20} /><span>{label}</span></button> })}<button className="nav-item"><span className="more-dots">•••</span><span>{t.more}</span></button></nav><div className="sidebar-footer"><Leaf size={25} /><span>{t.footer}</span></div></aside><section className={view === 'flow' ? 'flow-content' : 'dashboard-content'}>{view === 'flow' ? <DamageFlow t={t.flow} stage={stage} setStage={setStage} startedAt={startedAt} now={now} date={damageDate} setDate={setDamageDate} evidence={evidence} setEvidence={setEvidence} evidenceDetails={evidenceDetails} ticket={ticket} setTicket={setTicket} message={message} setMessage={setMessage} onOpenCamera={(index) => index === 3 ? setNoteTask(true) : setCameraTask(index)} /> : view === 'crops' ? <SidebarPage title={t.pages.crops} hint={t.pages.cropsHint} icon={Sprout}><div className="page-summary"><Sprout size={30} /><strong>{language === 'mr' ? 'कापूस' : 'Cotton'}</strong><span>{language === 'mr' ? 'खरीप हंगाम' : 'Kharif season'}</span></div></SidebarPage> : view === 'profile' ? <SidebarPage title={t.pages.profile} hint={t.pages.profileHint} icon={UserRound}><div className="page-summary"><UserRound size={30} /><strong>{t.profile}</strong><span>{language === 'mr' ? 'तुमची माहिती जतन आहे' : 'Your information is saved'}</span></div></SidebarPage> : view === 'reports' ? <SidebarPage title={t.pages.reports} hint={t.pages.reportsHint} icon={FileText}><div className="empty-page"><FileText size={38} /><span>{t.pages.empty}</span></div></SidebarPage> : <Dashboard t={t} onDamage={startFlow} />}</section></div>
    {cameraTask !== null && <CameraModal taskIndex={cameraTask} language={language} onClose={() => setCameraTask(null)} onSaved={(detail) => { setEvidence((current) => current.map((done, index) => index === cameraTask ? true : done)); setEvidenceDetails((current) => current.map((item, index) => index === cameraTask ? detail : item)); setCameraTask(null) }} />}
    {noteTask && <NoteModal language={language} onClose={() => setNoteTask(false)} onSaved={() => { setEvidence((current) => current.map((done, index) => index === 3 ? true : done)); setNoteTask(false) }} />}
  </main>
}

function SidebarPage({ title, hint, icon: Icon, children }) {
  return <div className="sidebar-page"><div className="sidebar-page-heading"><Icon size={28} /><div><h1>{title}</h1><p>{hint}</p></div></div><div className="sidebar-page-body">{children}</div></div>
}

function Dashboard({ t, onDamage }) {
  return <><div className="welcome-copy"><h1>{t.greeting} <span>👋</span></h1><p>{t.intro}</p></div><div className="dashboard-grid"><div className="main-column"><div className="field-illustration" role="img" aria-label={t.field}></div><button className="action-card damage-card" onClick={onDamage}><span className="action-icon alert-icon"><Waves size={28} /></span><span className="action-text"><strong>{t.damage}</strong><small>{t.damageHint}</small></span><ArrowRight className="action-arrow" size={25} /></button><button className="action-card weather-card"><span className="action-icon rain-icon"><Waves size={29} /></span><span className="action-text"><strong>{t.weather}</strong><small>{t.weatherHint}</small></span><ArrowRight className="action-arrow" size={25} /></button></div><aside className="farmer-card"><div className="farmer-card-header"><h2>Farmer information</h2></div>{[['Name', 'Ramesh Patil'], ['Village', 'Amargaon'], ['Crop', 'Cotton'], ['District', 'Amravati'], ['Policy', 'PMFBY123456']].map(([label, value]) => <div className="detail-row" key={label}><Info size={18} /><span>{label}</span><strong>{value}</strong></div>)}</aside></div></>
}

function DamageFlow({ t, stage, setStage, startedAt, now, date, setDate, evidence, setEvidence, evidenceDetails, ticket, setTicket, message, setMessage, onOpenCamera }) {
  const [error, setError] = useState('')
  const [callStarted, setCallStarted] = useState(false)
  const percent = evidence.filter(Boolean).length * 25
  function continueStart(event) { event.preventDefault(); if (!date) return setError(t.invalidDate); setError(''); setStage(2) }
  function toggle(index) { setEvidence(evidence.map((item, i) => i === index ? !item : item)) }
  function continueEvidence() { if (percent < 100) return setError(t.invalidEvidence); setError(''); setStage(3) }
  function saveTicket(event) { event.preventDefault(); if (!ticket.trim()) return setError(t.invalidTicket); setError(''); setMessage(t.saved) }
  const script = `${t.name}: Ramesh Patil\n${t.crop}: Cotton\n${t.village}: Amargaon\n${t.policy}: PMFBY123456\n${t.date}: ${date}`
  return <div className="flow-layout"><div className="flow-stepper">{t.steps.map((step, i) => <div className={`flow-step ${stage === i + 1 ? 'current' : stage > i + 1 ? 'done' : ''}`} key={step}><span>{stage > i + 1 ? '✓' : i + 1}</span>{step}</div>)}</div><div className="flow-main">
    {stage === 1 && <form className="flow-panel" onSubmit={continueStart}><h1>{t.when}</h1><p className="flow-subtitle">{t.whenHint}</p><div className="incident-card"><label>{t.date}<input type="date" value={date} onChange={e => setDate(e.target.value)} /></label><label>{t.time}<input type="time" defaultValue={new Date(startedAt).toTimeString().slice(0, 5)} /></label></div><div className="countdown-card"><div><strong>{t.clock}</strong><small>{t.clockHint}</small></div><Timer t={t} startedAt={startedAt} now={now} /></div><div className="flow-info-grid"><div><MapPin size={22} /><span>{t.location}<strong>Amravati, Maharashtra</strong><small>{t.gps}</small></span></div><div><Sprout size={22} /><span>{t.crop}<strong>Cotton</strong></span></div></div><button className="flow-primary" type="submit">{t.collect}<ArrowRight size={19} /></button>{error && <Error text={error} />}</form>}
    {stage === 2 && <div className="flow-panel"><div className="flow-heading-row"><button className="flow-back" onClick={() => setStage(1)}><ArrowLeft size={19} />{t.steps[0]}</button><Timer t={t} startedAt={startedAt} now={now} compact /></div><h1>{t.evidence}</h1><p className="flow-subtitle">{t.evidenceHint}</p><div className="strength-meter"><div><strong>{t.strength}</strong><b>{percent}%</b></div><span><i style={{ width: `${percent}%` }} /></span></div><div className="flow-note"><CheckCircle2 size={16} />{t.gpsHint}</div><div className="evidence-list">{t.tasks.map((task, i) => <div className={`evidence-entry ${evidence[i] ? 'complete' : ''}`} key={task}><button className="evidence-item" onClick={() => onOpenCamera(i)}><span className="evidence-number">{evidence[i] ? '✓' : i + 1}</span><span><strong>{task}</strong><small>{t.hints[i]}</small></span>{evidence[i] ? <CheckCircle2 size={22} /> : i === 3 ? <Mic size={21} /> : <Camera size={21} />}</button>{evidenceDetails[i] && i < 3 && <div className="captured-evidence"><img src={evidenceDetails[i].preview} alt={`${task} preview`} /><div><span>Timestamp: {new Date(evidenceDetails[i].capturedAt).toLocaleString()}</span><span>GPS: {evidenceDetails[i].location ? `${evidenceDetails[i].location.latitude.toFixed(6)}, ${evidenceDetails[i].location.longitude.toFixed(6)}` : 'Unavailable'}</span></div><button onClick={() => onOpenCamera(i)}>Retake image</button></div>}</div>)}</div>{percent === 100 && <div className="ready-banner"><CheckCircle2 size={17} />{t.ready}</div>}<button className="flow-primary" onClick={continueEvidence}>{t.next}<ArrowRight size={18} /></button>{error && <Error text={error} />}</div>}
    {stage === 3 && <div className="flow-panel"><div className="flow-heading-row"><button className="flow-back" onClick={() => setStage(2)}><ArrowLeft size={19} />{t.steps[1]}</button><Timer t={t} startedAt={startedAt} now={now} compact /></div><h1>{t.report}</h1><p className="flow-subtitle">{t.reportHint}</p><div className="call-card"><div><PhoneCall size={24} /><strong>{t.call}</strong><small>{t.callHint}</small></div><button onClick={() => setCallStarted(true)}><Phone size={18} />{callStarted ? t.call : t.call}</button></div><div className="script-card"><h2>{t.script}</h2><p>{script.replaceAll('\n', ' · ')}</p><div className="script-actions"><button onClick={() => window.speechSynthesis?.speak(new SpeechSynthesisUtterance(script))}><Volume2 size={17} />{t.speak}</button><button onClick={() => navigator.clipboard?.writeText(script)}><Clipboard size={17} />{t.copy}</button></div></div><div className="escalation-card"><h2>{t.escalation}</h2>{t.ladder.map((item, i) => <div className={i === 0 ? 'current-ladder' : ''} key={item}><span>{i + 1}</span>{item}{i === 0 && <em>{t.current}</em>}</div>)}</div><form className="ticket-card" onSubmit={saveTicket}><label><strong>{t.ticketTitle}</strong><small>{t.ticketHint}</small><input value={ticket} onChange={e => setTicket(e.target.value)} placeholder={t.ticket} /></label><button className="flow-primary" type="submit">{t.save}<Check size={17} /></button></form>{error && <Error text={error} />}{message && <div className="toast"><Check size={16} />{message}</div>}</div>}
  </div></div>
}

function Timer({ t, startedAt, now, compact = false }) { return <div className={`flow-timer ${compact ? 'compact' : ''}`}><strong>{timerValue(startedAt, now)}</strong><small>{t.time}</small></div> }
function Error({ text }) { return <div className="validation-message" role="alert"><Info size={16} />{text}</div> }

function CameraModal({ taskIndex, language, onClose, onSaved }) {
  const [videoElement, setVideoElement] = useState(null)
  const [stream, setStream] = useState(null)
  const [preview, setPreview] = useState(null)
  const [capturedAt, setCapturedAt] = useState(null)
  const [location, setLocation] = useState(null)
  const [status, setStatus] = useState('Opening camera...')
  const [error, setError] = useState('')
  const cameraText = language === 'mr' ? { labels: ['संपूर्ण शेताचा फोटो', 'नुकसान झालेल्या पिकाचा फोटो', 'ओळखता येईल अशी जागा/लँडमार्क सहित फोटो', 'नुकसानाची छोटी नोंद'], evidence: 'पुरावा', opening: 'कॅमेरा सुरू होत आहे...', ready: 'कॅमेरा तयार आहे. पुरावा फ्रेममध्ये घेऊन फोटो काढा.', unavailable: 'कॅमेरा उपलब्ध नाही', secure: 'कॅमेरा वापरण्यासाठी HTTPS किंवा localhost आवश्यक आहे.', review: 'फोटो तपासा आणि जतन करा किंवा पुन्हा फोटो काढा.', retry: 'कॅमेरा सुरू आहे. पुन्हा प्रयत्न करा.', failed: 'फोटो काढता आला नाही. पुन्हा प्रयत्न करा.', captureFirst: 'जतन करण्यापूर्वी फोटो काढा.', retake: 'पुन्हा फोटो', keep: 'फोटो जतन करा', close: 'कॅमेरा बंद करा', timestamp: 'वेळ', gps: 'GPS' } : { labels: ['Full field photo', 'Damaged crop close-up', 'Recognizable landmark photo', 'Short damage note'], evidence: 'Evidence', opening: 'Opening camera...', ready: 'Camera ready. Frame your evidence and capture it.', unavailable: 'Camera unavailable', secure: 'Camera requires HTTPS or localhost.', review: 'Review your photo, then keep it or retake it.', retry: 'Opening camera again...', failed: 'Photo capture failed. Please try again.', captureFirst: 'Capture a photo before keeping it.', retake: 'Retake', keep: 'Keep photo', close: 'Close camera', timestamp: 'Timestamp', gps: 'GPS' }

  useEffect(() => {
    let active = true
    async function openCamera() {
      if (!navigator.mediaDevices?.getUserMedia) {
        setError('Camera requires HTTPS or localhost.')
        setStatus('Camera unavailable')
        return
      }
      try {
        const nextStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: 'environment' } }, audio: false })
        if (!active) return nextStream.getTracks().forEach((track) => track.stop())
        setStream(nextStream)
        setStatus(cameraText.ready)
      } catch (cameraError) {
        setError(`${cameraText.unavailable}: ${cameraError.message}`)
        setStatus(cameraText.unavailable)
      }
    }
    openCamera()
    return () => { active = false; stream?.getTracks().forEach((track) => track.stop()); if (preview) URL.revokeObjectURL(preview) }
  }, [])

  useEffect(() => {
    if (videoElement && stream) {
      try {
        videoElement.srcObject = stream
        videoElement.play().catch(() => {})
      } catch {
        setError(cameraText.unavailable)
        setStatus(cameraText.unavailable)
      }
    }
  }, [videoElement, stream])

  async function getLocation() {
    if (!navigator.geolocation) return null
    return new Promise((resolve) => navigator.geolocation.getCurrentPosition(
      (position) => resolve({ latitude: position.coords.latitude, longitude: position.coords.longitude, accuracy: position.coords.accuracy }),
      () => resolve(null),
      { enableHighAccuracy: true, timeout: 8000, maximumAge: 0 },
    ))
  }

  async function capture() {
    if (!videoElement?.videoWidth) { setError(cameraText.retry); return }
    const canvas = document.createElement('canvas')
    canvas.width = videoElement.videoWidth
    canvas.height = videoElement.videoHeight
    canvas.getContext('2d').drawImage(videoElement, 0, 0)
    const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/jpeg', 0.9))
    if (!blob) { setError(cameraText.failed); return }
    setCapturedAt(new Date().toISOString())
    setLocation(await getLocation())
    setPreview(URL.createObjectURL(blob))
    setStatus(cameraText.review)
    stream?.getTracks().forEach((track) => track.stop())
  }

  function previewAsDataUrl() {
    return new Promise((resolve, reject) => {
      if (!preview) return reject(new Error('Preview unavailable'))
      fetch(preview).then((response) => response.blob()).then((blob) => {
        const reader = new FileReader()
        reader.onloadend = () => resolve(reader.result)
        reader.onerror = reject
        reader.readAsDataURL(blob)
      }).catch(reject)
    })
  }

  function retake() {
    if (preview) URL.revokeObjectURL(preview)
    setPreview(null); setCapturedAt(null); setLocation(null); setError(''); setStatus(cameraText.opening)
    navigator.mediaDevices?.getUserMedia({ video: { facingMode: { ideal: 'environment' } }, audio: false }).then(setStream).catch((cameraError) => setError(`${cameraText.unavailable}: ${cameraError.message}`))
  }

  async function keep() {
    if (!capturedAt) return setError(cameraText.captureFirst)
    try {
      onSaved({ capturedAt, location, taskIndex, preview: await previewAsDataUrl() })
    } catch {
      setError(cameraText.failed)
    }
  }

  return <div className="camera-overlay" role="dialog" aria-modal="true" aria-label={cameraText.labels[taskIndex]}><div className="camera-modal"><div className="camera-modal-heading"><div><strong>{cameraText.labels[taskIndex]}</strong><small>{cameraText.evidence} {taskIndex + 1} of 4</small></div><button onClick={onClose} aria-label={cameraText.close}>×</button></div>{preview ? <img className="camera-preview" src={preview} alt="Captured evidence preview" /> : <video className="camera-video" ref={setVideoElement} autoPlay playsInline muted />}{capturedAt && <div className="camera-metadata"><span>{cameraText.timestamp}: {new Date(capturedAt).toLocaleString()}</span><span>{cameraText.gps}: {location ? `${location.latitude.toFixed(6)}, ${location.longitude.toFixed(6)}` : 'Unavailable'}</span></div>}<p className="camera-status" role="status">{status}</p>{error && <div className="camera-error" role="alert">{error}</div>}<div className="camera-actions">{preview ? <><button onClick={retake}>{cameraText.retake}</button><button className="camera-keep" onClick={keep}><Check size={17} />{cameraText.keep}</button></> : <button className="camera-capture" onClick={capture} disabled={!stream}><Camera size={20} />{language === 'mr' ? 'फोटो काढा' : 'Capture photo'}</button>}</div></div></div>
}

function NoteModal({ language, onClose, onSaved }) {
  const [note, setNote] = useState('')
  const [error, setError] = useState('')
  const mr = language === 'mr'
  const text = mr ? { title: 'नुकसानाची छोटी नोंद', hint: 'काय नुकसान झाले ते थोडक्यात लिहा.', placeholder: 'उदा. पावसामुळे कापसाचे पीक आडवे झाले...', cancel: 'रद्द करा', save: 'नोंद जतन करा', required: 'कृपया नुकसानाची नोंद लिहा.' } : { title: 'Short damage note', hint: 'Briefly describe what was damaged.', placeholder: 'e.g. Heavy rain flattened the cotton crop...', cancel: 'Cancel', save: 'Save note', required: 'Please enter a damage note.' }
  function save(event) { event.preventDefault(); if (!note.trim()) return setError(text.required); setError(''); onSaved(note.trim()) }
  return <div className="camera-overlay" role="dialog" aria-modal="true" aria-label={text.title}><form className="note-modal" onSubmit={save}><div className="camera-modal-heading"><div><strong>{text.title}</strong><small>{text.hint}</small></div><button type="button" onClick={onClose} aria-label={mr ? 'नोंद बंद करा' : 'Close note'}>×</button></div><textarea autoFocus value={note} onChange={(event) => setNote(event.target.value)} placeholder={text.placeholder} rows={7} aria-label={text.title} />{error && <div className="camera-error" role="alert">{error}</div>}<div className="camera-actions"><button type="button" onClick={onClose}>{text.cancel}</button><button className="camera-keep" type="submit"><Check size={17} />{text.save}</button></div></form></div>
}

export default App
