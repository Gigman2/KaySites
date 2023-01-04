/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react'
import React from 'react'
import { Box, Button, Flex, FormLabel, Icon, Text } from '@chakra-ui/react'
import { Listbox } from '@headlessui/react'
import { AiOutlineCaretDown } from 'react-icons/ai'

interface IProp {
  label?: string
  options: ({name: string; key: string} | string)[]
  value?: {name: string; key: string} | string
  placeholder: string
  onChange: (e: {name: string; key: string} | string) => void
  error?: string | null
  isRequired?: boolean
}

const KCSelect: FC<IProp> = ({
  label,
  options,
  value,
  onChange,
  placeholder,
  error
}) => {
  return (
    <Box
      bg="whiteAlpha.800"
      rounded="lg"
      borderWidth={0}
      borderColor={error ? 'red.400' : 'base.blue'}
      width={{ base: 'full', lg: '50%' }}
      mb={8}
    >
      {label && <FormLabel
        fontWeight={600}
        px={4}
        py={2}
        margin={0}
        color={error ? 'red.400' : 'base.blue'}
      >
        {label}
      </FormLabel>}
      <Flex style={{ position: 'relative' }} 
        >
        <Listbox value={value} onChange={onChange}>
          {({open}) => (<>
            <Listbox.Button
                as={Button}
                color="kc.500"
                bg="whiteAlpha.500"
                textTransform="uppercase" 
                fontSize={14}
                h={6}
                _hover={{bg: "transparent"}}
                >
                    {value ? (value as  {name: string; key: string})?.name || value as string  : placeholder}
                    <Icon as={AiOutlineCaretDown} boxSize={6} ml={4} transform={open ? "rotate(180deg)" : "rotate(0deg)"}/>
            </Listbox.Button>
          <Listbox.Options
            as={Box}
            color="kc.500"
            width="auto"
            overflow="auto"
            minH={24}
            pl={0}
            ml={3}
            pos="absolute"
            zIndex={100}
            listStyle="none"
            top={8}
            bg="white"
            rounded={"md"}
            borderWidth={1}
            borderColor="kc.500"
          >
            {options.map(item => (
              <Listbox.Option
                key={(item as {name: string; key: string})?.key || item as string}
                value={item}
                style={{
                  cursor: 'pointer'
                }}
              >
                {({ selected, active }) => (
                  <Text
                    px={2}
                    py={2}
                    my={1}
                    fontWeight={selected ? 600 : 500}
                    bg={active ? 'kc.100' : ''}
                  >
                    {(item as {name: string; key: string})?.name || item as string}
                  </Text>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
          </>)}
        </Listbox>
      </Flex>
    </Box>
  )
}

export default KCSelect
