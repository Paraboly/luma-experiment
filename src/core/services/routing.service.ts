export default abstract class PWCMapRoutingService {
  /**
   *
   * @description creates route by given coordinates array
   * @static
   * @param {*} map
   * @param {*} coordinates
   * @memberof PWCMapRouting
   */
  public static getRoute(coordinates) {
    return this.prepareQuery(coordinates);
  }

  /**
   *
   * @description prepares query string
   * @private
   * @static
   * @param {*} coordinates
   * @returns
   * @memberof PWCMapRouting
   */
  private static prepareQuery(coordinates) {
    let wayPoints;
    coordinates.forEach((coordinate, index) => {
      wayPoints = wayPoints
        ? wayPoints + coordinate.lng + "%2C" + coordinate.lat
        : coordinate.lng + "%2C" + coordinate.lat;
      if (coordinates[index + 1]) {
        wayPoints = wayPoints + "%7C";
      }
    });

    return this.createRouteFromOSM(wayPoints);
  }

  /**
   *
   * @description get routes from osm
   * @private
   * @static
   * @param {*} wayPoints
   * @memberof PWCMapRouting
   */
  private static async createRouteFromOSM(wayPoints): Promise<any> {
    const api = `https://api.openrouteservice.org/directions?api_key=5b3ce3597851110001cf6248d532e3f61c1c4b9aae10167c3efd47ec&coordinates=${wayPoints}&geometry=true&geometry_format=geojson&language=en-US&preference=fastest&profile=driving-car&units=m`;

    return fetch(api)
      .then((response: Response) => response.json())
      .then(response => {
        return response.routes[0];
      });
  }
}
