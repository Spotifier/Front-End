import { combineReducers } from 'redux';

import { dashboardReducer } from './reducers/dashaboardReducer';
import { savedReducer } from './reducers/savedReudcer';
import { searchReducer } from './reducers/searchReducer';

export const rootReducer = combineReducers({search: searchReducer, saved: savedReducer, dashboard: dashboardReducer})