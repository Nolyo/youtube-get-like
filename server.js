import * as http from "http";
import { URL } from 'url';
import fs from 'fs';
import scrap from './src/scrape.js';

http.createServer(async (request, response) => {
    if (request.url === "/favicon.ico") return false;
    fs.readFile('index.php', 'utf-8', async (err, data) => {
        if (err) {
            response.writeHead('404').end('Ce fichier n existe pas !')
        } else {
            response.writeHead('200', {
                'Content-type': 'text/html; charset=utf-8'
            });
            let urlYt = new URL('https://www.youtube.com/watch' + request.url);
            let idYt = urlYt.searchParams.get('v');
            if (idYt === null) idYt = "m2uTFF_3MaA";
            let count = await scrap(false, idYt);
            console.log("results:",idYt, count);
            const dataFinal = data.replace(" {{ count }} ", count);
            response.write(dataFinal)
            response.end();
        }
    })

}).listen(5000);