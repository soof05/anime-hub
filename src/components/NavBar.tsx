import { Box, HStack, Image } from "@chakra-ui/react"
import logo from '../assets/logo.png'
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"


const NavBar = () => {
  return (
    <HStack padding="10px" justifyContent="center" width="100%">
        <Image src={logo} boxSize="60px"/>
        <Box flex={1} paddingY={5}>
          <SearchInput/>
        </Box>
        <ColorModeSwitch/>
    </HStack>
  )
}

export default NavBar
