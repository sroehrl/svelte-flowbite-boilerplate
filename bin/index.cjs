#! /usr/bin/env node

const spawn = require('cross-spawn');
const fs = require('fs');
const path = require('path');
const commandExists = require('command-exists');
const folder = process.argv[2];

// create folder
const currentDir = process.cwd();
const projectDir = path.resolve(currentDir, folder);
fs.mkdirSync(projectDir, { recursive: true });

// copy everything into directory
fs.cpSync(path.resolve(__dirname, '..'), projectDir, { recursive: true });

// delete installer
fs.rmdirSync(path.join(projectDir, 'bin'), { recursive: true });

// create .env file(s)
fs.writeFileSync(path.join(projectDir, '.env.development'), 'PUBLIC_API_PATH=http://localhost:8080/api');

// update package.json

const projectPackageJson = require(path.join(projectDir, 'package.json'));
projectPackageJson.name = folder;

fs.writeFileSync(
    path.join(projectDir, 'package.json'),
    JSON.stringify(projectPackageJson, null, 2)
);

// install preferring yarn
let command = 'yarn dev';
if(commandExists.sync('yarn')) {
    spawn.sync('yarn', ['install'], { stdio: 'inherit' });
} else {
    command = 'npm run dev';
    spawn.sync('npm', ['install'], { stdio: 'inherit' });
}
console.log('Installation complete.');
console.log('You can now start the app with: "' + command + '"');