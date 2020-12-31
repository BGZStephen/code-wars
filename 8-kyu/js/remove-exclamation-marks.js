// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(string) {
  return string.replace(new RegExp(/!/, 'g'), '');
}

removeExclamationMarks('!1111!111!!')
