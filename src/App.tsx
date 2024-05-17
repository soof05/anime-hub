import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import AnimeGrid from "./components/AnimeGrid";
import GenresList from "./components/GenresList";
import ProducerSelector from "./components/ProducerSelector";
import SortSelector from "./components/SortSelector";
import './index.css'
import AnimeHeading from "./components/AnimeHeading";



function App() {
  // const [animeQuery, setAnimeQuery] = useState<AnimeQuery>({} as AnimeQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar/>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenresList/>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={3}>
          <AnimeHeading/>
          <HStack spacing={5} marginBottom={6}>
            <ProducerSelector/>
            <SortSelector/>
          </HStack>
        </Box>
        <AnimeGrid/>
      </GridItem>
    </Grid>
  );
}

export default App;
