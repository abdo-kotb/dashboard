import {
  PaletteColor as MUIPaletteColor,
  TypeBackground as MUITypeBackground,
  Palette as MUIPalette,
} from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface PaletteColor extends MUIPaletteColor {
    0: string
    10: string
    50: string
    100: string
    200: string
    300: string
    400: string
    500: string
    600: string
    700: string
    800: string
    900: string
    1000: string
  }

  interface Palette extends MUIPalette {
    neutral: PaletteColor
  }

  interface TypeBackground extends MUITypeBackground {
    alt: string
  }
}
