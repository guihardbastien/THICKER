/**
 * Retrieve the language of the browser
 * @return The language of the browser or null if nothing is found
 */
export function getFirstBrowserLanguage(): string | null | undefined {
    const nav: any = window.navigator;
    const browserLanguagePropertyKeys = [
        'language', 'browserLanguage',
        'systemLanguage', 'userLanguage'
    ];

    // support for HTML 5.1 "navigator.languages"
    if (Array.isArray(nav.languages)) {
        return nav.languages.find((language: any) => language && language.length);
    }

    // support for other well known properties in browsers
    return browserLanguagePropertyKeys.find((val: string) => {
        const language = nav[val];
        return language && language.length;
    });
}

/**
 * Normalize the browser language to remove unnecessary content
 * fr-FR becomes FR
 * @param lang The browser language
 * @return The normlaized language
 */
export function normalizeBrowserLanguage(lang: string): string | null {
    if (lang == null || lang === '') {
        return null;
    }
    return lang.split('-')[0].toUpperCase();
}

/**
 * Return the default language for a user
 * @param languages List of supported languages
 * @return The default supported language
 */
export function getDefaultLanguage(languages: string[] = ['EN', 'FR']): string {
    const browserLanguage = getFirstBrowserLanguage();

    if (browserLanguage === null || browserLanguage === undefined) {
        return 'FR';
    }

    const locale: string = languages.find((l: string) => {
        return l.toLowerCase() === browserLanguage.toLowerCase();
    }) || 'FR';
    return locale.toUpperCase();
}
