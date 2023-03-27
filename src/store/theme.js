import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    dark: window.matchMedia('(prefers-color-scheme: dark)').matches
  }),
  actions: {
    toggleTheme () {
      this.dark = !this.dark

      if (this.dark) {
        document.body.classList.add('theme--dark')
        document.body.classList.remove('theme--light')
      } else {
        document.body.classList.add('theme--light')
        document.body.classList.remove('theme--dark')
      }
    }
  },
  persist: true
})
