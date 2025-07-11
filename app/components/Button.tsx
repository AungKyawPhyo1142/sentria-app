import clsx from 'clsx';
import React from 'react';
import { ActivityIndicator, TouchableOpacity, View } from 'react-native';

interface ButtonProps extends React.ComponentProps<typeof TouchableOpacity> {
    children: React.ReactNode;
    onPress?: () => void;
    className?: string;
    disabled?: boolean;
    loading?: boolean;
    primary?: boolean;
    secondary?: boolean;
    danger?: boolean;
    outline?: boolean;
    type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = (props) => {
    const {
        children,
        onPress,
        className = '',
        disabled = false,
        loading = false,
        primary = false,
        secondary = false,
        danger = false,
        outline = false,
        type = 'button',
        ...rest
    } = props;

    return (
        <TouchableOpacity 
            {...rest}
            className={clsx(
                'min-h-[50px] rounded-lg py-2 w-full px-5 flex items-center justify-center text-white',
                primary && 'bg-primary text-black disabled:bg-[#B3B3B3]',
                secondary && 'bg-secondary disabled:bg-[#B3B3B3]',
                danger && 'bg-red disabled:bg-[#B3B3B3]',
                outline && 'border-secondary !text-secondary border disabled:bg-[#B3B3B3]',
                (disabled || loading) && 'opacity-50',
                className,
            )}
            onPress={onPress} 
            disabled={disabled || loading}
            activeOpacity={0.8}
        >
            {loading ? (
                <View className='flex justify-center'>
                    <ActivityIndicator color="white" size="small" />
                </View>
            ) : (
                children ?? 'Button'
            )}
        </TouchableOpacity>
    );
};

export default Button;