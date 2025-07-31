import http from 'http';
import url from 'url'
import fs from 'fs/promises'

const PORT = 3000
const server = http.createServer(async (request, response) => {
    response.writeHead(200, {"content-type": 'text/html'})
    let parsedURL = url.parse(request.url).pathname

    if (parsedURL === '/') {
        console.log('home')
        try {
            const data = await read('./content/index.html')
            response.end(data)
        }
        catch (error) {response.end(`${error}`)}
        
        return
    }
    else if (parsedURL === '/Contact-Me') {
        console.log('contact')
        try {
            const data = await read('./content/contact-me.html')
            return response.end(data)
        }
        catch (error) {response.end(`${error}`)}
        return
    }
    else if (parsedURL === '/About') {
        console.log('about')
        try {
            const data = await read('./content/about.html')
            return response.end(data)
        }
        catch (error) {response.end(`${error}`)}
        return
    }
    else {
        console.log('error')
        response.end(`error`)
    }
})

async function read(fileName) {
    try {return await fs.readFile(`${fileName}`, 'utf-8')}
    catch (error) {return `${error}`}
}

server.listen(PORT, 'localhost', () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});