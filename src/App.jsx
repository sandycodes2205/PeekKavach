import { useState } from 'react'
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

const navItems = [
  { label: 'होम', icon: Home },
  { label: 'माझे पिकाचे', icon: Camera },
  { label: 'माझी पॉलिसी', icon: Leaf },
  { label: 'माझी माहिती', icon: UserRound },
  { label: 'माझे रिपोर्ट', icon: FileText },
]

function App() {
  const [activeItem, setActiveItem] = useState('होम')
  const [language, setLanguage] = useState('मराठी')
  const [message, setMessage] = useState('')

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
            <div className="brand-tagline">शेतकऱ्यांसाठी साथ&nbsp; / &nbsp;For farmers</div>
          </div>
        </div>
        <div className="header-actions">
          <button className="language-toggle" onClick={() => setLanguage(language === 'मराठी' ? 'English' : 'मराठी')}>
            <strong>{language}</strong><span>|</span><span>{language === 'मराठी' ? 'English' : 'मराठी'}</span><ChevronDown size={14} />
          </button>
          <button className="icon-button" aria-label="ऐका" onClick={() => handleAction('आवाज मार्गदर्शक सुरू केला')}><Volume2 size={19} /></button>
          <button className="profile-button" onClick={() => handleAction('प्रोफाइल उघडले')}>
            <span className="profile-avatar"><UserRound size={18} /></span>
            <span>मनोज पाटील</span>
          </button>
        </div>
      </header>

      <div className="workspace">
        <aside className="sidebar">
          <nav aria-label="मुख्य नेव्हिगेशन">
            {navItems.map(({ label, icon: Icon }) => (
              <button key={label} className={`nav-item ${activeItem === label ? 'active' : ''}`} onClick={() => setActiveItem(label)}>
                <Icon size={20} strokeWidth={1.9} />
                <span>{label}</span>
              </button>
            ))}
            <button className="nav-item" onClick={() => handleAction('अधिक पर्याय उघडले')}>
              <span className="more-dots">•••</span><span>अधिक</span>
            </button>
          </nav>
          <div className="sidebar-footer"><Leaf size={25} /><span>शेतकऱ्यांसाठी सुरक्षित आणि सोपी<br />माहिती</span></div>
        </aside>

        <section className="dashboard-content">
          <div className="welcome-copy">
            <h1>नमस्कार, शेतकरी <span>👋</span></h1>
            <p>तुमची पिकांची माहिती तयार आहे.</p>
          </div>

          <div className="dashboard-grid">
            <div className="main-column">
              <div className="field-illustration" role="img" aria-label="हिरवे शेत, डोंगर आणि घर"></div>

              <button className="action-card damage-card" onClick={() => handleAction('नुकसान नोंदणी सुरू होत आहे')}>
                <span className="action-icon alert-icon"><Waves size={28} /></span>
                <span className="action-text"><strong>नुकसान झाले?</strong><small>तात्काळ नोंदवा आणि पुढची पावले घ्या</small></span>
                <ArrowRight className="action-arrow" size={25} />
              </button>

              <button className="action-card weather-card" onClick={() => handleAction('हवामानाचा अंदाज उघडला')}>
                <span className="action-icon rain-icon"><Waves size={29} /></span>
                <span className="action-text"><strong>वादळाची शक्यता आहे?</strong><small>आज रात्री पाऊस होण्याची शक्यता</small></span>
                <ArrowRight className="action-arrow" size={25} />
              </button>
              {message && <div className="toast" role="status"><Info size={16} />{message}</div>}
            </div>

            <aside className="farmer-card">
              <div className="farmer-card-header"><h2>शेतकरी माहिती</h2><button onClick={() => handleAction('माहिती संपादित करण्यासाठी तयार')}><FileText size={14} />संपादित करा</button></div>
              <div className="farmer-details">
                <Detail icon={UserRound} label="नाव" value="रमेश पाटील" />
                <Detail icon={MapPin} label="गाव" value="अमरगाव" />
                <Detail icon={Sprout} label="पीक" value="कापूस" />
                <Detail icon={FileText} label="हंगाम / पिकाचे वय" value="खरीप (३ महिने)" />
                <Detail icon={Home} label="जिल्हा" value="अमरावती" />
                <Detail icon={Menu} label="शेत क्षेत्र" value="११३" />
                <Detail icon={Leaf} label="विमा क्रमांक" value="PMFBY123456" />
                <Detail icon={Info} label="पोलिस संपर्क" value="नजीक" />
              </div>
              <div className="privacy-note"><Info size={15} />ही माहिती तुमच्या फोनमध्ये सुरक्षित ठेवली आहे.</div>
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