# 🌾 PeekRaksha — 72-Hour Crop Loss Assistant

**Tagline:** *Amcha Saath, Tumcha Aadhar* (आमचा साथ, तुमचा आधार)

**From crop damage to a clearer next step.**

PeekRaksha is a Marathi-first, mobile-first Progressive Web App (PWA) prototype designed to help farmers in Maharashtra organize crop-loss incidents, prepare photographic evidence, track reporting deadlines, and navigate applicable official reporting channels.

Built as a six-hour hackathon MVP, PeekRaksha demonstrates the first version of a broader product vision: a reliable, accessible crop-loss assistance platform that can eventually support farmers, agricultural institutions, and other stakeholders without replacing official insurance systems.

> **Our mission:** Help farmers move from “My crop is damaged” to “I have organized my evidence, understand my next step, and am ready to report my loss.”

---

## 📌 Table of Contents

1. [Executive Summary](#-executive-summary)
2. [Problem Statement](#-problem-statement)
3. [Evidence and Problem Validation](#-evidence-and-problem-validation)
4. [Our Solution](#-our-solution)
5. [Target Users](#-target-users)
6. [Five Core Features](#-five-core-features)
7. [User Workflow](#-user-workflow)
8. [Technology Stack](#-technology-stack)
9. [System Architecture](#-system-architecture)
10. [The Six-Hour MVP Strategy](#-the-six-hour-mvp-strategy)
11. [Project Structure](#-project-structure)
12. [Installation and Setup](#-installation-and-setup)
13. [Data Model](#-data-model)
14. [Offline-First Design](#-offline-first-design)
15. [Privacy and Security](#-privacy-and-security)
16. [Testing and Validation](#-testing-and-validation)
17. [Current Implementation Status](#-current-implementation-status)
18. [From Prototype to Startup](#-from-prototype-to-startup)
19. [Challenges in Scaling](#-challenges-in-scaling)
20. [Business and Sustainability Model](#-business-and-sustainability-model)
21. [Limitations and Risk Management](#-limitations-and-risk-management)
22. [Future Roadmap](#-future-roadmap)
23. [Team Contributions](#-team-contributions)
24. [Expected Impact and Success Metrics](#-expected-impact-and-success-metrics)
25. [References and Live Evidence](#-references-and-live-evidence)
26. [Disclaimer](#-disclaimer)

---

## 1. Executive Summary

Crop damage can create an urgent problem for farmers. Depending on the type of loss and applicable insurance provisions, the farmer may need to notify an authorized channel, collect relevant evidence, provide crop and policy details, and follow up on the report.

However, knowing that a reporting channel exists is not the same as knowing how to use it effectively during a stressful incident.

PeekRaksha addresses the farmer-side preparation and navigation problem.

The prototype brings together:

- Structured crop-damage incident recording.
- A configurable 72-hour reporting countdown.
- Guided photographic evidence collection.
- Marathi voice assistance where supported.
- Reporting and escalation guidance.
- Fallback documentation and incident tracking.
- A mobile-first interface designed for potentially unreliable connectivity.

The project was developed within a six-hour hackathon constraint. Its initial goal was to demonstrate the essential user journey, not to build a complete insurance platform.

The startup vision is to evolve the prototype through farmer interviews, field testing, secure data architecture, verified official guidance, accessibility improvements, and institutional partnerships.

**Product boundary:** PeekRaksha assists with preparation and navigation. Creating an incident inside the app is not an official claim submission, and the app cannot guarantee eligibility, claim acceptance, or settlement.

---

## 2. Problem Statement

Farmers experiencing crop damage from events such as hailstorms, localized flooding, inundation, or specified post-harvest weather events may need to follow particular reporting procedures.

Under the relevant PMFBY operational provisions, certain localized calamity and post-harvest loss cases require immediate intimation within 72 hours. The applicable rules depend on the type of loss and the scheme provisions in force.

The process can involve several separate tasks:

- Identifying the appropriate reporting channel.
- Locating crop, plot, and policy information.
- Recording when and where the damage occurred.
- Photographing the affected field and crop.
- Providing the necessary incident details.
- Keeping track of reporting attempts and reference numbers.
- Knowing what to do if the first attempt is unsuccessful.

These activities can become difficult when the farmer is under stress, has limited digital experience, or cannot depend on a stable internet connection.

### The core problem

**How might we help farmers organize the steps surrounding crop-loss reporting without requiring them to navigate multiple sources of information independently?**

PeekRaksha is designed to address this specific problem.

It does not assume that every farmer faces the same difficulties, nor does it claim that an app alone can resolve the administrative, eligibility, assessment, or settlement challenges of crop insurance.

---

## 3. Evidence and Problem Validation

Our problem framing is informed by official scheme documentation and published reporting about agricultural losses and crop-insurance administration.

### Evidence 1: Unseasonal rainfall and crop losses

**Source:** Reuters, October 28, 2025

The report describes how late-season rainfall damaged Indian crops, including soybean and cotton, affecting expected production and farmers' incomes.

Link: https://www.reuters.com/business/environment/monsoon-promise-turns-sour-indias-crops-ruined-by-late-downpours-2025-10-28/

**Product implication:** Farmers need practical support that can be used during a crop-loss incident, rather than an app that only provides general agricultural information.

### Evidence 2: The 72-hour reporting requirement

**Source:** PMFBY Revised Operational Guidelines

The relevant guidelines specify immediate intimation within 72 hours for the covered localized calamity and post-harvest loss procedures. They also describe applicable reporting channels and required information.

Link: https://pmfby.gov.in/pdf/Revised_Operational_Guidelines.pdf

**Product implication:** Incident timestamps, deadline awareness, evidence organization, and reporting guidance are core product features.

The 72-hour timer is a guidance mechanism. It must not be presented as a universal deadline for every type of crop loss.

### Evidence 3: Crop-insurance claim integrity

**Source:** The Indian Express, January 22, 2025

The newspaper reported that Maharashtra's agriculture department had identified 4.14 lakh allegedly bogus crop-insurance claims submitted in 2024.

Link: https://indianexpress.com/article/cities/mumbai/maharashtra-agriculture-dept-finds-4-14-lakh-bogus-crop-insurance-claims-9792163/

**Product implication:** A future platform must distinguish farmer-entered details from verified information, preserve evidence provenance, protect against misuse, and avoid implying that completing a checklist proves a claim is genuine.

### Evidence 4: Crop insurance involves formal assessment

**Source:** Press Information Bureau, July 24, 2026

The government explains that PMFBY generally uses area-level yield assessment for many claims, while specified localized calamities and post-harvest losses follow individual-farm assessment procedures.

Link: https://www.pib.gov.in/PressReleasePage.aspx?PRID=2289028&lang=2&reg=48

**Product implication:** Evidence preparation is useful, but it does not replace official inspection, eligibility checks, yield assessment, or administrative decisions.

### Evidence 5: Official reporting channels already exist

**Source:** Official PMFBY portal

The PMFBY portal lists the Krishi Rakshak Portal and Helpline, 14447, for crop-loss reporting and grievances.

Link: https://pmfby.gov.in/pmfbyDashboard

**Product implication:** PeekRaksha should help farmers navigate existing authorized channels rather than attempt to become an unofficial substitute for them.

### What this evidence establishes

These sources establish that crop loss, time-sensitive reporting requirements, evidence-related procedures, and formal insurance administration are real parts of the agricultural ecosystem.

They do not establish that PeekRaksha has already reduced reporting delays or improved claim outcomes. Those are hypotheses that must be tested with actual users.

---

## 4. Our Solution

PeekRaksha is a farmer-side crop-loss assistance tool.

It organizes the steps before and around official reporting into a single guided experience.

### What the prototype aims to provide

1. **Prepare:** Keep relevant crop and plot information organized.
2. **Record:** Create an incident with a damage date, time, location, and description.
3. **Document:** Guide the collection of field and crop photographs.
4. **Track:** Display the configured reporting deadline.
5. **Navigate:** Present reporting instructions and applicable official channels.
6. **Follow up:** Store farmer-entered reporting details and reference numbers.
7. **Coordinate:** Prepare a summary that can be shared with a trusted helper.

### What PeekRaksha does not do

- It does not independently determine insurance eligibility.
- It does not submit an official claim merely because an incident is created.
- It does not verify insurer receipt of a report.
- It does not replace official crop inspection or assessment.
- It does not guarantee claim acceptance, compensation, or settlement.
- It does not claim that photographs captured by the app are automatically accepted as official evidence.

---

## 5. Target Users

| User group | Primary need |
|---|---|
| Smallholder farmers | Simple instructions and incident organization |
| Marathi-speaking farmers | Accessible local-language guidance |
| Farmers with intermittent connectivity | Ability to prepare and save information offline |
| Family members and neighbours | Consent-based assistance with reporting preparation |
| Agriculture assistants | Structured information to help farmers navigate next steps |
| Future institutional partners | A potential farmer-support workflow that complements existing systems |

### Initial market

The initial target geography is rural Maharashtra, with potential pilot locations across Vidarbha, Marathwada, and the Konkan region.

These are proposed pilot regions, not locations where the product has already been deployed.

### Design principles

- Marathi-first language support.
- Readable text and large touch targets.
- Minimal typing and clear progress indicators.
- Visual evidence-capture instructions.
- A clear distinction between saved information and officially submitted information.
- Graceful behavior when network access or browser permissions are unavailable.

---

## 6. Five Core Features

### 6.1 Evidence Strength Meter

Guides the farmer through a structured checklist:

- Full-field photograph.
- Close-up of the damaged crop.
- Recognizable landmark or location-context photograph.
- Written description of the damage.

The meter indicates checklist completeness. It is not an insurer's evidence-quality score and does not establish claim validity.

### 6.2 Marathi Voice Assistance

Uses browser speech synthesis to read selected instructions in Marathi when a suitable voice is available.

Potential use cases include incident creation, evidence capture, reporting instructions, and escalation guidance.

Voice availability depends on the browser and device. Text alternatives must remain available.

### 6.3 Storm-Eve Prepare Mode

Encourages farmers to organize crop and field information before anticipated adverse weather.

Where supported, the feature may display forecast information from Open-Meteo and allow farmers to record before-event photographs.

Forecasts are informational. A weather alert is not a guarantee of crop damage or a prediction of insurance eligibility.

### 6.4 Guided Reporting and Escalation

Presents the applicable reporting instructions, relevant official contact options, and suggested follow-up steps.

The interface should encourage prompt reporting and should never imply that a farmer must wait until a later stage before contacting an official channel.

Any staged escalation timeline is product guidance, not a government-mandated schedule.

### 6.5 Family and Helper Share Pack

Prepares a summary of relevant incident details, evidence references, the configured deadline, and the farmer-entered reporting status.

Sharing occurs only with the farmer's consent. Sensitive information should be excluded by default unless it is necessary and explicitly selected.

---

## 7. User Workflow

```text
                    HOME PAGE
                        |
            +-----------+-----------+
            |                       |
       Crop Damage              Prepare Mode
            |                       |
      Select Crop / Plot      Capture Before Photos
            |
      Record Date and Time
            |
      Record Damage Location
            |
      Create Incident
            |
      Start Deadline Countdown
            |
      Capture Photographic Evidence
            |
      Complete Evidence Checklist
            |
      Review Reporting Guidance
            |
      Contact Applicable Official Channel
            |
       Record Reporting Attempt
            |
      +-----+-----------------+
      |                       |
  Reference Saved        Attempt Unsuccessful
      |                       |
  Track Follow-up       Review Alternate Channels
      |                       |
      +-----------+-----------+
                  |
          Save Incident History
                  |
          Generate Summary / Letter
```

Creating an incident in PeekRaksha is a local preparation action, not an official submission.

---

## 8. Technology Stack

| Technology | Purpose |
|---|---|
| React | Component-based user interface |
| Vite | Development server and build tooling |
| JavaScript | Application logic |
| HTML5 and CSS3 | Responsive interface |
| PWA APIs | Installable browser experience |
| Service Worker | Application resource caching, where configured |
| IndexedDB / Dexie | Structured local persistence, where implemented |
| Media Capture APIs | Camera access |
| Geolocation API | Optional location metadata |
| Web Speech API | Marathi voice assistance where supported |
| jsPDF | Local document generation, where implemented |
| Web Share API and WhatsApp links | Consent-based sharing |
| `tel:` links | Initiate phone calls |
| Open-Meteo | Optional weather forecasts |

The exact dependency list and implementation status must be confirmed against the current repository.

### Why a PWA?

We selected a Progressive Web App for the initial prototype because it supports a browser-based mobile experience without requiring a separate native Android application.

For a six-hour build, React and Vite allowed us to focus on the user journey, interface, and core interactions.

A PWA is a prototype-stage choice, not a claim that it is always superior to a native application. The appropriate production platform will depend on field testing, device compatibility, offline requirements, and maintenance costs.

---

## 9. System Architecture

```text
                  FARMER / HELPER
                         |
                         v
              REACT-BASED PWA
                         |
        +----------------+----------------+
        |                |                |
        v                v                v
   Incident UI      Evidence UI      Reporting UI
        |                |                |
        +----------------+----------------+
                         |
                         v
                APPLICATION SERVICES
                         |
              +----------+----------+
              |                     |
              v                     v
       Local Data Layer       Browser APIs
       IndexedDB / Dexie      Camera / Speech
       where implemented      Location / Share
              |
              v
       Saved Incidents
       Photos and Notes
       Follow-up Records
              |
              | When connectivity is required
              v
       Optional External Services
       Weather API
       Authorized Reporting Channels
       Future Backend / Cloud Sync
```

### Architectural principle

The initial product should keep core incident preparation independent of optional external services wherever possible.

A future backend may provide synchronization, authenticated access, backup, audit records, or authorized institutional integrations.

Official reporting remains a separate action unless a verified and authorized integration is developed.

---

## 10. The Six-Hour MVP Strategy

The hackathon imposed a strict time constraint. Our goal was to demonstrate the essential user journey rather than build every component of a production platform.

### Why we prioritized a focused prototype

Under a six-hour deadline, attempting to build a complete insurance workflow, backend, authentication system, native mobile application, and official integrations would introduce unnecessary complexity and integration risk.

We instead focused on a small number of user-facing capabilities that demonstrate the product's central idea.

| Priority | Reason |
|---|---|
| Incident creation | Establishes the core crop-loss workflow |
| Deadline awareness | Makes time sensitivity visible |
| Structured evidence capture | Gives the user an actionable checklist |
| Reporting instructions | Connects the prototype to real-world next steps |
| Local-first design | Reduces dependence on continuous connectivity |
| Modular React UI | Allows future improvements without redesigning the entire application |

### What the prototype proves

A working demonstration can show that a guided crop-loss workflow is technically feasible and that the proposed interaction can be represented in a mobile-first interface.

### What the prototype does not yet prove

- That farmers can use it independently.
- That every browser supports every feature.
- That the reporting guidance is correct for every policy and loss type.
- That it reduces reporting time or improves claim outcomes.
- That the architecture is ready for thousands of concurrent users.
- That institutional partners will adopt or pay for it.

This distinction is central to our development strategy: demonstrate feasibility first, validate usability next, and scale only after evidence supports the decision.

---

## 11. Project Structure

The intended modular structure is:

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
│   │   └── Reports.jsx
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

This is the intended architecture. Actual filenames and modules may differ from the current implementation.

---

## 12. Installation and Setup

### Prerequisites

- Node.js and npm.
- Git.
- A modern browser.
- An Android smartphone for mobile and camera testing.

### Clone the repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd peekraksha
```

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open the URL displayed by Vite, typically `http://localhost:5173`.

### Create a production build

```bash
npm run build
```

### Preview the build

```bash
npm run preview
```

Camera access, geolocation, installation, and other browser APIs must be tested in an appropriate secure context, generally HTTPS or localhost.

---

## 13. Data Model

The proposed local-first data model contains the following entities.

### Farmer Profile

- `id`
- `name`
- `village`
- `district`
- `language`

### Policy and Plot

- `id`
- `crop`
- `season`
- `plot_no`
- `insurer`
- `enrollment_no`

### Incident

- `id`
- `policy_id`
- `peril`
- `occurred_at`
- `deadline_at`
- `status`
- `note`

### Evidence Photo

- `id`
- `incident_id`
- `blob`
- `lat`
- `lng`
- `taken_at`

### Report Record

- `id`
- `incident_id`
- `channel`
- `ticket_no`
- `reported_at`

These are proposed data structures, not a statement that every field is already implemented.

A farmer-entered ticket number or timestamp is not equivalent to a verified official record.

---

## 14. Offline-First Design

Rural connectivity can be intermittent. PeekRaksha therefore prioritizes local preparation wherever feasible.

### Intended offline capabilities

- Load cached application resources.
- Access previously saved incident information.
- Record new incidents locally.
- Save evidence locally.
- Display a countdown from a stored deadline.
- Prepare documentation when required libraries and fonts are available.

### Connectivity-dependent operations

- Fetch current weather forecasts.
- Open external websites.
- Contact remote reporting services.
- Share information through online channels.
- Synchronize with a future cloud backend.

Offline operation must be verified through actual airplane-mode testing. Local browser storage is not a substitute for a reliable backup system.

---

## 15. Privacy and Security

A production version may handle sensitive farmer, policy, location, and photographic information.

Our design principles are:

- Collect only information necessary for the selected workflow.
- Avoid collecting Aadhaar numbers.
- Do not store unnecessary bank account details.
- Request camera and location permissions only when needed.
- Clearly explain what information is stored and shared.
- Obtain consent before sharing incident information.
- Separate locally saved data from information verified by an official source.
- Provide a way to review and delete locally stored records.
- Introduce appropriate authentication, access controls, and encryption before enabling sensitive cloud synchronization.

Browser storage is not inherently secure against device compromise. Production deployment requires a formal privacy and security review.

---

## 16. Testing and Validation

### Essential functional tests

| Test | Expected result |
|---|---|
| Create an incident | Incident details are saved |
| Refresh the app | Saved incident and countdown are restored |
| Deny camera access | The app explains the limitation and offers alternatives where possible |
| Capture a photograph | The image is previewed and associated with the correct incident |
| Capture without GPS | Photograph storage remains possible |
| Complete checklist items | The evidence completeness indicator updates |
| Use voice assistance | Instructions play when supported |
| Open reporting guidance | The correct instructions and official links appear |
| Record a failed attempt | The user can access follow-up guidance |
| Generate a letter | A document is produced if the feature is implemented |
| Use airplane mode | Previously cached and saved workflows remain available |
| Share a summary | Only the selected information is shared |

### User validation plan

The next validation stage should involve a small, consent-based pilot with farmers and, where possible, agriculture assistants.

We should observe whether users can:

1. Understand the purpose of the app.
2. Create an incident without assistance.
3. Capture the intended evidence.
4. Find the relevant official reporting instructions.
5. Explain the difference between a saved incident and an official report.
6. Complete the workflow on a low-end smartphone.
7. Recover from connectivity or permission failures.

We should record task completion, time taken, mistakes, assistance required, and user feedback.

No user-validation result should be claimed until the test has actually been conducted.

---

## 17. Current Implementation Status

The project is an early-stage prototype. This checklist must be updated based on the actual code and demonstration.

- [ ] React + Vite application builds successfully.
- [ ] Responsive Home page works.
- [ ] Farmer profile and crop/plot selection work.
- [ ] Damage incident creation works.
- [ ] Deadline calculation and restoration work.
- [ ] Camera capture and persistence work.
- [ ] Evidence checklist updates correctly.
- [ ] Marathi voice assistance works on the target device.
- [ ] Prepare Mode works.
- [ ] Reporting instructions and links are verified.
- [ ] Escalation guidance is available.
- [ ] Fallback letter generation works.
- [ ] Ticket and timeline records persist.
- [ ] Share Pack works with user consent.
- [ ] PWA installation is tested.
- [ ] Offline behavior is tested.
- [ ] Production build completes successfully.

Only mark features complete after verifying them in the running application.

---

## 18. From Prototype to Startup

Our startup vision is not simply to add more screens to the PWA.

It is to evolve from a farmer-side workflow prototype into a reliable crop-loss assistance platform that can be validated in the field and integrated responsibly into the agricultural ecosystem.

### Stage 1: Stabilize the MVP

**Objective:** Make the existing workflow dependable.

- Fix interface and navigation errors.
- Verify deadline calculations.
- Test image persistence.
- Check all reporting links.
- Confirm browser compatibility.
- Add clear error and recovery states.
- Test offline behavior on real devices.

**Exit condition:** The complete demonstration workflow passes documented tests.

### Stage 2: Validate with farmers

**Objective:** Establish whether the product solves a real user problem.

- Conduct interviews with farmers from the intended pilot area.
- Observe existing crop-loss reporting practices.
- Test Marathi wording with native speakers.
- Evaluate whether the evidence checklist is understandable.
- Identify barriers that an app cannot solve independently.
- Compare self-service and assisted-use workflows.

**Exit condition:** Documented user feedback, usability findings, and an evidence-based product backlog.

### Stage 3: Build a dependable production architecture

**Objective:** Introduce the engineering capabilities needed for real-world use.

Potential additions include:

- Secure backend APIs.
- Authentication and role-based access.
- Encrypted data transfer and appropriately protected storage.
- Backup and recovery.
- Auditable reporting-attempt records.
- Versioned reporting rules and guidance.
- Image compression and storage lifecycle management.
- Monitoring, error reporting, and automated testing.
- Optional cloud synchronization with explicit consent.

**Exit condition:** A reviewed architecture with security, reliability, and recovery requirements tested before handling real sensitive data at scale.

### Stage 4: Run a controlled pilot

**Objective:** Test the product in actual agricultural workflows.

- Work with a suitable local farmer group or agricultural institution.
- Train a limited group of users.
- Provide a clear support and feedback process.
- Test low-connectivity scenarios.
- Measure completion and error rates.
- Review guidance accuracy with qualified domain stakeholders.

**Exit condition:** Pilot findings that support a decision to improve, expand, or change the product.

### Stage 5: Scale responsibly

**Objective:** Expand only after the pilot supports the product's value.

- Add additional districts and languages.
- Improve low-end device performance.
- Establish support and incident-response processes.
- Develop authorized institutional partnerships.
- Assess integration opportunities with official systems.
- Introduce operational monitoring and service-level targets.
- Establish sustainable funding and governance.

**Exit condition:** Demonstrated usability, a supportable operating model, reliable technical performance, and appropriate institutional arrangements.

---

## 19. Challenges in Scaling

A startup must plan for challenges that do not appear in a six-hour prototype.

| Challenge | Why it matters | Planned response |
|---|---|---|
| Connectivity | Users may be offline during or after an incident | Local-first workflows, retry handling, and explicit sync status |
| Data loss | Device loss or browser-data deletion can destroy records | Optional encrypted backup and recovery |
| Evidence integrity | Images and timestamps can be incomplete or manipulated | Preserve original files where feasible, record provenance, and distinguish unverified metadata |
| Privacy | Policy and location details are sensitive | Data minimization, consent, access controls, and secure storage |
| Reporting-rule changes | Requirements may change by scheme, loss type, or season | Versioned guidance reviewed against official sources |
| Language and accessibility | Literal translations may be confusing or inaccurate | Native-speaker testing and assisted-use research |
| Browser fragmentation | Camera, speech, storage, and sharing vary by device | Compatibility testing and graceful fallbacks |
| Image storage costs | Photographs consume substantial device and cloud storage | Image optimization, storage limits, and retention controls |
| Official integration | Government and insurer systems may lack public APIs or require authorization | Begin with verified links and approved channels; pursue formal integration only when available |
| Trust | Farmers may mistake the app for an official insurance portal | Clear product identity, visible disclaimers, and transparent status labels |
| Fraud and misuse | Shared or falsified information can cause harm | Preserve provenance and avoid presenting app-generated information as verified evidence |
| Support and maintenance | Users may need help outside a demonstration | Defined support procedures, training, and operational ownership |

These are anticipated challenges and proposed mitigations, not evidence that they have already been solved.

---

## 20. Business and Sustainability Model

PeekRaksha should first validate its usefulness to farmers before committing to a business model.

Potential future models include:

### Institutional partnerships

Agricultural organizations, farmer producer organizations, cooperatives, or other suitable institutions could sponsor access, training, or deployment for a defined group of farmers.

### Sponsored deployments

An authorized institution could support a regional implementation with appropriate training, maintenance, and support arrangements.

### Implementation and support services

Future revenue could come from configuring, deploying, maintaining, and supporting institution-specific workflows, subject to procurement and partnership requirements.

### What we would avoid

- Charging distressed farmers before establishing the product's value.
- Selling sensitive farmer data.
- Making settlement guarantees.
- Promising official integrations without authorization.
- Treating advertising or data monetization as a default business strategy.

**Commercial principle:** The product should create measurable user value first. Revenue and institutional adoption must be validated rather than assumed.

---

## 21. Limitations and Risk Management

1. **No official submission integration:** An incident created in PeekRaksha is not an official claim.
2. **No guaranteed eligibility:** Scheme rules and insurance conditions determine eligibility.
3. **No guaranteed evidence acceptance:** Photographs are supporting material, not proof of claim approval.
4. **Configurable deadline:** The timer must reflect the applicable reporting rule and the user's recorded incident details.
5. **Browser limitations:** Camera, voice, geolocation, and installation support varies.
6. **No guaranteed backup:** Local data can be lost.
7. **Weather uncertainty:** Forecasts cannot guarantee damage or local conditions.
8. **Unverified reporting status:** A locally entered ticket number does not verify receipt by an insurer.
9. **No demonstrated outcome improvement:** The prototype has not yet established a reduction in reporting errors, delays, or claim rejections.
10. **No established production readiness:** Security, scalability, operational support, and institutional integration require further work.

---

## 22. Future Roadmap

| Phase | Priority | Intended outcome |
|---|---|---|
| Phase 1 | Stabilize existing features | Reliable demonstration and tested core workflow |
| Phase 2 | Farmer research | Evidence-based requirements and usability findings |
| Phase 3 | Security and backend design | Dependable persistence, recovery, and access controls |
| Phase 4 | Controlled pilot | Measured real-world usability |
| Phase 5 | Institutional collaboration | Sustainable deployment and authorized integration opportunities |
| Phase 6 | Regional expansion | Additional languages, districts, and supported workflows |

The roadmap is conditional on testing, available resources, and stakeholder feedback.

---

## 23. Team Contributions

The project is being developed collaboratively by three team members.

| Team member | Primary responsibility |
|---|---|
| Member 1 | Frontend interface, Home page, incident workflow, and responsive design |
| Member 2 | Camera capture, evidence management, persistence, and offline PWA behavior |
| Member 3 | Countdown, Marathi voice guidance, reporting, escalation, document generation, and sharing |

Replace these role descriptions with the actual team members' names and contributions before submission.

---

## 24. Expected Impact and Success Metrics

The initial impact hypothesis is that guided incident preparation can make the crop-loss reporting process easier to understand and execute.

We should evaluate this using measurable outcomes rather than unsupported claims.

### Proposed metrics

| Metric | What it measures |
|---|---|
| Incident creation completion rate | Whether users can create an incident successfully |
| Evidence checklist completion | Whether users capture the requested evidence categories |
| Time to locate reporting instructions | How quickly users find the relevant next step |
| Independent task completion | Whether users can complete the workflow without assistance |
| Offline task completion | Whether core tasks work without network access |
| Data recovery success | Whether saved records survive refreshes and supported recovery scenarios |
| Guidance accuracy | Whether reporting instructions match verified official sources |
| User comprehension | Whether users understand the difference between preparation and official submission |
| User satisfaction | Whether the workflow is understandable and useful |

Baseline values and targets should be established through testing. No improvement percentages should be claimed without supporting data.

### Intended long-term value

- Better-organized incident information.
- Fewer forgotten evidence checklist items.
- Clearer reporting instructions.
- Better visibility into reporting attempts and follow-up.
- More accessible digital assistance for Marathi-speaking farmers.

These are intended benefits that require validation.

---

## 25. References and Live Evidence

1. **PMFBY Revised Operational Guidelines** — reporting provisions for applicable localized calamities and post-harvest losses.  
   https://pmfby.gov.in/pdf/Revised_Operational_Guidelines.pdf

2. **Official PMFBY Dashboard** — crop-loss reporting and grievance channels.  
   https://pmfby.gov.in/pmfbyDashboard

3. **Reuters, October 28, 2025** — late-season rainfall and damage to Indian crops.  
   https://www.reuters.com/business/environment/monsoon-promise-turns-sour-indias-crops-ruined-by-late-downpours-2025-10-28/

4. **The Indian Express, January 22, 2025** — reporting on alleged bogus crop-insurance claims in Maharashtra.  
   https://indianexpress.com/article/cities/mumbai/maharashtra-agriculture-dept-finds-4-14-lakh-bogus-crop-insurance-claims-9792163/

5. **Press Information Bureau, July 24, 2026** — crop-insurance assessment and climate-risk information.  
   https://www.pib.gov.in/PressReleasePage.aspx?PRID=2289028&lang=2&reg=48

6. **Open-Meteo** — optional weather forecast API.  
   https://open-meteo.com/

These sources support the problem context and design rationale. They do not constitute an endorsement of PeekRaksha or prove its effectiveness.

---

## 26. Disclaimer

PeekRaksha is an independent assistance prototype. It is not an official government application, PMFBY portal, insurer, or claim-assessment authority.

Applicable reporting requirements, eligibility, deadlines, and authorized channels must be verified with the relevant official sources.

The application does not guarantee claim acceptance, compensation, or settlement.

**PeekRaksha — Amcha Saath, Tumcha Aadhar**

*Supporting farmers with preparation, evidence, time awareness, and a clearer next step when crop damage occurs.*