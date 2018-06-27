'use strict'

const { join } = require('path')

module.exports = {

  schema: join(__dirname, '../app/Graphs/Schema'),

  resolvers: join(__dirname, '../app/Graphs/Resolvers')
}
