const process = require('process');
const { Z_ASCII } = require('zlib');
const commands = require('./commands/index.js');

function bash() {
   process.stdout.write("prompt > ")
   
   process.stdin.on("data",(data)=>{
      
      let args = data.toString().trim().split(' ')
      const cmd = args.shift()
      args = args.join(' ')
      
      if(!commands[cmd]){
         print(`command not found: ${cmd}`)
      }else{
         commands[cmd](print, args);
      }
   })
}

function print(output){
   process.stdout.write(output)
   process.stdout.write("\nprompt > ")
   
}

bash();
module.exports = {
   print,
   bash,
};
