#!/usr/bin/env node

/* eslint-disable no-console */
/* eslint-disable no-undef */

/******************************
 * @file: wrmp-cli
 * @desc: create webpack-react-multi-page cli
 * @author: leinov
 ******************************/

const fs = require("fs-extra");
const path = require("path");
const chalk = require("chalk");
const tip = require("./tip");
const Git = require("nodegit");
const argv = process.argv;
let packageJson ={};

try{
	packageJson = require(path.resolve(__dirname,"../package.json"));
}catch(err){
	if(argv[2]!= "init"){
		console.log(chalk.red("no package.json!"));
	}
}

// init project
function init(dist){
	console.log(chalk.green("creating..."));
	Git.Clone("https://github.com/leinov/webpack-react-multi-page", dist).then(()=>{
		fs.removeSync(path.resolve(dist,".git")); 
		fs.removeSync(path.resolve(dist,"_config.yml"));
		console.log(chalk.blueBright(`${dist} created success !`));
	});
}

// main function
function main(){
	switch (argv[2]) {
	case "init":
		if(!argv[3]){
			console.log(tip.error("input project name"));
		}else{
			init(argv[3]);
		}
		break;
	case "--help":
		tip.help(packageJson.version);
		break;
	case "-v":
		console.log(`version: ${packageJson.version}`);
		break;
	default:
		tip.help(packageJson.version);
	}
	
}

main();