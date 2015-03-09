/**
 * Created by gcannata on 30/08/2014.
 */
//to build: jacob - t basictokens.jacoblex -l ./examples/mylexer.js -g expression.jacobgram -p ./examples/expint.js
var Lexer = require('./src/lexer');
var Parser = require('./src/grammar');
var astclasses = require('./src/ast/ast');

var l = new Lexer().setInput('a = 2+3*4\n' +
    'print 10 ** "1"\n'+
    'print "zmsdsd\'\'"\n'+
'a = a / 2\n' +

'print a');
//astclasses is the only environment for the parser, in this case
var p = new Parser(astclasses);
var program = p.parse(l,{});
//ret is now the Abstract syntax tree
//let's augment it with some behaviour:
require('./src/ast/expeval');
//now we have an .eval() method in our AST nodes:
program.eval();