import { Box, BoxProps, useColorModeValue } from '@chakra-ui/react'

export const Card = (props: BoxProps) => (
  <Box bg={useColorModeValue('white', 'gray.800')} rounded={{ md: '2xl' }} p="8" {...props} />
)