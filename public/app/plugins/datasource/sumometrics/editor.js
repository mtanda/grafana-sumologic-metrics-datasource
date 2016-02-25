define([
    './antlr4/index.js',
    './MetricsQueryRowLexer.js',
    './MetricsQueryRowParser.js',
    './MetricsQueryRowListener.js',
    './codemirror-show-hint.js'
  ],
  function (antlr4, metricsRowQueryLexer, metricsRowQueryParser, metricsQueryRowListener) {
    'use strict';

    // ---------------------------------------------------------------------------------------------
    // Globals (I know...)
    // ---------------------------------------------------------------------------------------------

    var globalListener = null;
    var globalDatasource = null;

    // ---------------------------------------------------------------------------------------------
    // Helpers
    // ---------------------------------------------------------------------------------------------

    function getDimensionKeys(query, success) {
      //console.log(globalDatasource);
      //ajax(host + "/api/v1/metrics/dimensions/suggest/key",
      //  s({"query": query, "dimensions": []}),
      //  success)
      globalDatasource.getDimensionKeys(query, success);
    }

    function getDimensionValues(query, dimensionKey, success) {
      //console.log(globalDatasource);
      //ajax(host + "/api/v1/metrics/dimensions/suggest/value",
      //  s({query: query, key: dimensionKey, "dimensions": []}),
      //  success)
      globalDatasource.getDimensionValues(query, dimensionKey, success);
    }

    function getMetricNames(query, success) {
      //console.log(globalDatasource);
      //getDimensionValues(query, "metric", success);
      globalDatasource.getDimensionValues(query, "metric", success);
    }

    function s(s) {
      return JSON.stringify(s);
    }

    // ---------------------------------------------------------------------------------------------
    // Our error listener
    // ---------------------------------------------------------------------------------------------

    var ErrorListener = function () {
      antlr4.error.ErrorListener.call(this); // inherit default error handler
      this.errors = [];
      return this;
    };
    ErrorListener.prototype = Object.create(antlr4.error.ErrorListener.prototype);
    ErrorListener.prototype.constructor = ErrorListener;
    ErrorListener.prototype.syntaxError = function (recognizer, offendingSymbol, line, column, msg, e) {
      console.log("Error at " + line + ", " + column + " for '" + offendingSymbol + "', '" + msg + "',  e: " + e);

      function getAlternatives(expectedTokens) {
        var i = 0, j = 0;
        var intervals = expectedTokens.intervals;
        var length = intervals.length;
        var alts = [];
        for (i = 0; i < length; i++) {
          var interval = intervals[i];
          var start = interval.start;
          var stop = interval.stop;
          for (j = start; j < stop; j++) {
            var symbolicNames = recognizer.symbolicNames;
            var symbolicName = symbolicNames[j];
            alts.push(symbolicName);
          }
        }
        return alts;
      }

      var error = {line: line, column: column, message: msg, alternatives: []};
      if (recognizer && e) {
        error.alternatives = getAlternatives(e.getExpectedTokens()); // getExpectedTokensWithinCurrentRule
      }
      this.errors.push(error);

      this.dumpErrors();
    };

    ErrorListener.prototype.getErrors = function () {
      return this.errors;
    };

    ErrorListener.prototype.dumpErrors = function () {
      if (this.errors.length == 0) {
        console.log("No errors");
        return;
      }
      var l = this.errors.length;
      for (var i = 0; i < l; i++) {
        var error = this.errors[i];
        console.log("[" + error.line + "," + error.column + "]: " + error.message + ", expecting " + error.alternatives);
      }
    };

    // ---------------------------------------------------------------------------------------------
    // Our MetricsQueryRowListener subclass
    // ---------------------------------------------------------------------------------------------

    var Listener = function (input) {
      console.log("\nCREATING LISTENER");
      this.input = input;
      this.leafSpans = [];
      this.parentSpans = [];
      metricsQueryRowListener.MetricsQueryRowListener.call(this); // inherit default listener
      return this;
    };

    Listener.prototype = Object.create(metricsQueryRowListener.MetricsQueryRowListener.prototype);

    Listener.prototype.constructor = Listener;

    Listener.prototype.leafSpans = [];

    Listener.prototype.parentSpans = [];

    Listener.prototype.addLeafSpan = function (ctx) {
      console.log("Leaf span:");
      console.log(ctx);
      var span = {
        type: ctx.ruleIndex,
        start: ctx.start.start,
        stop: ctx.stop.stop,
        name: ctx.constructor.name,
        text: this.input.substring(ctx.start.start, ctx.stop.stop + 1)
      };
      if (ctx.exception === null && span.start <= span.stop) {

        if (this.leafSpans.length !== 0) {
          var previous = this.leafSpans[this.leafSpans.length - 1];
          if (previous.stop + 1 !== span.start) {
            var fillerSpan = {
              type: -1,
              start: previous.stop + 1,
              stop: span.start - 1,
              name: "filler",
              text: "filler"
            };
            this.leafSpans.push(fillerSpan);
            console.log("FILLER   : " + s(fillerSpan));
          }
        }
        this.leafSpans.push(span);
        console.log("GOOD     : " + s(span));

      } else if (span.start > span.stop) {
        console.log("ERROR    : " + s(span));
      } else {
        console.log("EXCEPTION: " + s(span));
      }
    };

    Listener.prototype.addParentSpan = function (ctx) {
      console.log("Parent span:");
      console.log(ctx);
      var span = {
        type: ctx.ruleIndex,
        start: ctx.start.start,
        stop: ctx.stop.stop,
        name: ctx.constructor.name,
        text: this.input.substring(ctx.start.start, ctx.stop.stop + 1)
      };
      if (ctx.exception === null && span.start <= span.stop) {
        this.parentSpans.push(span);
        console.log("GOOD     : " + s(span));
      } else if (span.start > span.stop) {
        console.log("ERROR    : " + s(span));
      } else {
        console.log("EXCEPTION: " + s(span));
      }
    };

    Listener.prototype.exitMetricName = function (ctx) {
      this.addLeafSpan(ctx);
    };

    Listener.prototype.exitDimensionKey = function (ctx) {
      this.addLeafSpan(ctx);
    };

    Listener.prototype.exitDimensionEq = function (ctx) {
      this.addLeafSpan(ctx);
    };

    Listener.prototype.exitDimensionValue = function (ctx) {
      this.addLeafSpan(ctx);
    };

    Listener.prototype.exitQuantizeOperator = function (ctx) {
      this.addLeafSpan(ctx);
    };

    Listener.prototype.exitTimerange = function (ctx) {
      this.addLeafSpan(ctx);
    };

    Listener.prototype.exitFunctionNameNoArgs = function (ctx) {
      this.addLeafSpan(ctx);
    };

    Listener.prototype.exitSelectors = function (ctx) {
      this.addParentSpan(ctx);
    };

    Listener.prototype.exitQuantize = function (ctx) {
      this.addParentSpan(ctx);
    };

    Listener.prototype.exitAggregation = function (ctx) {
      this.addParentSpan(ctx);
    };

    // ---------------------------------------------------------------------------------------------
    // Hints for autocomplete
    // ---------------------------------------------------------------------------------------------

    function createAutocompleteResults(from, to, suggestions) {

      // Club everything together into a flat list.
      var list = [];
      var i;
      for (i = 0; i < suggestions.dimensionKeys.length; i++) {
        var displayName = suggestions.dimensionKeys[i].display;
        list.push({displayText: "Key: " + displayName, text: displayName});
      }
      for (i = 0; i < suggestions.dimensionValues.length; i++) {
        var displayName = suggestions.dimensionValues[i].display;
        list.push({displayText: "Value: " + displayName, text: displayName});
      }
      for (i = 0; i < suggestions.metricNames.length; i++) {
        var displayName = suggestions.metricNames[i].display;
        list.push({displayText: "Metric: " + displayName, text: displayName});
      }
      list.sort(function (a, b) {
        if (a.displayText < b.displayText) {
          return -1;
        } else if (a.displayText > b.displayText) {
          return 1;
        } else {
          return 0;
        }
      });

      // And finally, return the list.
      return {list: list, from: from, to: to};
    }

    CodeMirror.registerHelper("hint", "sumometrics", function (cm, callback, options) {

      var i = 0;
      var cursor = cm.getCursor();

      var m = metricsRowQueryParser.MetricsQueryRowParser;
      var leafSpans = globalListener.leafSpans;
      var closestPreviousLeafSpan = leafSpans[0] || null;
      var lastLeafSpan;
      var lastDimensionKey;
      for (i = 0; i < leafSpans.length; i++) {
        var span = leafSpans[i];
        if (span.type === m.RULE_dimensionKey) {
          lastDimensionKey = span.text;
        }
        console.log(span);
        if (span.start <= cursor.ch && cursor.ch <= span.stop + 1) {
          lastLeafSpan = span;
          closestPreviousLeafSpan = leafSpans[i - 1];
        }
      }
      console.log("Last leaf span: " + s(lastLeafSpan));
      console.log("Closest previous leaf span: " + s(closestPreviousLeafSpan));

      var parentSpans = globalListener.parentSpans;
      var lastParentSpan;
      for (i = 0; i < parentSpans.length; i++) {
        var span = parentSpans[i];
        console.log(span);
        if (span.start <= cursor.ch) {
          lastParentSpan = span;
        }
      }
      console.log("Last parent span: " + s(lastParentSpan));

      var input = cm.getValue();
      var prefix = "";
      var current = CodeMirror.Pos(cursor.line, cursor.ch);
      var from = current;
      var to = current;
      if (lastLeafSpan) {
        prefix = input.substring(lastLeafSpan.start, cursor.ch);
        from = CodeMirror.Pos(cursor.line, lastLeafSpan.start);
        to = CodeMirror.Pos(cursor.line, lastLeafSpan.stop + 1);
      }
      console.log("Prefix: " + prefix + ", for suggestions at: " + s(current) +
        ", from: " + s(from) + ", to: " + s(to));

      var suggestions = {
        dimensionKeys: [],
        dimensionValues: [],
        metricNames: []
      };

      if ((lastLeafSpan && (
        lastLeafSpan.type === m.RULE_dimensionValue)) ||
        (!lastLeafSpan && (
          closestPreviousLeafSpan.type === m.RULE_dimensionKey)
        )) {

        // Get the dimension values...
        getDimensionValues(prefix, lastDimensionKey, function (data) {
          console.log(data);
          if (data && data.data) {
            data = data.data;
          }
          if (data && data.suggestions) {
            for (var i = 0; i < data.suggestions.length; i++) {
              suggestions.dimensionValues.push(data.suggestions[i]);
            }
          }

          var result = createAutocompleteResults(from, to, suggestions);
          console.log("Suggestions: " + s(result));
          callback(result);
        });
      } else if ((lastLeafSpan &&
        (lastLeafSpan.type === m.RULE_metricName ||
        lastLeafSpan.type === m.RULE_dimensionKey)) ||
        (!lastLeafSpan && lastParentSpan.type === m.RULE_selectors)) {
        console.log("Getting metric name and dimension key suggestions...");

        // Get the dimension keys...
        getDimensionKeys(prefix, function (data) {
          console.log(data);
          if (data && data.suggestions) {
            for (var i = 0; i < data.suggestions.length; i++) {
              suggestions.dimensionKeys.push(data.suggestions[i]);
            }
          }
          // ...and the metric names.
          getMetricNames(prefix, function (data) {
            console.log(data);
            if (data && data.suggestions) {
              for (var i = 0; i < data.suggestions.length; i++) {
                suggestions.metricNames.push(data.suggestions[i]);
              }
            }

            var result = createAutocompleteResults(from, to, suggestions);
            console.log("Suggestions: " + s(result));
            callback(result);
          });
        });
      }
    });

    CodeMirror.commands.autocomplete = function (cm) {
      console.log(cm);
      cm.showHint({
        hint: CodeMirror.hint.sumometrics,
        async: true
      });
    };

    // -------------------------------------------------------------------------------------------
    // CodeMirror mode implementation
    // -------------------------------------------------------------------------------------------

    var codeMirrorMode = {

      lexer: metricsRowQueryLexer,

      parser: metricsRowQueryParser,

      setDatasource: function (datasource) {
        globalDatasource = datasource;
      },

      newLexer: function (input, errorListener) {
        var inputStream = new antlr4.InputStream(input);
        var lexer = new this.lexer.MetricsQueryRowLexer(inputStream);
        lexer.removeErrorListeners();
        lexer.addErrorListener(errorListener);
        return lexer;
      },

      newParser: function (tokens, errorListener) {
        var parser = new this.parser.MetricsQueryRowParser(tokens);
        parser.removeErrorListeners();
        parser.addErrorListener(errorListener);
        return parser;
      },

      newState: function () {
        var state = {
          parsed: false,
          input: null
        };
        return state;
      },

      startState: function (basecolumn) {
        return this.newState();
      },

      parse: function (input) {
        console.log("--> Starting to parse...");
        console.log(input);

        // Set up lexing.
        var errorListener = new ErrorListener();
        var lexer = this.newLexer(input, errorListener);
        var tokens = new antlr4.CommonTokenStream(lexer);

        // Set up parsing.
        var parser = this.newParser(tokens, errorListener);

        // Actually perform the parse.
        var metricsQueryRow = parser.metricsQueryRow();

        // Walk the parse tree.
        var walker = new antlr4.tree.ParseTreeWalker();
        globalListener = new Listener(input);
        walker.walk(globalListener, metricsQueryRow);

        //// Update the line widget.
        //this.updateLineWidget(errorListener);

        console.log("--> Done parsing");
      },

      token: function (stream, state) {

        // Do we need to start parsing again?
        if (state.parsed === false || stream.pos === 0) {
          console.log("Need to parse...");
          state.input = stream.string;
          this.parse(stream.string);
          state.parsed = true;
          state.leafSpans = globalListener.leafSpans;
          state.leafSpanOffset = 0;
        }

        // Get the next span.
        var span = state.leafSpans[state.leafSpanOffset];
        state.leafSpanOffset = state.leafSpanOffset + 1;
        console.log(span);

        // Are we done here?
        if (!span) {
          console.log("No span returned, skipping to end");
          stream.skipToEnd();
          return
        }

        // Advance the position.
        console.log("Stream pos: " + stream.pos + " new: " + (span.stop + 1));
        stream.pos = span.stop + 1;

        // Figure out the class.
        var result = "black";
        var m = this.parser.MetricsQueryRowParser;
        if (span.type === m.RULE_quantizeOperator) {
          result = "operator";
        } else if (span.type === m.RULE_metricName) {
          result = "metric_name";
        } else if (span.type === m.RULE_dimensionKey) {
          result = "dimension_key";
        } else if (span.type === m.RULE_dimensionValue) {
          result = "dimension_value";
        } else if (span.type === m.RULE_timerange) {
          result = "timerange";
        } else if (span.type === m.RULE_functionNameNoArgs) {
          result = "function_name";
        }
        return result;
      },

      widgets: [],

      updateLineWidget: function (errorListener) {
        if (this.codeMirror) {
          var errors = errorListener.getErrors();
          var self = this;
          setTimeout(function () {
            for (var i = 0; i < self.widgets.length; ++i)
              self.codeMirror.removeLineWidget(self.widgets[i]);
            self.widgets = [];
            var l = errors.length;
            for (i = 0; i < l; i++) {
              var error = errors[i];
              var reason = "Column " + (error.column + 1) + ": Expecting " + error.alternatives;
              var msg = document.createElement("div");
              var icon = msg.appendChild(document.createElement("span"));
              icon.innerHTML = "!!";
              icon.className = "lint-error-icon";
              msg.appendChild(document.createTextNode(reason));
              msg.className = "lint-error";
              self.widgets.push(self.codeMirror.addLineWidget(error.line - 1, msg, {
                coverGutter: false,
                noHScroll: true
              }));
            }
            var info = self.codeMirror.getScrollInfo();
            var after = self.codeMirror.charCoords({
              line: self.codeMirror.getCursor().line + 1,
              ch: 0
            }, "local").top;
            if (info.top + info.clientHeight < after)
              self.codeMirror.scrollTo(null, after - info.clientHeight + 3);
          }, 10);
        }
      }
    };

    CodeMirror.defineMode("sumometrics", function () {
      return codeMirrorMode;
    });
    CodeMirror.defineMIME("text/x-sumometrics", "sumometrics");
  });
