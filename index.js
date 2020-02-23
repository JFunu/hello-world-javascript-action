const core = require('@actions/core');
const gitHub = require('@actions/github');

try {
    const nameToGreet = core.getInput('who-to-greet');
    console.log(`Hello ${nameToGreet}!`);
    const time = (new Date()).toTimeString();
    core.setOutput("time", time);
    const payload = JSON.stringify(gitHub.context.payload, undefined, 2);
    console.log(`The event payload: ${payload}`)
} catch (error) {
    core.setFailed(error.message)
}