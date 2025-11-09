import CardList from "@/components/CardList";
import { apiFetch } from "@/libs/api";

const TopAnime = async () => {
    const topAnime = await apiFetch("top/anime");
    return <CardList api={topAnime} />;
};

export default TopAnime;
