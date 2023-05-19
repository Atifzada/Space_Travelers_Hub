import { createAsyncThunk } from '@reduxjs/toolkit';

const RocketsData = createAsyncThunk('get/rockets', async () => {
  const rockets = await fetch('https://api.spacexdata.com/v3/rockets');
  const data = await rockets.json();
  return data.map((rocket) => ({
    id: rocket.id,
    rocket_name: rocket.rocket_name,
    description: rocket.description,
    rocket_images: rocket.flickr_images,
  }));
});

export default RocketsData;
