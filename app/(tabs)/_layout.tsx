import { Redirect, Slot } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';

export default function _layout() {
    const isAuthenticated = false;
    if (!isAuthenticated) {
        return <Redirect href="/welcome" />
    }
    return (
        <Slot />
    )
}

const styles = StyleSheet.create({})