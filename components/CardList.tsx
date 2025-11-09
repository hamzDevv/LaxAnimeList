"use client";
import Image from "next/image";
import Link from "next/link";

interface DataAnime {
  mal_id: number;
  images: {
    webp: {
      image_url: string;
    }
  }
  title: string;
}

interface CardListProps {
    api: {
      data: DataAnime[]
    };
    title?: string;
    option?: string;
    linkHref?: string;
}

const CardList = ({ api, title, option, linkHref }: CardListProps) => {
    return (
        <main className="container-fluid">
            {title && option && linkHref && (
                <div className="d-flex justify-content-between mt-4 mb-1">
                    <h4>{title}</h4>
                    <Link href={linkHref}>
                        <p className="underline">{option}</p>
                    </Link>
                </div>
            )}
            <div className="row">
                {api?.data?.map(data => (
                    <div
                        key={data.mal_id}
                        className="card col-6 col-md-3 col-lg-3 col-xl-3 col xxl-3 bg-black mb-3 boder border-dark p-2 hover"
                    >
                        <Link href={`${data.mal_id}`}>
                            <div>
                                <Image
                                    src={data.images.webp.image_url}
                                    alt={data.title}
                                    width={200}
                                    height={250}
                                    style={{ objectFit: "cover" }}
                                    className="card-img-top"
                                />
                            </div>
                        </Link>
                        <div className="card-body text-white">
                            <h5 className="card-title">{data.title}</h5>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default CardList;
