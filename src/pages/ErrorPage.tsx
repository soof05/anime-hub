import {Box, Heading, Text} from '@chakra-ui/react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import NavBar from '../components/NavBar'

const ErroPage = () => {
    const error = useRouteError()

    return (
        <>
            <Box padding={5}>
                <NavBar/>
                <Heading>Ooops</Heading>
                <Text>{isRouteErrorResponse(error) ? 'Page does not exist' : 'An u nexpected error occured'}</Text>
            </Box>
        </>
    )
}

export default ErroPage;