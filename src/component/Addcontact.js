import { collection, getDocs, getFirestore, addDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { app } from '../Firebase/Firebase';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Addcontact() {

  const firestore = getFirestore(app);
  const [ datastore, setDatastore ] = useState([]);

    useEffect(() => {
      const fetchLibrary = async () => {
        try {
          const fetchData = await getDocs(collection(firestore, "group"));
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
        name: '',
        mobile: '',
        email: '',
      },
 
      validationSchema: Yup.object({
        groupId: Yup.string()
          .required('Required'),
        name: Yup.string()
          .required('Required'),
        mobile: Yup.string()
          .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
      }),
 
      onSubmit: async (values) => {
        console.log(JSON.stringify(values));
  
        try {
          const docRef = await addDoc(collection(firestore, "contact"), {
            groupId: values.groupId,
            name: values.name,
            mobile: values.mobile,
            email: values.email,
          });
          
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      },
 
    });

  return (
    <div className='container'>
        <div className='row d-flex justify-content-center'>
          <h1 className="text-center my-4">Add Contact</h1>
          <div className='col-md-4'>
            <form onSubmit={formik.handleSubmit}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Please Select Group</label>
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
                <label for="name" class="form-label">Enter Name</label>
                <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder='' {...formik.getFieldProps('name')} />
                {formik.touched.name && formik.errors.name ? (
                  <div>{formik.errors.name}</div>) : null
                }
              </div>
              <div class="mb-3">
                <label for="mobile" class="form-label">Enter Mobile</label>
                <input type="mobile" class="form-control" id="mobile" aria-describedby="emailHelp" placeholder='' {...formik.getFieldProps('mobile')} />
                {formik.touched.mobile && formik.errors.mobile ? (
                  <div>{formik.errors.mobile}</div>) : null
                }
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Enter Email Id</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder='' {...formik.getFieldProps('email')} />
                {formik.touched.email && formik.errors.email ? (
                  <div>{formik.errors.email}</div>) : null
                }
              </div>
              <div className='d-grid gap-2'>
                <button type="submit" class="btn btn-navy-blue">Submit</button>
              </div>              
            </form>
          </div>          
        </div>
    </div>
  )
}
