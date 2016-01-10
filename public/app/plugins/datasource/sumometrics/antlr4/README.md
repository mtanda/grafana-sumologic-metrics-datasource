# ATTENTION

To make this work in Grafana, line 38 in FileStream.js has to be commented out:

```
var fs = isNodeJs ? require("fs") : null;
```

This has already been done in the version included here.



# JavaScript target for ANTLR 4

JavaScript runtime libraries for ANTLR 4

This runtime is available through npm. The package name is 'antlr4'.

This runtime has been tested in Node.js, Safari, Firefox, Chrome and IE.

See www.antlr.org for more information on ANTLR

See https://theantlrguy.atlassian.net/wiki/display/ANTLR4/JavaScript+Target for more information on using ANTLR in JavaScript


