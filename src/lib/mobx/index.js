// Core
import { makeAutoObservable } from 'mobx';

// Stores
import { WeatherStore } from './WeatherStore';

export class RootStore {
    weatherStore = null;

    constructor() {
        makeAutoObservable(this);
        this.weatherStore = new WeatherStore();
    }
}
