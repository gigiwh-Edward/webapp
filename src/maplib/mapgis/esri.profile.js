var profile = (function(){
  var testResourceRe = /^mapgis\/(.*\/)?tests\//,

    jsRe = /\.js$/i,
    onlineFolderRe = /^mapgis\/arcgisonline\//i,
    mobileFolderRe = /^mapgis\/mobile\//i,
    discoveryFolderRe = /^mapgis\/discovery\//i,
    metadataFolderRe = /^mapgis\/widgets\/metadata\//i,

    copyOnly = function(filename, mid){
      var mids = {
        "mapgis/package.json":          1,
        "mapgis/mapgis.profile":          1,
        "mapgis/mapgis.js":               1,
        "mapgis/core/workers/worker":   1,
        "mapgis/geometry/geometryenginewebworker": 1,
        "mapgis/workers/requestWorker": 1,
        "mapgis/workers/mutableWorker": 1,
        "mapgis/workers/indexWorker":   1,
        "mapgis/workers/scripts/indexInterface": 1,
        "mapgis/views/2d/layers/vector-tile": 1
      };

      return (
        metadataFolderRe.test(mid) ||
        (mid in mids)
      );
    },

    legacyModules = {
      "mapgis/arcgisonline": 1,
      "mapgis/base": 1,
      "mapgis/gallery": 1,
      "mapgis/mobile": 1,
      "mapgis/arcgismanager": 1,
      "mapgis/themes/base/icons/demo-files/demo": 1
    };

  return {
    resourceTags:{
      test: function(filename, mid){
        return testResourceRe.test(mid) || (mid.search(/\.17$/) !== -1);
      },

      copyOnly: function(filename, mid){
        return copyOnly(filename, mid);
      },

      amd: function(filename, mid){
        return jsRe.test(filename) && !copyOnly(filename, mid) && (
          /^mapgis\/arcgisonline\/sharing\/dijit\/FeatureLayerQueryResult/i.test(mid) ||
          /^mapgis\/arcgisonline\/coachmarks\/tours/i.test(mid) ||
          !(
            (mid in legacyModules) || onlineFolderRe.test(mid) ||
            mobileFolderRe.test(mid) || discoveryFolderRe.test(mid)
           )
        );
      }
    }
  };
}());
