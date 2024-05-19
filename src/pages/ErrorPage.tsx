import {Heading, Text} from '@chakra-ui/react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

const ErroPage = () => {
    const error = useRouteError()

    return (
        <>
            <Heading>Ooops</Heading>
            <Text>{isRouteErrorResponse(error) ? 'Page does not exist' : 'An u nexpected error occured'}</Text>
        </>
    )
}

export default ErroPage;