import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";
import useAnimeQueryStore from "../store";

const SortSelector = () => {
  const sortOrders = [
    { value: "popularity", label: "Popularity" },
    { value: "episodes", label: "Episodes" },
  ];

  const selectedQuery = useAnimeQueryStore(s => s.animeQuery.Sortquery);
  const setSortQuery = useAnimeQueryStore(s => s.setSortQuery);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BiChevronDown />}>
        Sort by : {selectedQuery}
      </MenuButton>
      <MenuList>
        {sortOrders.map((query) => (
          <MenuItem key={query.label} value={query.value} onClick={() => setSortQuery(query.value)}>
            {query.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
