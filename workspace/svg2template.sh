#!/bin/bash
set -euxo pipefail

convert() {
    name="${1}.template"
    cat "$1" | perl -pe 's/((-inkscape-)?font-.+?|line-height):.+?[;"]//g' > "$name"
    svgo -i "$name" --config svgo.config.mjs
    cat "$name" | perl -pe 's/class="seg(\d+)\s+com(\d+)"/class="removed" v-bind:opacity="vram[$2-1][$1-1] ? 1 : 0.05"/g; s/class="removed" ?//g' > "${name}.tmp"
    mv "${name}.tmp" "$name"
}

dirname $0
convert "lcd.svg"
