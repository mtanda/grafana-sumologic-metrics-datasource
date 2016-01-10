grammar MetricsQueryRow;

// -------------------------------------------------------------------------------------------------
// Parser
// -------------------------------------------------------------------------------------------------

metricsQueryRow : selectors (PIPE (operator | aggregation))* EOF;

selectors : (metricName | dimensionSelector) ((metricName | dimensionSelector))*? ;
metricName : ID ;
dimensionSelector : dimensionKey EQ dimensionValue | dimensionKey EQ ;
dimensionKey : ID ;
dimensionValue : ID ;

operator : quantize ;

quantize : quantizeOperator (TO? timerange)? (USING? functionNameNoArgs)? ;
quantizeOperator : QUANTIZE ;
timerange: INT TIMEQUANTIFIER ;
functionNameNoArgs: FUNCTION_NAME_NO_ARGS ;

aggregation : aggregationClause ;
aggregationClause : functionNameNoArgs (BY? dimensionKey)? ;

// -------------------------------------------------------------------------------------------------
// Lexer
// -------------------------------------------------------------------------------------------------

EQ : '=' ;

QUANTIZE : 'quantize' ;
TO : 'to' ;
USING : 'using' ;

TIMEQUANTIFIER : 'ms' | 's' | 'm' | 'h' | 'd' | 'm' ;

FUNCTION_NAME_NO_ARGS : 'avg' | 'sum' | 'min' | 'max' ;

PIPE : '|' ;

BY : 'by' ;

ID: ID_LETTER (ID_LETTER | DIGIT)* ;
fragment ID_LETTER : 'a'..'z' | 'A'..'Z' | '_' | '-' | '*' ;

INT: DIGIT+ ;
fragment DIGIT : [0-9] ; // match single digit

//SIGNIFICANT_WS : [ \t\n\r]+ ;

WS : [ \t\n\r]+ -> channel(HIDDEN) ;
