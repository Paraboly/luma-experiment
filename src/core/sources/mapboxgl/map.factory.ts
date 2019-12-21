import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2NoZW1lc29uaWMiLCJhIjoiY2swY3lxOWhqMDJpcTNjb2NoOGhjZncyZSJ9.lvVwLocCAkKFm3zAei5seA";

/**
 * @description Generate MapboxGl Map instances
 * @abstract
 * @class MapboxGLMapFactory
 */
abstract class MapboxGLMapFactory {
  /**
   * @description Create MapboxGl instance with given layer
   * @param target Html element id of the container
   * @param layer If provided, map initialized with given layer
   * @param options MapboxGl map options
   * @returns New MapboxGl map instance
   */
  public static getOne(cfg?: mapboxgl.MapboxOptions) {
    const map = new mapboxgl.Map(cfg);

    return map;
  }
}

export default MapboxGLMapFactory;
