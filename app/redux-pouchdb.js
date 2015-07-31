import PouchDB from 'pouchdb';

export const DB_CHANGES = 'DB_CHANGES';

var db = new PouchDB('app');
const docId = 'redux-store';
const emptyDoc = {_id: docId};

export const getState = () => {
  return db.get(docId).catch(error => {
    return db.put(emptyDoc).then(() => emptyDoc);
  });
}

export const persistState = () => createStore => (reducer, initialState) => {
  const store = createStore(reducer, initialState);

  db.changes({include_docs: true}).on('change', function(change) {
    store.dispatch({ type: DB_CHANGES, ...change.doc});
  });

  return {
    ...store,
    dispatch(action) {
      store.dispatch(action);
      const state = store.getState();

    	db.get(docId).then(doc => {
    	  db.put({
    	    ...doc,
    	    ...state
    	  }).catch(error => {
    	    console.error(error);
        });
    	});

      return action;
    }
  }
};

// //on every reducer. @persist() maybe
// export const pouchReducer = (state, action) => {
//   switch (action.type) {
//   case DB_CHANGES:
//     return action.asd;
//   default:
//     return state;
//   }
// };
