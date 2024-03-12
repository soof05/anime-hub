import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import AnimeGrid from "./components/AnimeGrid";
import GenresList from "./components/GenresList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import ProducerSelector from "./components/ProducerSelector";
import { Producer } from "./hooks/useProducers";

export interface AnimeQuery {
  genre: Genre | null;
  producer: Producer | null;
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
        <NavBar />
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
        <ProducerSelector
          selectedProducer={animeQuery.producer}
          onSelectProducer={(producer) =>
            setAnimeQuery({ ...animeQuery, producer })
          }
        />
        <AnimeGrid
          animeQuery={animeQuery}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
