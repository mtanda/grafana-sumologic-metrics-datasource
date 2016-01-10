// Generated from /Users/christian/Development/sumologic-grafana/public/app/plugins/datasource/sumometrics/MetricsQueryRow.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('./antlr4/index');
var MetricsQueryRowListener = require('./MetricsQueryRowListener').MetricsQueryRowListener;
var MetricsQueryRowVisitor = require('./MetricsQueryRowVisitor').MetricsQueryRowVisitor;

var grammarFileName = "MetricsQueryRow.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\re\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004\b",
    "\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004\r",
    "\t\r\u0004\u000e\t\u000e\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0005\u0002!\n\u0002\u0007\u0002#\n\u0002\f\u0002\u000e\u0002&\u000b",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0005\u0003,",
    "\n\u0003\u0003\u0003\u0003\u0003\u0005\u00030\n\u0003\u0007\u00032\n",
    "\u0003\f\u0003\u000e\u00035\u000b\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0005\u0005@\n\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003",
    "\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0005\tJ\n\t\u0003\t\u0005\t",
    "M\n\t\u0003\t\u0005\tP\n\t\u0003\t\u0005\tS\n\t\u0003\n\u0003\n\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003",
    "\u000e\u0003\u000e\u0005\u000e`\n\u000e\u0003\u000e\u0005\u000ec\n\u000e",
    "\u0003\u000e\u00033\u0002\u000f\u0002\u0004\u0006\b\n\f\u000e\u0010",
    "\u0012\u0014\u0016\u0018\u001a\u0002\u0002c\u0002\u001c\u0003\u0002",
    "\u0002\u0002\u0004+\u0003\u0002\u0002\u0002\u00066\u0003\u0002\u0002",
    "\u0002\b?\u0003\u0002\u0002\u0002\nA\u0003\u0002\u0002\u0002\fC\u0003",
    "\u0002\u0002\u0002\u000eE\u0003\u0002\u0002\u0002\u0010G\u0003\u0002",
    "\u0002\u0002\u0012T\u0003\u0002\u0002\u0002\u0014V\u0003\u0002\u0002",
    "\u0002\u0016Y\u0003\u0002\u0002\u0002\u0018[\u0003\u0002\u0002\u0002",
    "\u001a]\u0003\u0002\u0002\u0002\u001c$\u0005\u0004\u0003\u0002\u001d",
    " \u0007\t\u0002\u0002\u001e!\u0005\u000e\b\u0002\u001f!\u0005\u0018",
    "\r\u0002 \u001e\u0003\u0002\u0002\u0002 \u001f\u0003\u0002\u0002\u0002",
    "!#\u0003\u0002\u0002\u0002\"\u001d\u0003\u0002\u0002\u0002#&\u0003\u0002",
    "\u0002\u0002$\"\u0003\u0002\u0002\u0002$%\u0003\u0002\u0002\u0002%\'",
    "\u0003\u0002\u0002\u0002&$\u0003\u0002\u0002\u0002\'(\u0007\u0002\u0002",
    "\u0003(\u0003\u0003\u0002\u0002\u0002),\u0005\u0006\u0004\u0002*,\u0005",
    "\b\u0005\u0002+)\u0003\u0002\u0002\u0002+*\u0003\u0002\u0002\u0002,",
    "3\u0003\u0002\u0002\u0002-0\u0005\u0006\u0004\u0002.0\u0005\b\u0005",
    "\u0002/-\u0003\u0002\u0002\u0002/.\u0003\u0002\u0002\u000202\u0003\u0002",
    "\u0002\u00021/\u0003\u0002\u0002\u000225\u0003\u0002\u0002\u000234\u0003",
    "\u0002\u0002\u000231\u0003\u0002\u0002\u00024\u0005\u0003\u0002\u0002",
    "\u000253\u0003\u0002\u0002\u000267\u0007\u000b\u0002\u00027\u0007\u0003",
    "\u0002\u0002\u000289\u0005\n\u0006\u00029:\u0007\u0003\u0002\u0002:",
    ";\u0005\f\u0007\u0002;@\u0003\u0002\u0002\u0002<=\u0005\n\u0006\u0002",
    "=>\u0007\u0003\u0002\u0002>@\u0003\u0002\u0002\u0002?8\u0003\u0002\u0002",
    "\u0002?<\u0003\u0002\u0002\u0002@\t\u0003\u0002\u0002\u0002AB\u0007",
    "\u000b\u0002\u0002B\u000b\u0003\u0002\u0002\u0002CD\u0007\u000b\u0002",
    "\u0002D\r\u0003\u0002\u0002\u0002EF\u0005\u0010\t\u0002F\u000f\u0003",
    "\u0002\u0002\u0002GL\u0005\u0012\n\u0002HJ\u0007\u0005\u0002\u0002I",
    "H\u0003\u0002\u0002\u0002IJ\u0003\u0002\u0002\u0002JK\u0003\u0002\u0002",
    "\u0002KM\u0005\u0014\u000b\u0002LI\u0003\u0002\u0002\u0002LM\u0003\u0002",
    "\u0002\u0002MR\u0003\u0002\u0002\u0002NP\u0007\u0006\u0002\u0002ON\u0003",
    "\u0002\u0002\u0002OP\u0003\u0002\u0002\u0002PQ\u0003\u0002\u0002\u0002",
    "QS\u0005\u0016\f\u0002RO\u0003\u0002\u0002\u0002RS\u0003\u0002\u0002",
    "\u0002S\u0011\u0003\u0002\u0002\u0002TU\u0007\u0004\u0002\u0002U\u0013",
    "\u0003\u0002\u0002\u0002VW\u0007\f\u0002\u0002WX\u0007\u0007\u0002\u0002",
    "X\u0015\u0003\u0002\u0002\u0002YZ\u0007\b\u0002\u0002Z\u0017\u0003\u0002",
    "\u0002\u0002[\\\u0005\u001a\u000e\u0002\\\u0019\u0003\u0002\u0002\u0002",
    "]b\u0005\u0016\f\u0002^`\u0007\n\u0002\u0002_^\u0003\u0002\u0002\u0002",
    "_`\u0003\u0002\u0002\u0002`a\u0003\u0002\u0002\u0002ac\u0005\n\u0006",
    "\u0002b_\u0003\u0002\u0002\u0002bc\u0003\u0002\u0002\u0002c\u001b\u0003",
    "\u0002\u0002\u0002\u000e $+/3?ILOR_b"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'='", "'quantize'", "'to'", "'using'", 'null',
                     'null', "'|'", "'by'" ];

var symbolicNames = [ 'null', "EQ", "QUANTIZE", "TO", "USING", "TIMEQUANTIFIER",
                      "FUNCTION_NAME_NO_ARGS", "PIPE", "BY", "ID", "INT",
                      "WS" ];

var ruleNames =  [ "metricsQueryRow", "selectors", "metricName", "dimensionSelector",
                   "dimensionKey", "dimensionValue", "operator", "quantize",
                   "quantizeOperator", "timerange", "functionNameNoArgs",
                   "aggregation", "aggregationClause" ];

function MetricsQueryRowParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

MetricsQueryRowParser.prototype = Object.create(antlr4.Parser.prototype);
MetricsQueryRowParser.prototype.constructor = MetricsQueryRowParser;

Object.defineProperty(MetricsQueryRowParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

MetricsQueryRowParser.EOF = antlr4.Token.EOF;
MetricsQueryRowParser.EQ = 1;
MetricsQueryRowParser.QUANTIZE = 2;
MetricsQueryRowParser.TO = 3;
MetricsQueryRowParser.USING = 4;
MetricsQueryRowParser.TIMEQUANTIFIER = 5;
MetricsQueryRowParser.FUNCTION_NAME_NO_ARGS = 6;
MetricsQueryRowParser.PIPE = 7;
MetricsQueryRowParser.BY = 8;
MetricsQueryRowParser.ID = 9;
MetricsQueryRowParser.INT = 10;
MetricsQueryRowParser.WS = 11;

MetricsQueryRowParser.RULE_metricsQueryRow = 0;
MetricsQueryRowParser.RULE_selectors = 1;
MetricsQueryRowParser.RULE_metricName = 2;
MetricsQueryRowParser.RULE_dimensionSelector = 3;
MetricsQueryRowParser.RULE_dimensionKey = 4;
MetricsQueryRowParser.RULE_dimensionValue = 5;
MetricsQueryRowParser.RULE_operator = 6;
MetricsQueryRowParser.RULE_quantize = 7;
MetricsQueryRowParser.RULE_quantizeOperator = 8;
MetricsQueryRowParser.RULE_timerange = 9;
MetricsQueryRowParser.RULE_functionNameNoArgs = 10;
MetricsQueryRowParser.RULE_aggregation = 11;
MetricsQueryRowParser.RULE_aggregationClause = 12;

function MetricsQueryRowContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MetricsQueryRowParser.RULE_metricsQueryRow;
    return this;
}

MetricsQueryRowContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MetricsQueryRowContext.prototype.constructor = MetricsQueryRowContext;

MetricsQueryRowContext.prototype.selectors = function() {
    return this.getTypedRuleContext(SelectorsContext,0);
};

MetricsQueryRowContext.prototype.EOF = function() {
    return this.getToken(MetricsQueryRowParser.EOF, 0);
};

MetricsQueryRowContext.prototype.PIPE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MetricsQueryRowParser.PIPE);
    } else {
        return this.getToken(MetricsQueryRowParser.PIPE, i);
    }
};


MetricsQueryRowContext.prototype.operator = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(OperatorContext);
    } else {
        return this.getTypedRuleContext(OperatorContext,i);
    }
};

MetricsQueryRowContext.prototype.aggregation = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AggregationContext);
    } else {
        return this.getTypedRuleContext(AggregationContext,i);
    }
};

MetricsQueryRowContext.prototype.enterRule = function(listener) {
    if(listener instanceof MetricsQueryRowListener ) {
        listener.enterMetricsQueryRow(this);
	}
};

MetricsQueryRowContext.prototype.exitRule = function(listener) {
    if(listener instanceof MetricsQueryRowListener ) {
        listener.exitMetricsQueryRow(this);
	}
};

MetricsQueryRowContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MetricsQueryRowVisitor ) {
        return visitor.visitMetricsQueryRow(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MetricsQueryRowParser.MetricsQueryRowContext = MetricsQueryRowContext;

MetricsQueryRowParser.prototype.metricsQueryRow = function() {

    var localctx = new MetricsQueryRowContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, MetricsQueryRowParser.RULE_metricsQueryRow);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 26;
        this.selectors();
        this.state = 34;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MetricsQueryRowParser.PIPE) {
            this.state = 27;
            this.match(MetricsQueryRowParser.PIPE);
            this.state = 30;
            switch(this._input.LA(1)) {
            case MetricsQueryRowParser.QUANTIZE:
                this.state = 28;
                this.operator();
                break;
            case MetricsQueryRowParser.FUNCTION_NAME_NO_ARGS:
                this.state = 29;
                this.aggregation();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 36;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 37;
        this.match(MetricsQueryRowParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SelectorsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MetricsQueryRowParser.RULE_selectors;
    return this;
}

SelectorsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SelectorsContext.prototype.constructor = SelectorsContext;

SelectorsContext.prototype.metricName = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MetricNameContext);
    } else {
        return this.getTypedRuleContext(MetricNameContext,i);
    }
};

SelectorsContext.prototype.dimensionSelector = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DimensionSelectorContext);
    } else {
        return this.getTypedRuleContext(DimensionSelectorContext,i);
    }
};

SelectorsContext.prototype.enterRule = function(listener) {
    if(listener instanceof MetricsQueryRowListener ) {
        listener.enterSelectors(this);
	}
};

SelectorsContext.prototype.exitRule = function(listener) {
    if(listener instanceof MetricsQueryRowListener ) {
        listener.exitSelectors(this);
	}
};

SelectorsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MetricsQueryRowVisitor ) {
        return visitor.visitSelectors(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MetricsQueryRowParser.SelectorsContext = SelectorsContext;

MetricsQueryRowParser.prototype.selectors = function() {

    var localctx = new SelectorsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, MetricsQueryRowParser.RULE_selectors);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 41;
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.state = 39;
            this.metricName();
            break;

        case 2:
            this.state = 40;
            this.dimensionSelector();
            break;

        }
        this.state = 49;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1+1) {
                this.state = 45;
                var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
                switch(la_) {
                case 1:
                    this.state = 43;
                    this.metricName();
                    break;

                case 2:
                    this.state = 44;
                    this.dimensionSelector();
                    break;

                }
            }
            this.state = 51;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MetricNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MetricsQueryRowParser.RULE_metricName;
    return this;
}

MetricNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MetricNameContext.prototype.constructor = MetricNameContext;

MetricNameContext.prototype.ID = function() {
    return this.getToken(MetricsQueryRowParser.ID, 0);
};

MetricNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof MetricsQueryRowListener ) {
        listener.enterMetricName(this);
	}
};

MetricNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof MetricsQueryRowListener ) {
        listener.exitMetricName(this);
	}
};

MetricNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MetricsQueryRowVisitor ) {
        return visitor.visitMetricName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MetricsQueryRowParser.MetricNameContext = MetricNameContext;

MetricsQueryRowParser.prototype.metricName = function() {

    var localctx = new MetricNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, MetricsQueryRowParser.RULE_metricName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 52;
        this.match(MetricsQueryRowParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DimensionSelectorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MetricsQueryRowParser.RULE_dimensionSelector;
    return this;
}

DimensionSelectorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DimensionSelectorContext.prototype.constructor = DimensionSelectorContext;

DimensionSelectorContext.prototype.dimensionKey = function() {
    return this.getTypedRuleContext(DimensionKeyContext,0);
};

DimensionSelectorContext.prototype.EQ = function() {
    return this.getToken(MetricsQueryRowParser.EQ, 0);
};

DimensionSelectorContext.prototype.dimensionValue = function() {
    return this.getTypedRuleContext(DimensionValueContext,0);
};

DimensionSelectorContext.prototype.enterRule = function(listener) {
    if(listener instanceof MetricsQueryRowListener ) {
        listener.enterDimensionSelector(this);
	}
};

DimensionSelectorContext.prototype.exitRule = function(listener) {
    if(listener instanceof MetricsQueryRowListener ) {
        listener.exitDimensionSelector(this);
	}
};

DimensionSelectorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MetricsQueryRowVisitor ) {
        return visitor.visitDimensionSelector(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MetricsQueryRowParser.DimensionSelectorContext = DimensionSelectorContext;

MetricsQueryRowParser.prototype.dimensionSelector = function() {

    var localctx = new DimensionSelectorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, MetricsQueryRowParser.RULE_dimensionSelector);
    try {
        this.state = 61;
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 54;
            this.dimensionKey();
            this.state = 55;
            this.match(MetricsQueryRowParser.EQ);
            this.state = 56;
            this.dimensionValue();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 58;
            this.dimensionKey();
            this.state = 59;
            this.match(MetricsQueryRowParser.EQ);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DimensionKeyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MetricsQueryRowParser.RULE_dimensionKey;
    return this;
}

DimensionKeyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DimensionKeyContext.prototype.constructor = DimensionKeyContext;

DimensionKeyContext.prototype.ID = function() {
    return this.getToken(MetricsQueryRowParser.ID, 0);
};

DimensionKeyContext.prototype.enterRule = function(listener) {
    if(listener instanceof MetricsQueryRowListener ) {
        listener.enterDimensionKey(this);
	}
};

DimensionKeyContext.prototype.exitRule = function(listener) {
    if(listener instanceof MetricsQueryRowListener ) {
        listener.exitDimensionKey(this);
	}
};

DimensionKeyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MetricsQueryRowVisitor ) {
        return visitor.visitDimensionKey(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MetricsQueryRowParser.DimensionKeyContext = DimensionKeyContext;

MetricsQueryRowParser.prototype.dimensionKey = function() {

    var localctx = new DimensionKeyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, MetricsQueryRowParser.RULE_dimensionKey);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 63;
        this.match(MetricsQueryRowParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DimensionValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MetricsQueryRowParser.RULE_dimensionValue;
    return this;
}

DimensionValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DimensionValueContext.prototype.constructor = DimensionValueContext;

DimensionValueContext.prototype.ID = function() {
    return this.getToken(MetricsQueryRowParser.ID, 0);
};

DimensionValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof MetricsQueryRowListener ) {
        listener.enterDimensionValue(this);
	}
};

DimensionValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof MetricsQueryRowListener ) {
        listener.exitDimensionValue(this);
	}
};

DimensionValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MetricsQueryRowVisitor ) {
        return visitor.visitDimensionValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MetricsQueryRowParser.DimensionValueContext = DimensionValueContext;

MetricsQueryRowParser.prototype.dimensionValue = function() {

    var localctx = new DimensionValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, MetricsQueryRowParser.RULE_dimensionValue);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 65;
        this.match(MetricsQueryRowParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MetricsQueryRowParser.RULE_operator;
    return this;
}

OperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorContext.prototype.constructor = OperatorContext;

OperatorContext.prototype.quantize = function() {
    return this.getTypedRuleContext(QuantizeContext,0);
};

OperatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof MetricsQueryRowListener ) {
        listener.enterOperator(this);
	}
};

OperatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof MetricsQueryRowListener ) {
        listener.exitOperator(this);
	}
};

OperatorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MetricsQueryRowVisitor ) {
        return visitor.visitOperator(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MetricsQueryRowParser.OperatorContext = OperatorContext;

MetricsQueryRowParser.prototype.operator = function() {

    var localctx = new OperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, MetricsQueryRowParser.RULE_operator);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 67;
        this.quantize();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function QuantizeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MetricsQueryRowParser.RULE_quantize;
    return this;
}

QuantizeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QuantizeContext.prototype.constructor = QuantizeContext;

QuantizeContext.prototype.quantizeOperator = function() {
    return this.getTypedRuleContext(QuantizeOperatorContext,0);
};

QuantizeContext.prototype.timerange = function() {
    return this.getTypedRuleContext(TimerangeContext,0);
};

QuantizeContext.prototype.functionNameNoArgs = function() {
    return this.getTypedRuleContext(FunctionNameNoArgsContext,0);
};

QuantizeContext.prototype.TO = function() {
    return this.getToken(MetricsQueryRowParser.TO, 0);
};

QuantizeContext.prototype.USING = function() {
    return this.getToken(MetricsQueryRowParser.USING, 0);
};

QuantizeContext.prototype.enterRule = function(listener) {
    if(listener instanceof MetricsQueryRowListener ) {
        listener.enterQuantize(this);
	}
};

QuantizeContext.prototype.exitRule = function(listener) {
    if(listener instanceof MetricsQueryRowListener ) {
        listener.exitQuantize(this);
	}
};

QuantizeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MetricsQueryRowVisitor ) {
        return visitor.visitQuantize(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MetricsQueryRowParser.QuantizeContext = QuantizeContext;

MetricsQueryRowParser.prototype.quantize = function() {

    var localctx = new QuantizeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, MetricsQueryRowParser.RULE_quantize);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 69;
        this.quantizeOperator();
        this.state = 74;
        _la = this._input.LA(1);
        if(_la===MetricsQueryRowParser.TO || _la===MetricsQueryRowParser.INT) {
            this.state = 71;
            _la = this._input.LA(1);
            if(_la===MetricsQueryRowParser.TO) {
                this.state = 70;
                this.match(MetricsQueryRowParser.TO);
            }

            this.state = 73;
            this.timerange();
        }

        this.state = 80;
        _la = this._input.LA(1);
        if(_la===MetricsQueryRowParser.USING || _la===MetricsQueryRowParser.FUNCTION_NAME_NO_ARGS) {
            this.state = 77;
            _la = this._input.LA(1);
            if(_la===MetricsQueryRowParser.USING) {
                this.state = 76;
                this.match(MetricsQueryRowParser.USING);
            }

            this.state = 79;
            this.functionNameNoArgs();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function QuantizeOperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MetricsQueryRowParser.RULE_quantizeOperator;
    return this;
}

QuantizeOperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QuantizeOperatorContext.prototype.constructor = QuantizeOperatorContext;

QuantizeOperatorContext.prototype.QUANTIZE = function() {
    return this.getToken(MetricsQueryRowParser.QUANTIZE, 0);
};

QuantizeOperatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof MetricsQueryRowListener ) {
        listener.enterQuantizeOperator(this);
	}
};

QuantizeOperatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof MetricsQueryRowListener ) {
        listener.exitQuantizeOperator(this);
	}
};

QuantizeOperatorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MetricsQueryRowVisitor ) {
        return visitor.visitQuantizeOperator(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MetricsQueryRowParser.QuantizeOperatorContext = QuantizeOperatorContext;

MetricsQueryRowParser.prototype.quantizeOperator = function() {

    var localctx = new QuantizeOperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, MetricsQueryRowParser.RULE_quantizeOperator);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 82;
        this.match(MetricsQueryRowParser.QUANTIZE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TimerangeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MetricsQueryRowParser.RULE_timerange;
    return this;
}

TimerangeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TimerangeContext.prototype.constructor = TimerangeContext;

TimerangeContext.prototype.INT = function() {
    return this.getToken(MetricsQueryRowParser.INT, 0);
};

TimerangeContext.prototype.TIMEQUANTIFIER = function() {
    return this.getToken(MetricsQueryRowParser.TIMEQUANTIFIER, 0);
};

TimerangeContext.prototype.enterRule = function(listener) {
    if(listener instanceof MetricsQueryRowListener ) {
        listener.enterTimerange(this);
	}
};

TimerangeContext.prototype.exitRule = function(listener) {
    if(listener instanceof MetricsQueryRowListener ) {
        listener.exitTimerange(this);
	}
};

TimerangeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MetricsQueryRowVisitor ) {
        return visitor.visitTimerange(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MetricsQueryRowParser.TimerangeContext = TimerangeContext;

MetricsQueryRowParser.prototype.timerange = function() {

    var localctx = new TimerangeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, MetricsQueryRowParser.RULE_timerange);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 84;
        this.match(MetricsQueryRowParser.INT);
        this.state = 85;
        this.match(MetricsQueryRowParser.TIMEQUANTIFIER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FunctionNameNoArgsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MetricsQueryRowParser.RULE_functionNameNoArgs;
    return this;
}

FunctionNameNoArgsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionNameNoArgsContext.prototype.constructor = FunctionNameNoArgsContext;

FunctionNameNoArgsContext.prototype.FUNCTION_NAME_NO_ARGS = function() {
    return this.getToken(MetricsQueryRowParser.FUNCTION_NAME_NO_ARGS, 0);
};

FunctionNameNoArgsContext.prototype.enterRule = function(listener) {
    if(listener instanceof MetricsQueryRowListener ) {
        listener.enterFunctionNameNoArgs(this);
	}
};

FunctionNameNoArgsContext.prototype.exitRule = function(listener) {
    if(listener instanceof MetricsQueryRowListener ) {
        listener.exitFunctionNameNoArgs(this);
	}
};

FunctionNameNoArgsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MetricsQueryRowVisitor ) {
        return visitor.visitFunctionNameNoArgs(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MetricsQueryRowParser.FunctionNameNoArgsContext = FunctionNameNoArgsContext;

MetricsQueryRowParser.prototype.functionNameNoArgs = function() {

    var localctx = new FunctionNameNoArgsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, MetricsQueryRowParser.RULE_functionNameNoArgs);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 87;
        this.match(MetricsQueryRowParser.FUNCTION_NAME_NO_ARGS);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AggregationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MetricsQueryRowParser.RULE_aggregation;
    return this;
}

AggregationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AggregationContext.prototype.constructor = AggregationContext;

AggregationContext.prototype.aggregationClause = function() {
    return this.getTypedRuleContext(AggregationClauseContext,0);
};

AggregationContext.prototype.enterRule = function(listener) {
    if(listener instanceof MetricsQueryRowListener ) {
        listener.enterAggregation(this);
	}
};

AggregationContext.prototype.exitRule = function(listener) {
    if(listener instanceof MetricsQueryRowListener ) {
        listener.exitAggregation(this);
	}
};

AggregationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MetricsQueryRowVisitor ) {
        return visitor.visitAggregation(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MetricsQueryRowParser.AggregationContext = AggregationContext;

MetricsQueryRowParser.prototype.aggregation = function() {

    var localctx = new AggregationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, MetricsQueryRowParser.RULE_aggregation);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 89;
        this.aggregationClause();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AggregationClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MetricsQueryRowParser.RULE_aggregationClause;
    return this;
}

AggregationClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AggregationClauseContext.prototype.constructor = AggregationClauseContext;

AggregationClauseContext.prototype.functionNameNoArgs = function() {
    return this.getTypedRuleContext(FunctionNameNoArgsContext,0);
};

AggregationClauseContext.prototype.dimensionKey = function() {
    return this.getTypedRuleContext(DimensionKeyContext,0);
};

AggregationClauseContext.prototype.BY = function() {
    return this.getToken(MetricsQueryRowParser.BY, 0);
};

AggregationClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof MetricsQueryRowListener ) {
        listener.enterAggregationClause(this);
	}
};

AggregationClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof MetricsQueryRowListener ) {
        listener.exitAggregationClause(this);
	}
};

AggregationClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MetricsQueryRowVisitor ) {
        return visitor.visitAggregationClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MetricsQueryRowParser.AggregationClauseContext = AggregationClauseContext;

MetricsQueryRowParser.prototype.aggregationClause = function() {

    var localctx = new AggregationClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, MetricsQueryRowParser.RULE_aggregationClause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 91;
        this.functionNameNoArgs();
        this.state = 96;
        _la = this._input.LA(1);
        if(_la===MetricsQueryRowParser.BY || _la===MetricsQueryRowParser.ID) {
            this.state = 93;
            _la = this._input.LA(1);
            if(_la===MetricsQueryRowParser.BY) {
                this.state = 92;
                this.match(MetricsQueryRowParser.BY);
            }

            this.state = 95;
            this.dimensionKey();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.MetricsQueryRowParser = MetricsQueryRowParser;
