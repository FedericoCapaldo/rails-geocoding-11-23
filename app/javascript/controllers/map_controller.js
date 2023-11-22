import { Controller } from "@hotwired/stimulus"
import mapboxgl from "mapbox-gl"

// Connects to data-controller="map"
export default class extends Controller {
  static values = {
    apiKey: String,
    markers: Array
  }

  connect() {
    this.#loadMap()
    this.#addMarkersToMap()
  }

  #loadMap() {
    mapboxgl.accessToken = this.apiKeyValue

    this.map = new mapboxgl.Map({
      container: this.element,
      style: "mapbox://styles/mapbox/streets-v10"
    })
  }

  #addMarkersToMap () {
    this.markersValue.forEach((marker) => {
      new mapboxgl.Marker()
        .setLngLat([marker.lon, marker.lat])
        .addTo(this.map)
    })
  }
}
