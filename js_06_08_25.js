const cluster = require("cluster")
const os =  require("os")

if(cluster.isPrimary){

    const corsLength =  os.cpus().length;
    for(let i =0 ; i<corsLength ; i++){
        cluster.fork()
    }
    cluster.on("Exit",()=>{
        console.log("thread closed")
        cluster.fork()
    })
}else{
    server.listen(5000)
}
