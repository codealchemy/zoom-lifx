const { Client } = require('lifx-lan-client');
const { delay } = require('../utils/timeout');

const lifxClient = async () => {
  let client = new Client();
  client.init({
    discoveryInterval: 1500,
    stopAfterDiscovery: true
  });
  await delay(client.discoveryInterval);
  return client;
};

const getAllLights = async () => {
  let client = await lifxClient()
  return client.lights();
};

const getLightInfo = async (id) => {
  let lights = await getAllLights();
  return lights.find(light => light.id === id)
};

const changeLightState = async (id, colorArgs) => {
  let targetLight = await getLightInfo(id);
  return targetLight.color(...colorArgs);
};

module.exports = {
  getAllLights,
  getLightInfo,
  changeLightState
}
