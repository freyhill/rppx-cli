/* eslint-disable no-console */
/**
 * help output
 *
 * @return {String}  help description
 */
const chalk = require("chalk");

function help(version){
	console.log(chalk.blueBright(`
wrmp-cli: ${version}
Usage: https://github.com/leinov/webpack-react-multi-page
options:
[init] [name]       create a new blog template
[-v]                view the version of cli

example:
somb init myproject   create a myproject 
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