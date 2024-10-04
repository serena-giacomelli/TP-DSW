/* de mysql*/
import mysql from 'mysql2/promise'

export const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'LasLindas' ,
    password: process.env.DB_PASSWORD ||  'Resentidas3' ,
    database: process.env.DB_NAME || 'Muebles'
})