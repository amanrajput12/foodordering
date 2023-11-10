import  {configureStore} from '@reduxjs/toolkit'
import Cartslice from './Cartslice'
const Store = configureStore({
reducer:{
    cart:Cartslice,
}
})
export default Store    





/* 
* create store
 - configureStore() RTK

 provide my store to app
  - <proivder store={store}>   import from  react-redux
  </proivder>

  slice
    - createSlice({
      name:"",
      initialstate:   ,
      reducers:{
        addItems: (state,action)=> { state=action.payload}
      }
    })

    export const {}= cartSlice.actions
    export default cartslice.reducer

put the slice to the store    
   - {
    reducer: {
        cart:cartSlice,
        user:userSlice
    }
   }
*/