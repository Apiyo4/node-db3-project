const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);
function find(){
    return db('schemes');
}
function findById(id){
    return db('schemes').where({id: Number(id)})
}
module.exports = { find }