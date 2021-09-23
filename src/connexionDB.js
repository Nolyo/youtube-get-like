import mysql from "mysql";
let pool;
function getPool() {
    if (pool) return pool;
    pool = mysql.createPool({
        host     : 'localhost',
        user     : 'root',
        password : 'root',
        database : 'ytlike'
    });
    return pool
}

export {getPool}