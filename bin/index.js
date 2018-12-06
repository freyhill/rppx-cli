#!/usr/bin/env node

/* eslint-disable no-console */
/* eslint-disable no-undef */

const fs = require("fs-extra");
const path = require("path");
const chalk = require("chalk");
const tip = require("./tip");
const Git = require("nodegit");
const argv = process.argv;
let packageJson ={};

try{
	packageJson = require(path.resolve(process.cwd(),"package.json"));
}catch(err){
	console.log(chalk.red("no package.json!"));
}

// init project
function init(dist){
	console.log(chalk.green("creating..."));
	Git.Clone("https://github.com/leinov/webpack-react-multi-page", dist).then(()=>{
		fs.removeSync(path.resolve(dist,".git")); 
		console.log(chalk.blueBright(`${dist} created success !`));
	});
}

// main function
function main(){
	if(!argv[2]){
		tip.help();
	}
	if(argv[2] == "init"){
		if(!argv[3]){
			console.log(tip.error("请输入要创建的名称"));
		}else{
			init(argv[3]);
		}
	}
	if(argv[2] == "--help"){
		tip.help();
	}
	if(argv[2] === "-v"){
		console.log(`version: ${packageJson.version}`);
	}
}

main();