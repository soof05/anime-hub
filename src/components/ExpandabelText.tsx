import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  text: string;
}

const ExpandabelText = ({ text }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const limit = 550;

  if (text.length <= limit) return <Text>{text}</Text>;

  const summary = text.slice(0, limit) + "...";

  return (
    <Text>
      {expanded ? text : summary}
      <Button
        fontSize="xs"
        marginLeft={1}
        fontWeight="bold"
        colorScheme="yellow"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show less" : "Read more"}
      </Button>
    </Text>
  );
};

export default ExpandabelText;
