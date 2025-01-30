import { collection, getDocs, getFirestore } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { app } from '../Firebase/Firebase';
import { useDispatch } from 'react-redux';
import { idData } from '../Redux/Slice/idSlice';

function Showgroup() {

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

    const dispatch = useDispatch();
    function showgroupData(id) {
        // console.log(id);

        dispatch(idData(id));
    }

  return (
    <div class="col-md-3">
        <h1>Groups</h1>
        <ul class="list-group">
        {
            datastore.map((item) => (
                <li key={item.id} onClick={() => showgroupData(item.id)} class="list-group-item">{item.title}</li>
            ))
        }
        </ul>
    </div>
  )
}

export default Showgroup

