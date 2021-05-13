# Zoom Lifx

Automatically turn on a Lifx light when you have the Zoom application open.

Inspired by [`zoom-hue`](https://github.com/jeremy8883/zoom-hue), using [`lifx-lan-client`](https://github.com/node-lifx/lifx-lan-client) to update lights without needing to call a web API (more on the Lifx LAN protocol [here](https://lan.developer.lifx.com/docs))

This is intended to work with color lights, though _may_ work with other types of lights (such as ['Day & Dusk'](https://www.lifx.com/collections/refurbished/products/lifx-mini-day-dusk-refurbished)) with limited capabilities - ie. only turning them on or off)

## Getting started

```
mkdir .private
cp ./config.example.js ./.private/config.js
yarn install
```

```
yarn run start
```

## Other scripts

List all lights

```
yarn run list
```

Show detailed information for a single light

```
yarn run info
```

Turn a light on/off

```
yarn run toggle d000d00000d0
```
