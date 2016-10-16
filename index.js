'user strict'
//process.argv包含命令行参数的数组。
//第一个元素是node的路径，
//第二个元素是js文件的当前路径。
//第三个元素是命令行的参数。
const args=process.argv.slice(2);
const param=args[0];

const init=require('./command/init.js');

switch(param){
  case 'init':init();
      break;
  case '-v' :console.log('版本信息');
      break;
  default:   console.log('帮助信息');
      break;
}

