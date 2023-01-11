const key = 'lang'

export const getCurrentLang = (): string => {
    const browser_lang = navigator.language.slice(0, 2)
    const exist_lang_storage = localStorage.getItem(key)
    return exist_lang_storage || browser_lang
}


export const saveLang = (value: string) => localStorage.setItem(key, value)