import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SaveTreasureService {
    private coords= [0, 0]
    public treasureIsBuried = false;
    public distance: number;

    get getTreasureCoords() {
        return this.coords;
    }

    setTreasureBuried(state) {
        this.treasureIsBuried = state;
    }

    setTeasureCoords(coords) {
        this.coords = [...coords];
    }

    setTreasureDistance(coords: number[]) {
        this.distance = Math.round(Math.sqrt(Math.pow(coords[0] - this.coords[0], 2) + Math.pow(coords[1] - this.coords[1], 2)));
    }
}
