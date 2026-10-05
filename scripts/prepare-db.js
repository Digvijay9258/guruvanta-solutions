const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const schemaPath = path.join(__dirname, '..', 'prisma', 'schema.prisma');
let schema = fs.readFileSync(schemaPath, 'utf8');

let dbUrl = process.env.DATABASE_URL || '';

// Handle Postgres vs SQLite dynamically
if (dbUrl.startsWith('postgres://') || dbUrl.startsWith('postgresql://')) {
  console.log('[prepare-db] Detected PostgreSQL database URL. Switching Prisma provider to "postgresql"...');
  schema = schema.replace(/provider\s*=\s*"sqlite"/, 'provider = "postgresql"');
  fs.writeFileSync(schemaPath, schema);

  // If running in CI or on Vercel, push the schema to Postgres to ensure tables exist
  if (process.env.VERCEL || process.env.CI) {
    try {
      console.log('[prepare-db] Pushing schema to PostgreSQL database...');
      execSync('npx prisma db push --skip-generate --accept-data-loss', { stdio: 'inherit' });
      console.log('[prepare-db] Schema pushed successfully.');
    } catch (err) {
      console.warn('[prepare-db] Schema push notice (continuing build):', err.message);
    }
  }
} else {
  console.log('[prepare-db] SQLite database configuration active.');
  schema = schema.replace(/provider\s*=\s*"postgresql"/, 'provider = "sqlite"');
  fs.writeFileSync(schemaPath, schema);
}
