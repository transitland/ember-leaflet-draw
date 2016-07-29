/*jshint node:true*/
module.exports = {
  description: 'leaflet draw',

  normalizeEntityName: function() {

  },

  afterInstall: function(options) {
    return this.addBowerPackageToProject('leaflet-draw', 'https://github.com/Leaflet/Leaflet.draw.git#0.2.4-dev*');
  }
};
