import {createSlice} from '@reduxjs/toolkit';

const initialState = {
      pokedexList: [],
};

const pokedexStates = createSlice({ 
      name: 'pokedex',          
      initialState,
      reducers: {
         setPokedexList: (state,action)  => {
            return {...state, pokedexList:[...state.pokedexList,action.payload]}
         },
         removePokemonList: (state,action)  => {
            const newList = state.pokedexList.filter(pokemon => pokemon.id !== action.payload.id);
            return {...state, pokedexList:newList}
         }
      }
});

export const { setPokedexList, removePokemonList} = pokedexStates.actions;
export default pokedexStates.reducer;
