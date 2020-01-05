// import React from 'react'

// const Search = () => {
//     const handleChange = (e) => {
//         console.log(e.target.value);
//     }
//     return (
//         <div>
//             <form>
//                 <input onChange={handleChange}/>
//                 <button>Submit</button>
//             </form>
//         </div>
//     )
// }

// export default Search

import React from 'react';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';


const Example = (props) => {
  return (
    <Form style={{width: "50%", margin: "4% auto"}}>
      <FormGroup>
        {/* <Label for="exampleSearch">Search</Label> */}
        <Input
          type="search"
          name="search"
          id="exampleSearch"
          placeholder="search for an establishment"
        />
      </FormGroup>
    </Form>
  );
}

export default Example;
