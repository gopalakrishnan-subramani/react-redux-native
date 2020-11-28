npm install redux redux-thunk react-redux

install react native extention

Share device or Ctrl/CMD + M 

add react native debugger
start the debugger


# Add favorites

Product List 
        PRoduct Item    
                Add to Fav Item

action-types.js
    ADD_FAVORITE
    REMOVE_FAVORITE
/state/fav.actions.js
    addFavorite( item )...
    removeFavorite(id)

/reducers/favReducer.js
    INITIAL_STATE = []
    ADD_FAVORITE
    REMOVE_FAVORITE

//store.js
    add favReducer to combine reducer

// Fav List - which display fav items
        remove - dispatch action to remove
// FavList Container
        bring favorites from stoer to component
        dispatch
