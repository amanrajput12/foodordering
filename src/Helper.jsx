 export function filterData(searchText,resturent){
    const searchval=  resturent.filter((data)=> data.name.toLowerCase().includes(searchText.toLowerCase()))
    return searchval
     
   }