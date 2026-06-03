import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { useEffect } from 'react';

const appName = import.meta.env.VITE_APP_NAME || 'Al Barakah Real Estate';

function RootApp({ App, props }) {
    const locale = props.initialPage.props.locale;

    useEffect(() => {
        if (!locale) {
            return;
        }

        document.documentElement.lang = locale.current;
        document.documentElement.dir = locale.direction;
    }, [locale]);

    return <App {...props} />;
}

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<RootApp App={App} props={props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
