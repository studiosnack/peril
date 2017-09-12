// @flow

import {message, warn} from "danger";

// encourage deleting code
if (danger.github.pr.deletions > danger.github.pr.additions) {
  message("🔥");
}

// keep lock files consistent
const packageChanged = danger.git.modified_files.includes('package.json');
const lockfileChanged = danger.git.modified_files.includes('yarn.lock');
if (packageChanged && !lockfileChanged) {
  const message = 'Changes were made to package.json, but not to yarn.lock';
  const idea = 'Perhaps you need to run `yarn install`?';
  warn(`${message} - <i>${idea}</i>`);
}
