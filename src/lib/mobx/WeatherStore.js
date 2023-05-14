// Core
import { makeAutoObservable } from 'mobx';

export class WeatherStore {
    type = '';
    minTemperature = '';
    maxTemperature = '';
    isFiltered = false;
    selectedDayId = '';

    constructor() {
        makeAutoObservable(this, { rootStore: false }, {
            autoBind: true,
        });
    }

    setType(type) {
        this.type = type;
    }

    setMinTemperature(temp) {
        this.minTemperature = temp;
    }

    setMaxTemperature(temp) {
        this.maxTemperature = temp;
    }

    applyFilter(filter) {
        if (filter.type) {
            this.type = filter.type;
        }

        if (filter.minTemperature) {
            this.minTemperature = filter.minTemperature;
        }

        if (filter.maxTemperature) {
            this.maxTemperature = filter.maxTemperature;
        }

        this.isFiltered = true;
    }

    get filters() {
        return {
            type:           this.type,
            minTemperature: this.minTemperature,
            maxTemperature: this.maxTemperature,
        };
    }

    get isFormBlocked() {
        return this.type === '' && this.minTemperature === '' && this.maxTemperature === '';
    }

    setSelectedDayId(id) {
        this.selectedDayId = id;
    }

    resetFilter() {
        this.maxTemperature = '';
        this.minTemperature = '';
        this.type = '';
        this.isFiltered = false;
    }
}
