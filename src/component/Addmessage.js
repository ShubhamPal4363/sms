import { collection, getDocs, getFirestore, addDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { app } from '../Firebase/Firebase';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Addmessage() {

  const firestore = getFirestore(app);
  const [ datastore, setDatastore ] = useState([]);

  useEffect(() => {
    const fetchLibrary = async () => {
      try {
        const fetchData = await getDocs(collection(firestore, "users"));
        const user = [];

        fetchData.forEach(doc => {
          user.push({
            id: doc.id,
            title: doc.data().Title,
          });
        });

        // console.log(user);

        setDatastore(user);
      }
      catch(err) {
        console.log(err.message)
      }
    };

    fetchLibrary();
  }, [])

  const formik = useFormik({

    initialValues: {
      groupId: '',
      message: '',
    },

    validationSchema: Yup.object({
      groupId: Yup.string()
        .required('Required'),
      message: Yup.string()
        .required('Required'),
    }),

    onSubmit: async (values) => {
      // console.log(JSON.stringify(values));

      try {
        const docRef = await addDoc(collection(firestore, "message"), {
          groupId: values.groupId,
          message: values.message,
        });
        
        // console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },

  });

  return (
    <div className='container'>
        <div className='row d-flex justify-content-center'>
          <h1 className="text-center my-4">Add Message</h1>
          <div className='col-md-4'>
            <form onSubmit={formik.handleSubmit}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Please Select Library</label>
                <select class="form-select" aria-label="Default select example" id='groupId' {...formik.getFieldProps('groupId')}>
                  <option selected>--Select--</option>
                  {
                    datastore.map((item) => (
                      <option value={item.id}>{item.title}</option>
                    ))
                  }
                </select>
              </div>
              <div class="mb-3">
                <label for="message" class="form-label">Enter Message</label>
                <textarea class="form-control" id="message" rows="3" {...formik.getFieldProps('message')}></textarea>
              </div>
              <div className='d-grid gap-2'>
                <button type='submit' class="btn btn-navy-blue">Submit</button>
              </div>              
            </form>
          </div>          
        </div>
    </div>
  )
}
