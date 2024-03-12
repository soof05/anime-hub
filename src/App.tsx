import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import AnimeGrid from "./components/AnimeGrid";
import GenresList from "./components/GenresList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import ProducerSelector from "./components/ProducerSelector";
import { Producer } from "./hooks/useProducers";
import SortSelector from "./components/SortSelector";
import './index.css'

export interface AnimeQuery {
  genre: Genre | null;
  producer: Producer | null;
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
        <NavBar onSearch={(searchText) => setAnimeQuery({...animeQuery, searchText})}/>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenresList
            selectedGenre={animeQuery.genre}
            onSelectGenre={(genre) => setAnimeQuery({ ...animeQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack spacing={5} paddingLeft={3} marginBottom={6}>
          <ProducerSelector
            selectedProducer={animeQuery.producer}
            onSelectProducer={(producer) =>
              setAnimeQuery({ ...animeQuery, producer })
            }
          />
          <SortSelector selectedQuery={animeQuery.Sortquery} onSelectQuery={(Sortquery) => setAnimeQuery({...animeQuery, Sortquery})}/>
        </HStack>
        <AnimeGrid animeQuery={animeQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
