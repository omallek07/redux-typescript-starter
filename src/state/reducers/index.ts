import { combineReducers } from 'redux';
import RepositoriesReducer from './repositoriesReducer';

const reducers = combineReducers({
    repositories: RepositoriesReducer
});

export default reducers;

// Built in typescript helper that returns type
export type RootState = ReturnType<typeof reducers>;