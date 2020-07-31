<template>
  <div @click.once="onMapClick"></div>
</template>

<script>
import { loadModules } from 'esri-loader';

export default {
  name: 'web-map',
  data() {
    return {
      mapView: null,
      mapSearch: null,
    }
  },
  methods: {

      onMapClick() {
        this.mapView.on("click", (evt) => {
          this.mapSearch.clear();
          this.mapView.popup.clear();
          if (this.mapSearch.activeSource) {
            var geocoder = this.mapSearch.activeSource.locator; // World geocode service
            var params = {
              location: evt.mapPoint
            };
            geocoder.locationToAddress(params).then(
              function (response) {
                // Show the address found
                var address = response.address;
                showPopup(address, evt.mapPoint);
              },
              function (err) {
                // Show no address found
                console.log(err)
                showPopup("No address found.", evt.mapPoint);
              }
            );
          }
        });

        const showPopup = (address, pt) => {
          this.mapView.popup.open({
            title:
              +Math.round(pt.longitude * 100000) / 100000 +
              "," +
              Math.round(pt.latitude * 100000) / 100000,
            content: address,
            location: pt
          });
        }
      }
  },
  mounted() {
    // lazy load the required ArcGIS API for JavaScript modules and CSS
    loadModules(['esri/Map', 'esri/views/MapView', 'esri/widgets/Search'], { css: true })
    .then(([ArcGISMap, MapView, Search]) => {
      

      const map = new ArcGISMap({
        basemap: 'topo-vector'
      });

      this.view = new MapView({
        container: this.$el,
        map: map,
        center: [-118, 34],
        zoom: 8
      });
      const search = new Search({
        view: this.view,
      })
      this.view.ui.add(search, 'top-right')
      this.mapSearch = search
      this.mapView = this.view
      
    });
  },
  beforeDestroy() {
    if (this.view) {
      // destroy the map view
      this.view.container = null;
    }
  },
};

</script>

<style scoped>
div {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>