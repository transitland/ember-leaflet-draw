import Ember from 'ember';
import BaseLayer from 'ember-leaflet/components/base-layer';

const {get} = Ember;

export default BaseLayer.extend({
  // TODO add more measure options
  leafletOptions: [
    'position',
    'draw',
    'edit'
  ],

  layerSetup() {
    this._layer = this.createLayer();
    this._addObservers();
    this._addEventListeners();
    if (get(this,'containerLayer')) {
    	this._layer.addTo(get(this,'containerLayer')._layer);
    }
    this.didCreateLayer();
	},

  createLayer(){
		return new this.L.Control.Draw(get(this, 'options'));
	}
});
