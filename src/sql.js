import mysql from "mysql";

export default async function saveDb(countTotal) {
    return new Promise(resole => {
        const con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "root",
            database: "ytlike"
        });
        con.connect(function (err) {
            if (err) throw err;
            console.log("Connected!");

            con.query("CREATE DATABASE IF NOT EXISTS ytlike", function (err, result) {
                if (err) throw err;
                console.log("Database created");
            });

            con.query("CREATE TABLE IF NOT EXISTS countlike (id INT AUTO_INCREMENT PRIMARY KEY, count VARCHAR(255))", function (err, result) {
                if (err) throw err;
                console.log("Table created");
            });
            console.log(countTotal);
            // return false;
            const insert = "INSERT INTO countlike (`count`) VALUES (" + countTotal + ")";
            con.query(insert, function (err, result) {
                if (err) throw err;
                console.log("record inserted");
            });
            resole();
        });
    });
}