// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define(["require","exports","dojo/_base/lang","./Util"],function(n,p,m,f){return function(){function h(a,d,b){var c;"string"===typeof a?c=a:(c=a.programNamePrefix,d=a.shaderSnippetPrefixes,b=a.baseDefines);f.assert(d,"you must specify shader snippet prefixes");f.assert(2===d.length,"you must specify shader snippet prefixes for vertex and fragment shaders");b&&0!==b.length||(b=[]);this.programNamePrefix=c;this.shaderSnippetPrefixes=d;this.baseDefines=b;this.variables=[];this.sealed=!1}h.prototype.addDefine=
function(a,d,b,c){f.assert(!this.sealed,"you cannot add another variable after the first program has been generated");f.assert(a,"you must specify a program name suffix");this.variables.push({programNameSuffixes:["",a],shaderNameSuffixes:c||a,defineStr:d,affectsShaderTypes:b||[!0,!0]})};h.prototype.addBinaryShaderSnippetSuffix=function(a,d,b){f.assert(!this.sealed,"you cannot add another variable after the first program has been generated");f.assert(a,"you must specify a program name suffix");this.variables.push({programNameSuffixes:["",
a],shaderSnippetSuffixes:["",d],affectsShaderTypes:b||[!0,!0]})};h.prototype.addNaryShaderSnippetSuffix=function(a,d){f.assert(!this.sealed,"you cannot add another variable after the first program has been generated");var b=a.map(function(c){f.assert(null!=c.value,"value must always be specified");return c.value});this.variables.push({values:b,programNameSuffixes:a.map(function(c,a){return null!=c.programNameSuffix?c.programNameSuffix:b[a]}),shaderSnippetSuffixes:a.map(function(a,d){return null!=
a.shaderSnippetSuffix?a.shaderSnippetSuffix:b[d]}),affectsShaderTypes:d||[!0,!0]})};h.prototype.getShaderVariation=function(a){f.assert(a.length===this.variables.length,"you must specify a value for each variable");for(var d=this.programNamePrefix,b=m.clone(this.shaderSnippetPrefixes),c=m.clone(this.shaderSnippetPrefixes),h=m.clone(this.baseDefines),l=0;l<this.variables.length;l++){var g=this.variables[l],e=a[l],k=void 0;g.values?(k=g.values.indexOf(e),f.assert(0<=k,"invalid value "+e+" for variable "+
l)):k=e?1:0;d+=g.programNameSuffixes[k];for(e=0;2>e;e++)g.affectsShaderTypes[e]&&(g.shaderSnippetSuffixes&&(b[e]+=g.shaderSnippetSuffixes[k],c[e]+=g.shaderSnippetSuffixes[k]),g.defineStr&&k&&(h.push(g.defineStr),c[e]+=g.shaderNameSuffixes))}return{programName:d,shaderSnippetNames:b,shaderNames:c,defines:h}};return h}()});