import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";
import useProducers, { Producer } from "../hooks/useProducers";

interface Props {
  onSelectProducer: (producer : Producer | null) => void;
  selectedProducer: Producer | null;
}

const ProducerSelector = ({onSelectProducer, selectedProducer}: Props) => {
  const { data, error } = useProducers();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BiChevronDown />}>
        {selectedProducer ? selectedProducer.titles[0].title : 'Producers'}
      </MenuButton>
      <MenuList>
        {data.map((producer) => (
          <MenuItem onClick={() => onSelectProducer(producer)} key={producer.mal_id}>{producer.titles[0].title}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default ProducerSelector;
