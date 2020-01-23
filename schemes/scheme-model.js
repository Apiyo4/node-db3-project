const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);
function find(){
    return db('schemes');
}
function findById(id){
    return db('schemes').where({id: Number(id)})
}
function findSteps(id){
 return db('steps as s')
 .join('schemes as sc',  's.scheme_id', 'sc.id')
 .select('s.id', 'sc.scheme_name', 's.step_number', 'instructions')
}
 module.exports = { find, findById, findSteps }