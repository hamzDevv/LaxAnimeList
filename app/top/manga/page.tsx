import CardList from "@/components/CardList";
import { apiFetch } from "@/libs/api";

const TopManga = async () => {
    const topManga = await apiFetch("top/manga");
    return <CardList api={topManga} />;
};

export default TopManga;
