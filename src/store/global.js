import {createSlice} from '@reduxjs/toolkit';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

const initialState = {
      theme: light,
};

const globalStates = createSlice({ 
      name: 'global',          
      initialState,
      reducers: {
            toogleTheme: (state,action)  => {
               return state.theme.title === 'light'?{...state,theme: dark}:{...state,theme: light};
            },
      }
});

export const { toogleTheme } = globalStates.actions;
export default globalStates.reducer;
