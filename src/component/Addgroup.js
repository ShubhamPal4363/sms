import React, { useRef } from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { app } from '../Firebase/Firebase';

export default function Addgroup() {

  const firestore = getFirestore(app);
  var x1 = useRef();

  const addGroup = async (e) => {
    e.preventDefault();
    x1 = x1.current.value;

    const addData = await addDoc(collection(firestore, "group"), {
      Title: x1,
    })

    // console.log("Result", addData);
  }

  return (
    <div className='container'>
        <div className='row d-flex justify-content-center'>
          <h1 className="text-center my-4">Add Group</h1>
          <div className='col-md-4'>
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Enter Group Name</label>
                <input ref={x1} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='E.g. Friends' />
              </div>
              <div className='d-grid gap-2'>
                <button onClick={addGroup} class="btn btn-navy-blue">Submit</button>
              </div>              
            </form>
          </div>          
        </div>
    </div>
  )
}
