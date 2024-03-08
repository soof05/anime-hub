import { Badge, HStack } from "@chakra-ui/react";

interface Props {
  score: number;
}

const ScoreBadge = ({ score }: Props) => {
  let color = score > 7.50 ? 'green' : score > 6 ? 'yellow' : '';
  return (
    <HStack>
      <Badge fontSize="17px" colorScheme={color} paddingX={2} borderRadius="5px">{score}</Badge>
    </HStack>
  );
};

export default ScoreBadge;
