# GURUVANTA SOLUTIONS TECHNOLOGIES &mdash; Full-Stack Enterprise Platform

> **Business Technology. Intelligent Software. Connected Operations.**  
> *We build intelligent software systems that connect people, processes and business data.*

---

## 1. Project Overview

A production-ready full-stack website and business platform engineered for **GURUVANTA SOLUTIONS TECHNOLOGIES**. The platform combines a cinematic pure-black 3D visual archive inspired by premium photography archives with the technical depth and positioning of a high-end enterprise software & ERP studio.

### Key Capabilities

- **Cinematic 3D Hero Archive**: Interactive Three.js Fibonacci sphere organizing 21 operational business subsystems (ERP, CRM, Billing, Inventory, HR, AI, WhatsApp, Hospital, Restaurant, Hotel, POS, etc.) with drag momentum, touch support, and subtle camera depth.
- **Unified Operations Core (Section 02)**: Interactive interactive system graph connecting the ERP Engine to 11 operational subsystems (Billing, Sales, Purchase, Inventory, HR, Payroll, CRM, Analytics, Mobile, Automation, API).
- **Comprehensive Service & Product Catalog**: 31+ specialized engineering services, 6 flagship software platforms, and 10 vertical industry ERPs (Hospital, Pharmacy, Restaurant, Hotel, Jewellery, Retail, Manufacturing, Logistics, School, Real Estate).
- **Lead Generation & Demo Request Workflow**: Multi-parameter lead capture forms validating with Zod, persisting to database with `Lead`, `DemoRequest`, `LeadActivity`, and transactional email dispatch.
- **Full Admin Portal & CMS (`/admin`)**: Secure JWT-based authentication with bcrypt password verification, role-based access control (SUPER_ADMIN, ADMIN, EDITOR, SALES, SUPPORT), status pipelines (NEW, CONTACTED, QUALIFIED, DEMO_SCHEDULED, PROPOSAL, NEGOTIATION, WON, LOST), salesperson assignment, internal notes, follow-up dates, activity logs, and content CMS.
- **Enterprise SEO & Structured Data**: Dynamic JSON-LD (Organization, Service, SoftwareApplication, FAQPage), automated dynamic `/sitemap.xml`, and `/robots.txt`.
- **Aesthetic Excellence**: Custom desktop cursor with difference blend mode, cinematic splash screen intro with progress counter, and glassmorphism.

---

## 2. Tech Stack

- **Frontend**: Next.js 14 App Router, React 18, TypeScript, Tailwind CSS, Framer Motion, Three.js, Lucide Icons.
- **Backend**: Next.js API Routes, Server Actions, TypeScript.
- **Database**: Prisma ORM with SQLite for zero-setup execution (`file:./dev.db`), with native PostgreSQL compatibility.
- **Authentication**: Secure HTTP-only cookies, JWT encryption, bcryptjs password hashing.
- **Validation**: Zod schema validation on forms and APIs.
- **Email**: Transactional email templates with Resend API support and development dispatch simulator.
- **Analytics**: Telemetry abstraction supporting Google Analytics / Plausible.

---

## 3. Installation & Getting Started

### Prerequisites

- Node.js 18+ (tested on Node v23.3.0)
- npm 9+ (tested on npm 10.9.0)

### Quick Start

1. Clone or navigate to the repository directory:
   ```bash
   cd guruvanta
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Setup environment variables:
   Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

4. Generate Prisma Client and Push Database Schema:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. Seed the database with 31 services, 6 products, 10 industries, 8 case studies, 20 FAQs, and default admin users:
   ```bash
   npx tsx prisma/seed.ts
   ```

6. Start the local development server:
   ```bash
   npm run dev
   ```

   Visit `http://localhost:3000` to experience the website, or `http://localhost:3000/admin` to access the Admin Console.

---

## 4. Default Admin Credentials

- **Portal URL**: `http://localhost:3000/admin/login`
- **Email**: `admin@guruvanta.com`
- **Password**: `admin123456`
- **Role**: `SUPER_ADMIN`

Additional sales representative seeded:
- **Email**: `sales@guruvanta.com`
- **Password**: `admin123456`
- **Role**: `SALES`

---

## 5. Environment Variables (`.env`)

| Variable | Description | Default |
| :--- | :--- | :--- |
| `DATABASE_URL` | SQLite file or PostgreSQL connection string | `"file:./dev.db"` |
| `AUTH_SECRET` | Secret key for JWT session encryption | Random 64-char string |
| `NEXT_PUBLIC_SITE_URL` | Public site domain | `http://localhost:3000` |
| `ADMIN_EMAIL` | Email to receive lead & demo notifications | `admin@guruvanta.com` |
| `RESEND_API_KEY` | Optional API key for Resend email dispatch | `""` (logs to console in dev) |
| `STORAGE_ENDPOINT` | Optional S3 object storage endpoint | `""` |
| `STORAGE_BUCKET` | Optional S3 storage bucket name | `""` |

---

## 6. Switching to PostgreSQL for Production

To switch to a production PostgreSQL database:

1. Update `prisma/schema.prisma`:
   ```prisma
   datasource db {
     provider = "postgresql"
     url      = env("DATABASE_URL")
   }
   ```
2. Set your PostgreSQL URL in `.env`:
   ```env
   DATABASE_URL="postgresql://user:password@host:5432/guruvanta?schema=public"
   ```
3. Run migrations and re-seed:
   ```bash
   npx prisma db push
   npx tsx prisma/seed.ts
   ```

---

## 7. Production Build & Deployment

Build the optimized production bundle:
```bash
npm run build
```

Run the production server:
```bash
npm run start
```

### Vercel Deployment
The repository is fully Vercel-ready. When deploying to Vercel, connect your PostgreSQL instance (e.g. Supabase, Neon, or AWS RDS) and configure the environment variables in the Vercel project settings.

---

## 8. Verified Architectural Routes

- Public Core:
  - `/` (Cinematic 3D Hero, Capabilities, Connected Core, Services, Products, Industries, Case Studies, Process)
  - `/about` (Firm profile, mission, philosophy, team, centers)
  - `/services` & `/services/[slug]` (31+ service catalog)
  - `/products` & `/products/[slug]` (Flagship platforms)
  - `/solutions` & `/solutions/[slug]` (Integrated business solutions)
  - `/industries` & `/industries/[slug]` (10 vertical industry ERPs)
  - `/portfolio` & `/portfolio/[slug]` (8 documented case studies)
  - `/restaurant-erp`
  - `/hotel-erp`
  - `/hospital-erp`
  - `/pharmacy-erp`
  - `/jewellery-erp`
  - `/billing-software`
  - `/inventory-software`
  - `/hr-payroll`
  - `/crm`
  - `/pos`
  - `/ai-solutions`
  - `/whatsapp-automation`
  - `/contact`
  - `/request-demo`
  - `/faq`
  - `/privacy-policy`
  - `/terms`
  - `/sitemap.xml`
  - `/robots.txt`
- Admin Platform:
  - `/admin/login`
  - `/admin` (Executive dashboard & activity telemetry)
  - `/admin/leads` (Lead pipeline, search, filter, status drawer, activity logs)
  - `/admin/demo-requests`
  - `/admin/contact-messages`
  - `/admin/content/services`
  - `/admin/content/products`
  - `/admin/content/industries`
  - `/admin/content/portfolio`
  - `/admin/content/faqs`

---

## 9. License & Trademark

&copy; 2026 Guruvanta Solutions Technologies. All rights reserved.
