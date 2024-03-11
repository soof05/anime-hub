import { List, ListItem, SkeletonText } from "@chakra-ui/react"

const GneresSkeleton = () => {
  return (
    <List paddingY="4px">
        <ListItem>
            <SkeletonText fontSize='lg'/>
        </ListItem>
    </List>
  )
}

export default GneresSkeleton
