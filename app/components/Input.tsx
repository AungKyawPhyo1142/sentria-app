import EyeOff from '@assets/icons/eye-off.svg';
import Eye from '@assets/icons/eye.svg';
import Search from '@assets/icons/search.svg';
import clsx from 'clsx';
import React, { useState } from 'react';
import {
    NativeSyntheticEvent,
    Text,
    TextInput,
    TextInputFocusEventData,
    TouchableOpacity,
    View,
} from 'react-native';

export interface Props extends React.ComponentProps<typeof TextInput> {
    className?: string
    error?: string
    hint?: string
    primary?: boolean
    secondary?: boolean
    showSearchIcon?: boolean
    inputRef?: React.Ref<TextInput>
    type?: 'text' | 'password'
    disabled?: boolean
}

type InputState = {
    inputType: 'text' | 'password'
    showPassword: boolean
}

const Input: React.FC<Props> = (props) => {
    const {
        className,
        error,
        hint,
        primary,
        secondary,
        showSearchIcon,
        type,
        inputRef,
        disabled,
        onFocus,
        onBlur,
        ...rest
    } = props

    const [isFocused, setIsFocused] = useState(false)
    const [inputState, setInputState] = useState<InputState>({
        inputType: type === 'password' ? 'password' : 'text',
        showPassword: false,
    })

    const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setIsFocused(true)
        // Also call the original onFocus from props if it exists
        onFocus?.(e)
    }

    const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setIsFocused(false)
        // Also call the original onBlur from props if it exists
        onBlur?.(e)
    }

    const onEyeIconClick = () => {
        setInputState((prev) => ({
            inputType: prev.inputType === 'password' ? 'text' : 'password',
            showPassword: !prev.showPassword,
        }))
    }

    const handlePasswordDisplayIcon = () => {
        return inputState.showPassword ? (
            <TouchableOpacity
                onPress={onEyeIconClick}
                style={{ position: 'absolute', right: 16 }}
            >
                <Eye width={20} height={20} strokeWidth={1} color="white" />
            </TouchableOpacity>
        ) : (
            <TouchableOpacity
                onPress={onEyeIconClick}
                style={{ position: 'absolute', right: 16 }}
            >
                <EyeOff width={20} height={20} strokeWidth={1} color="white" />
            </TouchableOpacity>
        )
    }

    const handleSearchIcon = () => {
        return showSearchIcon ? (
            <View style={{ position: 'absolute', left: 16 }}>
                <Search width={20} height={20} color="white" />
            </View>
        ) : null
    }

    return (
        <View style={{ width: '100%' }}>

            <View className="relative flex items-center justify-center">
                {handleSearchIcon()}
                <TextInput
                    {...rest}
                    ref={inputRef}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholderTextColor={secondary ? '#6b7280' : '#d1d5db'}
                    secureTextEntry={inputState.inputType === 'password'}
                    editable={!disabled}
                    className={clsx(
                        'min-h-[50px] w-full rounded-lg text-white transition-all duration-200 ease-linear border px-3 text-xl font-poppins font-light',
                        disabled && 'text-inactive',
                        primary && 'text-white',
                        secondary && 'bg-white text-[#121212]',
                        type === 'password' && 'pr-8',
                        // Border color logic
                        error
                            ? 'border-red'
                            : isFocused
                              ? 'border-white'
                              : 'border-inactive',
                        className,
                    )}
                />
                {type === 'password' && handlePasswordDisplayIcon()}
            </View>

            {hint && !error && (
                <Text className="text-gray-400 pt-1 pl-2 text-base font-poppins font-normal">{hint}</Text>
            )}
            {error && <Text className="text-red pt-1 pl-2 text-base font-poppins font-normal">{error}</Text>}
        </View>
    )
}

export default Input
