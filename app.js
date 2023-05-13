let http = require('http')
let port =3000
let fs = require('fs')
const { json } = require('stream/consumers')
let server = http.createServer(function(req, res) {
    res.writeHead(200, {'content-Type': 'text/html'})
    fs.readFile('indx.html',function(error, data){

        if(error){
            res.writeHead(404)
            res.write('Error: File Not Found')
        }
        else{
            res.write(data)
        }
        res.end()
    })
})
server.listen(port,function(error){
if(error){

    console.log('Something went wrong',error)
} else{
    console.log('david your the man '+ port)
}
})
