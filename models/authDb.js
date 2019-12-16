const db = require('../data/dbConfig.js');
module.exports = {
get,
getBy,
add
};

function get() {
return db('users');
}

function getBy(username) {
return db('users')
.where({ username })
.first();
}

function add(post) {
return db('users')
.insert(post)
.then(ids => {
return getById(ids[0]);
});
}

