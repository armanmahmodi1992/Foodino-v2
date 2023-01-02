import { View, Text } from 'react-native'
import React from 'react'

const cartPlus = (number: number) => {

    const cart = number + 1
    return cart
}

const cartMinus = (number: number) => {
    if (number == 0) {
        return 0
    }
    else {
        const cart = number - 1
        return cart
    }
}

export {
    cartPlus,
    cartMinus
}

