import useData from "./useData";

interface Producer {
  mal_id: number;
  titles: [
    {
      type: string;
      title: string;
    }
  ];
}

const useProducers = () => useData<Producer>("/producers", {params: {limit: 20}});

export default useProducers;