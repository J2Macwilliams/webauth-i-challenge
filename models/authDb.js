const db = require('../data/dbConfig.js');
module.exports = {
get,
getById,
add
};

function get() {
return db('');
}

function getById(id) {
return db('')
.where({ id })
.first();
}

function add(post) {
return db('')
.insert(post)
.then(ids => {
return getById(ids[0]);
});
}

