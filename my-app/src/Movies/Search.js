// import React, { useState } from 'react';

// const Search = (props) => {
//     const [searchValue, setSearchValue] = useState('');
    

//     const handleSearchInputChanges = (e) => {
//         setSearchValue(e.target.value);
//     }

//     const resetInputField = () => {
//         setSearchValue('');
//           //console.log(props);
//     }

//     const callSearchFuntion = (e) => {
//         e.preventDefault();
//         props.search(searchValue);
      
//         resetInputField();
//     }

//     return (
//         <form className="search">
//             <input style={{style:'1rem'}} type="text" value={searchValue} onChange={handleSearchInputChanges}></input>

//             <input type="submit" value="SEARCH" onClick={callSearchFuntion}></input>
//         </form>
//     );

   
// }
// export default Search;