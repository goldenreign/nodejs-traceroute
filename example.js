'use strict';

const Traceroute = require('./index');

try {
    const tracer = new Traceroute(); // Default options
    const tracer2 = new Traceroute(['-T', '-p', '80', '-q', '1'], true); // Custom options and sudo

    tracer2
        .on('pid', (pid) => {
            console.log(`pid: ${pid}`);
        })
        .on('destination', (destination) => {
            console.log(`destination: ${destination}`);
        })
        .on('hop', (hop) => {
            console.log(`hop: ${JSON.stringify(hop)}`);
        })
        .on('stderr', (line) => {
            console.log(`stderr: ${line}`);
        })
        .on('close', (code) => {
            console.log(`close: code ${code}`);
        });

    tracer
        .on('pid', (pid) => {
            console.log(`pid: ${pid}`);
        })
        .on('destination', (destination) => {
            console.log(`destination: ${destination}`);
        })
        .on('hop', (hop) => {
            console.log(`hop: ${JSON.stringify(hop)}`);
        })
        .on('stderr', (line) => {
            console.log(`stderr: ${line}`);
        })
        .on('close', (code) => {
            console.log(`close: code ${code}`);
            tracer2.trace('npmjs.com');
        });

    tracer.trace('github.com');

} catch (ex) {
    console.log(ex);
}
