/* eslint-disable no-console */
/**
 * help output
 *
 * @return {String}  help description
 */
const chalk = require("chalk");
function help(){
	console.log(chalk.blueBright(`
somb: 1.0.0
Usage: https://github.com/leinov/somb
options:
[init] [name]       create a new blog template
[-v]                view the version of somb

example:
somb init leinov.github.io   create a leinov.github.io project
		`));
}

/**
 * error output
 *
 * @param  {String} path
 * @return {String}
 */
function error(msg){
	return chalk.red(`
⛑ ⛑ ⛑
error: ${msg}
Use --help to display the cli options.
  `);
}

/**
 * success output
 *
 * @param  {String} project
 */
function success(dist){
	return chalk.green(`
******************************************
*
* 💯
*
* ok: ${dist} created success
*
******************************************
  `);
}

module.exports = {
	help:help,
	success:success,
	error:error 
};