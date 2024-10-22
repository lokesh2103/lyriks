import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        // import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY
        'b971624261msh2cf86b267582ddfp1936d9jsn8523761f060c'
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => `/v1/charts/world?country_code=US`,
    }),
    getSongsByGenre: builder.query({
      query: (genre) =>
        `v1/charts/genre-world?genre_code=${genre}&country_code=US`,
    }),
    getSongsByCountry: builder.query({
      query: () => `v1/charts/country?country_code=US`,
    }),
    getSongsBySearch: builder.query({
      query: (searchTerm) =>
        `v1/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`,
    }),
    getArtistDetails: builder.query({
      query: (artistId) => `v2/artists/details?artist_id=${artistId}`,
    }),
    getSongDetails: builder.query({
      query: ({ songid }) => `v1/tracks/details?track_id=${songid}`,
    }),
    getSongRelated: builder.query({
      query: ({ songid }) => `v1/tracks/related?track_id=${songid}`,
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongsByGenreQuery,
  useGetSongsByCountryQuery,
  useGetSongsBySearchQuery,
  useGetArtistDetailsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} = shazamCoreApi;