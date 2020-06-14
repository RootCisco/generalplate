#!/bin/sh
CONFIG_FILE="scripts/config/svg.config.json"

exe_svg="node_modules/.bin/svg-sprite"

svgs=(\
 "src/svg/icons" \
)

$exe_svg -C $CONFIG_FILE $svgs/*.svg
