# LIFE OS — Your Entire Life, One Place.

> **Production-Ready Personal Life Management Web Application**  
> *"Simple Outside. Powerful Inside."*

---

## 🌟 Overview

**LIFE OS** is a centralized personal operating system built to help individuals manage, record, track, analyze, and elevate every critical dimension of their life:
- **Productivity & Routine**: Master Timetable, Actionable Tasks, My Day, Agenda Calendar.
- **Learning & Growth**: Study Sessions with Pomodoro Timer, Academic Subjects, Assignments & Exams, Online Course Tracker.
- **Health & Recovery**: Sleep Architecture, Gym & Weightlifting, Water Hydration, Nutrition & Macros, Medications & Supplement Inventory, Hygiene & Grooming.
- **Habits & Discipline**: Private Habit Matrix with PIN protection, Outside Food / Junk Tracker, Daily Activities, Screen Time & Digital Wellbeing.
- **Wealth & Mindset**: Personal Finance & Cashflow Ledger, Goals & Milestone System, Introspective Private Diary & Journal.
- **Vault & System Tools**: Document & Warranty Storage, Location & Travel Log, Cross-Module Reports & Analytics, Zero-Hallucination AI Assistant, Custom Tracker Builder, Central Reminders.

---

## 🏗️ Architecture & Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 14 App Router |
| **Language** | TypeScript (Strict Mode) |
| **Styling** | Tailwind CSS with Premium Dark Theme (`#09090B`, `#111114`, `#18181C`, `#A78BFA`) |
| **Icons** | Lucide React |
| **Charts** | Recharts Responsive Analytics |
| **Database** | Supabase PostgreSQL + Row Level Security (RLS) policies |
| **Local-First Sync** | Dual-layer persistence: Instant offline/guest reactivity + Cloud PostgreSQL synchronization |
| **AI Integration** | Deterministic factual rule engine + server-side Google Gemini 1.5 Flash API route |
| **Deployment** | Vercel & GitHub ready |

---

## 🚀 Quick Start Guide

### Prerequisites
- Node.js LTS (v18.0.0 or higher)
- npm or pnpm

### 1. Installation
```bash
# Clone the repository
git clone <repo-url>
cd "LIFE OS"

# Install dependencies
npm install
```

### 2. Environment Configuration
Create a `.env.local` file based on `.env.example`:
```bash
cp .env.example .env.local
```

Configure your variables:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
AI_API_KEY=your-google-gemini-api-key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```
> **Note**: Even without Supabase or AI keys configured, LIFE OS runs **100% out-of-the-box in Local-First Guest Mode** with full persistence in browser storage.

### 3. Database Migration (Supabase PostgreSQL)
1. Go to your [Supabase Dashboard](https://supabase.com).
2. Open the **SQL Editor**.
3. Copy and run the entire SQL schema located in:
   `supabase/migrations/20261102000000_life_os_schema.sql`
4. All 26 tables, foreign keys, indexes, and Row Level Security (RLS) policies will be deployed instantly.

### 4. Running the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Type-Check & Production Build
```bash
npm run type-check   # Runs tsc --noEmit
npm run build        # Compiles production bundle
npm run start        # Serves production build
```

---

## 🔒 Security & Privacy Architecture

- **Row Level Security (RLS)**: Every single table in PostgreSQL is locked down so authenticated users can strictly access only records matching `auth.uid() = user_id`.
- **PIN Protected Private Sections**: Sensitive habits (e.g. personal discipline, recovery) and private journal reflections can be locked behind a 4-digit PIN code.
- **Zero-Hallucination AI Assistant**: The AI Assistant queries authorized records only and is strictly instructed never to fabricate personal data.
- **Disclosed Web Platform Limitations**: Web browsers cannot spy on other applications or read background battery/health sensors without explicit user interaction. This limitation is clearly documented within the UI.

---

## 📁 Project Structure

```
├── .env.example
├── DEVELOPMENT_STATUS.md
├── README.md
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── next.config.mjs
├── supabase/
│   └── migrations/
│       └── 20261102000000_life_os_schema.sql
└── src/
    ├── app/
    │   ├── api/ai/route.ts
    │   ├── calendar/page.tsx
    │   ├── courses/page.tsx
    │   ├── custom-trackers/page.tsx
    │   ├── daily-activities/page.tsx
    │   ├── documents/page.tsx
    │   ├── finance/page.tsx
    │   ├── fitness/page.tsx
    │   ├── goals/page.tsx
    │   ├── habits/page.tsx
    │   ├── hygiene/page.tsx
    │   ├── journal/page.tsx
    │   ├── medicines/page.tsx
    │   ├── my-day/page.tsx
    │   ├── nutrition/page.tsx
    │   ├── outside-food/page.tsx
    │   ├── reports/page.tsx
    │   ├── screen-time/page.tsx
    │   ├── settings/page.tsx
    │   ├── sleep/page.tsx
    │   ├── study/page.tsx
    │   ├── timetable/page.tsx
    │   ├── travel/page.tsx
    │   ├── water/page.tsx
    │   ├── layout.tsx
    │   └── page.tsx
    ├── components/
    │   ├── layout/
    │   │   ├── AppShell.tsx
    │   │   ├── Sidebar.tsx
    │   │   └── TopNav.tsx
    │   ├── modules/
    │   │   ├── AIAssistantModule.tsx
    │   │   ├── CalendarModule.tsx
    │   │   ├── CoursesModule.tsx
    │   │   ├── CustomTrackersModule.tsx
    │   │   ├── DailyActivitiesModule.tsx
    │   │   ├── DocumentsModule.tsx
    │   │   ├── FinanceModule.tsx
    │   │   ├── FitnessModule.tsx
    │   │   ├── GoalsModule.tsx
    │   │   ├── HabitsModule.tsx
    │   │   ├── HomeDashboard.tsx
    │   │   ├── HygieneModule.tsx
    │   │   ├── JournalModule.tsx
    │   │   ├── MedicinesModule.tsx
    │   │   ├── MyDayModule.tsx
    │   │   ├── NutritionModule.tsx
    │   │   ├── OutsideFoodModule.tsx
    │   │   ├── ReportsModule.tsx
    │   │   ├── ScreenTimeModule.tsx
    │   │   ├── SettingsModule.tsx
    │   │   ├── SleepModule.tsx
    │   │   ├── StudyModule.tsx
    │   │   ├── TimetableModule.tsx
    │   │   ├── TravelModule.tsx
    │   │   └── WaterModule.tsx
    │   ├── quick-add/
    │   │   └── QuickAddModal.tsx
    │   ├── search/
    │   │   └── UniversalSearchModal.tsx
    │   └── ui/
    │       ├── Badge.tsx
    │       ├── Button.tsx
    │       ├── Card.tsx
    │       ├── Input.tsx
    │       ├── Modal.tsx
    │       └── PinModal.tsx
    ├── lib/
    │   ├── store.ts
    │   ├── utils.ts
    │   └── supabase/
    │       └── client.ts
    └── types/
        └── database.ts
```

