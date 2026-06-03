import { usePage } from '@inertiajs/react';

function getByPath(source, key) {
    return key.split('.').reduce((value, segment) => {
        if (value && typeof value === 'object' && segment in value) {
            return value[segment];
        }

        return undefined;
    }, source);
}

export function t(key, replacements = {}) {
    const { translations = {} } = usePage().props;
    const resolved = getByPath(translations, key);

    if (typeof resolved !== 'string') {
        return key;
    }

    return Object.entries(replacements).reduce((message, [name, value]) => {
        return message.replaceAll(`:${name}`, String(value));
    }, resolved);
}

export function useLocale() {
    return usePage().props.locale ?? { current: 'en', direction: 'ltr', available: ['en', 'ar'] };
}
