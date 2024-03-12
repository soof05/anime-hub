import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";

interface Props {
  onSelectQuery: (query: string) => void;
  selectedQuery: string | null;
}

const SortSelector = ({ onSelectQuery, selectedQuery }: Props) => {
  const sortOrders = [
    { value: "popularity", label: "Popularity" },
    { value: "episodes", label: "Episodes" },
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BiChevronDown />}>
        Sort by : {selectedQuery}
      </MenuButton>
      <MenuList>
        {sortOrders.map((query) => (
          <MenuItem key={query.label} value={query.value} onClick={() => onSelectQuery(query.value)}>
            {query.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
