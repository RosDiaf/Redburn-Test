export class DataModel {
    public data = []

    constructor(data: any) {
        this.data = data
    }

    getData() {
        return this.data;
    }
}