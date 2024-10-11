
export function PriceFormat(price, currency= 'INR') {
    let formatter = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0
    });
    return formatter.format(price)
}
    
export function NumberCompactFormat(number) {
    let formatter = new Intl.NumberFormat('en-IN', {
        notation: 'compact',
        compactDisplay: 'short',
    });
    return formatter.format(number);
}

export function PercentageFormat(number) {
    let formatter = new Intl.NumberFormat('en-IN', {
        style: 'percent',
        minimumFractionDigits: 0,
    });
    return formatter.format(number);
}