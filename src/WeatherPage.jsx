
import { useEffect, useRef, useState } from 'react'
import {
  Camera,
  FileUp,
  ArrowLeft,
  Image as ImageIcon,
  X,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react'
import './index.css'

function WeatherPage({ onBack }) {
  const videoRef = useRef(null)
  const streamRef = useRef(null)
  const documentInputRef = useRef(null)

  const [documents, setDocuments] = useState([])
  const [status, setStatus] = useState('')
  const [cameraOpen, setCameraOpen] = useState(false)
  const [cameraError, setCameraError] = useState('')
  const [capturedImage, setCapturedImage] = useState('')
  const [cameraLoading, setCameraLoading] = useState(false)

  function stopCamera() {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop())
      streamRef.current = null
    }

    if (videoRef.current) {
      videoRef.current.srcObject = null
    }

    setCameraOpen(false)
    setCameraLoading(false)
  }

  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop())
      }
    }
  }, [])

  async function openCamera() {
    setCameraError('')
    setCapturedImage('')
    setCameraLoading(true)
    setCameraOpen(true)

    if (!navigator.mediaDevices?.getUserMedia) {
      setCameraError(
        'Camera access is unavailable. Use HTTPS or localhost and a supported browser.'
      )
      setCameraLoading(false)
      return
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: 'environment' } },
        audio: false,
      })

      streamRef.current = stream

      if (videoRef.current) {
        videoRef.current.srcObject = stream
        await videoRef.current.play()
      }

      setCameraLoading(false)
    } catch (error) {
      console.error('Camera access failed:', error)

      if (error.name === 'NotAllowedError') {
        setCameraError(
          'Camera permission was denied. Allow camera access in your browser settings.'
        )
      } else if (error.name === 'NotFoundError') {
        setCameraError('No camera was found on this device.')
      } else if (error.name === 'NotReadableError') {
        setCameraError(
          'The camera may already be in use by another application.'
        )
      } else {
        setCameraError(
          'Unable to open the camera. Please check camera permissions and try again.'
        )
      }

      setCameraLoading(false)
    }
  }

  function closeCamera() {
    stopCamera()
    setCameraError('')
  }

  function capturePhoto() {
    const video = videoRef.current

    if (!video?.videoWidth || !video?.videoHeight) {
      setCameraError('The camera is not ready yet. Please wait a moment.')
      return
    }

    const canvas = document.createElement('canvas')
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight

    const context = canvas.getContext('2d')

    if (!context) {
      setCameraError('Could not capture the photo. Please try again.')
      return
    }

    context.drawImage(video, 0, 0, canvas.width, canvas.height)

    setCapturedImage(canvas.toDataURL('image/jpeg', 0.9))
    setStatus('Photo captured. Review it before keeping the evidence.')
    stopCamera()
  }

  function keepPhoto() {
    if (!capturedImage) return

    try {
      const evidence = {
        id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
        image: capturedImage,
        capturedAt: new Date().toISOString(),
      }

      const existing = JSON.parse(
        sessionStorage.getItem('peekkavach-captured-evidence') || '[]'
      )

      sessionStorage.setItem(
        'peekkavach-captured-evidence',
        JSON.stringify([...existing, evidence])
      )

      setCapturedImage('')
      setStatus('Photo saved for this browser session.')
    } catch (error) {
      console.error('Could not save photo:', error)
      setStatus('Photo captured, but browser storage is full or unavailable.')
    }
  }

  function handleDocumentUpload(event) {
    const files = Array.from(event.target.files || [])
    if (!files.length) return

    setDocuments((previous) => [...previous, ...files])
    setStatus(`${files.length} supporting document(s) selected.`)
    event.target.value = ''
  }

  function handleBack() {
    stopCamera()
    onBack?.()
  }

  return (
    <main className="weather-page">
      <button className="weather-back-button" onClick={handleBack}>
        <ArrowLeft size={18} />
        Back to dashboard
      </button>

      <header className="weather-page-header">
        <h1>Weather &amp; Crop Protection</h1>
        <p>
          Capture crop damage and keep your insurance documents together.
        </p>
      </header>

      <section className="weather-feature-list">
        <button
          type="button"
          className="weather-feature-card"
          onClick={openCamera}
        >
          <span className="weather-feature-icon camera-feature-icon">
            <Camera size={28} />
          </span>

          <span className="weather-feature-content">
            <strong>Capture crop damage</strong>
            <small>
              Open your camera, photograph damaged crops, and review
              the captured evidence.
            </small>
          </span>

          <ImageIcon size={22} />
        </button>

        <button
          type="button"
          className="weather-feature-card"
          onClick={() => documentInputRef.current?.click()}
        >
          <span className="weather-feature-icon document-feature-icon">
            <FileUp size={28} />
          </span>

          <span className="weather-feature-content">
            <strong>Upload supporting documents</strong>
            <small>
              Select your insurance policy, premium receipt, claim
              acknowledgement, or relevant official notices.
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

        {/* Camera popup */}
        {cameraOpen && (
          <div
            className="weather-camera-overlay"
            onClick={(event) => {
              if (event.target === event.currentTarget) closeCamera()
            }}
          >
            <section
              className="weather-camera-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="weather-camera-title"
            >
              <div className="weather-camera-heading">
                <div>
                  <h2 id="weather-camera-title">Full field photo</h2>
                  <p>Live camera · Crop damage evidence</p>
                </div>

                <button
                  type="button"
                  className="weather-camera-close"
                  onClick={closeCamera}
                  aria-label="Close camera"
                >
                  <X size={20} />
                </button>
              </div>

              {cameraError ? (
                <div className="weather-camera-error" role="alert">
                  <AlertCircle size={20} />
                  <span>{cameraError}</span>
                </div>
              ) : (
                <>
                  {cameraLoading && (
                    <p className="weather-camera-loading">
                      Waiting for camera permission…
                    </p>
                  )}

                  <video
                    ref={videoRef}
                    className="weather-camera-video"
                    autoPlay
                    playsInline
                    muted
                  />

                  <p className="weather-camera-caption">
                    Camera ready. Frame your evidence and capture it.
                  </p>

                  <div className="weather-camera-actions">
                    <button
                      type="button"
                      className="weather-capture-button"
                      onClick={capturePhoto}
                      disabled={cameraLoading}
                    >
                      <Camera size={19} />
                      Capture photo
                    </button>
                  </div>
                </>
              )}

              {cameraError && (
                <div className="weather-camera-actions">
                  <button
                    type="button"
                    className="weather-capture-button"
                    onClick={openCamera}
                  >
                    <RotateCcw size={18} />
                    Try again
                  </button>

                  <button
                    type="button"
                    className="weather-cancel-button"
                    onClick={closeCamera}
                  >
                    Cancel
                  </button>
                </div>
              )}
            </section>
          </div>
        )}

        {/* Captured photo review */}
        {capturedImage && (
          <div className="weather-camera-overlay">
            <section
              className="weather-camera-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="weather-review-title"
            >
              <div className="weather-camera-heading">
                <div>
                  <h2 id="weather-review-title">Review captured photo</h2>
                  <p>Check the photo before saving it.</p>
                </div>

                <button
                  type="button"
                  className="weather-camera-close"
                  onClick={() => setCapturedImage('')}
                  aria-label="Close photo review"
                >
                  <X size={20} />
                </button>
              </div>

              <img
                className="weather-photo-preview"
                src={capturedImage}
                alt="Captured crop damage evidence"
              />

              <div className="weather-photo-actions">
                <button
                  type="button"
                  className="weather-capture-button"
                  onClick={keepPhoto}
                >
                  <CheckCircle2 size={18} />
                  Keep photo
                </button>

                <button
                  type="button"
                  className="weather-cancel-button"
                  onClick={openCamera}
                >
                  <RotateCcw size={18} />
                  Retake
                </button>
              </div>
            </section>
          </div>
        )}

        {status && (
          <p className="weather-upload-status" role="status">
            {status}
          </p>
        )}

        {documents.length > 0 && (
          <section className="weather-document-list">
            <h2>Selected supporting documents</h2>

            {documents.map((file, index) => (
              <div
                className="weather-document-item"
                key={`${file.name}-${index}`}
              >
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
