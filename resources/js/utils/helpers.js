export const Str = {
    slug: (text) => {
        if (!text) return '';
        return text
            .toLowerCase()
            .replace(/[^\w ]+/g, '')
            .replace(/ +/g, '-');
    },
    limit: (text, count) => {
        if (!text) return '';
        return text.length > count ? text.substring(0, count) + '...' : text;
    }
};
