#!/bin/bash

mogrify -path img/ -filter Triangle -define filter:support=2 -thumbnail 800 -unsharp 0.25x0.08+8.3+0.045 -dither None -posterize 136 -quality 95 -define jpeg:fancy-upsampling=off -define png:compression-filter=5 -define png:compression-level=9 -define png:compression-strategy=1 -define png:exclude-chunk=all -interlace none -colorspace sRGB img/$1