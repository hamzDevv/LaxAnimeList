import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top w-100">
            <div className="container-fluid justify-content-between">
                <Link href="/" className="navbar-brand fw-bold">
                    LaxAnimeList
                </Link>
                        <input
                            type="text"
                            placeholder="Cari Animekk"
                            className="fw-bold form-control rounded-pill bg-secondary text-white w-25 text-center"
                        />
            </div>
        </nav>
    );
};

export default Navbar;
