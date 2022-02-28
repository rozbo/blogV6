
export class RGB {
  r = 0
  g = 0
  b = 0
  h = 0
  s = 0
  l = 0
  constructor(hex: string) {
    let alphaHex = 'FF'
    if (hex.length === 8) {
      alphaHex = hex.slice(6, 8)
      hex = hex.slice(0, 6)
    }
    else if (hex.length === 4) {
      alphaHex = hex[3]
      alphaHex += alphaHex
      hex = hex.slice(0, 3)
    }
    const a = Math.round((parseInt(alphaHex, 16) / 255 + Number.EPSILON) * 100) / 100

    if (hex.length === 3)
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]

    const hexVal = parseInt(hex, 16)
    const r = hexVal >> 16
    const g = (hexVal >> 8) & 255
    const b = hexVal & 255
    // 计算hsl

    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    let h = 0; let s; let l = (max + min) / 2
    if (max === min) {
      h = s = 0 // achromatic
    }
    else {
      const d = max - min
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break
        case g: h = (b - r) / d + 2; break
        case b: h = (r - g) / d + 4; break
      }
      h /= 6
    }

    s = s * 100
    s = Math.round(s)
    l = l * 100
    l = Math.round(l)
    h = Math.round(360 * h)
    this.r = r
    this.g = g
    this.b = b
    this.h = h
    this.s = s
    this.l = l
  }
}
