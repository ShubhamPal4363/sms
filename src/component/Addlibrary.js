import { React, useRef } from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { app } from '../Firebase/Firebase';

export default function Addlibrary() {

  const firestore = getFirestore(app);
  var x1 = useRef();

  const addLibrary = async (e) => {

    e.preventDefault();
    x1 = x1.current.value;

    try {
      const addData = await addDoc(collection(firestore, "users"), {
        Title: x1,
      })
  
      // console.log("Reslt", addData);

      x1.current.value = '';
    }
    catch(err) {
      console.log(err.message);
    }
  }

  return (
    <div className='container'>
        <div className='row d-flex justify-content-center'>
          <h1 className="text-center my-4">Add Library</h1>
          <div className='col-md-4'>
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Enter Library Name</label>
                <input ref={x1} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='E.g. Birthday' />
              </div>
              <div className='d-grid gap-2'>
                <button onClick={addLibrary} class="btn btn-navy-blue">Submit</button>
              </div>              
            </form>
          </div>          
        </div>
    </div>
  )
}
