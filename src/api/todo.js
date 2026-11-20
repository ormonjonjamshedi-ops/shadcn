import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://to-dos-api.softclub.tj' }),
  endpoints: (build) => ({
    getPokemonByName: build.query<Pokemon>({
      query: (name) => `pokemon/${name}`,
    }),
    getTOdos: build.query({
      query:()=>`/api/to-dos`
    })
  }),
})

export const { useGetPokemonByNameQuery } = pokemonApi