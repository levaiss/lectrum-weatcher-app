// Core
import { useContext } from 'react';

// Instruments
import { StoreContext } from '../lib/StoreProvider';

export const useStore = () => {
    return useContext(StoreContext);
};
