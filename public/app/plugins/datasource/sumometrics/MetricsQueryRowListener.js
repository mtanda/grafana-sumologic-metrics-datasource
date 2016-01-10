// Generated from /Users/christian/Development/sumologic-grafana/public/app/plugins/datasource/sumometrics/MetricsQueryRow.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('./antlr4/index');

// This class defines a complete listener for a parse tree produced by MetricsQueryRowParser.
function MetricsQueryRowListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

MetricsQueryRowListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
MetricsQueryRowListener.prototype.constructor = MetricsQueryRowListener;

// Enter a parse tree produced by MetricsQueryRowParser#metricsQueryRow.
MetricsQueryRowListener.prototype.enterMetricsQueryRow = function(ctx) {
};

// Exit a parse tree produced by MetricsQueryRowParser#metricsQueryRow.
MetricsQueryRowListener.prototype.exitMetricsQueryRow = function(ctx) {
};


// Enter a parse tree produced by MetricsQueryRowParser#selectors.
MetricsQueryRowListener.prototype.enterSelectors = function(ctx) {
};

// Exit a parse tree produced by MetricsQueryRowParser#selectors.
MetricsQueryRowListener.prototype.exitSelectors = function(ctx) {
};


// Enter a parse tree produced by MetricsQueryRowParser#metricName.
MetricsQueryRowListener.prototype.enterMetricName = function(ctx) {
};

// Exit a parse tree produced by MetricsQueryRowParser#metricName.
MetricsQueryRowListener.prototype.exitMetricName = function(ctx) {
};


// Enter a parse tree produced by MetricsQueryRowParser#dimensionSelector.
MetricsQueryRowListener.prototype.enterDimensionSelector = function(ctx) {
};

// Exit a parse tree produced by MetricsQueryRowParser#dimensionSelector.
MetricsQueryRowListener.prototype.exitDimensionSelector = function(ctx) {
};


// Enter a parse tree produced by MetricsQueryRowParser#dimensionKey.
MetricsQueryRowListener.prototype.enterDimensionKey = function(ctx) {
};

// Exit a parse tree produced by MetricsQueryRowParser#dimensionKey.
MetricsQueryRowListener.prototype.exitDimensionKey = function(ctx) {
};


// Enter a parse tree produced by MetricsQueryRowParser#dimensionValue.
MetricsQueryRowListener.prototype.enterDimensionValue = function(ctx) {
};

// Exit a parse tree produced by MetricsQueryRowParser#dimensionValue.
MetricsQueryRowListener.prototype.exitDimensionValue = function(ctx) {
};


// Enter a parse tree produced by MetricsQueryRowParser#operator.
MetricsQueryRowListener.prototype.enterOperator = function(ctx) {
};

// Exit a parse tree produced by MetricsQueryRowParser#operator.
MetricsQueryRowListener.prototype.exitOperator = function(ctx) {
};


// Enter a parse tree produced by MetricsQueryRowParser#quantize.
MetricsQueryRowListener.prototype.enterQuantize = function(ctx) {
};

// Exit a parse tree produced by MetricsQueryRowParser#quantize.
MetricsQueryRowListener.prototype.exitQuantize = function(ctx) {
};


// Enter a parse tree produced by MetricsQueryRowParser#quantizeOperator.
MetricsQueryRowListener.prototype.enterQuantizeOperator = function(ctx) {
};

// Exit a parse tree produced by MetricsQueryRowParser#quantizeOperator.
MetricsQueryRowListener.prototype.exitQuantizeOperator = function(ctx) {
};


// Enter a parse tree produced by MetricsQueryRowParser#timerange.
MetricsQueryRowListener.prototype.enterTimerange = function(ctx) {
};

// Exit a parse tree produced by MetricsQueryRowParser#timerange.
MetricsQueryRowListener.prototype.exitTimerange = function(ctx) {
};


// Enter a parse tree produced by MetricsQueryRowParser#functionNameNoArgs.
MetricsQueryRowListener.prototype.enterFunctionNameNoArgs = function(ctx) {
};

// Exit a parse tree produced by MetricsQueryRowParser#functionNameNoArgs.
MetricsQueryRowListener.prototype.exitFunctionNameNoArgs = function(ctx) {
};


// Enter a parse tree produced by MetricsQueryRowParser#aggregation.
MetricsQueryRowListener.prototype.enterAggregation = function(ctx) {
};

// Exit a parse tree produced by MetricsQueryRowParser#aggregation.
MetricsQueryRowListener.prototype.exitAggregation = function(ctx) {
};


// Enter a parse tree produced by MetricsQueryRowParser#aggregationClause.
MetricsQueryRowListener.prototype.enterAggregationClause = function(ctx) {
};

// Exit a parse tree produced by MetricsQueryRowParser#aggregationClause.
MetricsQueryRowListener.prototype.exitAggregationClause = function(ctx) {
};



exports.MetricsQueryRowListener = MetricsQueryRowListener;
