import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import AnimeGrid from "../components/AnimeGrid";
import GenresList from "../components/GenresList";
import ProducerSelector from "../components/ProducerSelector";
import SortSelector from "../components/SortSelector";
import AnimeHeading from "../components/AnimeHeading";

const HomePage = () => {
        return (
            <Grid
              templateAreas={{
                base: `"main"`,
                lg: `"aside main"`,
              }}
              templateColumns={{
                base: "1fr",
                lg: "200px 1fr",
              }}
            >
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

export default HomePage;