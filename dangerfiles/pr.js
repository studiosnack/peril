// @flow

import {message, warn} from "danger";

// encourage deleting code
if (danger.github.pr.deletions > danger.github.pr.additions) {
  message("🔥");
}
