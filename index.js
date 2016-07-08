/* jshint node: true */
'use strict';

module.exports = {
  description: 'pull leaflet-draw assets using bower',
  name: 'ember-leaflet-draw',
  included: function(app) {
   this._super.included(app);
  //  ['spritesheet-2X.png','spritesheet.png'].forEach(function(file){
  //    app.import(app.bowerDirectory + '/leaflet-measure/dist/images/' + file, { destDir: '/assets/images' });
  //  });
   app.import(app.bowerDirectory + '/leaflet-draw/dist/leaflet.draw.js');
   app.import(app.bowerDirectory + '/leaflet-draw/dist/leaflet.draw.css');
 }
};
