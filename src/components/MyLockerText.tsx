import clsx from "clsx";
import React, { ReactNode } from "react";
import { Text } from "react-native";

import { styled } from "nativewind";

const TextStyled = styled(Text);

export interface MyLockerTextProps {
    weight?: 'regular' | 'medium' | 'bold',
    size?: 'sm' | 'md' | 'semi-lg' | 'lg',
    color?: string,
    children: ReactNode,
}

export function MyLockerText({ weight = 'regular', size = 'md', color = 'black', children }: MyLockerTextProps) {
    return (
        <TextStyled
            className={clsx(
                {
                    'font-roboto-regular': weight === 'regular',
                    'font-roboto-medium': weight === 'medium',
                    'font-roboto-bold': weight === 'bold',
                },
                {
                    'text-sm': size === 'sm',
                    'text-md': size === 'md',
                    'text-lg': size === 'lg',
                },
                {
                    'text-black': color === 'black',
                    'text-white': color === 'white',
                    'text-gray': color === 'gray',
                    'text-blue': color === 'blue',
                }
            )}
        >
            {children}
        </TextStyled>
    )
}