// Core
import { render } from 'react-dom';
import { QueryClientProvider } from 'react-query';
import { configure } from 'mobx';

// Components
import { App } from './app';
import { StoreProvider } from './lib/StoreProvider';

// Instruments
import { queryClient } from './lib/react-query';

// Styles
import './theme/index.scss';

configure({
    enforceActions:             'always',
    computedRequiresReaction:   true,
    observableRequiresReaction: true,
    reactionRequiresObservable: true,
});

render(
    <StoreProvider>
        <QueryClientProvider client = { queryClient }>
            <App />
        </QueryClientProvider>
    </StoreProvider>,
    document.getElementById('root'),
    () => {
        // eslint-disable-next-line no-console
        console.log('%c Приложение успешно запущено ', 'background: #00ff00; color: #000000; padding: 2.5px;');
    },
);
