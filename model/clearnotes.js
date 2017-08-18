var Note = require('../model/note').Note
var sequelize = require('../model/note').sequelize 

sequelize.drop(Note)