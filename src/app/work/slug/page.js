async function getProject(slug) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/projects?filters[slug][$eq]=${slug}&populate=*`,
    { cache: "no-store" }
  );

  const json = await res.json();
  const item = json.data?.[0];

  return item || null;
}

export default async function ProjectPage({ params }) {
  const { slug } = params;
  const project = await getProject(slug);

  if (!project) {
    return (
      <main style={{ padding: 40, color: "#fff" }}>
        <h1>Proyekt tapılmadı</h1>
      </main>
    );
  }

  const { attributes } = project;
  const imageData = attributes.image?.data;
  const imageUrl = imageData?.attributes?.url
    ? `${process.env.NEXT_PUBLIC_API_URL}${imageData.attributes.url}`
    : null;

  return (
    <main style={{ padding: 40, color: "#fff" }}>
      <h1 style={{ fontSize: 36, marginBottom: 20 }}>
        {attributes.title}
      </h1>

      {imageUrl && (
        <img
          src={imageUrl}
          style={{
            width: "100%",
            maxWidth: 900,
            height: "auto",
            borderRadius: 12,
            marginBottom: 20,
          }}
        />
      )}

      <p style={{ fontSize: 18, opacity: 0.9 }}>
        {attributes.description}
      </p>
    </main>
  );
}
