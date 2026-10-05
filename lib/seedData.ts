export const initialServices = [
  {
    title: 'Custom Software Development',
    slug: 'custom-software-development',
    category: 'Software Development',
    shortDesc: 'Bespoke enterprise architectures built to scale with unique organizational workflows.',
    description: 'We architect and build tailored enterprise software platforms from zero to high-throughput scale. Engineered with clean modular microservices, resilient APIs, and deterministic business rules.',
    features: JSON.stringify([
      'Custom workflow automation',
      'Event-driven microservices',
      'Multi-tenant cloud architecture',
      'High-throughput database design',
      'Continuous compliance & security audits'
    ]),
    technologies: JSON.stringify(['Node.js', 'Go', 'TypeScript', 'PostgreSQL', 'Docker', 'Kubernetes']),
    order: 1,
    seoTitle: 'Custom Software Development Services | Guruvanta Solutions Technologies',
    seoDescription: 'Enterprise-grade custom software engineering and bespoke operational systems built for resilience.'
  },
  {
    title: 'ERP Software',
    slug: 'erp-software',
    category: 'ERP & Business Systems',
    shortDesc: 'Unified enterprise resource planning tying finance, procurement, sales, and supply chain.',
    description: 'A modular, high-performance ERP system designed to give leadership single-pane visibility across multiple departments, global tax regimes, and production lines.',
    features: JSON.stringify([
      'Real-time general ledger synchronization',
      'Unified supply chain procurement',
      'Automated reconciliation engine',
      'Role-based granular ACL security',
      'Executive performance dashboards'
    ]),
    technologies: JSON.stringify(['PostgreSQL', 'React', 'TypeScript', 'Redis', 'Python']),
    order: 2,
    seoTitle: 'Enterprise ERP Software Solutions | Guruvanta Solutions Technologies',
    seoDescription: 'Unified enterprise resource planning tying finance, inventory, and connected operations.'
  },
  {
    title: 'CRM Software',
    slug: 'crm-software',
    category: 'ERP & Business Systems',
    shortDesc: 'Intelligent pipeline visibility, client lifecycle management, and omni-channel tracking.',
    description: 'Empower commercial teams with automated lead scoring, conversation tracking, deals pipeline, customer health metrics, and instant WhatsApp & email automation.',
    features: JSON.stringify([
      'Visual deal stage pipeline',
      'Omni-channel activity timeline',
      'Automated follow-up triggers',
      'Customer lifetime value forecasting',
      'VoIP and WhatsApp API hooks'
    ]),
    technologies: JSON.stringify(['Next.js', 'PostgreSQL', 'WebSockets', 'TailwindCSS']),
    order: 3,
    seoTitle: 'Enterprise CRM Software | Guruvanta Solutions Technologies',
    seoDescription: 'Intelligent customer relationship management with real-time deal telemetry and automation.'
  },
  {
    title: 'Billing & GST Software',
    slug: 'billing-software',
    category: 'ERP & Business Systems',
    shortDesc: 'Zero-latency invoicing, automatic e-invoicing, and compliance-first tax reporting.',
    description: 'Engineered for retail chains, distributors, and enterprise service providers. Generates compliant GST invoices in milliseconds, tracks customer aging ledgers, and files GSTR summaries.',
    features: JSON.stringify([
      'Instant e-Way bill & e-Invoice generation',
      'Automated tax bifurcation (CGST/SGST/IGST)',
      'Multi-currency billing capability',
      'Customer credit limit enforcement',
      'Batch barcode scan integration'
    ]),
    technologies: JSON.stringify(['Node.js', 'Prisma', 'React', 'PDFKit']),
    order: 4,
    seoTitle: 'GST & Enterprise Billing Software | Guruvanta Solutions Technologies',
    seoDescription: 'High-speed GST invoicing, customer ledger tracking, and automated tax reporting.'
  },
  {
    title: 'Inventory Management',
    slug: 'inventory-management',
    category: 'ERP & Business Systems',
    shortDesc: 'Multi-warehouse stock tracking, low-stock predictive replenishment, and SKU genealogy.',
    description: 'Eliminate stock-outs and excess working capital with real-time bin-level tracking, serial and batch traceability, automated reorder triggers, and supplier PO workflows.',
    features: JSON.stringify([
      'Multi-warehouse bin & shelf management',
      'Batch and expiry date tracking',
      'Barcode and RFID scanner integration',
      'Automated reorder point calculation',
      'Inventory valuation reports (FIFO / Weighted Avg)'
    ]),
    technologies: JSON.stringify(['TypeScript', 'PostgreSQL', 'Redis', 'Zod']),
    order: 5,
    seoTitle: 'Warehouse & Inventory Management System | Guruvanta Solutions',
    seoDescription: 'Multi-location inventory control, FIFO valuation, and automated reorder pipelines.'
  },
  {
    title: 'HR & Payroll',
    slug: 'hr-payroll',
    category: 'ERP & Business Systems',
    shortDesc: 'Frictionless biometric attendance, automated salary computations, and tax deductions.',
    description: 'Complete employee lifecycle management from onboarding to exit. Integrates biometric hardware, leaves, loan advances, statutory PF/ESI/TDS, and one-click payslip delivery.',
    features: JSON.stringify([
      'Biometric & geofenced mobile check-in',
      'Automated salary calculation & deductions',
      'Statutory compliance (PF, ESI, TDS, PT)',
      'Digital payslip delivery via email & WhatsApp',
      'Employee self-service portal'
    ]),
    technologies: JSON.stringify(['Next.js', 'PostgreSQL', 'TailwindCSS', 'Node.js']),
    order: 6,
    seoTitle: 'HR & Payroll Management Platform | Guruvanta Solutions Technologies',
    seoDescription: 'Automated attendance, compliant payroll processing, and employee self-service.'
  },
  {
    title: 'Hospital Management',
    slug: 'hospital-management',
    category: 'Industry Solutions',
    shortDesc: 'Comprehensive clinical, OPD/IPD, diagnostic laboratory, and patient billing platform.',
    description: 'An integrated hospital operating system orchestrating electronic medical records (EMR), bed allocation, OT schedules, diagnostic machines, doctor fee sharing, and pharmacy dispensing.',
    features: JSON.stringify([
      'OPD/IPD admission and bed management',
      'EMR and digital prescription generation',
      'Pathology lab machine interfacing (LIS)',
      'TPA and insurance claim processing',
      'Doctor roster and OPD consultation queue'
    ]),
    technologies: JSON.stringify(['React', 'Node.js', 'PostgreSQL', 'FHIR API']),
    order: 7,
    seoTitle: 'Hospital Management Information System (HMIS) | Guruvanta Solutions',
    seoDescription: 'Enterprise clinical, EMR, IPD/OPD, and diagnostic software for hospitals.'
  },
  {
    title: 'Pharmacy Software',
    slug: 'pharmacy-software',
    category: 'Industry Solutions',
    shortDesc: 'Fast prescription dispensing, batch/expiry alerts, substitute drug lookup, and schedule H logs.',
    description: 'Engineered specifically for retail chemists and hospital pharmacies. Prevents expired inventory losses, suggests salt equivalents, and guarantees regulatory drug compliance.',
    features: JSON.stringify([
      'Batch and expiry alert engine',
      'Salt composition substitute search',
      'Schedule H1 narcotic registry log',
      'Wholesaler purchase margin audit',
      'Doctor-wise prescription analytics'
    ]),
    technologies: JSON.stringify(['Electron', 'SQLite', 'React', 'Node.js']),
    order: 8,
    seoTitle: 'Pharmacy Management Software | Guruvanta Solutions Technologies',
    seoDescription: 'Retail and wholesale pharmacy billing, expiry prevention, and drug registry compliance.'
  },
  {
    title: 'Jewellery Management',
    slug: 'jewellery-management',
    category: 'Industry Solutions',
    shortDesc: 'Karat purity tracking, metal weight audits, bullion pricing, and artisan repair tracking.',
    description: 'Designed for bullion traders, high-end retail showrooms, and ornament manufacturers. Seamlessly handles gross vs net weight, stone charges, wastage, and old gold exchange ledgers.',
    features: JSON.stringify([
      'Real-time live metal rate update',
      'Karat-wise melting and alloy calculation',
      'Barcode and RFID jewelry tag scanning',
      'Artisan (Karigar) job card and scrap tracking',
      'Customer advance savings scheme module'
    ]),
    technologies: JSON.stringify(['Next.js', 'PostgreSQL', 'TypeScript']),
    order: 9,
    seoTitle: 'Jewellery Retail & Manufacturing ERP | Guruvanta Solutions Technologies',
    seoDescription: 'Purity calculation, stone weight valuation, live gold pricing, and Karigar tracking.'
  },
  {
    title: 'Restaurant ERP',
    slug: 'restaurant-erp',
    category: 'Industry Solutions',
    shortDesc: 'Ultra-fast table orders, Kitchen Display Systems (KDS), KOT routing, and multi-outlet control.',
    description: 'Empowers high-volume dining rooms, QSRs, and cloud kitchens. Delivers split-second KOT firing, captain mobile ordering, recipe recipe-level ingredient depletion, and food aggregator integration.',
    features: JSON.stringify([
      'Interactive visual table floor plan',
      'Real-time KDS (Kitchen Display System)',
      'Sub-second billing and split payment',
      'Recipe-level raw ingredient consumption',
      'Zomato & Swiggy aggregator sync'
    ]),
    technologies: JSON.stringify(['React', 'WebSockets', 'Node.js', 'PostgreSQL']),
    order: 10,
    seoTitle: 'Restaurant ERP & POS Platform | Guruvanta Solutions Technologies',
    seoDescription: 'Table order management, kitchen display system, split billing, and inventory control.'
  },
  {
    title: 'Hotel ERP',
    slug: 'hotel-erp',
    category: 'Industry Solutions',
    shortDesc: 'Front-desk reservations, housekeeping telemetry, room tariff management, and guest folio.',
    description: 'An all-in-one property management system (PMS) for luxury boutique hotels, business resorts, and serviced apartments. Unifies OTA bookings, minibar billing, and guest profiles.',
    features: JSON.stringify([
      'Real-time room occupancy grid',
      'Channel manager integration for OTAs',
      'Housekeeping mobile room inspection',
      'Banquet and conference hall scheduling',
      'Express mobile check-in and digital key'
    ]),
    technologies: JSON.stringify(['Next.js', 'PostgreSQL', 'Node.js']),
    order: 11,
    seoTitle: 'Hotel Property Management ERP | Guruvanta Solutions Technologies',
    seoDescription: 'Front desk PMS, housekeeping operations, channel management, and guest folio.'
  },
  {
    title: 'Retail POS',
    slug: 'retail-pos',
    category: 'ERP & Business Systems',
    shortDesc: 'Rapid point-of-sale checkout, customer loyalty, offline resilience, and barcode scanning.',
    description: 'High-speed retail counter checkout that continues operating even during internet outages, syncing automatically once connectivity returns.',
    features: JSON.stringify([
      'Offline-first checkout resilience',
      'Integrated card terminal & QR payments',
      'Customer loyalty points & store credits',
      'Thermal receipt printer support',
      'End-of-day register cash tally'
    ]),
    technologies: JSON.stringify(['React', 'IndexedDB', 'Node.js', 'SQLite']),
    order: 12,
    seoTitle: 'Cloud Retail POS Software | Guruvanta Solutions Technologies',
    seoDescription: 'Offline-capable retail point-of-sale system with rapid barcode scanning.'
  },
  {
    title: 'Manufacturing ERP',
    slug: 'manufacturing-erp',
    category: 'Industry Solutions',
    shortDesc: 'Multi-level Bill of Materials (BOM), work center routing, machine downtime, and scrap audits.',
    description: 'Streamline shop floor productivity with automated job cards, raw material staging, machine efficiency monitoring, and quality control inspection gates.',
    features: JSON.stringify([
      'Multi-level Bill of Materials (BOM)',
      'Work center capacity planning',
      'Job card generation and status tracking',
      'Machine maintenance & breakdown logs',
      'Scrap and yield analysis reports'
    ]),
    technologies: JSON.stringify(['PostgreSQL', 'Next.js', 'TypeScript']),
    order: 13,
    seoTitle: 'Discrete & Process Manufacturing ERP | Guruvanta Solutions',
    seoDescription: 'Shop floor planning, multi-level BOM, job cards, and production telemetry.'
  },
  {
    title: 'Transport & Logistics Software',
    slug: 'transport-logistics-software',
    category: 'Industry Solutions',
    shortDesc: 'Fleet telematics, trip freight billing, consignment LR management, and driver settlements.',
    description: 'End-to-end logistics platform covering Lorry Receipts (LR), fuel usage tracking, vehicle maintenance schedules, transit insurance, and route profitability.',
    features: JSON.stringify([
      'Consignment booking & LR tracking',
      'Trip expense & driver advance accounting',
      'Tyre life and vehicle fitness compliance',
      'Live GPS fleet location integration',
      'Consignee POD (Proof of Delivery) capture'
    ]),
    technologies: JSON.stringify(['Node.js', 'PostgreSQL', 'Leaflet', 'React']),
    order: 14,
    seoTitle: 'Logistics & Fleet Management Software | Guruvanta Solutions',
    seoDescription: 'Freight booking, LR generation, fuel audits, and fleet telematics.'
  },
  {
    title: 'School Management Software',
    slug: 'school-management-software',
    category: 'Industry Solutions',
    shortDesc: 'Student admissions, fee payment gateway, exam report cards, and parent mobile communication.',
    description: 'Comprehensive educational institution operating system orchestrating academic timetables, library books, transport buses, fee collections, and examination report cards.',
    features: JSON.stringify([
      'Online fee collection & reminder SMS',
      'Exam marksheets and grading engine',
      'Bus route GPS and student safety alerts',
      'Teacher workload timetable builder',
      'Parent-teacher communication app'
    ]),
    technologies: JSON.stringify(['Next.js', 'PostgreSQL', 'TailwindCSS']),
    order: 15,
    seoTitle: 'School & College Management Software | Guruvanta Solutions',
    seoDescription: 'Admissions, automated fee processing, report card generation, and campus management.'
  },
  {
    title: 'Real Estate Software',
    slug: 'real-estate-software',
    category: 'Industry Solutions',
    shortDesc: 'Property unit inventories, payment milestones, agent commission splits, and client agreements.',
    description: 'Tailored for property developers and brokerage firms to manage tower floor plans, payment milestone schedules, builder-buyer agreements, and customer installments.',
    features: JSON.stringify([
      'Interactive unit availability grid',
      'Construction milestone billing plans',
      'Channel partner commission calculation',
      'Automated demand letters and payment receipts',
      'CRM integration with site visit logs'
    ]),
    technologies: JSON.stringify(['React', 'Node.js', 'PostgreSQL']),
    order: 16,
    seoTitle: 'Real Estate Developer ERP & CRM | Guruvanta Solutions',
    seoDescription: 'Unit booking management, construction milestone schedules, and broker commissions.'
  },
  {
    title: 'E-Commerce Development',
    slug: 'ecommerce-development',
    category: 'Software Development',
    shortDesc: 'Ultra-fast headless commerce, unified checkout, inventory sync, and conversion architecture.',
    description: 'We construct high-velocity headless commerce platforms engineered for sub-second page transitions, dynamic pricing, and global currency localization.',
    features: JSON.stringify([
      'Headless Next.js storefront architecture',
      'Sub-second catalogue search & filters',
      'Abandoned cart recovery automation',
      'Multi-currency & multi-gateway payments',
      'Automated warehouse fulfillment dispatch'
    ]),
    technologies: JSON.stringify(['Next.js', 'Stripe', 'PostgreSQL', 'Redis']),
    order: 17,
    seoTitle: 'Headless E-Commerce Development | Guruvanta Solutions Technologies',
    seoDescription: 'High-speed headless commerce platforms built for high-conversion enterprise brands.'
  },
  {
    title: 'Mobile App Development',
    slug: 'mobile-app-development',
    category: 'Software Development',
    shortDesc: 'High-fidelity iOS and Android native and cross-platform applications built for longevity.',
    description: 'Crafting responsive mobile experiences with buttery-smooth 60fps animations, biometric authentication, offline synchronization, and push messaging.',
    features: JSON.stringify([
      'React Native & Flutter cross-platform architecture',
      'Offline-first SQLite local persistence',
      'Biometric authentication (FaceID / Fingerprint)',
      'Background push notifications & deep-linking',
      'App Store & Play Store publication management'
    ]),
    technologies: JSON.stringify(['React Native', 'Flutter', 'TypeScript', 'Firebase']),
    order: 18,
    seoTitle: 'Enterprise Mobile App Development | Guruvanta Solutions Technologies',
    seoDescription: 'Native and cross-platform iOS & Android mobile applications engineered for enterprise.'
  },
  {
    title: 'Web Application Development',
    slug: 'web-application-development',
    category: 'Software Development',
    shortDesc: 'Cloud-native, responsive web portals and distributed client dashboards.',
    description: 'Developing high-availability enterprise web portals with server-rendered UI, strict TypeScript safety, and automated continuous integration.',
    features: JSON.stringify([
      'Server-side rendering with Next.js App Router',
      'Strict TypeScript and Zod validation',
      'Zero-layout-shift responsive design',
      'Role-based permissions & audit trails',
      'Automated unit and end-to-end testing'
    ]),
    technologies: JSON.stringify(['Next.js', 'React', 'Node.js', 'TailwindCSS']),
    order: 19,
    seoTitle: 'Enterprise Web Application Development | Guruvanta Solutions',
    seoDescription: 'Cloud-native, high-security responsive enterprise web applications.'
  },
  {
    title: 'API Development & Integration',
    slug: 'api-development',
    category: 'Software Development',
    shortDesc: 'High-throughput REST and GraphQL endpoints connecting legacy and modern systems.',
    description: 'We construct secure, rate-limited, and comprehensively documented API gateways that bridge legacy databases with modern cloud microservices.',
    features: JSON.stringify([
      'RESTful & GraphQL schema design',
      'OAuth2, JWT, and API key token authentication',
      'Rate-limiting and DDoS mitigation',
      'Automated OpenAPI / Swagger documentation',
      'Webhook event subscription dispatch'
    ]),
    technologies: JSON.stringify(['Go', 'Node.js', 'Express', 'Redis']),
    order: 20,
    seoTitle: 'Enterprise API Development & Integration | Guruvanta Solutions',
    seoDescription: 'High-throughput microservices APIs, webhooks, and legacy system bridging.'
  },
  {
    title: 'Cloud Applications',
    slug: 'cloud-applications',
    category: 'Software Development',
    shortDesc: 'Resilient cloud-native software built for zero-downtime scalability on AWS & GCP.',
    description: 'Migrating legacy monoliths and designing cloud-native architectures that auto-scale based on real-time traffic spikes.',
    features: JSON.stringify([
      'Kubernetes container orchestration',
      'Serverless computing pipelines',
      'Auto-scaling cluster management',
      'Continuous disaster recovery replication',
      'Cost-optimized infrastructure blueprints'
    ]),
    technologies: JSON.stringify(['AWS', 'Google Cloud', 'Docker', 'Terraform']),
    order: 21,
    seoTitle: 'Cloud Application Engineering | Guruvanta Solutions Technologies',
    seoDescription: 'Resilient multi-cloud application development, migration, and infrastructure.'
  },
  {
    title: 'AI Solutions & Machine Learning',
    slug: 'ai-solutions',
    category: 'Automation & AI',
    shortDesc: 'Predictive intelligence, computer vision, demand forecasting, and proprietary LLM fine-tuning.',
    description: 'Integrating state-of-the-art machine intelligence directly into your core operational pipeline to forecast inventory demand, automate OCR invoice parsing, and identify anomalies.',
    features: JSON.stringify([
      'Predictive inventory demand forecasting',
      'Computer vision inspection & OCR document parsing',
      'Proprietary LLM retrieval augmented generation (RAG)',
      'Automated fraud and transaction anomaly alerts',
      'Continuous model retraining pipelines'
    ]),
    technologies: JSON.stringify(['Python', 'PyTorch', 'FastAPI', 'OpenAI', 'LangChain']),
    order: 22,
    seoTitle: 'Enterprise AI & Machine Learning Solutions | Guruvanta Solutions',
    seoDescription: 'Custom AI solutions, predictive business models, and document processing automation.'
  },
  {
    title: 'AI Chatbot Development',
    slug: 'ai-chatbots',
    category: 'Automation & AI',
    shortDesc: '24/7 intelligent conversational agents resolving customer queries with enterprise domain context.',
    description: 'Deploy conversational agents connected to your ERP, CRM, and product manuals to answer technical inquiries and resolve customer tickets autonomously.',
    features: JSON.stringify([
      'Domain-specific knowledge grounding',
      'Omni-channel deployment (Web, WhatsApp, Slack)',
      'Human handoff escalation protocols',
      'Sentiment analysis and ticket triage',
      'Multi-language conversational support'
    ]),
    technologies: JSON.stringify(['OpenAI', 'Next.js', 'Vector DB', 'WebSockets']),
    order: 23,
    seoTitle: 'AI Chatbot Development for Enterprise | Guruvanta Solutions',
    seoDescription: 'Intelligent conversational agents connected to your ERP and company knowledge base.'
  },
  {
    title: 'WhatsApp Business Automation',
    slug: 'whatsapp-automation',
    category: 'Automation & AI',
    shortDesc: 'Automated invoice PDFs, payment reminders, order status, and instant conversational support.',
    description: 'Connect your ERP directly to the official Meta WhatsApp Business Cloud API. Dispatch tax invoices, collect payments via UPI links, and capture leads automatically.',
    features: JSON.stringify([
      'Official WhatsApp Business Cloud API integration',
      'Automatic PDF invoice dispatch upon billing',
      'Payment reminder sequences with payment link',
      'Interactive button menus and catalog browsing',
      'Real-time delivery & read receipts reporting'
    ]),
    technologies: JSON.stringify(['Meta Cloud API', 'Node.js', 'Webhooks', 'Redis']),
    order: 24,
    seoTitle: 'WhatsApp Business Automation Systems | Guruvanta Solutions',
    seoDescription: 'Automate invoice delivery, payment reminders, and customer support via WhatsApp.'
  },
  {
    title: 'Business Process Automation',
    slug: 'business-process-automation',
    category: 'Automation & AI',
    shortDesc: 'Eliminate repetitive manual data entry across departments with resilient workflow triggers.',
    description: 'Connecting disconnected software tools into seamless automated chains. When an order arrives, automatically adjust stock, generate invoices, notify logistics, and update CRM.',
    features: JSON.stringify([
      'Cross-system data synchronization triggers',
      'Automated vendor onboarding approvals',
      'Exception alerting and error recovery',
      'Document OCR extraction and ledger posting',
      'Audit log tracking for every automated action'
    ]),
    technologies: JSON.stringify(['Node.js', 'RabbitMQ', 'PostgreSQL', 'Docker']),
    order: 25,
    seoTitle: 'Business Process Automation (BPA) | Guruvanta Solutions',
    seoDescription: 'End-to-end workflow automation connecting ERP, CRM, banking, and logistics.'
  },
  {
    title: 'Workflow Automation',
    slug: 'workflow-automation',
    category: 'Automation & AI',
    shortDesc: 'Visual, configurable multi-step approval workflows for enterprise governance.',
    description: 'Empower department heads to configure multi-tier approval workflows for purchase orders, leave applications, expense reimbursements, and contract revisions.',
    features: JSON.stringify([
      'Drag-and-drop visual workflow designer',
      'Multi-tier hierarchical approval chains',
      'SLA escalation timers and notifications',
      'Digital signature and timestamp audit trails',
      'Dynamic conditional branching logic'
    ]),
    technologies: JSON.stringify(['React Flow', 'TypeScript', 'Node.js']),
    order: 26,
    seoTitle: 'Enterprise Workflow Automation | Guruvanta Solutions Technologies',
    seoDescription: 'Configurable multi-tier approval workflows and organizational governance.'
  },
  {
    title: 'Business Dashboards & Analytics',
    slug: 'business-dashboards',
    category: 'ERP & Business Systems',
    shortDesc: 'Real-time financial telemetry, executive scorecards, and predictive trend charts.',
    description: 'Transform raw database transactions into actionable visual intelligence. Monitor cash flow velocity, profit margins by product, team productivity, and customer churn.',
    features: JSON.stringify([
      'Interactive drill-down charts & filters',
      'Automated daily executive email digests',
      'Predictive trend lines & variance calculations',
      'Role-based granular data masking',
      'Instant export to PDF, Excel, and CSV'
    ]),
    technologies: JSON.stringify(['React', 'D3.js', 'TailwindCSS', 'PostgreSQL']),
    order: 27,
    seoTitle: 'Executive Business Dashboards & Analytics | Guruvanta Solutions',
    seoDescription: 'Real-time operational dashboards, financial telemetry, and executive scorecards.'
  },
  {
    title: 'Cloud Business Systems',
    slug: 'cloud-business-systems',
    category: 'Software Development',
    shortDesc: 'Secure, multi-tenant cloud platforms replacing outdated desktop software.',
    description: 'Modernize legacy desktop software into secure, browser-accessible cloud platforms that your distributed team can operate from any location securely.',
    features: JSON.stringify([
      'Zero local installation requirement',
      'End-to-end data encryption in transit and at rest',
      'Automatic geo-redundant hourly backups',
      'Single Sign-On (SSO) with Google / Azure AD',
      'Guaranteed 99.95% uptime SLA'
    ]),
    technologies: JSON.stringify(['AWS', 'Docker', 'PostgreSQL', 'Next.js']),
    order: 28,
    seoTitle: 'Cloud Business Systems Modernization | Guruvanta Solutions',
    seoDescription: 'Transform legacy on-premise business systems into high-security cloud portals.'
  },
  {
    title: 'Software Support & Maintenance',
    slug: 'software-support-maintenance',
    category: 'Software Development',
    shortDesc: '24/7 technical monitoring, database health optimization, bug fixes, and feature evolution.',
    description: 'Dedicated software engineering support ensuring your mission-critical applications operate without downtime, security vulnerabilities, or performance degradation.',
    features: JSON.stringify([
      '24/7 uptime telemetry and incident response',
      'Quarterly security penetration testing',
      'Database index tuning and query optimization',
      'OS & framework dependency updates',
      'Dedicated engineering escalation manager'
    ]),
    technologies: JSON.stringify(['Datadog', 'Sentry', 'PostgreSQL', 'Docker']),
    order: 29,
    seoTitle: 'Enterprise Software Support & Maintenance | Guruvanta Solutions',
    seoDescription: '24/7 operational support, database optimization, and software maintenance.'
  },
  {
    title: 'Digital Marketing Technology',
    slug: 'digital-marketing-technology',
    category: 'Automation & AI',
    shortDesc: 'Attribution tracking, marketing automation engines, and campaign analytics pipelines.',
    description: 'We engineer custom marketing infrastructure including conversion tracking pixels, lead qualification bots, and multi-channel campaign attribution pipelines.',
    features: JSON.stringify([
      'First-party data attribution tracking',
      'Automated email nurture sequences',
      'Dynamic landing page personalization',
      'CRM conversion sync via webhooks',
      'Unified marketing ROI dashboards'
    ]),
    technologies: JSON.stringify(['Next.js', 'PostgreSQL', 'Redis', 'Node.js']),
    order: 30,
    seoTitle: 'Digital Marketing Technology & Automation | Guruvanta Solutions',
    seoDescription: 'Attribution tracking, marketing automation engines, and campaign data pipelines.'
  },
  {
    title: 'SEO Technology & Architecture',
    slug: 'seo-technology',
    category: 'Software Development',
    shortDesc: 'High-speed server rendering, dynamic XML sitemaps, structured schema, and Core Web Vitals.',
    description: 'Architecting search-engine-dominant websites with near-instant Time to First Byte (TTFB), automated JSON-LD rich snippets, and flawless semantic HTML.',
    features: JSON.stringify([
      'Automated JSON-LD structured schema injection',
      'Dynamic XML sitemaps and canonicalization',
      'Perfect Core Web Vitals performance tuning',
      'Automated OpenGraph card generation',
      'Programmatic SEO landing page generation'
    ]),
    technologies: JSON.stringify(['Next.js', 'TypeScript', 'TailwindCSS']),
    order: 31,
    seoTitle: 'Enterprise SEO Engineering & Technical Architecture | Guruvanta Solutions',
    seoDescription: 'High-performance technical SEO architecture, structured data, and sub-second load times.'
  }
];

export const initialProducts = [
  {
    title: 'Billing & GST Software',
    slug: 'billing-software',
    tag: 'Enterprise Billing & Tax',
    headline: 'High-velocity compliant invoicing built for scale.',
    description: 'An enterprise-grade billing system built to generate thousands of GST invoices per hour, track aging customer receivables, and automate tax compliance.',
    features: JSON.stringify([
      'GST invoices with HSN/SAC auto-mapping',
      'Comprehensive customer ledger with payment aging',
      'Payment tracking & automated payment reminders',
      'Item-wise & customer-wise sales analytics',
      'Vendor purchase order & bill reconciliation',
      'One-click GSTR-1, GSTR-2B, and GSTR-3B audit reports'
    ]),
    modules: JSON.stringify([
      'Invoicing Engine',
      'Customer Ledger',
      'e-Way Bill Generator',
      'Tax Compliance Audit',
      'Multi-currency Gateway'
    ]),
    architecture: 'High-throughput event-driven ledger with append-only transaction logs.',
    pricingTier: 'Enterprise & Scale',
    order: 1,
    seoTitle: 'Billing & GST Software | Guruvanta Solutions Technologies',
    seoDescription: 'High-velocity GST invoicing, ledger reconciliation, and tax compliance automation.'
  },
  {
    title: 'Inventory Management',
    slug: 'inventory-software',
    tag: 'Supply Chain & Warehouses',
    headline: 'Total multi-location stock visibility and predictive reordering.',
    description: 'Track raw materials and finished goods across dozens of physical warehouses, fulfillment hubs, and retail outlets with sub-second accuracy.',
    features: JSON.stringify([
      'Multi-warehouse stock control and bin management',
      'Purchase order management and approval workflows',
      'Supplier rating and transaction history records',
      'Automated low-stock threshold SMS/email alerts',
      'Stock transfer notes with transit verification',
      'FIFO and moving weighted average valuation reports'
    ]),
    modules: JSON.stringify([
      'Stock Master',
      'Purchase Cycle',
      'Warehouse Transfer',
      'Barcode Engine',
      'Valuation Reports'
    ]),
    architecture: 'Distributed ledger with optimistic concurrency and barcode hardware hooks.',
    pricingTier: 'Enterprise',
    order: 2,
    seoTitle: 'Inventory Management Platform | Guruvanta Solutions Technologies',
    seoDescription: 'Multi-warehouse inventory management, automated replenishment, and valuation.'
  },
  {
    title: 'HR & Payroll',
    slug: 'hr-payroll',
    tag: 'Workforce & Compliance',
    headline: 'Precision payroll, automated attendance, and statutory peace of mind.',
    description: 'An all-in-one workforce operating system that connects biometric machines, leave tracking, statutory deductions, and automated bank disbursement.',
    features: JSON.stringify([
      'Centralized digital employee records and documents',
      'Biometric and mobile GPS attendance logging',
      'Configurable multi-tier leave approval policies',
      'One-click salary processing with automated PF/ESI/TDS',
      'Automated PDF payslip generation and dispatch',
      'Statutory compliance filing reports'
    ]),
    modules: JSON.stringify([
      'Employee Core',
      'Time & Attendance',
      'Leave Management',
      'Payroll Processor',
      'Employee Self-Service'
    ]),
    architecture: 'Encrypted HR schema with granular role separation and audit logging.',
    pricingTier: 'Custom Enterprise',
    order: 3,
    seoTitle: 'HR & Payroll Software Platform | Guruvanta Solutions Technologies',
    seoDescription: 'Biometric attendance, automated salary calculations, and employee self-service.'
  },
  {
    title: 'CRM',
    slug: 'crm',
    tag: 'Sales & Client Growth',
    headline: 'Empower commercial teams to close higher-value contracts faster.',
    description: 'Eliminate lost sales inquiries. Track every prospect from initial touchpoint to signed contract, with automated task reminders and conversation timelines.',
    features: JSON.stringify([
      'Omni-channel lead capture from web, ads, and WhatsApp',
      'Automated follow-up scheduling and notification alerts',
      'Visual drag-and-drop sales pipeline stages',
      'Complete customer interaction history and files',
      'Team task assignments and SLA tracking',
      'Sales rep activity scorecards and conversion ratios'
    ]),
    modules: JSON.stringify([
      'Lead Capturing',
      'Pipeline Stages',
      'Activity Timeline',
      'Task Scheduler',
      'Sales Telemetry'
    ]),
    architecture: 'Websocket-enabled live sales board with instant notifications.',
    pricingTier: 'Enterprise Growth',
    order: 4,
    seoTitle: 'Enterprise CRM Software | Guruvanta Solutions Technologies',
    seoDescription: 'High-performance CRM with deal pipelines, WhatsApp tracking, and analytics.'
  },
  {
    title: 'Business Dashboard',
    slug: 'business-dashboard',
    tag: 'Executive Intelligence',
    headline: 'Real-time executive scorecards uniting your entire operation.',
    description: 'Give leadership immediate visual clarity over company performance. Live charts synthesize revenue, cash balances, sales velocity, and inventory turnover.',
    features: JSON.stringify([
      'Real-time executive KPIs and scorecards',
      'Interactive multi-branch sales analytics',
      'Financial health and cash burn runway calculations',
      'Slow-moving and dead-stock inventory identification',
      'Custom drag-and-drop report builder',
      'Role-based dashboards with automated daily email summaries'
    ]),
    modules: JSON.stringify([
      'Executive Summary',
      'Financial Radar',
      'Sales Analytics',
      'Supply Chain KPIs',
      'Export Studio'
    ]),
    architecture: 'OLAP aggregation layer with pre-computed materialized metrics.',
    pricingTier: 'Executive Tier',
    order: 5,
    seoTitle: 'Business Dashboard & Analytics | Guruvanta Solutions Technologies',
    seoDescription: 'Executive dashboards, live revenue KPIs, and predictive business intelligence.'
  },
  {
    title: 'WhatsApp Automation',
    slug: 'whatsapp-automation',
    tag: 'Connected Messaging',
    headline: 'Turn WhatsApp into an automated transactional and support engine.',
    description: 'Harness the official WhatsApp Cloud API to automate customer touchpoints. Send billing receipts, chase payments, and answer FAQs 24/7 without human intervention.',
    features: JSON.stringify([
      'Automated invoice PDF delivery upon purchase',
      'Gentle automated payment reminder sequences',
      'Instant lead qualification and inquiry routing',
      'Live order dispatch and tracking updates',
      'Transactional alerts for bookings and reservations',
      'AI chatbot integration for automated 24/7 support'
    ]),
    modules: JSON.stringify([
      'Meta API Gateway',
      'Template Manager',
      'Trigger Engine',
      'Payment Reminders',
      'Chatbot Conductor'
    ]),
    architecture: 'Resilient message queue with rate-limited dispatch and webhook ingestion.',
    pricingTier: 'Scale',
    order: 6,
    seoTitle: 'WhatsApp Business Automation Platform | Guruvanta Solutions Technologies',
    seoDescription: 'Automated invoice delivery, payment reminders, and customer support via WhatsApp.'
  }
];

export const initialIndustries = [
  {
    title: 'Hospital',
    slug: 'hospital-erp',
    headline: 'Connected clinical, surgical, and administrative healthcare operations.',
    description: 'An enterprise Hospital Management Information System (HMIS) designed to reduce patient wait times, streamline doctor consultations, eliminate prescription errors, and automate insurance billing.',
    painPoints: JSON.stringify([
      'Disconnected patient records between OPD, IPD, and laboratory',
      'Slow manual billing causing patient checkout bottlenecks',
      'Untracked hospital pharmacy inventory and expired medications',
      'Complicated doctor fee and commission reconciliations'
    ]),
    keyModules: JSON.stringify([
      'Patient Registration & OPD Card',
      'Doctor Appointment Scheduling',
      'IPD Admission, Bed & Ward Allocation',
      'Electronic Medical Records (EMR)',
      'Pathology Lab & Diagnostic Interfacing',
      'In-House Hospital Pharmacy Management',
      'TPA Insurance Claims & Cashless Billing',
      'Hospital Staff & Nurse Shift Roster'
    ]),
    workflow: 'Registration -> OPD Queue -> Doctor EMR -> Lab / Pharmacy -> IPD Ward -> Discharge & Final Billing',
    order: 1,
    seoTitle: 'Hospital Management Information System (HMIS) | Guruvanta Solutions',
    seoDescription: 'Comprehensive hospital software for clinical workflows, bed allocation, and billing.'
  },
  {
    title: 'Pharmacy',
    slug: 'pharmacy-erp',
    headline: 'High-precision retail and wholesale pharmaceutical management.',
    description: 'Specialized pharmacy software delivering sub-second counter billing, intelligent drug substitute search, automated batch and expiry alerts, and strict narcotic registry compliance.',
    painPoints: JSON.stringify([
      'Revenue loss from expired medicines sitting unnoticed on shelves',
      'Customer loss when a requested brand is out of stock (no salt search)',
      'Tedious manual purchase entry from diverse pharmaceutical distributors',
      'Audit risks from improper Schedule H / H1 drug documentation'
    ]),
    keyModules: JSON.stringify([
      'Batch & Expiry Date Alert Engine',
      'Salt Composition & Generic Substitute Finder',
      'Sub-Second Prescription Counter Billing',
      'Wholesale Purchase Order & Auto-Stock Update',
      'Schedule H & H1 Drug Registry Compliance',
      'Supplier Ledger & Payment Aging Trackers',
      'GST Tax Invoicing & GSTR Filing Summaries',
      'Doctor-wise Prescription Volume Reports'
    ]),
    workflow: 'Distributor PO -> Batch Receiving -> Prescription Scan -> Salt Lookup -> Fast Billing -> Compliance Log',
    order: 2,
    seoTitle: 'Pharmacy Management & Billing Software | Guruvanta Solutions',
    seoDescription: 'Pharmaceutical retail and wholesale ERP with expiry tracking and generic substitute search.'
  },
  {
    title: 'Jewellery',
    slug: 'jewellery-erp',
    headline: 'High-value precious metal inventory, purity calculation, and retail management.',
    description: 'Engineered specifically for gold, silver, diamond, and gemstone jewelers. Accurately tracks live bullion rates, karat purity conversions, stone weights, making charges, and Karigar scrap accountability.',
    painPoints: JSON.stringify([
      'Human error in calculating karat purity, net weight, and wastage charges',
      'Theft and loss risks without item-level RFID/barcode tag tracking',
      'Complex tracking of gold given to Karigars (artisans) for crafting',
      'Customer advance payment and gold savings scheme reconciliation'
    ]),
    keyModules: JSON.stringify([
      'Live Bullion Gold & Silver Rate Engine',
      'Gross Weight, Stone Weight & Net Weight Calculator',
      'Karat Purity Conversion & Melting Matrix',
      'Barcode & RFID Jewelry Tag Tracking',
      'Karigar (Artisan) Issue, Scrap & Receipt Ledger',
      'Old Gold Exchange & Valuation Module',
      'Customer Monthly Gold Savings Scheme Portal',
      'Detailed Hallmarking & Certified Diamond Ledger'
    ]),
    workflow: 'Bullion Purchase -> Karigar Job Card -> Tagging -> Live Rate Pricing -> Sales Billing -> Scheme Ledger',
    order: 3,
    seoTitle: 'Jewellery ERP & Retail Showroom Software | Guruvanta Solutions',
    seoDescription: 'Purity calculation, live metal rates, Karigar tracking, and jewelry showroom POS.'
  },
  {
    title: 'Restaurant',
    slug: 'restaurant-erp',
    headline: 'High-speed dining room, QSR counter, and cloud kitchen orchestration.',
    description: 'An ultra-fast restaurant point of sale and kitchen management platform. Supports interactive table maps, split-second KOT generation, raw ingredient stock depletion, and food delivery aggregator synchronization.',
    painPoints: JSON.stringify([
      'Kitchen order delays and handwriting errors on manual KOTs',
      'Inventory leakage and pilferage of expensive ingredients (cheese, meats, spirits)',
      'Slow billing causing customer frustration during peak dinner rush',
      'Managing separate tablets for Swiggy, Zomato, and dine-in orders'
    ]),
    keyModules: JSON.stringify([
      'Interactive Visual Table Floor Layout',
      'Digital Kitchen Display System (KDS)',
      'Sub-Second Table Billing & Split Payments',
      'Captain Mobile Ordering App',
      'Recipe-Level Inventory Depletion (BOM)',
      'Zomato & Swiggy Central Menu & Order Sync',
      'Customer Loyalty Points & WhatsApp Bills',
      'Multi-Outlet Centralized Kitchen Control'
    ]),
    workflow: 'Menu -> Table -> Order -> KOT -> Kitchen -> Billing -> Payment -> Reports',
    order: 4,
    seoTitle: 'Restaurant POS & Kitchen Display System | Guruvanta Solutions',
    seoDescription: 'High-velocity restaurant POS, kitchen display system, recipe inventory, and multi-outlet ERP.'
  },
  {
    title: 'Hotel',
    slug: 'hotel-erp',
    headline: 'Front desk hospitality, reservation channels, and guest service platform.',
    description: 'A modern Property Management System (PMS) unifying front desk reservations, housekeeping inspections, banquet bookings, restaurant room service folios, and OTA channel distribution.',
    painPoints: JSON.stringify([
      'Double bookings caused by desynchronized OTA channels',
      'Poor communication between front desk and housekeeping teams',
      'Lost room service bills missing from the final guest checkout folio',
      'Manual guest identity verification and government registration'
    ]),
    keyModules: JSON.stringify([
      'Visual Room Occupancy & Reservation Matrix',
      'Two-Way OTA Channel Manager (Booking, Agoda, Expedia)',
      'Express Guest Check-in & Digital KYC Upload',
      'Housekeeping Room Cleaning Mobile Status',
      'Unified Guest Folio (Room + Restaurant + Spa)',
      'Banquet Hall & Event Space Booking Scheduler',
      'Automated Night Audit & RevPAR Analytics',
      'Contactless Mobile Key & Guest Checkout'
    ]),
    workflow: 'Reservation -> Check-In -> Guest Folio -> Housekeeping -> Service Orders -> Check-Out & Audit',
    order: 5,
    seoTitle: 'Hotel Property Management System (PMS) | Guruvanta Solutions',
    seoDescription: 'Enterprise hotel software for front desk, channel management, housekeeping, and guest folios.'
  },
  {
    title: 'Retail POS',
    slug: 'retail-pos',
    headline: 'Lightning-fast counter checkout with offline reliability for stores.',
    description: 'Designed for supermarkets, apparel stores, and retail chains. Operates completely offline during internet failures, supporting thousands of barcode scans per day with integrated payment devices.',
    painPoints: JSON.stringify([
      'Long customer checkout queues during peak shopping hours',
      'Loss of sales when internet connections fail unexpectedly',
      'Complex returns, exchanges, and credit note handling',
      'Lack of real-time inventory visibility across retail branches'
    ]),
    keyModules: JSON.stringify([
      'Offline-First Sub-Second Counter Billing',
      'Barcode, Weighing Scale & QR Scanner Hooks',
      'Multi-Tender Payments (Cash, Card, UPI, Vouchers)',
      'Instant Customer Loyalty Lookups & Points Redemption',
      'Seamless Product Returns & Credit Notes',
      'Daily Cash Drawer Count & Discrepancy Audits',
      'Inter-Store Stock Transfers & Lookups',
      'Fast Item Catalogue Master with Variant Support'
    ]),
    workflow: 'Barcode Scan -> Loyalty Lookup -> Discount Matrix -> Multi-tender Pay -> Receipt -> Stock Sync',
    order: 6,
    seoTitle: 'Retail POS & Multi-Store Software | Guruvanta Solutions Technologies',
    seoDescription: 'Offline-ready retail point of sale, barcode scanning, loyalty points, and inventory sync.'
  },
  {
    title: 'Manufacturing',
    slug: 'manufacturing-erp',
    headline: 'Discrete and process manufacturing execution with multi-level BOM.',
    description: 'Coordinate shop floor production with precision. Track raw material staging, manage machine work centers, calculate actual vs standard production costs, and maintain quality inspection logs.',
    painPoints: JSON.stringify([
      'Unscheduled machine downtime disrupting delivery commitments',
      'Unclear production costs due to untracked scrap and wastage',
      'Bottlenecks in issuing raw materials to active assembly lines',
      'Difficulty tracing defective batches back to supplier lots'
    ]),
    keyModules: JSON.stringify([
      'Multi-Level Bill of Materials (BOM)',
      'Production Work Order & Job Card Dispatch',
      'Shop Floor Machine Capacity & Maintenance Logs',
      'Raw Material Stage Issuance & Scrap Tracking',
      'In-Process & Finished Goods Quality Testing',
      'Standard vs Actual Production Cost Variance',
      'Subcontracting & Outsource Processing Records',
      'Finished Goods Packaging & Serial Number Tagging'
    ]),
    workflow: 'Sales Demand -> Material Planning -> Job Card -> Shop Floor Issue -> Quality Test -> Storage',
    order: 7,
    seoTitle: 'Manufacturing ERP & Production Software | Guruvanta Solutions',
    seoDescription: 'Shop floor control, multi-level BOM, machine maintenance, and production costing.'
  },
  {
    title: 'Transport & Logistics',
    slug: 'transport-logistics-erp',
    headline: 'Fleet telemetry, freight invoicing, and consignment tracking.',
    description: 'Orchestrate regional and long-haul transportation. Manage Lorry Receipts (LR), trip advances, fuel card expenses, vehicle maintenance schedules, and proof-of-delivery (POD) documentation.',
    painPoints: JSON.stringify([
      'Cash leakage in unverified driver trip expenses and fuel claims',
      'Delayed freight invoicing waiting weeks for physical PODs to return',
      'Unexpected vehicle breakdowns from forgotten preventive maintenance',
      'Zero real-time shipment visibility for high-value corporate clients'
    ]),
    keyModules: JSON.stringify([
      'Consignment Booking & Lorry Receipt (LR) Engine',
      'Fleet Vehicle & Driver Allocation Scheduler',
      'Trip Advance, Toll & Fuel Expense Accounting',
      'Tyre Mileage & Preventive Maintenance Tracking',
      'Digital Proof of Delivery (POD) Mobile Upload',
      'Customer Freight Billing & Ledger Management',
      'Live Vehicle GPS Telematics Integration',
      'Vehicle Insurance, Permit & Fitness Alert System'
    ]),
    workflow: 'Booking -> LR Creation -> Truck Dispatch -> Transit GPS -> Mobile POD -> Freight Invoice',
    order: 8,
    seoTitle: 'Transport ERP & Fleet Logistics Software | Guruvanta Solutions',
    seoDescription: 'Lorry receipt generation, fleet maintenance, driver trip expenses, and live telematics.'
  },
  {
    title: 'School & College',
    slug: 'school-erp',
    headline: 'Academic governance, automated fees, and student lifecycle management.',
    description: 'A unified campus management platform designed for schools, colleges, and university campuses. Connects student admissions, digital fee collection, online exams, bus GPS tracking, and parent communication.',
    painPoints: JSON.stringify([
      'Long queues and cash reconciliation hassles during fee collection season',
      'Cumbersome manual mark entry and report card calculations',
      'Parent anxiety regarding school bus safety and departure delays',
      'Inefficient teacher timetable creation and proxy substitution'
    ]),
    keyModules: JSON.stringify([
      'Online Student Admission & Document Vault',
      'Automated Fee Invoicing with Online Payment Gateway',
      'Biometric / RFID Student & Staff Attendance',
      'Examination Marksheets & Report Card Generator',
      'School Bus GPS Route Tracking & Parent Alerts',
      'Library Book Cataloguing & Barcode Borrowing',
      'Teacher Timetable Builder & Proxy Scheduling',
      'Parent Mobile App for Homework, Notices & Chats'
    ]),
    workflow: 'Inquiry -> Admission -> Fee Setup -> Attendance & Classes -> Exams -> Grade Card & Graduation',
    order: 9,
    seoTitle: 'School Management ERP Software | Guruvanta Solutions Technologies',
    seoDescription: 'Student admissions, automated fee payment, examination report cards, and bus tracking.'
  },
  {
    title: 'Real Estate',
    slug: 'real-estate-erp',
    headline: 'Developer unit inventory, construction milestones, and investor folios.',
    description: 'Tailored for real estate builders, commercial developers, and high-velocity property agencies. Manages floor plan unit grids, construction-linked payment milestone schedules, and broker commissions.',
    painPoints: JSON.stringify([
      'Double booking of flats or commercial units by competing brokers',
      'Delayed payment collections from buyers due to manual demand letters',
      'Disorganized tracking of customer modifications and extra work orders',
      'Conflict over broker commission percentages and lead ownership'
    ]),
    keyModules: JSON.stringify([
      'Interactive Master Floor Plan & Unit Availability Grid',
      'Construction-Linked Payment Demand Schedule Builder',
      'Automated Buyer Demand Letters & Payment Receipts',
      'Channel Partner (Broker) Registration & Commission Ledger',
      'Customer KYC, Allotment Letters & Agreement Generator',
      'Site Visit Scheduler with GPS Sales Rep Verification',
      'Project Contractor Milestone Billing & Material Consumption',
      'Customer Grievance & Handover Snag List Management'
    ]),
    workflow: 'Site Inquiry -> Unit Selection -> Booking Token -> Milestone Demand -> Agreement -> Handover',
    order: 10,
    seoTitle: 'Real Estate ERP & Builder CRM | Guruvanta Solutions Technologies',
    seoDescription: 'Unit inventory grids, milestone payment demands, broker commission tracking, and builder CRM.'
  }
];

export const initialPortfolioProjects = [
  {
    title: 'Apex Financial Clearing Platform',
    slug: 'apex-financial-clearing',
    industry: 'Finance',
    clientType: 'Multi-National Clearing House',
    summary: 'A high-throughput financial settlement platform processing 4.2 million transactions daily with sub-millisecond reconciliation.',
    problem: 'The client relied on legacy batch jobs running overnight that took 7+ hours, creating risk during volatile market swings and delaying trade settlements.',
    solution: 'We engineered an event-driven clearing platform using Go, PostgreSQL, and Redis that processes trade settlements deterministically in under 8ms.',
    modules: JSON.stringify([
      'Real-time Settlement Engine',
      'Compliance & AML Verification',
      'Double-entry General Ledger',
      'Banking Gateway Connectors',
      'Executive Risk Radar'
    ]),
    technology: JSON.stringify(['Go', 'PostgreSQL', 'Redis', 'Docker', 'Next.js']),
    results: JSON.stringify([
      'Reduced overnight settlement time from 7 hours to 8 milliseconds',
      'Zero transaction loss over 18+ months of uninterrupted production',
      'Enabled automated regulatory reporting across 4 national bank regulators'
    ]),
    order: 1,
    seoTitle: 'Apex Financial Settlement Platform Case Study | Guruvanta Solutions',
    seoDescription: 'How Guruvanta Solutions engineered an event-driven financial clearing engine processing millions of trades.'
  },
  {
    title: 'MediCore Clinical & Hospital Network',
    slug: 'medicore-hospital-network',
    industry: 'Healthcare',
    clientType: 'Multi-Specialty 650-Bed Hospital Chain',
    summary: 'A unified HMIS across 3 hospital locations syncing patient EMR, OT reservations, and diagnostic laboratories.',
    problem: 'Each hospital facility operated disconnected software, forcing doctors to review paper charts when patients transferred between branches, causing delayed surgeries and lost bills.',
    solution: 'Engineered a centralized, HIPAA-aligned Hospital Operating System uniting OPD, IPD, laboratory analyzers, pharmacy, and corporate insurance claims.',
    modules: JSON.stringify([
      'Central Patient Master (EMR)',
      'Automated LIS Machine Interfacing',
      'Surgical OT Scheduling Grid',
      'In-House Pharmacy Expiry Watcher',
      'Cashless TPA Billing Gateway'
    ]),
    technology: JSON.stringify(['React', 'Node.js', 'PostgreSQL', 'FHIR API', 'TailwindCSS']),
    results: JSON.stringify([
      'Cut patient OPD waiting duration by 62%',
      'Eliminated $180,000 in expired pharmaceutical inventory in year one',
      'Reduced insurance claim denial rates from 14% to 1.8%'
    ]),
    order: 2,
    seoTitle: 'MediCore Hospital Network Case Study | Guruvanta Solutions',
    seoDescription: 'Transforming clinical workflows and patient care across a 650-bed multi-specialty hospital group.'
  },
  {
    title: 'OmniVogue Retail & Distribution POS',
    slug: 'omnivogue-retail-distribution',
    industry: 'Retail',
    clientType: '84-Store Fashion & Apparel Retailer',
    summary: 'High-speed offline-capable POS and central warehouse replenishment system across 84 retail stores.',
    problem: 'Frequent mall internet drops halted checkout counters, causing customer walkouts and creating discrepancies between physical shelf stock and central warehouse records.',
    solution: 'Built an offline-first POS platform utilizing local SQLite synchronization that continues scanning without connectivity and auto-reconciles once restored.',
    modules: JSON.stringify([
      'Offline Checkout Terminal',
      'Inter-Store Stock Rebalancing',
      'Customer Loyalty & SMS Bills',
      'Multi-Warehouse Fulfillment',
      'Predictive Reorder Pipeline'
    ]),
    technology: JSON.stringify(['React', 'TypeScript', 'Node.js', 'SQLite', 'PostgreSQL']),
    results: JSON.stringify([
      'Processed over $48M in retail sales with zero counter downtime during network drops',
      'Increased checkout speed by 3.4x per customer transaction',
      'Reduced dead stock transfers between regional stores by 41%'
    ]),
    order: 3,
    seoTitle: 'OmniVogue Retail POS Case Study | Guruvanta Solutions Technologies',
    seoDescription: 'Offline-capable retail point of sale deployment across 84 retail fashion outlets.'
  },
  {
    title: 'Grand Azure Resort & Hotel PMS',
    slug: 'grand-azure-hospitality-pms',
    industry: 'Hospitality',
    clientType: '5-Star Beachfront Luxury Resort',
    summary: 'Complete Property Management System unifying 220 guest suites, 4 fine-dining restaurants, spa, and banquet events.',
    problem: 'Guest bills incurred at the beach club or spa frequently failed to sync to the room folio prior to early morning check-outs, resulting in uncollected revenue.',
    solution: 'Architected a single real-time guest folio engine connecting room keycards, dining POS, spa treatments, and automated channel managers.',
    modules: JSON.stringify([
      'Unified Guest Folio',
      'Interactive Room Reservation Grid',
      'Mobile Housekeeping Telemetry',
      'F&B Restaurant Room Billing',
      'Banquet Event Coordinator'
    ]),
    technology: JSON.stringify(['Next.js', 'TypeScript', 'PostgreSQL', 'WebSockets']),
    results: JSON.stringify([
      'Zero unbilled guest charges across 28,000+ booked room nights',
      'Cut guest front-desk check-in time from 8 minutes to 45 seconds',
      'Increased direct website bookings by 34% through integrated reservations'
    ]),
    order: 4,
    seoTitle: 'Grand Azure Luxury Resort PMS Case Study | Guruvanta Solutions',
    seoDescription: 'Unifying luxury hotel operations, guest folios, and fine-dining table orders into one core.'
  },
  {
    title: 'TransOrbit Express Logistics Engine',
    slug: 'transorbit-logistics-fleet',
    industry: 'Logistics',
    clientType: 'National Freight Carrier with 340+ Commercial Trucks',
    summary: 'Consignment booking, digital Lorry Receipt (LR) tracking, and automated driver settlement platform.',
    problem: 'Truck drivers took up to 3 weeks to mail physical paper PODs back to headquarters before enterprise clients could be invoiced, strangling company cash flow.',
    solution: 'Constructed a driver mobile app enabling instant camera POD capture, automatic OCR verification, and real-time electronic freight invoice generation.',
    modules: JSON.stringify([
      'Instant Consignment & LR Generator',
      'Driver Mobile App with Instant POD OCR',
      'GPS Fleet Telematics & Fuel Logs',
      'Automated Freight Invoicing',
      'Vehicle Maintenance Watchdog'
    ]),
    technology: JSON.stringify(['React Native', 'Node.js', 'PostgreSQL', 'AWS S3']),
    results: JSON.stringify([
      'Decreased freight billing cycle from 21 days to under 4 hours',
      'Saved 12% in diesel expenses via route telemetry and fuel consumption audits',
      'Attained 99.4% on-time consignment delivery transparency for clients'
    ]),
    order: 5,
    seoTitle: 'TransOrbit Logistics & Fleet Engine Case Study | Guruvanta Solutions',
    seoDescription: 'Digitizing freight consignments, mobile proof of delivery, and fleet telematics.'
  },
  {
    title: 'PrecisionForge Discrete Manufacturing ERP',
    slug: 'precisionforge-manufacturing-erp',
    industry: 'Manufacturing',
    clientType: 'Automotive Precision Component Fabricator',
    summary: 'Multi-level Bill of Materials (BOM), CNC machine capacity planning, and shop floor job card tracking.',
    problem: 'The manufacturer struggled with delayed production schedules because shop floor workers lacked real-time visibility into machine bottlenecks and raw material shortages.',
    solution: 'Deployed a responsive shop floor execution system with touch terminals at each CNC workstation, tracking active job cards, scrap rates, and preventive maintenance.',
    modules: JSON.stringify([
      'Multi-Level BOM Engine',
      'CNC Workstation Touch Terminals',
      'Machine Maintenance Alerter',
      'Automated Scrap & Yield Analysis',
      'Quality Control Gatekeeper'
    ]),
    technology: JSON.stringify(['Next.js', 'PostgreSQL', 'TailwindCSS', 'Docker']),
    results: JSON.stringify([
      'Increased overall equipment effectiveness (OEE) by 27%',
      'Eliminated material run-out stoppages through automated minimum stock reserves',
      'Passed ISO 9001 compliance audit with automated batch genealogical records'
    ]),
    order: 6,
    seoTitle: 'PrecisionForge Manufacturing ERP Case Study | Guruvanta Solutions',
    seoDescription: 'Shop floor execution, CNC machine scheduling, and multi-level BOM for automotive parts.'
  },
  {
    title: 'Scholaris Academy Campus Operating System',
    slug: 'scholaris-academy-campus-erp',
    industry: 'Education',
    clientType: 'K-12 Private Educational Trust (3 Campuses, 6,200 Students)',
    summary: 'Automated digital fee collection, student report card generation, and campus bus GPS telematics.',
    problem: 'School administrative staff spent 45+ days each semester manually computing exam grades and chasing overdue tuition fees via postal letters.',
    solution: 'Engineered a unified campus platform with automated WhatsApp payment links, instant online grade computation, and RFID student bus tracking.',
    modules: JSON.stringify([
      'Online Admissions & Fees Portal',
      'Exam Grade Calculator & Marksheets',
      'Parent WhatsApp Notification Dispatcher',
      'RFID Bus GPS Fleet Tracker',
      'Teacher Timetable Optimization'
    ]),
    technology: JSON.stringify(['Next.js', 'PostgreSQL', 'Meta Cloud API', 'Redis']),
    results: JSON.stringify([
      'Achieved 96% on-time digital fee collection within first 7 days of semester',
      'Reduced grade card compilation time from 3 weeks to 12 minutes',
      'Enhanced student transit safety with real-time parent bus arrival notifications'
    ]),
    order: 7,
    seoTitle: 'Scholaris Academy Campus ERP Case Study | Guruvanta Solutions',
    seoDescription: 'Modernizing student admissions, automated fee processing, and campus operations.'
  },
  {
    title: 'PulseMatrix Business Telemetry & Analytics',
    slug: 'pulsematrix-business-telemetry',
    industry: 'Analytics',
    clientType: 'Fast-Moving Consumer Goods (FMCG) Conglomerate',
    summary: 'Executive dashboard uniting 14 distributor ERP databases into a consolidated live revenue radar.',
    problem: 'Leadership had to wait until the 15th of each month for manual consolidated spreadsheet reports from regional distributors, preventing rapid inventory adjustments.',
    solution: 'Engineered a real-time data aggregation pipeline extracting distributor billing data into a unified executive telemetry portal with predictive sales velocity alerts.',
    modules: JSON.stringify([
      'Automated ETL Ingestion Connectors',
      'Executive KPI Scorecards',
      'Regional Heatmap Analytics',
      'Predictive Demand Forecaster',
      'Daily Automated C-Suite Briefings'
    ]),
    technology: JSON.stringify(['Next.js', 'Python', 'PostgreSQL', 'D3.js', 'TailwindCSS']),
    results: JSON.stringify([
      'Provided 100% real-time revenue visibility across 14 independent distribution regions',
      'Identified regional supply gaps 18 days faster, saving $320,000 in missed sales',
      'Adopted by 45 C-suite and regional directors as the primary daily operating radar'
    ]),
    order: 8,
    seoTitle: 'PulseMatrix FMCG Business Telemetry Case Study | Guruvanta Solutions',
    seoDescription: 'Consolidating multi-distributor ERP data into live executive intelligence dashboards.'
  }
];

export const initialFAQs = [
  {
    question: 'What distinguishes Guruvanta Solutions Technologies from generic SaaS platforms?',
    answer: 'Unlike off-the-shelf software with rigid structures, Guruvanta Solutions Technologies constructs custom and semi-custom enterprise systems designed specifically around your exact business processes, data flows, and team hierarchy. You retain ownership of your data, obtain tailored workflows, and eliminate recurring per-seat fees that escalate with your headcount.',
    category: 'ERP',
    order: 1
  },
  {
    question: 'Can your ERP integrate with our existing accounting or legacy database systems?',
    answer: 'Yes. We build resilient bidirectional API connectors and webhook listeners that interface with existing Tally, SAP, Oracle, legacy SQL databases, and third-party bank gateways without disrupting your ongoing business operations.',
    category: 'ERP',
    order: 2
  },
  {
    question: 'How fast can a GST billing or inventory system be deployed in our business?',
    answer: 'Our foundational business systems (Billing, GST Invoicing, and Inventory Management) can be configured, seeded with your existing item and customer catalogs, and deployed to your team in as little as 3 to 7 business days, with thorough onboarding and user training provided.',
    category: 'Billing',
    order: 3
  },
  {
    question: 'Does your billing and POS software work when the internet goes down?',
    answer: 'Yes. Our POS and counter billing software features an offline-first architecture. It stores product catalogs and transaction queues locally in encrypted storage so your staff can continue scanning and billing uninterrupted. Once network connectivity is restored, all transactions automatically synchronize with the central cloud database.',
    category: 'Billing',
    order: 4
  },
  {
    question: 'What is your technology stack for custom software development?',
    answer: 'We leverage modern, battle-tested technologies including Next.js, React, TypeScript, Node.js, Go, Python, PostgreSQL, Redis, Docker, and Kubernetes. We prioritize type safety, sub-second query response times, and cloud-native resilience.',
    category: 'Custom Software',
    order: 5
  },
  {
    question: 'Do you offer mobile applications for iOS and Android alongside the web platforms?',
    answer: 'Yes. We engineer high-performance native and cross-platform mobile applications using Flutter and React Native. These apps feature biometric security, offline caching, push notifications, and seamless real-time synchronization with your central ERP core.',
    category: 'Mobile Apps',
    order: 6
  },
  {
    question: 'How does your WhatsApp Business Automation integrate with our software?',
    answer: 'We connect directly to the official Meta WhatsApp Business Cloud API. When an action occurs in your ERP (such as an invoice being generated, payment becoming overdue, or a delivery being dispatched), our trigger engine automatically formats and delivers verified WhatsApp messages and PDF attachments to your customers.',
    category: 'WhatsApp Automation',
    order: 7
  },
  {
    question: 'Can we build custom AI chatbots that understand our proprietary company documents?',
    answer: 'Absolutely. We build enterprise AI chatbots using Retrieval-Augmented Generation (RAG). We index your product catalogs, SOP manuals, and support history into high-speed vector embeddings, allowing the AI to answer complex customer and employee questions with precision and zero hallucination.',
    category: 'AI',
    order: 8
  },
  {
    question: 'Where is our company data hosted, and who owns it?',
    answer: 'You maintain 100% ownership and sovereignty over your business data. We can deploy your software to your dedicated cloud accounts (AWS, Google Cloud, Azure, or DigitalOcean) or on-premise servers. We configure automated encrypted daily backups and disaster recovery protocols.',
    category: 'Hosting',
    order: 9
  },
  {
    question: 'What security standards and encryption practices do you enforce?',
    answer: 'All data in transit is encrypted using TLS 1.3, and data at rest is encrypted with AES-256. We implement strict Role-Based Access Control (RBAC), bcrypt/argon2 password hashing, secure JWT sessions with CSRF defenses, automated rate-limiting, and comprehensive immutable audit logs for every system action.',
    category: 'Security',
    order: 10
  },
  {
    question: 'What post-launch maintenance and technical support do you provide?',
    answer: 'Every deployment is supported by our dedicated engineering team with guaranteed SLA response times. We provide 24/7 uptime monitoring, quarterly security audits, database indexing, framework security updates, and scheduled feature evolution cycles.',
    category: 'Support',
    order: 11
  },
  {
    question: 'How does your pricing model work for enterprise implementations?',
    answer: 'Our pricing is transparent and milestone-based. We provide fixed-scope quotes based on the architecture blueprint agreed upon during the Discover and Architect phases. You avoid hidden monthly subscription charges or arbitrary per-user license penalties.',
    category: 'Pricing',
    order: 12
  },
  {
    question: 'What is the step-by-step implementation process for a new client?',
    answer: 'We follow our disciplined 4-stage methodology: 01 DISCOVER (understanding your existing workflows and pain points), 02 ARCHITECT (engineering the technical blueprint and database schema), 03 ENGINEER (agile build with continuous client preview builds), and 04 EVOLVE (production deployment, team onboarding, and continuous optimization).',
    category: 'Implementation',
    order: 13
  },
  {
    question: 'Can your HR & Payroll software handle biometric fingerprint and facial attendance machines?',
    answer: 'Yes. We support TCP/IP and API machine integration with major biometric hardware manufacturers (eSSL, Realtime, ZKTeco, Matrix), allowing check-in and check-out punches to sync straight into your payroll engine in real time.',
    category: 'ERP',
    order: 14
  },
  {
    question: 'Does your Hospital Management Software support electronic medical records (EMR)?',
    answer: 'Yes. Our HMIS provides doctors with an intuitive, high-speed digital prescription pad, diagnosis coding, lab report attachments, allergy warnings, and complete historical patient visits accessible in seconds.',
    category: 'ERP',
    order: 15
  },
  {
    question: 'How do you handle multi-branch or multi-outlet retail chains?',
    answer: 'Our architecture supports hierarchical multi-tenancy. You can operate dozens of branches with separate localized stock, price lists, and cashiers, while company directors access consolidated real-time financial and inventory reports from a single master dashboard.',
    category: 'Billing',
    order: 16
  },
  {
    question: 'Can we schedule an on-site or live interactive screen demonstration?',
    answer: 'Yes. You can submit a demonstration request directly through our portal or contact our systems architects. We will tailor the demonstration specifically to your industry and operational workflow.',
    category: 'Support',
    order: 17
  },
  {
    question: 'What happens if we need to scale from 50 users to 5,000 users over time?',
    answer: 'All our software architectures are engineered for horizontal scalability using containerized microservices, connection pooling, and cached query layers. Your system can expand seamlessly without needing architectural redesigns.',
    category: 'Custom Software',
    order: 18
  },
  {
    question: 'Can the Restaurant ERP support multi-kitchen KDS displays and captain mobile ordering?',
    answer: 'Yes. Captains can punch orders directly on smartphones or tablets at tableside. The order automatically routes items to their respective kitchen stations (e.g., drinks to the bar, appetizers to the grill) on dedicated touchscreen KDS screens.',
    category: 'ERP',
    order: 19
  },
  {
    question: 'How do we migrate our existing historical data from spreadsheets or older software?',
    answer: 'Our data engineering team handles the complete extraction, sanitization, and migration of your historical customer ledgers, supplier bills, item masters, and open balances to guarantee zero data loss during cutover.',
    category: 'Implementation',
    order: 20
  }
];

export const initialTestimonials = [
  {
    authorName: 'Rajesh Varma',
    authorRole: 'Chief Operating Officer',
    company: 'Apex Clearing Solutions',
    quote: 'Guruvanta Solutions transformed our trade reconciliation pipeline. What used to take our finance team 7 hours every single night now settles in milliseconds. The architectural precision and engineering caliber are unmatched.',
    rating: 5,
    order: 1
  },
  {
    authorName: 'Dr. Sunita Rao',
    authorRole: 'Medical Director',
    company: 'MediCore Hospital Group',
    quote: 'Deploying the Guruvanta HMIS across our 3 hospital branches eliminated communication silos between our doctors, pathology lab, and billing desk. Our patient wait times decreased by more than 60% within 60 days.',
    rating: 5,
    order: 2
  },
  {
    authorName: 'Vikramaditya Singhania',
    authorRole: 'Managing Director',
    company: 'OmniVogue Retail Group',
    quote: 'Our retail outlets face intermittent network disruptions in mall basements. The offline-resilient POS built by Guruvanta has never missed a transaction across 84 stores. Exceptional reliability.',
    rating: 5,
    order: 3
  },
  {
    authorName: 'Anand Kulkarni',
    authorRole: 'Founder & CEO',
    company: 'TransOrbit Express Logistics',
    quote: 'Our billing cycle dropped from 3 weeks to 4 hours thanks to the automated mobile POD system. Guruvanta Solutions Technologies understands how enterprise business operations actually function on the ground.',
    rating: 5,
    order: 4
  }
];

export const initialLocations = [
  {
    city: 'Bengaluru',
    country: 'India',
    address: 'Level 8, Prestige Tech Hub, Outer Ring Road, Bengaluru, Karnataka 560103',
    phone: '+91 (80) 4192-8800',
    email: 'contact@guruvanta.com',
    isHeadquarter: true,
    mapUrl: 'https://maps.google.com'
  },
  {
    city: 'Mumbai',
    country: 'India',
    address: 'Floor 14, Maker Chambers VI, Nariman Point, Mumbai, Maharashtra 400021',
    phone: '+91 (22) 6744-1200',
    email: 'mumbai@guruvanta.com',
    isHeadquarter: false,
    mapUrl: 'https://maps.google.com'
  },
  {
    city: 'New Delhi (NCR)',
    country: 'India',
    address: 'Tower B, DLF Cyber City, Sector 25A, Gurugram, Haryana 122002',
    phone: '+91 (124) 498-3300',
    email: 'delhi@guruvanta.com',
    isHeadquarter: false,
    mapUrl: 'https://maps.google.com'
  }
];

export const initialTeam = [
  {
    name: 'Devendra Guruvanta',
    role: 'Chief Executive Officer & Chief Architect',
    bio: '20+ years designing enterprise distributed systems, fault-tolerant financial ledgers, and large-scale industrial automation.',
    order: 1
  },
  {
    name: 'Pooja Kashyap',
    role: 'Head of Enterprise Engineering',
    bio: 'Former senior systems architect specializing in high-throughput database design, microservices, and ERP core reliability.',
    order: 2
  },
  {
    name: 'Arjun Mehta',
    role: 'Director of Artificial Intelligence',
    bio: 'Leading research and deployment of domain-specialized LLMs, computer vision OCR, and predictive business intelligence.',
    order: 3
  },
  {
    name: 'Siddharth Nair',
    role: 'Head of Client Solutions & Delivery',
    bio: 'Directing seamless client deployments across healthcare, retail chains, and discrete manufacturing facilities.',
    order: 4
  }
];
