import { ui } from "./ui";

const defaultLang = "es";

export function getLangFromUrl(url: URL) {
    const base = import.meta.env.BASE_URL;
    let path = url.pathname;

    // Si hay un base path configurado (ej: /portfolio), lo quitamos del análisis
    if (base && base !== "/" && path.startsWith(base)) {
        path = path.slice(base.length);
    }

    const [, lang] = path.split("/");
    if (lang in ui) return lang as keyof typeof ui;
    return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof (typeof ui)[typeof defaultLang]) {
        return ui[lang][key] || ui[defaultLang][key];
    };
}
