
import { useRef, useState } from 'react'
import { Camera, FileUp, ArrowLeft, Image, MapPin, Clock } from 'lucide-react'

function WeatherPage({ onBack }) {
  const cameraInputRef = useRef(null)
  const documentInputRef = useRef(null)
  const [documents, setDocuments] = useState([])
  const [status, setStatus] = useState('')

  function handleDocumentUpload(event) {
    const files = Array.from(event.target.files || [])
    if (!files.length) return

    setDocuments((previous) => [...previous, ...files])
    setStatus(`${files.length} document(s) selected.`)
    event.target.value = ''
  }

  return (
    <main className="weather-page">
      <button className="weather-back-button" onClick={onBack}>
        <ArrowLeft size={18} /> Back to dashboard
      </button>

      <header className="weather-page-header">
        <h1>Weather & Crop Protection</h1>
        <p>Capture damage and keep your insurance documents together.</p>
      </header>

      <section className="weather-feature-list">
        <button
          className="weather-feature-card"
          onClick={() => cameraInputRef.current?.click()}
        >
          <span className="weather-feature-icon camera-feature-icon">
            <Camera size={28} />
          </span>
          <span className="weather-feature-content">
            <strong>Capture crop damage</strong>
            <small>
              Take photos or videos of damaged crops. Location and capture
              time can be recorded when available.
            </small>
          </span>
          <Image size={22} />
        </button>

        <input
          ref={cameraInputRef}
          type="file"
          accept="image/*,video/*"
          capture="environment"
          hidden
          onChange={(event) => {
            const files = Array.from(event.target.files || [])
            if (files.length) {
              setStatus(
                `${files.length} media file(s) selected. Camera evidence storage will be connected next.`
              )
            }
            event.target.value = ''
          }}
        />

        <button
          className="weather-feature-card"
          onClick={() => documentInputRef.current?.click()}
        >
          <span className="weather-feature-icon document-feature-icon">
            <FileUp size={28} />
          </span>
          <span className="weather-feature-content">
            <strong>Upload supporting documents</strong>
            <small>
              Insurance policy, premium receipt, claim acknowledgement
              and relevant official notices.
            </small>
          </span>
          <FileUp size={22} />
        </button>

        <input
          ref={documentInputRef}
          type="file"
          accept=".pdf,.jpg,.jpeg,.png,.webp"
          multiple
          hidden
          onChange={handleDocumentUpload}
        />

        {status && <p className="weather-upload-status" role="status">{status}</p>}

        {documents.length > 0 && (
          <section className="weather-document-list">
            <h2>Selected documents</h2>
            {documents.map((file, index) => (
              <div className="weather-document-item" key={`${file.name}-${index}`}>
                <FileUp size={18} />
                <span>{file.name}</span>
                <small>{(file.size / 1024).toFixed(0)} KB</small>
              </div>
            ))}
          </section>
        )}
      </section>
    </main>
  )
}

export default WeatherPage
