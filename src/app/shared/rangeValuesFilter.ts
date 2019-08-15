export function rangeValuesFilter(key, greaterThan, lessThan, dataset) {
    let items = []
    items = dataset.filter(val => {
        return val[key] > greaterThan && val[key] <= lessThan
    })
    // if(greaterThan > 0 && lessThan > 0) {
    //     items = dataset.filter(val => {
    //         return val[key] > greaterThan && val[key] <= lessThan
    //     })
    // }
    return items
}