import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import AnimeGrid from "./components/AnimeGrid";
import GenresList from "./components/GenresList";
import { useState } from "react";
import ProducerSelector from "./components/ProducerSelector";
import SortSelector from "./components/SortSelector";
import './index.css'
import AnimeHeading from "./components/AnimeHeading";

export interface AnimeQuery {
  genreId: number | null;
  producerId: number | null;
  Sortquery: string | null;
  searchText: string;
}

function App() {
  const [animeQuery, setAnimeQuery] = useState<AnimeQuery>({} as AnimeQuery);

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
        <NavBar onSearch={(searchText) => setAnimeQuery({ ...animeQuery, searchText })} />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenresList
            selectedGenreId={animeQuery.genreId}
            onSelectGenre={(genreId) => setAnimeQuery({ ...animeQuery, genreId })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={3}>
          <AnimeHeading producerId={animeQuery.producerId} />
          <HStack spacing={5} marginBottom={6}>
            <ProducerSelector
              selectedProducerId={animeQuery.producerId}
              onSelectProducer={(producerId) =>
                setAnimeQuery({ ...animeQuery, producerId })
              }
            />
            <SortSelector selectedQuery={animeQuery.Sortquery} onSelectQuery={(Sortquery) => setAnimeQuery({ ...animeQuery, Sortquery })} />
          </HStack>
        </Box>
        <AnimeGrid animeQuery={animeQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
