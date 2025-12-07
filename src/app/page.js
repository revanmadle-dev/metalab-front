import Link from "next/link";
import HomeBanner from "./sections/HomeBanner";
import HomeContact from "./sections/HomeContact";
import HomeFAQpage from "./sections/HomeFAQpage";
import HomeFeatures from "./sections/HomeFeatures";
import OurExpertise from "./sections/OurExpertise";
// import { Metadata } from "next"; // JS faylda lazım deyil

async function getProjects() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/projects?populate=*`,
    { cache: "no-store" }
  );
  const json = await res.json();
  return json.data || [];
}

export const metadata = {
  title: "MetaLab - Ana Səhifə",
  description: "MetaLab - Rəqəmsal marketinq xidmətləri ",

  openGraph: {
    title: "MetaLab - Ana Səhifə",
    description: "MetaLab - Rəqəmsal marketinq xidmətləri",
    url: "https://metalab.netlify.app",
    images: [
      {
        url: "https://metalab.netlify.app/assets/img/og.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MetaLab - Ana Səhifə",
    description: "MetaLab - Rəqəmsal marketinq xidmətləri",
    images: ["https://metalab.netlify.app/assets/img/og.png"],
  },
};

export default async function Home() {
  const projects = await getProjects();
  console.log("PROJECTS:", projects);

  return (
    <>
      <HomeBanner />
      <HomeFeatures />
      <OurExpertise />
      <HomeFAQpage />
      <HomeContact />

      <section style={{ padding: "60px 0" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: 32,
            marginBottom: 40,
          }}
        >
          Proyektlərimiz
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
            width: "90%",
            margin: "0 auto",
          }}
        >
          {projects.map((item) => {
            if (!item) return null;

            const id = item.id;
            const attributes = item.attributes || {};

            const imageData = attributes.image?.data;
            const imageUrl = imageData?.attributes?.url
              ? `${process.env.NEXT_PUBLIC_API_URL}${imageData.attributes.url}`
              : null;

            if (!attributes.title) return null;

            const slug = attributes.slug;
            if (!slug) return null;

            return (
              <Link
                key={id}
                href={`/work/${slug}`}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    background: "#111",
                    borderRadius: 12,
                    padding: 20,
                    textAlign: "center",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                >
                  {imageUrl && (
                    <img
                      src={imageUrl}
                      style={{
                        width: "100%",
                        height: 180,
                        objectFit: "cover",
                        borderRadius: 8,
                        marginBottom: 15,
                      }}
                    />
                  )}

                  <h3 style={{ fontSize: 20, marginBottom: 10 }}>
                    {attributes.title}
                  </h3>

                  <p style={{ opacity: 0.8 }}>{attributes.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
