module.exports = function (context) {
    const { siteConfig } = context;
    const { themeConfig } = siteConfig;
    const { customAsrul } = themeConfig || {};

    if (!customAsrul) {
        throw new Error(
            `Kamu butuh kode asrul`,
        );
    }

    const { kodeAsrul } = customAsrul;

    if (!kodeAsrul) {
        throw new Error(
            'Asrul error',
        );
    }
    const isProd = process.env.NODE_ENV === 'production';
    return {
        name: 'srul',
        getClientModules() {
            return isProd ? [path.resolve(__dirname, './srul')] : [];
        },

        injectHtmlTags() {
            if (!isProd) {
                return {};
            }
            return {
                headTags: [
                    {
                        tagName: 'link',
                        attributes: {
                            rel: 'preconnect',
                            href: 'siap',
                        },
                    },
                    {
                        tagName: 'script',
                        innerHTML: `okay`,
                    },
                    {
                        tagName: 'script',
                        attributes: {
                            async: true,
                            src: 'iya.js',
                        },
                    },
                ],
            };
        },
    };
};