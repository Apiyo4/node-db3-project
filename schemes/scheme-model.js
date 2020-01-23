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
// INSERT into Schemes(id, scheme_name)
// values (6, 'Go for a walk');
function add(scheme){
    return db('schemes')
    .insert('scheme')

}
// Update Schemes
// set scheme_name =  'Sleep'
// where id = 8
function update(changes, id){
    return db('schemes')
    .where('id', Number(id))
    .update(changes)

}
// delete from schemes
// where id = 8 
function remove(id){
    return db('schemes')
    .where('id', Number(id))
    .del()
}
 module.exports = { find, findById, findSteps, add, update, remove }
 