/*
初始化项目
 */
const fs=require('fs');
const path=require('path');
const structure=require('../config.js').structure;
let rootName=path.join('./',structure.rootName);

module.exports=function(){
  if(rootName){
    //创建根目录
    fs.mkdir(rootName,function(){
      structure.fileData.forEach(function (item) {
        if(item.type=='dir'){
          //创建文件夹
          fs.mkdir(rootName+'/'+item.name,function(){
          for(var k in item){
            //判断子文件中是还有文件，如果有则创建
            if(typeof item[k]=='object' && item[k].type=='file'){
              fs.writeFileSync(rootName+'/'+item.name+'/'+item[k].name,item[k].content,'utf-8')
            }
          }
         })
          
        }else if(item.type=='file'){
           //创建文件
          fs.writeFileSync(rootName+'/'+item.name,item.content,'utf-8')
        }
      })
    })
  }
}
