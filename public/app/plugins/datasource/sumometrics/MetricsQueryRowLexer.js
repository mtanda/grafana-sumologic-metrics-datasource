// Generated from /Users/christian/Development/sumologic-grafana/public/app/plugins/datasource/sumometrics/MetricsQueryRow.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('./antlr4/index');


var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002\ra\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0003\u0002\u0003\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0005\u00065\n\u0006\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007C\n\u0007",
    "\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0007",
    "\nM\n\n\f\n\u000e\nP\u000b\n\u0003\u000b\u0003\u000b\u0003\f\u0006\f",
    "U\n\f\r\f\u000e\fV\u0003\r\u0003\r\u0003\u000e\u0006\u000e\\\n\u000e",
    "\r\u000e\u000e\u000e]\u0003\u000e\u0003\u000e\u0002\u0002\u000f\u0003",
    "\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011",
    "\n\u0013\u000b\u0015\u0002\u0017\f\u0019\u0002\u001b\r\u0003\u0002\u0006",
    "\u0006\u0002ffjjoouu\u0007\u0002,,//C\\aac|\u0003\u00022;\u0005\u0002",
    "\u000b\f\u000f\u000f\"\"f\u0002\u0003\u0003\u0002\u0002\u0002\u0002",
    "\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002",
    "\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002",
    "\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002",
    "\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002",
    "\u0017\u0003\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0003",
    "\u001d\u0003\u0002\u0002\u0002\u0005\u001f\u0003\u0002\u0002\u0002\u0007",
    "(\u0003\u0002\u0002\u0002\t+\u0003\u0002\u0002\u0002\u000b4\u0003\u0002",
    "\u0002\u0002\rB\u0003\u0002\u0002\u0002\u000fD\u0003\u0002\u0002\u0002",
    "\u0011F\u0003\u0002\u0002\u0002\u0013I\u0003\u0002\u0002\u0002\u0015",
    "Q\u0003\u0002\u0002\u0002\u0017T\u0003\u0002\u0002\u0002\u0019X\u0003",
    "\u0002\u0002\u0002\u001b[\u0003\u0002\u0002\u0002\u001d\u001e\u0007",
    "?\u0002\u0002\u001e\u0004\u0003\u0002\u0002\u0002\u001f \u0007s\u0002",
    "\u0002 !\u0007w\u0002\u0002!\"\u0007c\u0002\u0002\"#\u0007p\u0002\u0002",
    "#$\u0007v\u0002\u0002$%\u0007k\u0002\u0002%&\u0007|\u0002\u0002&\'\u0007",
    "g\u0002\u0002\'\u0006\u0003\u0002\u0002\u0002()\u0007v\u0002\u0002)",
    "*\u0007q\u0002\u0002*\b\u0003\u0002\u0002\u0002+,\u0007w\u0002\u0002",
    ",-\u0007u\u0002\u0002-.\u0007k\u0002\u0002./\u0007p\u0002\u0002/0\u0007",
    "i\u0002\u00020\n\u0003\u0002\u0002\u000212\u0007o\u0002\u000225\u0007",
    "u\u0002\u000235\t\u0002\u0002\u000241\u0003\u0002\u0002\u000243\u0003",
    "\u0002\u0002\u00025\f\u0003\u0002\u0002\u000267\u0007c\u0002\u00027",
    "8\u0007x\u0002\u00028C\u0007i\u0002\u00029:\u0007u\u0002\u0002:;\u0007",
    "w\u0002\u0002;C\u0007o\u0002\u0002<=\u0007o\u0002\u0002=>\u0007k\u0002",
    "\u0002>C\u0007p\u0002\u0002?@\u0007o\u0002\u0002@A\u0007c\u0002\u0002",
    "AC\u0007z\u0002\u0002B6\u0003\u0002\u0002\u0002B9\u0003\u0002\u0002",
    "\u0002B<\u0003\u0002\u0002\u0002B?\u0003\u0002\u0002\u0002C\u000e\u0003",
    "\u0002\u0002\u0002DE\u0007~\u0002\u0002E\u0010\u0003\u0002\u0002\u0002",
    "FG\u0007d\u0002\u0002GH\u0007{\u0002\u0002H\u0012\u0003\u0002\u0002",
    "\u0002IN\u0005\u0015\u000b\u0002JM\u0005\u0015\u000b\u0002KM\u0005\u0019",
    "\r\u0002LJ\u0003\u0002\u0002\u0002LK\u0003\u0002\u0002\u0002MP\u0003",
    "\u0002\u0002\u0002NL\u0003\u0002\u0002\u0002NO\u0003\u0002\u0002\u0002",
    "O\u0014\u0003\u0002\u0002\u0002PN\u0003\u0002\u0002\u0002QR\t\u0003",
    "\u0002\u0002R\u0016\u0003\u0002\u0002\u0002SU\u0005\u0019\r\u0002TS",
    "\u0003\u0002\u0002\u0002UV\u0003\u0002\u0002\u0002VT\u0003\u0002\u0002",
    "\u0002VW\u0003\u0002\u0002\u0002W\u0018\u0003\u0002\u0002\u0002XY\t",
    "\u0004\u0002\u0002Y\u001a\u0003\u0002\u0002\u0002Z\\\t\u0005\u0002\u0002",
    "[Z\u0003\u0002\u0002\u0002\\]\u0003\u0002\u0002\u0002][\u0003\u0002",
    "\u0002\u0002]^\u0003\u0002\u0002\u0002^_\u0003\u0002\u0002\u0002_`\b",
    "\u000e\u0002\u0002`\u001c\u0003\u0002\u0002\u0002\t\u00024BLNV]\u0003",
    "\u0002\u0003\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function MetricsQueryRowLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

MetricsQueryRowLexer.prototype = Object.create(antlr4.Lexer.prototype);
MetricsQueryRowLexer.prototype.constructor = MetricsQueryRowLexer;

MetricsQueryRowLexer.EOF = antlr4.Token.EOF;
MetricsQueryRowLexer.EQ = 1;
MetricsQueryRowLexer.QUANTIZE = 2;
MetricsQueryRowLexer.TO = 3;
MetricsQueryRowLexer.USING = 4;
MetricsQueryRowLexer.TIMEQUANTIFIER = 5;
MetricsQueryRowLexer.FUNCTION_NAME_NO_ARGS = 6;
MetricsQueryRowLexer.PIPE = 7;
MetricsQueryRowLexer.BY = 8;
MetricsQueryRowLexer.ID = 9;
MetricsQueryRowLexer.INT = 10;
MetricsQueryRowLexer.WS = 11;


MetricsQueryRowLexer.modeNames = [ "DEFAULT_MODE" ];

MetricsQueryRowLexer.literalNames = [ 'null', "'='", "'quantize'", "'to'",
                                      "'using'", 'null', 'null', "'|'",
                                      "'by'" ];

MetricsQueryRowLexer.symbolicNames = [ 'null', "EQ", "QUANTIZE", "TO", "USING",
                                       "TIMEQUANTIFIER", "FUNCTION_NAME_NO_ARGS",
                                       "PIPE", "BY", "ID", "INT", "WS" ];

MetricsQueryRowLexer.ruleNames = [ "EQ", "QUANTIZE", "TO", "USING", "TIMEQUANTIFIER",
                                   "FUNCTION_NAME_NO_ARGS", "PIPE", "BY",
                                   "ID", "ID_LETTER", "INT", "DIGIT", "WS" ];

MetricsQueryRowLexer.grammarFileName = "MetricsQueryRow.g4";



exports.MetricsQueryRowLexer = MetricsQueryRowLexer;

