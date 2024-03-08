import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"

const AnimeCardSkeleton = () => {
  return (
    <Card width="300px" borderRadius={10} overflow={"hidden"}>
      <Skeleton height="350px"/>
      <CardBody>
        <SkeletonText/>
      </CardBody>
    </Card>
  )
}

export default AnimeCardSkeleton
