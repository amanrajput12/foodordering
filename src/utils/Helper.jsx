 export function filterData(searchText,resturent){
    const searchval=  resturent.filter((data)=> data.info.name.toLowerCase().includes(searchText.toLowerCase()))
    return searchval
     
   }