import { Slot } from 'expo-router';
import React from 'react';
import '../globals.css';

const backgroundImage = require('@assets/images/welcome-bg.jpg');
export default function _layout() {
    return (
        <Slot />
    )
}