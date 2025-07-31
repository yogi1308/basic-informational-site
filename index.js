import http from 'http';
import url from 'url'
import fs from 'fs/promises'

const PORT = 3000
const server = http.createServer(async (request, response) => {
    response.writeHead(200, {"content-type": 'text/html'})
    let parsedURL = url.parse(request.url).pathname

    if (parsedURL === '/') {
        
        try {
            const data = await read('./content/index.html')
            response.end(data)
        }
        catch (error) {response.end(`${error}`)}
        
        return
    }
    else if (parsedURL === '/Contact-Me') {
        
        try {
            const data = await read('./content/contact-me.html')
            return response.end(data)
        }
        catch (error) {response.end(`${error}`)}
        return
    }
    else if (parsedURL === '/About') {
        
        try {
            const data = await read('./content/about.html')
            return response.end(data)
        }
        catch (error) {response.end(`${error}`)}
        return
    }
    else {
        
        try {
            const data = await read('./content/404.html')
            return response.end(data)
        }
        catch (error) {response.end(`${error}`)}
        return
    }
})

async function read(fileName) {
    try {return await fs.readFile(`${fileName}`, 'utf-8')}
    catch (error) {return `${error}`}
}

server.listen(PORT);