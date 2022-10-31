import { combineReducers } from 'redux';
import user from './user';
import newForm from './newForm';

const reducer = combineReducers({
	user,
	newForm,
});

export default reducer;
