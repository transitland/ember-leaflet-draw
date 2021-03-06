import Ember from 'ember';
import BaseLayer from 'ember-leaflet/components/base-layer';

const {get, run} = Ember;

export default BaseLayer.extend({
  leafletOptions: [
    'position',
    'draw',
    'edit'
  ],

  leafletEvents: [
    'draw:editstart',
    'draw:editmove',
    'draw:editvertex',
    'draw:editstop',
    'draw:edited'
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

  _addEventListeners() {
    this.get('leafletEvents').forEach(eventName => {
      let eventHandler = function(e) {
        run.schedule('actions', this, function() {
          //try to invoke/send an action for this event
          if (eventName.includes(":")) {
            let actionName = eventName.split(':')[0] +  Ember.String.classify(eventName.split(':')[1]);
            this.invokeAction(actionName, e);
          }
        });
      };
      get(this,'containerLayer')._layer.addEventListener(eventName, eventHandler, this);
    });
  },

  _removeEventListeners() {
    this._super();
  },

  createLayer(){
		return new this.L.Control.Draw(get(this, 'options'));
	}
});
