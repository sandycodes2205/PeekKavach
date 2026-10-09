# 🌾 PeekRaksha — 72-Hour Crop Loss Assistant

**Tagline:** *Amcha Saath, Tumcha Aadhar* (आमचा साथ, तुमचा आधार)

A Marathi-first, offline-capable Progressive Web App (PWA) designed to help farmers in Maharashtra prepare for crop-loss reporting, organize evidence, track the 72-hour reporting window, and navigate available reporting and escalation channels.

> **Our mission:** Help farmers move from “My crop is damaged” to “I have organized my evidence, know what to do next, and am ready to report my loss.”

---

## 📌 Table of Contents

1. [Problem Statement](#-problem-statement)
2. [Our Solution](#-our-solution)
3. [Target Users](#-target-users)
4. [Five Distinguishing Features](#-five-distinguishing-features)
5. [User Workflow](#-user-workflow)
6. [Core Pages and Modules](#-core-pages-and-modules)
7. [Technology Stack](#-technology-stack)
8. [System Architecture](#-system-architecture)
9. [Project Structure](#-project-structure)
10. [Installation and Setup](#-installation-and-setup)
11. [Data Model](#-data-model)
12. [Offline-First Design](#-offline-first-design)
13. [Privacy and Security](#-privacy-and-security)
14. [Testing and Demonstration](#-testing-and-demonstration)
15. [Current Implementation Status](#-current-implementation-status)
16. [Limitations](#-limitations)
17. [Future Scope](#-future-scope)
18. [Team Contributions](#-team-contributions)
19. [Impact](#-impact)

---

## 🚨 Problem Statement

Farmers in Maharashtra who experience localized crop damage due to hailstorms, unseasonal rainfall, waterlogging, strong winds, or post-harvest rainfall may need to report their losses within the applicable 72-hour window under the Pradhan Mantri Fasal Bima Yojana (PMFBY).

Although reporting channels exist, farmers may struggle to prepare the required enrollment details, collect useful photographic evidence, reach the appropriate reporting channel, and follow up on their report within the available time.

The challenges become more serious when farmers face:

- Limited digital literacy or language barriers.
- Unreliable internet connectivity in rural areas.
- Missing policy or enrollment information.
- Uncertainty about what photographs to capture.
- Busy helplines or difficulty accessing digital reporting channels.
- Confusion about the next step when their initial attempt fails.

Existing reporting channels provide ways to submit an intimation, but farmers also need support with preparation, evidence organization, deadline tracking, and fallback planning.

### The core problem

**Farmers have a limited reporting window, but lack a simple, guided tool that helps them organize the process from the moment crop damage occurs.**

*Note: Reporting requirements depend on the applicable scheme provisions and type of loss. The 72-hour workflow is intended to guide users, not determine claim eligibility.*

---

## 💡 Our Solution

PeekRaksha is a farmer-first Progressive Web App that provides a guided crop-loss incident workflow.

Farmers can maintain their crop and policy information, create a damage incident, capture and organize photographs, track a countdown, access reporting instructions, generate a fallback letter, and share relevant incident information with family members or other helpers.

The application is designed for Android smartphones through a mobile browser and can be installed on the home screen.

### What PeekRaksha does

- Helps farmers organize crop and policy information before an incident.
- Records the reported damage date and time.
- Tracks the configured reporting deadline.
- Guides users through structured evidence collection.
- Provides Marathi voice guidance where supported by the browser.
- Offers reporting and escalation instructions.
- Helps prepare a written fallback intimation letter.
- Stores incident records locally and supports offline workflows where implemented.

### What PeekRaksha does not claim to do

PeekRaksha is an assistance and preparation tool, not an official PMFBY submission platform.

It does not automatically register an insurance claim, guarantee acceptance of evidence, establish eligibility, or guarantee claim settlement.

---

## 👨‍🌾 Target Users

Our primary users are smallholder farmers in rural Maharashtra, including regions such as Vidarbha, Marathwada, and the Konkan belt.

| Attribute | Design consideration |
|---|---|
| Primary users | Smallholder farmers |
| Initial geography | Maharashtra, India |
| Primary language | Marathi |
| Device | Android smartphone with a compatible browser |
| Connectivity | May be unreliable or intermittent |
| Digital literacy | Designed for low-to-moderate digital literacy |
| Crops | Cotton, soybean, mango, and other insured crops |
| Secondary users | Family members, neighbours, agriculture assistants |

The interface emphasizes readable text, large touch targets, visual choices, guided instructions, and minimal typing.

---

## ⭐ Five Distinguishing Features

### 1. Evidence Strength Meter

**Problem:** Farmers may take random photographs without knowing whether they have documented their field and crop damage adequately.

**Our approach:** PeekRaksha guides farmers through a structured evidence checklist.

Recommended evidence items include:

- Wide-angle photograph of the field.
- Close-up photograph of the damaged crop.
- Photograph showing a recognizable landmark or location context.
- Short description of the damage.
- Additional photographs where useful.

The Evidence Strength Meter reflects checklist completion and helps the farmer identify missing items.

**Expected benefit:** More organized evidence collection and fewer forgotten steps.

The meter is a completeness indicator, not an insurance-company assessment or guarantee of claim acceptance.

### 2. Voice-First Marathi Mode

**Problem:** Reading instructions on a small screen can be difficult, particularly during a stressful incident.

**Our approach:** Provide a speaker button on important screens using the browser's Web Speech API.

The implementation uses `speechSynthesis` and requests the `mr-IN` locale when an appropriate Marathi voice is available.

Voice guidance can be provided for:

- Incident creation.
- Evidence-capture instructions.
- Reporting details.
- The script for contacting the helpline.
- Escalation instructions.

**Expected benefit:** Improved accessibility for Marathi-speaking farmers.

Voice availability depends on the device and browser. A readable text alternative remains available.

### 3. Storm-Eve Prepare Mode

**Problem:** Evidence collected only after a storm may not show the condition of the crop beforehand.

**Our approach:** A preparation screen encourages farmers to capture photographs of their healthy crops before an anticipated weather event.

The screen can display:

- A weather warning or demonstration alert.
- Instructions to capture before photographs.
- A checklist of crop and field views.
- Saved photographs for later reference.

Open-Meteo can optionally provide weather forecast data. A manual demonstration toggle can be used when live weather integration is unavailable.

**Expected benefit:** Better-organized before-and-after documentation.

Forecasts are informational and should not be presented as guarantees that damage will occur.

### 4. Panic-Proof Escalation Ladder

**Problem:** A farmer who cannot complete an initial reporting attempt may lose valuable time deciding what to do next.

**Our approach:** Display a visual escalation timeline based on the recorded incident deadline.

The proposed guidance is:

| Elapsed time | Suggested action |
|---|---|
| 0–24 hours | Attempt reporting through the designated helpline or applicable official channel |
| 24–48 hours | If unsuccessful, try another applicable channel, such as the official WhatsApp chatbot where available |
| 48–72 hours | Seek assistance from the relevant bank or agriculture office and prepare written documentation |

The interface highlights the current stage and provides the corresponding action.

**Expected benefit:** A clear next step when an initial reporting attempt fails.

These stages are a product-guidance model, not official government-mandated escalation deadlines. Farmers should attempt official reporting as early as possible rather than waiting for a later stage.

### 5. Neighbour and Family Share Pack

**Problem:** A farmer may need help from a family member, neighbour, or agriculture assistant to complete the reporting process.

**Our approach:** Prepare a shareable summary containing relevant incident details, the selected crop and plot, evidence references, the deadline, and the reporting status.

Depending on the available browser and implementation, the user can share the summary through WhatsApp or the device's native sharing interface.

**Expected benefit:** Easier coordination and assistance from trusted people nearby.

Sensitive policy details and photographs should only be shared with the farmer's consent.

---

## 🔄 User Workflow

The application follows a guided incident-management process.

```text
                  HOME PAGE
                      |
          +-----------+-----------+
          |                       |
     Crop Damage              Prepare Mode
          |                       |
          |                 Capture Before Photos
          |
     Select Crop / Plot
          |
     Record Damage Date
          |
     Select Damage Type
          |
     Create Incident
          |
     Start Deadline Countdown
          |
     Capture Evidence
          |
     Complete Evidence Checklist
          |
     Review Reporting Guidance
          |
     Attempt Official Reporting
          |
      +---+----------------+
      |                    |
   Reported             Unsuccessful
      |                    |
 Enter Ticket         Escalation Guidance
 Number                    |
      |               Alternate Channel
      |                    |
      +---------+----------+
                |
         Save Incident Record
                |
         Share Pack / Timeline
```

The actual official report must be made through an applicable official channel. Creating an incident inside PeekRaksha does not itself constitute official intimation.

---

## 📱 Core Pages and Modules

| Page | Purpose |
|---|---|
| Home | Primary damage-report action, weather preparation, and shortcuts |
| Farmer Profile | Store farmer, crop, plot, and policy details |
| Crop Damage | Record when and how the crop was damaged |
| Incident Details | Display the selected crop, plot, location, and countdown |
| Evidence Capture | Capture, preview, and organize photographs |
| Evidence Strength | Show checklist completion and missing items |
| Prepare Mode | Encourage before-damage photographs |
| Report Now | Display reporting instructions and contact actions |
| Escalation | Show the recommended next reporting step |
| Fallback Letter | Generate a written intimation document |
| Ticket and Timeline | Store the entered ticket number and follow-up information |
| Share Pack | Prepare a summary for family or other helpers |
| Reports | List current and previous incident records |
| Settings | Language, voice preferences, and local data management |

The initial implementation prioritizes the complete damage-report journey and the five distinguishing features.

---

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| React | Component-based user interface |
| Vite | Development server and production build |
| JavaScript | Application logic |
| HTML5 and CSS3 | Accessible, responsive interface |
| Progressive Web App APIs | Installable browser-based experience |
| Service Worker | Cache application resources for offline access |
| IndexedDB / Dexie | Local persistence for structured records and photographs |
| Media Capture APIs | Camera access and photograph capture |
| Geolocation API | Optional location metadata |
| Web Speech API | Marathi voice guidance where supported |
| jsPDF | On-device fallback letter generation |
| `tel:` links | Initiate a helpline call |
| WhatsApp deep links / Web Share API | Share instructions and incident summaries |
| Open-Meteo (optional) | Weather forecast integration |

### Architecture decision

The MVP is **PWA-first**, not a native Android application.

A backend is not required for the core demonstration. An optional backend may be introduced later for controlled share links, cloud synchronization, or other features that require server-side functionality.

---

## 🏗️ System Architecture

```text
+----------------------------------------------------+
|                  FARMER / HELPER                   |
|                 Android Browser                   |
+---------------------------+------------------------+
                            |
                            v
+----------------------------------------------------+
|              PEEKRAKSHA FRONTEND PWA               |
|                                                    |
| Home | Profile | Crop Damage | Evidence Capture    |
| Countdown | Report Now | Escalation | Share Pack   |
+---------------------------+------------------------+
                            |
              +-------------+-------------+
              |                           |
              v                           v
+---------------------------+  +---------------------+
| Browser Device APIs       |  | Offline PWA Layer   |
|                           |  |                     |
| Camera                    |  | Service Worker      |
| Geolocation               |  | Cached App Shell    |
| Speech Synthesis          |  | Offline Navigation  |
| Web Share                 |  |                     |
+---------------------------+  +----------+----------+
                                          |
                                          v
                               +----------------------+
                               | Local Data Storage   |
                               |                      |
                               | IndexedDB / Dexie    |
                               | Farmer Profile       |
                               | Policies / Plots     |
                               | Incidents / Photos   |
                               | Tickets / Notes      |
                               +----------+-----------+
                                          |
                             When required and online
                                          |
                                          v
                               +----------------------+
                               | Optional Services    |
                               |                      |
                               | Open-Meteo           |
                               | Share-link Backend   |
                               | Optional Cloud Sync  |
                               +----------------------+

External actions:
- Official crop-insurance helpline
- Applicable official reporting channels
- WhatsApp chatbot, where available
- Bank / agriculture office
- Family / neighbour / helper
```

The local application is the primary workflow engine. Optional external services should not be required for core incident creation, evidence organization, and deadline display.

---

## 📂 Project Structure

The proposed source structure is:

```text
peekraksha/
├── public/
│   ├── icons/
│   └── manifest.webmanifest
├── src/
│   ├── app/
│   │   └── routes.jsx
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Sidebar.jsx
│   │   ├── Countdown.jsx
│   │   ├── EvidenceMeter.jsx
│   │   └── VoiceButton.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── CropDamage.jsx
│   │   ├── EvidenceCapture.jsx
│   │   ├── ReportNow.jsx
│   │   ├── Escalation.jsx
│   │   ├── FallbackLetter.jsx
│   │   ├── SharePack.jsx
│   │   ├── Reports.jsx
│   │   └── Settings.jsx
│   ├── services/
│   │   ├── storage.js
│   │   ├── camera.js
│   │   ├── timer.js
│   │   └── sharing.js
│   ├── data/
│   │   └── demoFarmer.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

This is the intended organization; files may differ in the current repository.

---

## 🚀 Installation and Setup

### Prerequisites

- Node.js and npm.
- Git.
- A modern desktop or mobile browser.
- A smartphone for camera, voice, and installation testing.

### 1. Clone the repository

Replace the placeholder URL with the actual GitHub repository URL.

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd peekraksha
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open the local URL printed by Vite, typically:

```text
http://localhost:5173
```

### 4. Build for production

```bash
npm run build
```

### 5. Preview the production build

```bash
npm run preview
```

### 6. Test on a smartphone

Deploy the application over HTTPS or use a secure local development setup. Camera and geolocation APIs generally require a secure context, such as HTTPS or localhost.

On a supported browser, use **Add to Home Screen** or **Install app** to install the PWA.

> Installation, offline operation, and individual browser APIs must be verified against the actual implementation and target device.

---

## 🗃️ Data Model

The application uses a local-first data model.

### Farmer Profile

| Field | Description |
|---|---|
| `id` | Local profile identifier |
| `name` | Farmer's name |
| `village` | Village |
| `district` | District |
| `language` | Preferred language |

### Policies and Plots

| Field | Description |
|---|---|
| `id` | Local policy or plot identifier |
| `crop` | Crop name |
| `season` | Crop season |
| `plot_no` | Plot number |
| `insurer` | Insurance company |
| `enrollment_no` | Enrollment or policy reference |

### Incident

| Field | Description |
|---|---|
| `id` | Unique local incident identifier |
| `policy_id` | Associated policy or plot |
| `peril` | Reported cause of damage |
| `occurred_at` | Reported damage date/time |
| `deadline_at` | Configured reporting deadline |
| `status` | Current incident workflow status |
| `note` | Optional description |

### Evidence Photo

| Field | Description |
|---|---|
| `id` | Photo identifier |
| `incident_id` | Associated incident |
| `blob` | Locally stored image data |
| `lat` | Optional latitude |
| `lng` | Optional longitude |
| `taken_at` | Recorded capture time |

### Report Record

| Field | Description |
|---|---|
| `id` | Local report-record identifier |
| `incident_id` | Associated incident |
| `channel` | Reporting channel used |
| `ticket_no` | Ticket number entered by the farmer |
| `reported_at` | Reported submission time |

These records support local tracking and do not establish that an insurer has received or accepted a claim.

---

## 📴 Offline-First Design

Rural connectivity may be unreliable, particularly during severe weather.

PeekRaksha is designed to support core workflows without requiring a constant internet connection.

### Intended offline capabilities

- Load previously cached application resources.
- View previously saved farmer and policy information.
- Create and update local incident records.
- Save captured photographs locally.
- Display a countdown calculated from the saved deadline.
- Generate a fallback letter locally, if the required font and PDF libraries are available.
- Continue preparing evidence and reporting information.

### Operations that may require connectivity

- Retrieving current weather forecasts.
- Opening external websites or messaging services.
- Sharing through online channels.
- Uploading evidence to optional cloud storage.
- Synchronizing data with an optional backend.

Offline functionality must be tested in airplane mode. External calls and message delivery cannot be guaranteed while disconnected.

---

## 🔐 Privacy and Security

Farmers may store sensitive policy information and photographs in the application.

Our design principles include:

- Store personal and policy data locally by default.
- Do not collect Aadhaar numbers.
- Avoid storing full bank account numbers.
- Request camera and location permissions only when needed.
- Allow farmers to review and remove their locally stored information.
- Request consent before sharing photographs or personal details.
- Avoid transmitting evidence to a backend unless the user-facing functionality requires it and the user is informed.
- Clearly explain that timestamps and GPS metadata are supporting context, not independently verified official evidence.

Browser storage is device-local, not equivalent to encrypted secure storage. Users should protect their devices and avoid sharing sensitive information unnecessarily.

---

## 🧪 Testing and Demonstration

### Essential test cases

| Test | Expected result |
|---|---|
| Create a damage incident | Incident details and deadline are saved |
| Refresh the application | Existing incident and countdown are restored |
| Deny camera permission | The user receives a clear explanation and can continue where possible |
| Capture a photograph | Image is previewed and associated with the incident |
| Capture without GPS | Photograph can still be saved |
| Complete evidence checklist | Meter updates according to checklist completion |
| Activate Marathi voice | Instructions are read when a suitable voice is available |
| Open Report Now | Correct reporting instructions and external actions are displayed |
| Simulate a failed reporting attempt | Escalation guidance is available |
| Generate a fallback letter | A locally generated document is produced if implemented |
| Enable airplane mode | Previously cached and saved workflows remain usable |
| Share an incident | A summary is prepared for the chosen sharing channel |

### Suggested two-minute demo

**0–15 seconds:** Introduce the 72-hour reporting challenge and PeekRaksha.

**15–30 seconds:** Show the farmer profile and saved crop/plot details.

**30–60 seconds:** Select Crop Damage, create an incident, start the countdown, and capture evidence.

**60–80 seconds:** Demonstrate the Evidence Strength Meter and Marathi voice guidance.

**80–100 seconds:** Open Report Now, demonstrate the reporting instructions, and show the escalation ladder.

**100–120 seconds:** Show the fallback letter, ticket timeline, or Share Pack, depending on which features are working reliably.

Use demonstration data rather than exposing real farmers' policy information.

---

## 📊 Current Implementation Status

**This section must reflect the actual repository at submission time.** A proposed architecture or UI mockup is not proof that a feature is implemented.

Use the following checklist and update it before evaluation.

- [ ] React + Vite application runs successfully.
- [ ] Responsive Home page is implemented.
- [ ] Farmer profile and crop/plot selection work.
- [ ] Damage incident creation and deadline calculation work.
- [ ] Countdown survives page refresh.
- [ ] Camera capture and photograph persistence work.
- [ ] Evidence Strength Meter responds to checklist changes.
- [ ] Marathi voice guidance works on the demonstration device.
- [ ] Prepare Mode is implemented.
- [ ] Reporting instructions and external links work.
- [ ] Escalation guidance is implemented.
- [ ] Fallback letter generation works offline.
- [ ] Ticket and timeline records can be saved.
- [ ] Share Pack is implemented.
- [ ] PWA installation and offline behavior are tested.
- [ ] Production build completes successfully.

Do not mark an item complete until it has been tested.

---

## ⚠️ Limitations

PeekRaksha is an early-stage prototype intended to demonstrate a farmer-side workflow.

1. **No official submission integration:** The application does not directly submit claims to PMFBY or an insurer.
2. **No guaranteed claim acceptance:** Evidence organization does not guarantee that an insurer will accept photographs or other records.
3. **Browser compatibility:** Camera, geolocation, speech synthesis, sharing, and installation capabilities vary by browser and device.
4. **Weather uncertainty:** Forecasts are informational and cannot guarantee local conditions or crop damage.
5. **Deadline accuracy:** The deadline is based on recorded incident information and the configured reporting rule. Users must verify the applicable requirements through official channels.
6. **No guaranteed cloud backup:** Locally stored records may be lost if browser data is cleared, storage is removed, or the device is lost.
7. **No verified insurance status:** A locally saved ticket number does not mean the application has verified the official reporting record.
8. **Language validation:** Marathi wording and voice guidance require testing with actual users.

The project does not claim a measured reduction in rejected claims because this prototype has not established such an outcome.

---

## 🔮 Future Scope

Potential future improvements include:

- Optional encrypted cloud synchronization and recovery.
- Secure, expiring evidence-sharing links.
- Weather alerts tailored to the farmer's location.
- Improved Marathi and other regional-language support.
- User-tested accessibility improvements.
- Better incident history and follow-up reminders.
- Partnerships with farmer producer organizations, cooperative banks, and agriculture offices.
- Verified integrations with official systems if suitable APIs and authorization become available.
- Field testing with farmers to measure usability and reporting preparedness.

These are future possibilities, not claims about the current implementation.

---

## 👥 Team Contributions

The project is being developed collaboratively by three team members.

| Team member | Primary responsibility |
|---|---|
| Member 1 | Frontend UI, Home page, Crop Damage workflow, profile and responsive design |
| Member 2 | Camera capture, evidence management, local persistence and offline PWA behavior |
| Member 3 | Countdown, Marathi voice guidance, reporting, escalation, fallback letter and sharing |

Replace these generic roles with actual team members' names and describe any changes in responsibility before submission.

---

## 🌱 Expected Impact

PeekRaksha aims to reduce confusion during a stressful crop-loss incident by bringing the farmer's information, evidence checklist, reporting instructions, and deadline into one accessible interface.

Its value lies in supporting the steps around official reporting:

- **Prepare** information before a loss occurs.
- **Capture** organized evidence after damage.
- **Track** the reporting window.
- **Guide** the farmer toward an appropriate reporting channel.
- **Escalate** when an attempt fails.
- **Share** information with trusted helpers.

The intended outcome is a more organized and accessible crop-loss reporting experience, especially for Marathi-speaking farmers operating with limited connectivity.

---

## 📜 Disclaimer

PeekRaksha is an independent assistance prototype and is not an official government application or PMFBY portal.

Farmers should verify current reporting requirements, applicable deadlines, and authorized reporting channels with the relevant government department, insurer, or official helpline.

The application does not guarantee insurance eligibility, claim acceptance, or settlement.

---

## ❤️ Built for Farmers

**PeekRaksha — Amcha Saath, Tumcha Aadhar**

*Supporting farmers with preparation, evidence, time awareness, and a clearer next step when crop damage occurs.*