#!/bin/sh
CONFIG_FILE="scripts/config/svg.config.json"

exe_svg="node_modules/.bin/svg-sprite"
exe_html2pug="node_modules/.bin/html2pug"

svgs=(\
 "src/svg/icons" \
)
targetHtml=(\
 "src/svg/svg-sprite.svg" \
)
partsDir=src/view/parts; [ ! -e $partsDir ] && mkdir -p $partsDir

$exe_svg -C $CONFIG_FILE $svgs/*.svg
$exe_html2pug < $targetHtml > $partsDir/_svgs.pug
