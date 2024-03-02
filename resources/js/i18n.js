import { createI18n } from "vue-i18n";
import en from "@/locale/en.json";
import kh from "@/locale/kh.json";

function loadLocaleMassages() {
    const locale = [{ en: en }, { kh: kh }];
    const messages = {};
    locale.forEach((lang) => {
        const key = Object.keys(lang);
        messages[key] = lang[key];
    });
    return messages;
}

export default createI18n({
    locale: "kh",
    fallbackLocale: "en",
    messages: loadLocaleMassages(),
});
