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
async function main(){
    console.log("creating...")
    const client = new Client({
        connectionString: process.env.CONNECTION_STRING
    })
    await client.connect()
    await client.query(SQL)
    await client.end()
    console.log('Done')
}
main()