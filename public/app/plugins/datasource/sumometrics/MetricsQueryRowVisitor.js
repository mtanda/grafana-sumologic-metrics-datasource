// Generated from /Users/christian/Development/sumologic-grafana/public/app/plugins/datasource/sumometrics/MetricsQueryRow.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('./antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by MetricsQueryRowParser.

function MetricsQueryRowVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

MetricsQueryRowVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
MetricsQueryRowVisitor.prototype.constructor = MetricsQueryRowVisitor;

// Visit a parse tree produced by MetricsQueryRowParser#metricsQueryRow.
MetricsQueryRowVisitor.prototype.visitMetricsQueryRow = function(ctx) {
};


// Visit a parse tree produced by MetricsQueryRowParser#selectors.
MetricsQueryRowVisitor.prototype.visitSelectors = function(ctx) {
};


// Visit a parse tree produced by MetricsQueryRowParser#metricName.
MetricsQueryRowVisitor.prototype.visitMetricName = function(ctx) {
};


// Visit a parse tree produced by MetricsQueryRowParser#dimensionSelector.
MetricsQueryRowVisitor.prototype.visitDimensionSelector = function(ctx) {
};


// Visit a parse tree produced by MetricsQueryRowParser#dimensionKey.
MetricsQueryRowVisitor.prototype.visitDimensionKey = function(ctx) {
};


// Visit a parse tree produced by MetricsQueryRowParser#dimensionValue.
MetricsQueryRowVisitor.prototype.visitDimensionValue = function(ctx) {
};


// Visit a parse tree produced by MetricsQueryRowParser#operator.
MetricsQueryRowVisitor.prototype.visitOperator = function(ctx) {
};


// Visit a parse tree produced by MetricsQueryRowParser#quantize.
MetricsQueryRowVisitor.prototype.visitQuantize = function(ctx) {
};


// Visit a parse tree produced by MetricsQueryRowParser#quantizeOperator.
MetricsQueryRowVisitor.prototype.visitQuantizeOperator = function(ctx) {
};


// Visit a parse tree produced by MetricsQueryRowParser#timerange.
MetricsQueryRowVisitor.prototype.visitTimerange = function(ctx) {
};


// Visit a parse tree produced by MetricsQueryRowParser#functionNameNoArgs.
MetricsQueryRowVisitor.prototype.visitFunctionNameNoArgs = function(ctx) {
};


// Visit a parse tree produced by MetricsQueryRowParser#aggregation.
MetricsQueryRowVisitor.prototype.visitAggregation = function(ctx) {
};


// Visit a parse tree produced by MetricsQueryRowParser#aggregationClause.
MetricsQueryRowVisitor.prototype.visitAggregationClause = function(ctx) {
};



exports.MetricsQueryRowVisitor = MetricsQueryRowVisitor;
