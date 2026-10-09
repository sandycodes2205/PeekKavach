import { useEffect, useState } from 'react'
import {
  ArrowRight,
  Camera,
  ChevronDown,
  FileText,
  Home,
  Info,
  Leaf,
  MapPin,
  Menu,
  Sprout,
  UserRound,
  Volume2,
  Waves,
} from 'lucide-react'

const translations = {
  mr: {
    language: 'मराठी',
    otherLanguage: 'English',
    tagline: 'शेतकऱ्यांसाठी साथ',
    listen: 'ऐका',
    profile: 'मनोज पाटील',
    navigation: 'मुख्य नेव्हिगेशन',
    nav: ['होम', 'माझे पिकाचे', 'माझी पॉलिसी', 'माझी माहिती', 'माझे रिपोर्ट'],
    more: 'अधिक',
    footer: <>शेतकऱ्यांसाठी सुरक्षित आणि सोपी<br />माहिती</>,
    greeting: 'नमस्कार, शेतकरी',
    intro: 'तुमची पिकांची माहिती तयार आहे.',
    fieldAlt: 'हिरवे शेत, डोंगर आणि घर',
    damageTitle: 'नुकसान झाले?',
    damageDescription: 'तात्काळ नोंदवा आणि पुढची पावले घ्या',
    weatherTitle: 'वादळाची शक्यता आहे?',
    weatherDescription: 'आज रात्री पाऊस होण्याची शक्यता',
    farmerInfo: 'शेतकरी माहिती',
    edit: 'संपादित करा',
    details: [
      ['नाव', 'रमेश पाटील'], ['गाव', 'अमरगाव'], ['पीक', 'कापूस'],
      ['हंगाम / पिकाचे वय', 'खरीप (३ महिने)'], ['जिल्हा', 'अमरावती'],
      ['शेत क्षेत्र', '११३'], ['विमा क्रमांक', 'PMFBY123456'], ['पोलिस संपर्क', 'नजीक'],
    ],
    privacy: 'ही माहिती तुमच्या फोनमध्ये सुरक्षित ठेवली आहे.',
    messages: { voice: 'आवाज मार्गदर्शक सुरू केला', profile: 'प्रोफाइल उघडले', more: 'अधिक पर्याय उघडले', damage: 'नुकसान नोंदणी सुरू होत आहे', weather: 'हवामानाचा अंदाज उघडला', edit: 'माहिती संपादित करण्यासाठी तयार' },
  },
  en: {
    language: 'English',
    otherLanguage: 'मराठी',
    tagline: 'Support for farmers',
    listen: 'Listen',
    profile: 'Manoj Patil',
    navigation: 'Main navigation',
    nav: ['Home', 'My crops', 'My policy', 'My information', 'My reports'],
    more: 'More',
    footer: <>Safe and simple<br />information for farmers</>,
    greeting: 'Hello, farmer',
    intro: 'Your crop information is ready.',
    fieldAlt: 'Green fields, hills, and a farmhouse',
    damageTitle: 'Crop damage?',
    damageDescription: 'Report it now and take the next steps',
    weatherTitle: 'Storm expected?',
    weatherDescription: 'Rain is possible tonight',
    farmerInfo: 'Farmer information',
    edit: 'Edit',
    details: [
      ['Name', 'Ramesh Patil'], ['Village', 'Amargaon'], ['Crop', 'Cotton'],
      ['Season / crop age', 'Kharif (3 months)'], ['District', 'Amravati'],
      ['Farm area', '113'], ['Policy number', 'PMFBY123456'], ['Police contact', 'Nearby'],
    ],
    privacy: 'This information is safely stored on your phone.',
    messages: { voice: 'Voice guide started', profile: 'Profile opened', more: 'More options opened', damage: 'Starting damage report', weather: 'Opening weather forecast', edit: 'Ready to edit information' },
  },
}

const detailIcons = [UserRound, MapPin, Sprout, FileText, Home, Menu, Leaf, Info]

const navIcons = [Home, Camera, Leaf, UserRound, FileText]

const navItems = navIcons.map((icon, index) => ({ icon, index }))

function App() {
  const [activeItem, setActiveItem] = useState(0)
  const [language, setLanguage] = useState('mr')
  const [message, setMessage] = useState('')
  const copy = translations[language]

  useEffect(() => {
    document.documentElement.lang = language === 'mr' ? 'mr' : 'en'
  }, [language])

  function handleAction(label) {
    setMessage(label)
  }

  return (
    <main className="app-shell">
      <header className="topbar">
        <div className="brand-lockup">
          <div className="brand-mark" aria-hidden="true"><Leaf size={28} strokeWidth={2.4} /></div>
          <div>
            <div className="brand-name">PeekKavach</div>
            <div className="brand-tagline">{copy.tagline}</div>
          </div>
        </div>
        <div className="header-actions">
          <button className="language-toggle" aria-label={`Switch language to ${copy.otherLanguage}`} onClick={() => setLanguage(language === 'mr' ? 'en' : 'mr')}>
            <strong>{copy.language}</strong><span>|</span><span>{copy.otherLanguage}</span><ChevronDown size={14} />
          </button>
          <button className="icon-button" aria-label={copy.listen} onClick={() => handleAction(copy.messages.voice)}><Volume2 size={19} /></button>
          <button className="profile-button" onClick={() => handleAction(copy.messages.profile)}>
            <span className="profile-avatar"><UserRound size={18} /></span>
            <span>{copy.profile}</span>
          </button>
        </div>
      </header>

      <div className="workspace">
        <aside className="sidebar">
          <nav aria-label={copy.navigation}>
            {navItems.map(({ icon: Icon, index }) => (
              <button key={copy.nav[index]} className={`nav-item ${activeItem === index ? 'active' : ''}`} onClick={() => setActiveItem(index)}>
                <Icon size={20} strokeWidth={1.9} />
                <span>{copy.nav[index]}</span>
              </button>
            ))}
            <button className="nav-item" onClick={() => handleAction(copy.messages.more)}>
              <span className="more-dots">•••</span><span>{copy.more}</span>
            </button>
          </nav>
          <div className="sidebar-footer"><Leaf size={25} /><span>{copy.footer}</span></div>
        </aside>

        <section className="dashboard-content">
          <div className="welcome-copy">
            <h1>{copy.greeting} <span>👋</span></h1>
            <p>{copy.intro}</p>
          </div>

          <div className="dashboard-grid">
            <div className="main-column">
              <div className="field-illustration" role="img" aria-label={copy.fieldAlt}></div>

              <button className="action-card damage-card" onClick={() => handleAction(copy.messages.damage)}>
                <span className="action-icon alert-icon"><Waves size={28} /></span>
                <span className="action-text"><strong>{copy.damageTitle}</strong><small>{copy.damageDescription}</small></span>
                <ArrowRight className="action-arrow" size={25} />
              </button>

              <button className="action-card weather-card" onClick={() => handleAction(copy.messages.weather)}>
                <span className="action-icon rain-icon"><Waves size={29} /></span>
                <span className="action-text"><strong>{copy.weatherTitle}</strong><small>{copy.weatherDescription}</small></span>
                <ArrowRight className="action-arrow" size={25} />
              </button>
              {message && <div className="toast" role="status"><Info size={16} />{message}</div>}
            </div>

            <aside className="farmer-card">
              <div className="farmer-card-header"><h2>{copy.farmerInfo}</h2><button onClick={() => handleAction(copy.messages.edit)}><FileText size={14} />{copy.edit}</button></div>
              <div className="farmer-details">
                {copy.details.map(([label, value], index) => <Detail key={label} icon={detailIcons[index]} label={label} value={value} />)}
              </div>
              <div className="privacy-note"><Info size={15} />{copy.privacy}</div>
            </aside>
          </div>
        </section>
      </div>
    </main>
  )
}

function Detail({ icon: Icon, label, value }) {
  return <div className="detail-row"><Icon size={18} /><span>{label}</span><strong>{value}</strong></div>
}

export default App