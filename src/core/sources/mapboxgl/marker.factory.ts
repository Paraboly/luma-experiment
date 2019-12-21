import mapboxgl from "mapbox-gl/dist/mapbox-gl";
mapboxgl.accessToken =
  "pk.eyJ1Ijoic2NoZW1lc29uaWMiLCJhIjoiY2swY3lxOWhqMDJpcTNjb2NoOGhjZncyZSJ9.lvVwLocCAkKFm3zAei5seA";

/**
 * @description Generate MapboxGl marker instances
 * @abstract
 * @class MapboxGlMarkerFactory
 */
abstract class MapboxGlMarkerFactory {
  /**
   * @description given configurations, generate new MapboxGl marker. If template given, it will use DivIcon.
   * @returns New MapboxGl Marker instance
   * @memberof MapboxGlMarkerFactory
   */
  public static getOne(cfg: {
    latlng: [number];
    template: string;
    options?: any;
  }) {
    const marker = new mapboxgl.Marker({
      draggable: true
    }).setLngLat(cfg.latlng);

    return marker;
  }
}

export default MapboxGlMarkerFactory;
