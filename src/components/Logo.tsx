import React from "react";
import { Image, View } from "react-native";

import MyLockerLogo from '../assets/MyLockerLogo.png';
import ShortLogoWhite from '../assets/ShortLogoWhite.png';

import { styled } from "nativewind";

const ViewStyled = styled(View);
const ImageStyled = styled(Image);

interface LogoProps {
    darkTheme: boolean;
}

export function Logo({ darkTheme }: LogoProps) {
    return (
        <ViewStyled
            className="w-100"
        >
            <ImageStyled
                source={darkTheme
                    ? ShortLogoWhite
                    : MyLockerLogo}
                className="object-contain w-100"
            />
        </ViewStyled>
    );
}