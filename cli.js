#!/usr/bin/env node

const FilePath=  process.argv[2];
const csv=require('csvtojson')
csv()
.fromFile(FilePath)
.then((jsonObj)=>{
    console.log(jsonObj);
})