import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";
import useProducers from "../hooks/useProducers";
import useAnimeQueryStore from "../store";

const ProducerSelector = () => {
  const { data, error } = useProducers();

  const selectedProducerId = useAnimeQueryStore(s => s.animeQuery.producerId)
  const setSelectedProducerId = useAnimeQueryStore(s => s.setProducerId);

  const producer = data?.data.find(p => p.mal_id === selectedProducerId)

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BiChevronDown />}>
        {selectedProducerId ? producer?.titles[0].title : 'Producers'}
      </MenuButton>
      <MenuList>
        {data?.data.map((producer) => (
          <MenuItem onClick={() => setSelectedProducerId(producer.mal_id)} key={producer.mal_id}>{producer.titles[0].title}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default ProducerSelector;
