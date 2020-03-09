export enum ThemeKey {
    light = "light",
    dark = "dark"
}

enum ThemeActionType {
    SET_THEME = "SET_THEME"
}

export interface ThemeAction {
    type: ThemeActionType,
    payload: any
}

export interface AppTheme {
    backgroundColor: string,
    highlightColor: string,
    highlightTextColor: string,
    textColor: string,
    lightTextColor: string,
    lightBottomColor: string,
    alternateMessageBackgroundColor: string,
  }

export interface ThemesMap {
    [key: string]: AppTheme;
}

export const darkTheme: AppTheme = {
    backgroundColor: "#000000",
    highlightColor: "grey",
    highlightTextColor: "#ffffff",
    textColor: "#fff",
    lightTextColor: "#b3b3b3",
    lightBottomColor: "#666666",
    alternateMessageBackgroundColor: '#4682b4',
  }
  
  export const lightTheme: AppTheme = {
    backgroundColor: "#ffffff",
    highlightColor: "green",
    highlightTextColor: "#ffffff",
    textColor: "#333",
    lightTextColor: "#b3b3b3",
    lightBottomColor: "#e6e6e6",
    alternateMessageBackgroundColor: '#B0E0E6',
  }

export const themes: ThemesMap = {
    [ThemeKey.light]: lightTheme,
    [ThemeKey.dark]: darkTheme
}
