var Parser = (function (undefined) {
function Parser(environment){
if(!(this instanceof Parser)) return new Parser(environment);
var env,modules,imports;
env=modules=imports=environment;
this.action={"0":{"0":["reduce",[2,0,14]],"4":["reduce",[2,0,14]],"7":["reduce",[2,0,14]]},"1":{"0":["accept",[]]},"2":{"0":["reduce",[1,1,0]],"4":["shift",[4]],"7":["shift",[5]]},"3":{"0":["reduce",[2,2,15]],"4":["reduce",[2,2,15]],"7":["reduce",[2,2,15]]},"4":{"5":["shift",[6]]},"5":{"4":["shift",[11]],"14":["shift",[8]],"15":["shift",[9]],"16":["shift",[10]],"17":["shift",[12]]},"6":{"4":["shift",[11]],"14":["shift",[8]],"15":["shift",[9]],"16":["shift",[10]],"17":["shift",[12]]},"7":{"0":["reduce",[3,2,2]],"4":["reduce",[3,2,2]],"7":["reduce",[3,2,2]],"8":["shift",[14]],"9":["shift",[15]],"10":["shift",[16]],"11":["shift",[17]],"12":["shift",[18]],"13":["shift",[19]]},"8":{"0":["reduce",[6,1,9]],"4":["reduce",[6,1,9]],"7":["reduce",[6,1,9]],"8":["reduce",[6,1,9]],"9":["reduce",[6,1,9]],"10":["reduce",[6,1,9]],"11":["reduce",[6,1,9]],"12":["reduce",[6,1,9]],"13":["reduce",[6,1,9]],"18":["reduce",[6,1,9]]},"9":{"0":["reduce",[6,1,10]],"4":["reduce",[6,1,10]],"7":["reduce",[6,1,10]],"8":["reduce",[6,1,10]],"9":["reduce",[6,1,10]],"10":["reduce",[6,1,10]],"11":["reduce",[6,1,10]],"12":["reduce",[6,1,10]],"13":["reduce",[6,1,10]],"18":["reduce",[6,1,10]]},"10":{"0":["reduce",[6,1,11]],"4":["reduce",[6,1,11]],"7":["reduce",[6,1,11]],"8":["reduce",[6,1,11]],"9":["reduce",[6,1,11]],"10":["reduce",[6,1,11]],"11":["reduce",[6,1,11]],"12":["reduce",[6,1,11]],"13":["reduce",[6,1,11]],"18":["reduce",[6,1,11]]},"11":{"0":["reduce",[6,1,12]],"4":["reduce",[6,1,12]],"7":["reduce",[6,1,12]],"8":["reduce",[6,1,12]],"9":["reduce",[6,1,12]],"10":["reduce",[6,1,12]],"11":["reduce",[6,1,12]],"12":["reduce",[6,1,12]],"13":["reduce",[6,1,12]],"18":["reduce",[6,1,12]]},"12":{"4":["shift",[11]],"14":["shift",[8]],"15":["shift",[9]],"16":["shift",[10]],"17":["shift",[12]]},"13":{"0":["reduce",[3,3,1]],"4":["reduce",[3,3,1]],"7":["reduce",[3,3,1]],"8":["shift",[14]],"9":["shift",[15]],"10":["shift",[16]],"11":["shift",[17]],"12":["shift",[18]],"13":["shift",[19]]},"14":{"4":["shift",[11]],"14":["shift",[8]],"15":["shift",[9]],"16":["shift",[10]],"17":["shift",[12]]},"15":{"4":["shift",[11]],"14":["shift",[8]],"15":["shift",[9]],"16":["shift",[10]],"17":["shift",[12]]},"16":{"4":["shift",[11]],"14":["shift",[8]],"15":["shift",[9]],"16":["shift",[10]],"17":["shift",[12]]},"17":{"4":["shift",[11]],"14":["shift",[8]],"15":["shift",[9]],"16":["shift",[10]],"17":["shift",[12]]},"18":{"4":["shift",[11]],"14":["shift",[8]],"15":["shift",[9]],"16":["shift",[10]],"17":["shift",[12]]},"19":{"4":["shift",[11]],"14":["shift",[8]],"15":["shift",[9]],"16":["shift",[10]],"17":["shift",[12]]},"20":{"8":["shift",[14]],"9":["shift",[15]],"10":["shift",[16]],"11":["shift",[17]],"12":["shift",[18]],"13":["shift",[19]],"18":["shift",[27]]},"21":{"0":["reduce",[6,3,3]],"4":["reduce",[6,3,3]],"7":["reduce",[6,3,3]],"8":["reduce",[6,3,3]],"9":["reduce",[6,3,3]],"10":["shift",[16]],"11":["shift",[17]],"12":["shift",[18]],"13":["shift",[19]],"18":["reduce",[6,3,3]]},"22":{"0":["reduce",[6,3,4]],"4":["reduce",[6,3,4]],"7":["reduce",[6,3,4]],"8":["reduce",[6,3,4]],"9":["reduce",[6,3,4]],"10":["shift",[16]],"11":["shift",[17]],"12":["shift",[18]],"13":["shift",[19]],"18":["reduce",[6,3,4]]},"23":{"0":["reduce",[6,3,5]],"4":["reduce",[6,3,5]],"7":["reduce",[6,3,5]],"8":["reduce",[6,3,5]],"9":["reduce",[6,3,5]],"10":["reduce",[6,3,5]],"11":["reduce",[6,3,5]],"12":["reduce",[6,3,5]],"13":["reduce",[6,3,5]],"18":["reduce",[6,3,5]]},"24":{"0":["reduce",[6,3,6]],"4":["reduce",[6,3,6]],"7":["reduce",[6,3,6]],"8":["reduce",[6,3,6]],"9":["reduce",[6,3,6]],"10":["reduce",[6,3,6]],"11":["reduce",[6,3,6]],"12":["reduce",[6,3,6]],"13":["reduce",[6,3,6]],"18":["reduce",[6,3,6]]},"25":{"0":["reduce",[6,3,7]],"4":["reduce",[6,3,7]],"7":["reduce",[6,3,7]],"8":["reduce",[6,3,7]],"9":["reduce",[6,3,7]],"10":["reduce",[6,3,7]],"11":["reduce",[6,3,7]],"12":["reduce",[6,3,7]],"13":["reduce",[6,3,7]],"18":["reduce",[6,3,7]]},"26":{"0":["reduce",[6,3,8]],"4":["reduce",[6,3,8]],"7":["reduce",[6,3,8]],"8":["reduce",[6,3,8]],"9":["reduce",[6,3,8]],"10":["reduce",[6,3,8]],"11":["reduce",[6,3,8]],"12":["reduce",[6,3,8]],"13":["reduce",[6,3,8]],"18":["reduce",[6,3,8]]},"27":{"0":["reduce",[6,3,13]],"4":["reduce",[6,3,13]],"7":["reduce",[6,3,13]],"8":["reduce",[6,3,13]],"9":["reduce",[6,3,13]],"10":["reduce",[6,3,13]],"11":["reduce",[6,3,13]],"12":["reduce",[6,3,13]],"13":["reduce",[6,3,13]],"18":["reduce",[6,3,13]]}};
this.goto={"0":{"1":1,"2":2},"2":{"3":3},"5":{"6":7},"6":{"6":13},"12":{"6":20},"14":{"6":21},"15":{"6":22},"16":{"6":23},"17":{"6":24},"18":{"6":25},"19":{"6":26}};
this.actions=[function (stmts){ return new imports.Program(stmts);},function (id,_, exp){return new imports.Assignment(id,exp);},function (_,exp){ return new imports.Print(exp);},function (e1, _, e2) {
                                                             return new imports.AddExp(e1,e2);
                                                         },function (e1, _, e2) {
                                                              return new imports.SubtractExp(e1,e2);
                                                          },function (e1, _, e2) {
                                                             return new imports.MultiplyExp(e1,e2);
                                                         },function (e1, _, e2) {
                                                               return new imports.DivideExp(e1,e2);
                                                           },function (e1, _, e2) {
                                                                 return new imports.PowerExp(e1,e2);
                                                                       },function (e1, _, e2) {
                                                                 return new imports.ModuloExp(e1,e2);
                                                                       },function (i) {
                                             return new imports.Integer(i);
                                         },function (f) {
                                         return new imports.Float(f);
            },function (s) {
                    return new imports.String(s);
            },function (id) {
                                        return new imports.Identifier(id);
                                    },function (_, e) {
                                                         return e;
                                                     },function (){return [];},function (){
                return arguments[0].concat(Array.prototype.slice.call(arguments,1));
            }];
this.startstate=0;
this.symbolsTable={"<<EOF>>":0,"Program":1,"Repeat_0_0":2,"Statement":3,"id":4,"=":5,"Expression":6,"print":7,"PLUS":8,"MINUS":9,"MULT":10,"DIV":11,"POW":12,"MOD":13,"integer":14,"float":15,"string":16,"(":17,")":18};
this.actionMode='function';
}
Parser.prototype.identity=function (x) {
        "use strict";
        return x;
    };
Parser.prototype.parse=function (lexer, context) {
        this.stack = [];
        this.context =  context || {};

        this.lexer = lexer;
        this.a = this.lexer.nextToken();
        this.stack.push({s: this.startstate, i: 0});
        this.accepted = false;
        this.inerror = false;
        while (!this.accepted && !this.inerror) {
            var top = this.stack[this.stack.length - 1];
            var s = top.s;
            //this.a = this.currentToken;
            if(lexer.isEOF(this.a))
                this.an = 0;
            else
                this.an = this.symbolsTable[this.a.name];
            var action = this.action[s][this.an];
            if (action !== undefined) {
                this[action[0]].apply(this, action[1]);
            } else {
                this.inerror = true;
                this.error(this.a,this);
            }
        }
        return top.i.value;
    };
Parser.prototype.shift=function (state) {
        "use strict";
        this.stack.push({s: state, i: this.a});
        this.a = this.lexer.nextToken();

    };
Parser.prototype.reduce=function (head, length, prodindex) {
        "use strict";
        //var prod = this.productions[prodnumber];
        var self = this;
        var rhs = this.stack.splice(-length, length);
        var t = this.stack[this.stack.length - 1];
        var ns = this.goto[t.s][head];
        var value;
        if (this.actions) {
            var action = this.actions[prodindex] || this.identity;
            var values = rhs.map(function (si) {
                return si.i.value;
            });

            if(self.actionMode==='constructor')
                value =  this.create(action,values);
            else
                value =  action.apply(this.context, values);
        }
        //If we are debugging

        if(this.symbols) {
            var nt = {name: this.symbols[head].name, value:value};
            this.stack.push({s: ns, i: nt});
        }
        else
        {
            this.stack.push({s: ns,i:{value: value}});
        }

    };
Parser.prototype.accept=function () {
        "use strict";
        this.accepted = true;
    };
Parser.prototype.error=function (token){
        if(typeof token === 'string')
        {
            throw Error(token);
        }
        if(this.lexer.isEOF(token)){
            throw Error("Unexpected EOF at "+this.lexer.jjline+':'+this.lexer.jjcol);
        } else
        throw Error('Unexpected token '+token.name+' "'+token.lexeme+'" at ('+token.pos.line+':'+token.pos.col+')');
    };
Parser.prototype.create=function (ctor,args){
        var args = [this.context].concat(args);
        var factory = ctor.bind.apply(ctor,args);
        return new factory();
    };
if (typeof(module) !== 'undefined') { module.exports = Parser; }
return Parser;
})();