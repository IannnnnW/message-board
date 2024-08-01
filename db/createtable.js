const { Client } = require("pg")
const dotenv = require("dotenv")
dotenv.config()

const SQL = `
CREATE TABLE messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text VARCHAR (255),
    name VARCHAR (255),
    added TIMESTAMP DEFAULT CURRENT_TIMESTAMP);
`
async function main() {
    const args = process.argv.slice(2);  
    const connectionString = args[0]; 

    console.log("creating...");

    const client = new Client({
        connectionString: connectionString
    });

    try {
        await client.connect();
        // Replace `SQL` with your actual SQL query
        await client.query(SQL);
        console.log('Table created successfully.');
    } catch (error) {
        console.error('Error creating table:', error);
    } finally {
        await client.end();
        console.log('Done');
    }
}

main();
