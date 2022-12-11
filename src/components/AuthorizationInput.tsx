import React, { ReactNode } from 'react';
import { TextInput, View } from 'react-native';

import { styled } from 'nativewind';

const TextInputStyled = styled(TextInput);
const ViewStyled = styled(View);

export interface TextInputInputProps {
  placeholder?: string;
}

function TextInputInput({ placeholder }: TextInputInputProps) {
  return (
    <TextInputStyled
      className="w-full bg-white rounded text-md pl-6 py-6"
      style={{
        elevation: 6,
      }}
      placeholder={placeholder}
    />
  )
}

export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon({ children }: TextInputIconProps) {
  return (
    <TouchableOpacity
      onPress={() => setHidePassword(!hidePassword)}
    >
      {hidePassword ? (
        <Eye
          name="visibility"
          size={25}
        />
      ) : (
        <EyeSlash
          name="visibility-off"
          size={25}
        />
      )}
    </TouchableOpacity>
  )
}

export interface TextInputRootProps {
  children: ReactNode;
  passwordInput: boolean;
}

export function TextInputRoot({children, passwordInput}: TextInputRootProps) { 
  return (
    <View className="flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300">
      <TextInputInput/>
      {
        passwordInput 
        ? <TextInputIcon/>
        :null
      }
    </View>
  )
}