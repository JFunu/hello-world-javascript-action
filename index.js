const core = require('@actions/core');
const gitHub = require('@actions/github');

try {
    const nameToGreet = core.getInput('who-to-greet');
    console.log(`Hello ${nameToGreet}!`);
    const time = (new Date()).toTimeString();
    core.setOutput("time", time);
    const payload = JSON.stringify(gitHub.context.payload, undefined, 2);
    console.log(`The event payload: ${payload}`)

    const key = core.getInput('AWS_ACCESS_KEY');
    console.log(`The key is ${key}`)

    const distribution = core.getInput('DISTRIBUTION');
    console.log(`The distribution is ${distribution}`)
} catch (error) {
    core.setFailed(error.message)
}