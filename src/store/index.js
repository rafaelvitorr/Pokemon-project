import { configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';

import global from './global';
import pokemons from './pokemons';
import pokedex from './pokedex';
const store = configureStore({
   reducer:{
      global,
      pokemons,
      pokedex
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;