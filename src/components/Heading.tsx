import React, { ReactNode } from "react";
import { Text } from "react-native";

import { styled } from "nativewind";

const TextStyled = styled(Text);

interface HeadingProps {
    value: string;
    fontWeight?: 'regular' | 'medium'
    children: ReactNode;
}

export default function Heading({ value, fontWeight = 'regular', children}: HeadingProps) {
    return (
        <TextStyled 
        className="text-3xl text-black font-Roboto-Medium"
        >
            {children}
        </TextStyled>
    );
}