import { Box, Heading } from "@chakra-ui/react";
import ScoreBadge from "./ScoreBadge";

interface Attribute {
  mal_id: number;
  name: string;
}

interface Props {
  title: string;
  attribute?: Attribute[];
  score?: number;
}

const AnimeAttributes = ({ title, attribute, score }: Props) => {
  if (!attribute?.length)
    return (
      <Box marginY={5}>
        <Heading as={"dt"} fontSize={"md"} color={"gray.600"}>
          {title}
        </Heading>
        <dd><ScoreBadge score={score!}/></dd>
      </Box>
    );

  return (
    <Box marginY={5}>
      <Heading as={"dt"} fontSize={"md"} color={"gray.600"}>
        {title}
      </Heading>
      {attribute.map((attr) => (
        <dd key={attr.mal_id}>{attr.name}</dd>
      ))}
    </Box>
  );
};

export default AnimeAttributes;
