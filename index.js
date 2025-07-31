console.log('hi')

import http from 'http';
import url from 'url'
import fs from 'fs'

// server.on('error', () => {
    
// })

// server.on('request')

// server.on('exit')

// http.get('http://localhost:8080/', (response) => {
//     fs.readFile('./index.html', 'utf-8', (error, html) => {
//         if (error) {return}
//         response.headers()
//     })
// })
// const server = http.createServer()
// server.listen(8080)
const PORT = 3000
const server = http.createServer((request, response) => {
    response.writeHead(200, {"content-type": 'text/html'})
    let parsedURL = url.parse(request.url)

    if (parsedURL.pathname === '/') {
        response.end(`home`)
        return
    }
    if (parsedURL.pathname.contains('Contact-Me')) {
        response.end(`contact-me`)
        return
    }
    if (parsedURL.pathname.contains('About')) {
        response.end(`About`)
        return
    }
})

server.listen(PORT, 'localhost', () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});