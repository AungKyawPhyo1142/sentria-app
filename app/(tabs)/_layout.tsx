import { Redirect, Slot } from 'expo-router'
import React from 'react'

export default function _layout() {
    const isAuthenticated = false // Replace with actual authentication logic   
    if (!isAuthenticated) {
        return <Redirect href="/welcome" />
    }
    return (
        <Slot />
    )
}