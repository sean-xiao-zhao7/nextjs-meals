// components
import Menu from "@/components/header/menu";

// styles
import "./globals.css";
import "./styles/layouts/main-layout.css";
import "./styles/images/images.css";
import "./styles/headings/headings.css";
import "./styles/footer/footer.css";

export const metadata = {
    title: "SeanNodis' Food Joints",
    description: "Joints worth licking.",
};

export default function RootLayout({ children }: { children: any }) {
    const year = new Date().getFullYear();

    return (
        <html lang="en">
            <body>
                <div id="content-container">
                    <div className="header-background">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 900 320"
                        >
                            <defs>
                                <linearGradient
                                    id="gradient"
                                    x1="0%"
                                    y1="0%"
                                    x2="50%"
                                    y2="0%"
                                >
                                    <stop
                                        offset="0%"
                                        style={{
                                            stopColor: "#208c27",
                                            stopOpacity: "1",
                                        }}
                                    />
                                    <stop
                                        offset="100%"
                                        style={{
                                            stopColor: "#f7ad0d",
                                            stopOpacity: "1",
                                        }}
                                    />
                                </linearGradient>
                            </defs>
                            <path
                                fill="url(#gradient)"
                                d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,186.7C672,192,768,192,864,181.3C960,171,1056,149,1152,133.3C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                            ></path>
                        </svg>
                    </div>

                    <Menu fixed={true} />

                    {children}
                </div>
                <footer>
                    <h1>SeanNodis Food Joints</h1>
                    <p>Find your fill. All reviews of GTA restaurants.</p>
                    <p>Follow for more.</p>
                    <Menu />
                    <div id="disclaimer">
                        <p>Contact</p>
                        <p>Advertise</p>
                        <p>Story</p>
                        <p>Partners</p>
                        <p>Policy</p>
                        <p>&copy; SeanNodis {year}</p>
                    </div>
                </footer>
            </body>
        </html>
    );
}
