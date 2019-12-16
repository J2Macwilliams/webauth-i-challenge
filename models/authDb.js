const db = require('../data/dbConfig.js');
module.exports = {
get,
getById,
add
};

function get() {
return db('users');
}

function getById(id) {
return db('users')
.where({ id })
.first();
}

function add(post) {
return db('users')
.insert(post)
.then(ids => {
return getById(ids[0]);
});
}

