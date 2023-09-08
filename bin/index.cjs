#! /usr/bin/env node

const spawn = require('cross-spawn');
const fs = require('fs');
const path = require('path');
const commandExists = require('command-exists');

if(process.argv.length < 3) {
    console.log('Usage: ' + process.argv[0] + ' <folder>');
    process.exit(1);
}

const folder = process.argv[2];


// create folder
const currentDir = process.cwd();
const projectDir = path.resolve(currentDir, folder);
fs.mkdirSync(projectDir, { recursive: true });

// copy everything into directory
fs.cpSync(path.resolve(__dirname, '..'), projectDir, { recursive: true });

// delete installer
fs.rmSync(path.join(projectDir, 'bin'), { recursive: true });

// create .env file(s)
fs.writeFileSync(path.join(projectDir, '.env.development'), 'PUBLIC_API_PATH=http://localhost:8080/api');

// update package.json

const projectPackageJson = require(path.join(projectDir, 'package.json'));
projectPackageJson.name = folder;

fs.writeFileSync(
    path.join(projectDir, 'package.json'),
    JSON.stringify(projectPackageJson, null, 2)
);

// update svelte.config.js
const svelteConfig = fs.readFileSync(path.join(projectDir, 'svelte.config.js'));
fs.writeFileSync(
    path.join(projectDir, 'svelte.config.js'),
    svelteConfig.toString().replace(/\/svelte-flowbite-boilerplate/, `/${folder}`)
)

// update manifest.json
let manifestPath = path.join(projectDir, 'static', 'manifest.json');
const manifest = require(manifestPath);
manifest.short_name = folder;
manifest.name = folder;
manifest.scope = `/${folder}/`;
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));


// install preferring yarn
let command = 'yarn dev';
if(commandExists.sync('yarn')) {
    spawn.sync('yarn', ['install'], { stdio: 'inherit', cwd: projectDir });
} else {
    command = 'npm run dev';
    spawn.sync('npm', ['install'], { stdio: 'inherit', cwd: projectDir });
}
console.log('Installation complete.');
console.log('Navigate: "cd ' + folder + '"');
console.log('You can now start the app with: "' + command + '"');