import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import {
  initialServices,
  initialProducts,
  initialIndustries,
  initialPortfolioProjects,
  initialFAQs,
  initialTestimonials,
  initialLocations,
  initialTeam,
} from '../lib/seedData';

const prisma = new PrismaClient();

async function main() {
  console.log('--- Starting Guruvanta Solutions Technologies Database Seed ---');

  // Seed Admin Users
  const superAdminPassword = await bcrypt.hash('admin123456', 10);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@guruvanta.com' },
    update: {},
    create: {
      email: 'admin@guruvanta.com',
      name: 'Executive Administrator',
      passwordHash: superAdminPassword,
      role: 'SUPER_ADMIN',
    },
  });
  console.log('Seeded Super Admin User:', admin.email);

  const salesUser = await prisma.user.upsert({
    where: { email: 'sales@guruvanta.com' },
    update: {},
    create: {
      email: 'sales@guruvanta.com',
      name: 'Aditya Sharma',
      passwordHash: superAdminPassword,
      role: 'SALES',
    },
  });
  console.log('Seeded Sales Representative:', salesUser.email);

  // Seed Services
  for (const service of initialServices) {
    await prisma.service.upsert({
      where: { slug: service.slug },
      update: service,
      create: service,
    });
  }
  console.log(`Seeded ${initialServices.length} Services.`);

  // Seed Products
  for (const product of initialProducts) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: product,
      create: product,
    });
  }
  console.log(`Seeded ${initialProducts.length} Products.`);

  // Seed Industries
  for (const industry of initialIndustries) {
    await prisma.industry.upsert({
      where: { slug: industry.slug },
      update: industry,
      create: industry,
    });
  }
  console.log(`Seeded ${initialIndustries.length} Industries.`);

  // Seed Portfolio Projects
  for (const project of initialPortfolioProjects) {
    await prisma.portfolioProject.upsert({
      where: { slug: project.slug },
      update: project,
      create: project,
    });
  }
  console.log(`Seeded ${initialPortfolioProjects.length} Portfolio Projects.`);

  // Seed FAQs
  await prisma.fAQ.deleteMany({});
  for (const faq of initialFAQs) {
    await prisma.fAQ.create({
      data: faq,
    });
  }
  console.log(`Seeded ${initialFAQs.length} FAQs.`);

  // Seed Testimonials
  await prisma.testimonial.deleteMany({});
  for (const test of initialTestimonials) {
    await prisma.testimonial.create({
      data: test,
    });
  }
  console.log(`Seeded ${initialTestimonials.length} Testimonials.`);

  // Seed Locations
  await prisma.location.deleteMany({});
  for (const loc of initialLocations) {
    await prisma.location.create({
      data: loc,
    });
  }
  console.log(`Seeded ${initialLocations.length} Corporate Locations.`);

  // Seed Team
  await prisma.teamMember.deleteMany({});
  for (const member of initialTeam) {
    await prisma.teamMember.create({
      data: member,
    });
  }
  console.log(`Seeded ${initialTeam.length} Leadership Team Members.`);

  // Seed Sample Inbound Leads
  const existingLead = await prisma.lead.findFirst();
  if (!existingLead) {
    const lead1 = await prisma.lead.create({
      data: {
        name: 'Suresh Patel',
        company: 'Gujarat Precision Castings',
        email: 'spatel@gpc-industries.com',
        phone: '+91 98250 11223',
        businessType: 'Manufacturing',
        city: 'Ahmedabad',
        interestedSolution: 'Manufacturing ERP',
        numberOfUsers: '50-100',
        currentSoftware: 'Legacy Tally 9',
        requirement: 'Need shop floor job cards, multi-level BOM, and raw material wastage tracking across 2 casting plants.',
        preferredContact: 'PHONE',
        status: 'NEW',
        assignedToId: salesUser.id,
      },
    });

    await prisma.leadActivity.create({
      data: {
        leadId: lead1.id,
        type: 'CREATED',
        title: 'Lead Captured via Website Demonstration Portal',
        description: 'Client submitted complete system parameters and requirements.',
      },
    });

    const lead2 = await prisma.lead.create({
      data: {
        name: 'Dr. Meenakshi Sundaram',
        company: 'Lotus Multi-Speciality Clinics',
        email: 'director@lotuscare.org',
        phone: '+91 94440 55678',
        businessType: 'Healthcare',
        city: 'Chennai',
        interestedSolution: 'Hospital Management',
        numberOfUsers: '25-50',
        currentSoftware: 'Disconnected spreadsheets',
        requirement: 'Require OPD/IPD synchronization, EMR digital prescriptions, and lab equipment machine data capture.',
        preferredContact: 'EMAIL',
        status: 'QUALIFIED',
        assignedToId: salesUser.id,
      },
    });

    await prisma.leadActivity.create({
      data: {
        leadId: lead2.id,
        type: 'CREATED',
        title: 'Demo Request Scheduled',
        description: 'Demonstration scheduled for clinical operations director.',
      },
    });
    console.log('Seeded sample active leads with activity timeline.');
  }

  console.log('--- Guruvanta Database Seed Completed Successfully ---');
}

main()
  .catch((e) => {
    console.error('Seed Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
