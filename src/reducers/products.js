import  { createSlice } from '@reduxjs/toolkit'

const productData = [
    { id: 1, title: 'Broccoli', price: 20, emoji: '🥦' },
    { id: 2, title: 'Apples', price: 7, emoji: '🍎' },
    { id: 3, title: 'Carrots', price: 20, emoji: '🥕' },
    { id: 4, title: 'Lemon', price: 9, emoji: '🍋' },
    { id: 5, title: 'Carrots', price: 22, emoji: '🥬' },
    { id: 6, title: 'Onion', price: 4, emoji: '🧅' },
    { id: 7, title: 'Garlice', price: 6, emoji: '🧄' },
    { id: 8, title: 'Orange', price: 11, emoji: '🍊' },
    { id: 9, title: 'Avocado', price: 20, emoji: '🥑' },
    { id: 10, title: 'Chili', price: 5, emoji: '🌶' },
    { id: 11, title: 'Grapes', price: 22, emoji: '🍇' },
    { id: 12, title: 'Tomatos', price: 8, emoji: '🍅' },



]

export const products = createSlice({
    name: 'products',
    initialState: productData
})