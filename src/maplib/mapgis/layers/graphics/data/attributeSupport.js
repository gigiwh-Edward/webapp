// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports ../../../core/Error ../../../core/LRUCache ../../../core/LRUMap ../../../core/sql/WhereClause".split(" "),function(m,a,d,k,l,g){function h(b,c){for(var a=[],f=0;f<c.length;f++){var d=c[f];"*"===d||b.has(d)||a.push(d)}return a}Object.defineProperty(a,"__esModule",{value:!0});a.invalidClauseCache=new k(500);a.whereClausesCache=new l(50);a.validateWhere=function(b,c){if(!c)return!0;var e;try{e=g.create(c),a.whereClausesCache.set(c,e)}catch(f){throw a.invalidClauseCache.insert(c,
null),new d("feature-store:unsupported-query","invalid SQL expression",{where:c});}if(!e.isStandardized())throw new d("feature-store:unsupported-query","where clause is not standard",{where:c});e=e.getFields();b=h(b,e);if(b.length)throw new d("feature-store:unsupported-query","where clause contains missing fields",{missingFields:b,where:c});return!0};a.getWhereClause=function(b){if(!b)return null;if(a.invalidClauseCache.has(b))return a.invalidClauseCache.use(b);if(a.whereClausesCache.has(b))return a.whereClausesCache.get(b);
var c;c=g.create(b);a.whereClausesCache.set(b,c);return c};a.getMissingFields=h});