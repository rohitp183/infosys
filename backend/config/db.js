const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'test_db',
});

async function testConnection() {
    try {
        const connection = await pool.getConnection();  
        console.log("Database connected successfully");
        connection.release(); 
    } catch (error) {
        console.error("Database connection failed:", error);
    }   
}

testConnection();

module.exports = pool
