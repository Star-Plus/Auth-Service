import pg from 'pg'

const {Client} = pg;

const dbclient = new Client({
    connectionString: process.env.DATABASE_URL
})

export async function connectToDB(){
    await dbclient.connect();
}

export default dbclient;
