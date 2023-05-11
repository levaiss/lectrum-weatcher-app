// Layouts
import { DefaultLayout } from './layouts/DefaultLayout';

// Pages
import { HomePage } from './pages/HomePage';

export const App = () => {
    return (
        <DefaultLayout>
            <HomePage />
        </DefaultLayout>
    );
};

