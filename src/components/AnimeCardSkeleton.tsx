import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"

const AnimeCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="350px"/>
      <CardBody>
        <SkeletonText/>
      </CardBody>
    </Card>
  )
}

export default AnimeCardSkeleton
