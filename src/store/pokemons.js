import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL, SEARCH_POKEMON_DATA } from '../config/environment.json';

const initialState = {
      pokemonSearch: {notFound: false},
      loading: false,
      error: false,
};

const pokemons = createSlice({
      name: 'pokemons',
      initialState,
      reducers: {
            getPokemon: (state, action) => {
                  return { ...state, pokemonSearch: {...action.payload, notFound: false}, loading: false, error: false }
            },
            startLoading: (state, action) => {
                  return { ...state, loading: true }
            },
            setError: (state, action) => {
                  return { ...state, loading: false, error: true, pokemonSearch: {}}
            },
            notFound: (state, action) => {
                  return { ...state, loading: false, error: false, pokemonSearch: {notFound: true}}
            },
      }
});

export const { getPokemon, startLoading, setError,notFound } = pokemons.actions;
export default pokemons.reducer;

export function asyncGetPokemon(valueInputSearch) {
      return async (dispatch) => {
            dispatch(startLoading());
            axios.get(`${API_URL}${SEARCH_POKEMON_DATA}${valueInputSearch}`)
            .then(res => {
                  console.log(res);
                  dispatch(getPokemon(res.data));
            })
            .catch(error => {
                  if(error.response.status === 404){
                        dispatch(notFound());
                        return;
                  }
                  dispatch(setError(true));
            });
      }
}