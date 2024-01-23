const fs = require("fs");
const utils = require("../utils/request");
const process = require("process");

function pwd(print) {
    print(process.cwd())
}

function date(print) {
    print(Date())
}

function echo(print,args) {
    print(args)
}

function ls(print) {
    fs.readdir(".",(error,files)=>{
        if(error) throw "hay un error" 
        else{ 
            files= files.join(' ')
            print(files)}
        
    })
}

function cat(print,args) {
    fs.readFile(args,'utf-8',(error,data)=>{
        if(error) throw "hay un error"
        else print(data)
    })
}

function head(print,args) {
    fs.readFile(args,'utf-8',(error,data)=>{
        data = data.split('\n').slice(0, 8)
        if(error) throw "hay un error"
        else print(data[0])
    })
}

function tail(print,args) {
    fs.readFile(args,'utf-8',(error,data)=>{
        data = data.split(' ')
        data = data[data.length-1]
        if(error) throw "hay un error"
        else print(data)
    })
}

function curl(print,args) {
    utils.request(args,(error,response)=>{
        if(error) throw "hay un error"
        print(response)
    })
}

module.exports = {pwd,date,echo,ls,cat,head,tail,curl};
