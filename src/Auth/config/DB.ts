import pg from 'pg'

const {Client} = pg;

const dbclient = new Client({
    connectionString: process.env.DATABASE_URL
})

export async function connectToDB(){
    await dbclient.connect();
}

export async function initDB(){
    await dbclient.query(`
        CREATE TABLE IF NOT EXISTS "User" (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL
        );
    `);

    console.log("Tables initialized");
}

export default dbclient;
