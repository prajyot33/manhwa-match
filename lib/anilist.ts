const ANILIST_API = "https://graphql.anilist.co";

const query = `
query ($page: Int, $perPage: Int) {
  Page(page: $page, perPage: $perPage) {
    media(
      format: MANGA
      countryOfOrigin: "KR"
      sort: SCORE_DESC
      isAdult: false
    ) {
      id

      title {
        romaji
        english
      }

      coverImage {
        extraLarge
      }

      averageScore

      genres

      status

      chapters

      description(asHtml: false)
    }
  }
}
`;

export async function getTopManhwa() {
  const response = await fetch(ANILIST_API, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },

    body: JSON.stringify({
      query,
      variables: {
        page: 1,
        perPage: 12,
      },
    }),

    next: {
      revalidate: 3600,
    },
  });

  const data = await response.json();

  return data.data.Page.media;
}