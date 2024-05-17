import { create } from "zustand";

interface AnimeQuery {
    genreId?: number | null;
    producerId?: number | null;
    Sortquery?: string | null;
    searchText?: string;
}

interface AnimeQueryStore {
    animeQuery: AnimeQuery;
    setSearchText: (searchText: string) => void;
    setGenreId: (genreId: number) => void;
    setProducerId: (producerId: number) => void;
    setSortQuery: (sortQuery: string) => void;
}

const useAnimeQueryStore = create<AnimeQueryStore>((set) => ({
    animeQuery: {},
    setGenreId: (genreId) => set((store) => ({animeQuery: {...store.animeQuery, genreId}})),
    setProducerId: (producerId) => set(store => ({animeQuery: {...store.animeQuery, producerId}})),
    setSortQuery: (sortQuery) => set(store => ({animeQuery: {...store.animeQuery, sortQuery}})),
    setSearchText: (searchText) => set(() => ({animeQuery: {searchText}})),
}));

export default useAnimeQueryStore; 