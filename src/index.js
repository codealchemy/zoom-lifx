const { changeLightState } = require("./api/lifx")
const config = require("../.private/config")
const colors = require("./constants/colors")
const { watchProcess } = require("./watchProcess")

const onMeetingStarted = async () => {
  console.log("You are on air!")
  try {
    await changeLightState(config.lightId, colors.onAir)
  } catch (ex) {
    console.error(ex)
  }
}

const onMeetingEnded = async () => {
  console.log("Meeting ended")
  try {
    await changeLightState(config.lightId, colors.offAir)
  } catch (ex) {
    console.error(ex)
  }
}

;(async () => {
  console.log("Zoom Lifx watcher started")
  await watchProcess("zoom.us", onMeetingStarted, onMeetingEnded)
})()
