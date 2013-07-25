GTEdit.module('Map', function(Map, App, Backbone, Marionette, $, _) {

  var Draw = {
    editLayer: null,

    tools: {
      polygon: null,
      radius: null,
      drivetime: null
    },

    init: function() {
      // Initialize the FeatureGroup to store editable layers
      this.editLayer = new L.FeatureGroup();
      Map.instance.addLayer(this.editLayer);

      //Initialize new Draw Handlers
      this.tools.polygon = new L.Draw.Polygon(Map.instance, App.Config.polygonOptions);
      this.tools.radius = new L.Draw.Circle(Map.instance, App.Config.circleOptions);
      this.tools.drivetime = new L.Draw.Marker(Map.instance, App.Config.drivetimeOptions);

      //Draw Created Event, fires once at the end of draw
      Map.instance.on('draw:created', function(e) {
        var type = e.layerType;
        var layer = e.layer;

        // layer.bindPopup(type);

        if (type === 'marker') {
          layer.options.draggable = true;
          layer.on('dragend', function(){
            console.log('recalculate drivetime', [this._latlng.lat, this._latlng.lng]);
          });
        } else {
          layer.editing.enable();
        }

        Map.Draw.clear();
        Map.Draw.editLayer.addLayer(layer);

        App.controlsRegion.currentView.disableDrawTool();
        App.controlsRegion.currentView.showNew();
      });
    },

    clear: function() {
      Map.Draw.editLayer.clearLayers();
    },

    enableTool: function(str) {
      this.disableTool();
      this.tools[str].enable();
    },

    disableTool: function(str) {
      for (var i in this.tools) {
        if (typeof str === 'undefined' || i === str) {
          this.tools[i].disable();
        }
      }
    }
  };

  _.extend(Map, {
    init: function(el) {
      // L.Icon.Default.imagePath = App.Config.imagePath;
      this.instance = L.map(el).setView(App.Config.Map.center, App.Config.Map.zoom);
      this.instance.zoomControl.setPosition('topright');
      L.esri.basemapLayer(App.Config.Map.basemap).addTo(this.instance);

      this.Draw.init();
    },

    Draw: Draw
  });

});