import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import AnimeGrid from "./components/AnimeGrid";
import GenresList from "./components/GenresList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import ProducerSelector from "./components/ProducerSelector";
import { Producer } from "./hooks/useProducers";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedProducer, setSelectedProducer] = useState<Producer | null>(null);

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
          <GenresList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)} />
        </GridItem>
      </Show>
      <GridItem area="main">
        <ProducerSelector selectedProducer={selectedProducer} onSelectProducer={(producer) => setSelectedProducer(producer)}/>
        <AnimeGrid  selectedProducer={selectedProducer} selectedGenre={selectedGenre}/>
      </GridItem>
    </Grid>
  );
}

export default App;
