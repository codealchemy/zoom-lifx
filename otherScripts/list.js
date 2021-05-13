const { getAllLights } = require('../src/api/lifx');

/**
 * Lists all lights in a table
 */
;(async () => {
  console.log('Looking for lights on network...')

  try {
    const lights = await getAllLights()

    const data = lights.reduce((result, light) => {
      result.push({
        Name: light.label,
        Id: light.id,
        State: light.status
      });
      return result
    }, [])

    return console.table(data)
  } catch (ex) {
    return console.error(ex)
  }
})();
