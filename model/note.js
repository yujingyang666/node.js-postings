var Sequelize=require('sequelize');
var path = require('path');
var sequelize = new Sequelize(undefined, undefined, undefined, {
  host: 'localhost',
  dialect: 'sqlite',
  // 仅 SQLite 适用
  //storage: '../database/database.sqlite'
  storage: path.join(__dirname, '../database/database.sqlite') 
});

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

var Note = sequelize.define('note', {
  text: {
    type: Sequelize.STRING
  },
  name: {
    type: Sequelize.STRING
  },
  time: {
    type: Sequelize.STRING
  }
});
Note.sync()
// // Note.sync().then(function() {
// //   Note.create({
// //     text: 'hello world',
// //     name: 'Jan'
// //   });
// // }).then(function(){
// //   Note.findAll({raw:true}).then(function(notes) {
// //   console.log(notes)
// // })
// // })


//   // Note.findAll({raw:true,where:{name:'Van'}}).then(function(notes) {
//   //    console.log(notes)
//   // })

//   // Note.create({
//   //   text: 'fuck you',
//   //   name: 'Van'
//   // });

// Note.findAll({raw:true}).then(function(notes) {
//     console.log(notes)
// })

module.exports.Note=Note;
module.exports.sequelize=sequelize;
