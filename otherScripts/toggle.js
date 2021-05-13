const { changeLightState, getLightInfo } = require("../src/api/lifx")
const config = require("../.private/config")
const colors = require("../src/constants/colors")
const { getArgWithDefault } = require("../src/utils/cli")

/**
 * Turn a light on/off
 */
;(async () => {
  try {
    const lightId = getArgWithDefault(0, config.lightId)

    const lightInfo = await getLightInfo(lightId)

    const turnOn = lightInfo.status === 'on'

    const colorArgs = turnOn ? colors.offAir : colors.onAir

    await changeLightState(lightId, colorArgs)

    console.log(
      `Light "${lightInfo.label}" (${lightId}) turned ${turnOn ? "on" : "off"}`
    )
  } catch (ex) {
    console.error(ex)
  }
})()
