import {
  Element,
  Component,
  Prop,
  h,
  Method,
  Event,
  EventEmitter
} from "@stencil/core";
import PWCMap from "./services/pwc-map.model";
import { MapFactory } from './services/map.factory';

@Component({
  tag: "pwc-map",
  styleUrl: "pwc-map.css"
})
export class PwcMap {
  private map: PWCMap;
  @Element() private element: HTMLElement;
  @Event() mapInitialized: EventEmitter;
  /**
   * Config for the map to be initialized
   */
  @Prop() config: object;

  /**
   * Allow to get map instance from pwc-map element
   * @returns Promise which resolves pwc map instance
   * @author SchemeSonic
   */
  @Method()
  async getMap(): Promise<any> {
    return Promise.resolve(this.map);
  }

  componentDidLoad() {
    const mapConfig = {
      style: "mapbox://styles/mapbox/streets-v11",
    };
    this.map = MapFactory.getOne({
      container: this.element.querySelector("div"),
      source: "MAPBOXGL",
      ...mapConfig
    });
    this.mapInitialized.emit(this.map);
  }

  render() {
    return <div id="pwc-map-container"></div>;
  }
}
