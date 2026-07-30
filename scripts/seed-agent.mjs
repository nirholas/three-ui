import { neon } from '@neondatabase/serverless';

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
	console.error(
		'DATABASE_URL is not set. Export it (or put it in .env.local) before running this seed script:\n' +
			'  DATABASE_URL="postgres://user:pass@host/db?sslmode=require" node scripts/seed-agent.mjs',
	);
	process.exit(1);
}

const sql = neon(connectionString);

const [user] = await sql`
	INSERT INTO users (email, display_name, email_verified)
	VALUES ('seed@3dagent.dev', 'Seed User', true)
	ON CONFLICT (email) DO UPDATE SET display_name = EXCLUDED.display_name
	RETURNING id
`;

const [agent] = await sql`
	INSERT INTO agent_identities (user_id, name, description, home_url)
	VALUES (${user.id}, 'Demo Agent', 'Seed agent for dev harness testing', 'https://three.ws')
	RETURNING id
`;

console.log('user_id: ', user.id);
console.log('agent_id:', agent.id);
