/* eslint-disable no-console */
/******************************
 * @file: tip
 * @author:leinov
 ******************************/

const chalk = require("chalk");

/**
 * help output
 * @param {String} version
 * @return {String}  help description
 */
function help(version){
	console.log(chalk.blueBright(`
    rppx-cli: ${version}
    Usage: https://github.com/leinov/react-multi-page-app

    options:
    [init] [name]       create a new blog template
    [-v]                view the version of cli

    example:
    wrmp init myproject   create a myproject 
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