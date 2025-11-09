import CardList from "../components/CardList";
import { apiFetch } from "@/libs/api";

const Home = async () => {
    const topAnime = await apiFetch("top/anime?limit=4");
    const topManga = await apiFetch("top/manga?limit=4");

    return (
        <main className="px-2">
            <section>
                <CardList
                    api={topAnime}
                    title="Top Anime"
                    option="Lihat Semua"
                    linkHref="/top/anime"
                />
            </section>
            <section>
                <CardList
                    api={topManga}
                    title="Top Manga"
                    option="Lihat Semua"
                    linkHref="/top/manga"
                />
            </section>

            <br></br>
        </main>
    );
};

export default Home;
