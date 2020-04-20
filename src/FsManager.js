const fs = require('fs');
const path = './Store/usersData.json';
const userData = JSON.parse(fs.readFileSync(path));

/**
 * Save a data's state
 * @param {JSON} userData
 */
function save(userData) {
    fs.writeFileSync(path, JSON.stringify(userData));
}

module.exports.userData = userData;
module.exports.save = save;
