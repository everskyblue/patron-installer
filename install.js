#!/usr/bin/env node

const version = require("./version");
const exec = require("./exec");
const path = require('path');

version(function (versions) {
    const lasted = versions[0];
    const name_dir = process.argv[2] || '';
    const download = require('download-git-repo')

    download(`direct:https://github.com/everskyblue/patronjs/archive/${lasted.name}.tar.gz`, resolve(name_dir), function (err) {
        console.log(err ? 'an error occurred in the installation process\n' : 'installed!\n')
        console.error(err);
        exec(name_dir);
    })
})

function resolve(...dirs) {
    return path.resolve(process.cwd(), ...dirs);
}