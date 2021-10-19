import { StormGlass } from '@src/clients/stormGlass';
import axios from 'axios';
import stormglassWeather3HoursFixure from '@test/fixures/stormGlass_weather_3_hours.json';
import stormGlassNormalize from '@test/fixures/stormglass_normalized_response_3_hours.json';
jest.mock('axios');

describe('StormGlass client', () => {
  it('should return the normalize forecast from the storm glass', async () => {
    const lat = -33.55454;
    const lng = -33.55454;

    axios.get = jest.fn().mockResolvedValue(stormglassWeather3HoursFixure);

    const stormGlass = new StormGlass(axios);
    const response = await stormGlass.fetchPoints(lat, lng);
    expect(response).toEqual(stormGlassNormalize);
  });
});
