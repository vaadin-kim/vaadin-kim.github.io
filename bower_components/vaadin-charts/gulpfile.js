"use strict";var gulp=require("gulp"),config=require("config");require("./tasks/cdn.js"),require("./tasks/demo.js"),require("./tasks/zip.js"),require("./tasks/format.js");var del=require("del");gulp.task("default",function(){console.log("\n  Usage:\n    gulp <clean | [cdn:demo:zip:]stage | [cdn:demo:]deploy | format:[verify]>\n")}),gulp.task("clean",["clean:staging"]),gulp.task("clean:staging",function(e){del([config.dest+"/**/*"],e)}),gulp.task("stage",["cdn:stage","zip:stage"]),gulp.task("deploy",["cdn:deploy"]);