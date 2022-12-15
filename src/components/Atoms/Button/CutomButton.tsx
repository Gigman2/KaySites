import React, { memo } from 'react';
import {
  Button,
  ButtonProps,
  ButtonOptions,
  Flex,
  Box,
} from '@chakra-ui/react';
import { rem } from 'helpers/misc';
import shallow from 'zustand/shallow';

export interface ICustomButtonProps extends ButtonProps {
  myRef?: React.LegacyRef<HTMLButtonElement> | undefined;
  btype?: 'plain' | 'line' | 'solid' | 'link';
  title?: string;
  onHoverTextColor?: string;
  color?: string;
  leftIcon?: ButtonOptions['leftIcon'];
  rightIcon?: ButtonOptions['rightIcon'];
  invert?: string;
}

interface ICustomButtonStyleProps {
  plain: ButtonProps;
  solid: ButtonProps;
  line: ButtonProps;
  link: ButtonProps;
}

function Component({
  myRef,
  btype = 'solid',
  title,
  color = 'cf',
  leftIcon,
  rightIcon,
  py = { base: 3, md: 6 },
  px = { base: 4, md: 8 },
  rounded = 'md',
  invert,
  cursor = 'pointer',
  _focus = {
    outline: 'none',
  },
  ...rest
}: ICustomButtonProps) {
  const style: ICustomButtonStyleProps = {
    plain: {
      color: `${color}.500`,
      bg: 'white',
      shadow: 'lg',
      borderWidth: 1,
      borderColor: 'gray.150',
      _hover: {},
    },
    line: {
      color: `${color}.500`,
      bg: 'white',
      borderWidth: 1,
      borderColor: `${color}.500`,
      _hover: {
        borderColor: `${color}.600`,
        color: `${color}.500`,
      },
      _focus: {
        bg: `${color}.500`,
        color: 'white',
      },
      _active: {
        bg: `${color}.500`,
        color: 'white',
      },
    },
    solid: {
      bg: invert === 'yes' ? 'white' : `${color}.500`,
      color: invert === 'yes' ?  `${color}.500` : 'white' ,
      borderWidth: 2,
      borderColor:invert === 'yes' ? 'white': `${color}.500`,
      _hover: {
        bg: invert === 'yes' ? 'white' :`${color}.600`,
        borderColor: invert === 'yes' ? 'white' :`${color}.600`,
      },
      _focus: {
        bg:invert === 'yes' ? 'white': `${color}.600`,
        borderColor:invert === 'yes' ? 'white' : `${color}.600`,
      },
      _active: {
        bg:invert === 'yes' ? 'white' :  `${color}.600`,
        borderColor:invert === 'yes' ? 'white' : `${color}.600`,
      },
    },
    link: {
      color: `${color}.500`,
      bg: 'transparent',
      px: 0,
      _hover: { bg: 'transparent' },
    },
  };
  return (
    <Button
      ref={myRef}
      {...{ cursor, px, py, rounded, _focus }}
      {...style[btype]}
      h={rest.h || rem(48)}
      isLoading={rest.isLoading}
      isDisabled={rest.isDisabled}
      {...rest}
    >
      <Flex
        align="center"
        gap={rem(4)}
        direction="row"
        h="100%"
        w="100%"
        justify="center"
      >
        {leftIcon || <Box />}
        {title}
        {rightIcon || <Box />}
      </Flex>
    </Button>
  );
}

const CustomButton = memo(Component, shallow);

export default CustomButton;
