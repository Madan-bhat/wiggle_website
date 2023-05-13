import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/dist/query';
import { moviesService } from '../api/api';
import { reducer } from '../reducers';

export const store = configureStore({
  reducer: reducer,
  middleware: gDM =>
    gDM().concat(
      moviesService.middleware,
    ),
});

setupListeners(store.dispatch);
