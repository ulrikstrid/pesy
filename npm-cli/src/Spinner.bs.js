// Generated by BUCKLESCRIPT VERSION 5.0.4, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Printf = require("bs-platform/lib/js/printf.js");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var Caml_int32 = require("bs-platform/lib/js/caml_int32.js");
var Js_null_undefined = require("bs-platform/lib/js/js_null_undefined.js");

var frames = /* array */[
  "-",
  "\\",
  "|",
  "/"
];

var n_frames = frames.length;

function start(msg) {
  var i = /* record */[/* contents */0];
  return setInterval((function (param) {
                Curry._2(Printf.printf(/* Format */[
                          /* String */Block.__(2, [
                              /* No_padding */0,
                              /* Char_literal */Block.__(12, [
                                  /* " " */32,
                                  /* String */Block.__(2, [
                                      /* No_padding */0,
                                      /* String_literal */Block.__(11, [
                                          "                                \r",
                                          /* End_of_format */0
                                        ])
                                    ])
                                ])
                            ]),
                          "%s %s                                \r"
                        ]), msg, Caml_array.caml_array_get(frames, Caml_int32.mod_(i[0], n_frames)));
                i[0] = i[0] + 1 | 0;
                return /* () */0;
              }), 120);
}

function stop(spinnerIntervalID) {
  var intervalID = spinnerIntervalID;
  return Js_null_undefined.iter(intervalID, (function (intervalId) {
                clearInterval(intervalId);
                return /* () */0;
              }));
}

exports.start = start;
exports.stop = stop;
/* No side effect */