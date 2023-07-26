/**
 * 0.37 -> 37%
 */
export function percent(value, decimals = 0) {
    return `${(value * 100).toFixed(decimals)}%`
}

/**
 * 12996 -> 12.9 Ki
 */
export function memory(value, decimals = 1) {
    const i = value == 0 ? 0 : Math.floor(Math.log(value) / Math.log(1024))
    return (value / Math.pow(1024, i)).toFixed(decimals) * 1 + ' ' + ['B', 'Ki', 'Mi', 'Gi', 'Ti'][i]
}

/**
 * Date.now() -> now
 * Date.now() - 5000 -> 5 seconds ago
 */
export function timeDelta(difference) {
    let unit = 0

    // Years
    if ((unit = difference / 3.154e+7) > 1) {
        return Math.floor(unit) + ' years ago'
    }

    // Months
    if ((unit = difference / 2.628e+6) > 1) {
        return Math.floor(unit) + ' months ago'
    }

    // Days
    if ((unit = difference / 86400) > 1) {
        return Math.floor(unit) + ' days ago'
    }

    // Hours
    if ((unit = difference / 3600) > 1) {
        return Math.floor(unit) + ' hours ago'
    }

    // Minutes
    if ((unit = difference / 60) > 1) {
        return Math.floor(unit) + ' minutes ago'
    }

    // Seconds
    if ((unit = difference) > 1) {
        return Math.floor(unit) + ' seconds ago'
    }

    return 'now'
}

/**
 * Date(2023-03-15T20:40:12Z000) -> 2023-03-15 20:40:12 (3 months ago)
 */
export function localTimeWithDelta(time, from = Date.now()) {
    return `${time.toLocaleString()} (${timeDelta( (from - time) / 1000.0 )})`
}

/**
 * Convert a number to an ordered string.
 * 1 -> 1st
 * 136 -> 136th
 */
export function ordinal(number) {
    let numstring = `${number}`
    
    if (numstring.endsWith('11')) {
        return `${number}th`
    }
    if (numstring.endsWith('12')) {
        return `${number}th`
    }
    if (numstring.endsWith('13')) {
        return `${number}th`
    }
    if (numstring.endsWith('1')) {
        return `${number}st`
    }
    if (numstring.endsWith('2')) {
        return `${number}nd`
    }
    if (numstring.endsWith('3')) {
        return `${number}rd`
    }
    return `${number}th`
}