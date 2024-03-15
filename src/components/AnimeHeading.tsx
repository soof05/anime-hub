import { Heading } from "@chakra-ui/react"

interface Props {
  title: string | undefined;
}

const AnimeHeading = ({ title }: Props) => {
  if (title)
    return (
      <Heading marginBottom={5} as='h1'>{title + ' works'}</Heading>
    )
  return (
    <Heading marginBottom={5} as='h1'>Zizo</Heading>
  )
}

export default AnimeHeading