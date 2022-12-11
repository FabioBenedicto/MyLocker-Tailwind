import { ActivityIndicator, TouchableOpacity, View } from "react-native";
import MyLockerText from "./MyLockerText";

import { styled } from "nativewind";
import { ReactNode } from "react";

const TouchableOpacityStyled = styled(TouchableOpacity);
const ViewStyled = styled(View);
const ActivityIndicatorStyled = styled(ActivityIndicator);

interface ButtonProps{
    children: ReactNode;
    loading: boolean;
}

export default function Button({ children, loading}:ButtonProps){
    return(
    <TouchableOpacityStyled 
    className="w-full rounded bg-blue py-4 justify-center items-center"
    >
        <ViewStyled 
        className="h-[30] w-full justify-center items-center"
        >
        {
            !loading 
            ? <ActivityIndicatorStyled size="large"/>
            : <MyLockerText weight="bold" size="semi-lg" color="white">{children}</MyLockerText>
        }
        </ViewStyled>
    </TouchableOpacityStyled>
    )
}
