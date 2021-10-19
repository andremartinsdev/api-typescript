import { AxiosStatic } from 'axios'

export class StormGlass {
    readonly stormGlassAPIParams =
      'swellDirection,swellHeight,swellPeriod,waveDirection,waveHeight,windDirection,windSpeed';
    readonly stormGlassAPISource = 'noaa';
  
    constructor(protected request: AxiosStatic = axios) {}
  
    public async fetchPoints(lat: number, lng: number): Promise<ForecastPoint[]> {
      const response = await this.request.get<StormGlassForecastResponse>(
        `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${this.stormGlassAPIParams}&source=${this.stormGlassAPISource}`,
        {
          headers: {
            Authorization: 'fake-token',
          },
        }
      );
      return this.normalizeResponse(response.data);
    }