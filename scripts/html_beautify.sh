#!/bin/sh
CONFIG_FILE="scripts/config/.jsbeautifyrc"

exe="node_modules/.bin/js-beautify"

dirs=(\
  "dist/" \
)

function main() {
  for dir in ${dirs[@]}
  do
    for entry in "$dir"**/*.html
    do
      $exe "$entry" -r --config $CONFIG_FILE
    done
  done
}

main
