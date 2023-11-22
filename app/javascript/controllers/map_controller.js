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
    this.#fitMapToMarkers()
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

  #fitMapToMarkers() {
    const bounds = new mapboxgl.LngLatBounds()
    this.markersValue.forEach(marker => bounds.extend([marker.lon, marker.lat]))
    this.map.fitBounds(bounds, { padding: 70, maxZoom: 15, duration: 900 })
  }
}
