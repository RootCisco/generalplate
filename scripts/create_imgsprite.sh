#!/bin/sh
CONFIG_FILE="scripts/config/.spritesmith.js"

exe_smith="node_modules/.bin/spritesmith"
exe_stylsupremacy="node_modules/.bin/stylus-supremacy"

targetSass=(
  "src/style/_sprite.scss" \
)

$exe_smith --rc $CONFIG_FILE
$exe_stylsupremacy format src/style/_sprite.styl -p scripts/config/stylus-supremacy.json -r
