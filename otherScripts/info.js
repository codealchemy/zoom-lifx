const { getLightInfo } = require("../src/api/lifx")
const config = require("../.private/config")
const { getArgWithDefault } = require("../src/utils/cli")

/**
 * Gets the information for an individual light
 */
;(async () => {
  try {
    const lightId = getArgWithDefault(0, config.lightId)

    console.log(`Information for light #${lightId}`)

    const lightInfo = await getLightInfo(lightId)

    console.table({
      Id: lightInfo.id,
      Label: lightInfo.label,
      Status: lightInfo.status,
      Address: lightInfo.address
    })
  } catch (ex) {
    console.error(ex)
  }
})()
