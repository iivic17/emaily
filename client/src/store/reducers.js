import { combineReducers } from 'redux';
import user from './user';
import newForm from './newForm';
import surveys from './surveys';

const reducer = combineReducers({
	user,
	newForm,
	surveys,
});

export default reducer;
