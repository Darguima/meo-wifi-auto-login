import { overrideTheme } from '../App'

export type ThemeOverride = typeof overrideTheme
export type ThemeColorsOverride = typeof overrideTheme.colors

declare global {
  export namespace ReactNativePaper {
    export interface Theme extends ThemeOverride {}
    export interface ThemeColors extends ThemeColorsOverride {}
  }
}
