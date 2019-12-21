import PWCMap from "./pwc-map.model";
import PWC_MAP_CONSTANTS from "../../core/constants";
export abstract class MapFactory {
  public static getOne(settings: any) {
    return new PWCMap({
      zoom: PWC_MAP_CONSTANTS.DEFAULTS.ZOOM,
      center: PWC_MAP_CONSTANTS.DEFAULTS.CENTER,
      ...settings
    });
  }
}
