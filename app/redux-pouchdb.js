import PouchDB from 'pouchdb';

var db = new PouchDB('app');
const docId = 'redux-store';
const emptyDoc = {_id: docId};

export const getState = () => {
  return db.get(docId).catch(error => {
    return db.put(emptyDoc).then(() => emptyDoc);
  });
}

export const pouchMiddleware = ({ dispatch, getState }) => {
  return next => action => {
  	const ret = next(action);

  	db.get(docId).then(doc => {
  	  db.put({
  	    ...doc,
  	    ...getState()
  	  }).catch(error => {
  	    console.error(error);
      });
  	});
  	
  	return ret;
  }
};




// // db.replicate.to('http://example.com/mydb');

//   db.changes({include_docs: true}).on('change', function(change) {
//     console.log('Ch-Ch-Changes', change);
//     //dispatch({ type: DB_CHANGES, ...change});
//   });

// export const DB_CHANGES = 'DB_CHANGES';

// export const DbChanges = asd => {
//   return {
// 	type: DB_CHANGES,
// 	asd: asd
//   };
// };

// //on every reducer. @persist() maybe
// export const pouchReducer = (state, action) => {
//   switch (action.type) {
//   case DB_CHANGES:
//     return action.asd;
//   default:
//     return state;
//   }
// };