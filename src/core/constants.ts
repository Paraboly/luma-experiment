import MapboxGLMapFactory from "./sources/mapboxgl/map.factory";

export enum MAP_SOURCES {
  Leaflet = "LEAFLET",
  Mapbox = "MAPBOX",
  MapboxGL = "MAPBOXGL",
  Openlayers = "OPENLAYERS"
}

const PWC_MAP_CONSTANTS = {
  DEFAULTS: {
    TARGET: "pwc-map",
    SOURCE: MAP_SOURCES.MapboxGL,
    CENTER: [32.7758598, 39.8974598],
    ZOOM: 11,
    MAX_ZOOM: 21,
    BASE_LAYER: {
      URL: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    },
    ANIMATION_DURATION: 2000
  },
  FACTORIES: {
    MAPBOXGL: MapboxGLMapFactory
  }
};

export default PWC_MAP_CONSTANTS;
