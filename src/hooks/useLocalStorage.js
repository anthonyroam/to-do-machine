import React from "react";

function useLocalStorage (itemName, initialValue) {
  const [ state, dispatch ] = React.useReducer( reducer, initialState({ initialValue }) )

  const { 
    error,
    loading,
    item,
    sicronizedItem,
  } = state;

  const [filterTodos, setFilterTodos] = React.useState([]);
  
  //ACTION CREATORS
  const onError = (error) => {
    return dispatch({ type: actionTypes.error, payload: error })
  } 

  const onSuccess = (parsedItem) => {
    setFilterTodos(parsedItem);
    return dispatch({ type: actionTypes.success, payload: parsedItem})
  }

  const onSincronize = () => dispatch({ type: actionTypes.sincronize})

  const onSave = (newItem) => {
    return dispatch({ type: actionTypes.save, payload: newItem })
  }

  React.useEffect(() => {
    try {
      setTimeout(() => {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
    
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        }  else {
          parsedItem = JSON.parse(localStorageItem);
        }

        onSuccess(parsedItem);
      }, 3000)
    } catch (error) { 
      onError(error);
    }
  }, [!sicronizedItem]);

    const saveItem = (newItem) => {
      try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        return onSave(newItem);
      } catch (error) {
        onError(error);
      }
    };

    const sincronize = () => {
      onSincronize();
    }
  
    return {
      item, 
      saveItem,
      loading,
      error,
      sincronize,
      setFilterTodos,
      filterTodos,
    };
};

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true,
  },
  [actionTypes.success]: {
    ...state,
    item: payload,
    loading: false,
    sicronizedItem:true,
    error: false,
  },
  [actionTypes.save]: {
    ...state,
    item: payload,
  },
  [actionTypes.sincronize]: {
    ...state,
    loading: true,
    sincronizedItem: false,
  },
})

const actionTypes = {
  error: "ERROR",
  success: "SUCCESS",
  save: "SAVE",
  sincronize: "SINCRONIZE",
}

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
};

const initialState = ({ initialValue })=> ({
  error: false,
  loading: true,
  item: initialValue,
  sicronizedItem: true,
})

export { useLocalStorage };    