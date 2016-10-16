var fs=require('fs');
var path=require('path');

module.exports.structure={
  rootName:'item',
  fileData:[
    {
      name:'images',
      type:'dir'
    },
    {
      name:'css',
      type:'dir',
      fileChild:
        {
          name:'index.css',
          type:'file',
          content:'@charset utf-8;'
        }
    },
    {
      name:'js',
      type:'dir',
      fileChild:
        {
          name:'index.js',
          type:'file',
          content:'/* Created by jines */'
        }
    },
  
    {
      name:'index.html',
      type:'file',
      //读取文件内容
      content:fs.readFileSync(path.join(__dirname,'index.html'))
    },
    {
      name:'404.html',
      type:'file',
      //读取文件内容
      content:fs.readFileSync(path.join(__dirname,'404.html'))
    }
  ]
}