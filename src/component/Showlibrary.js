import { React, useEffect, useState } from 'react';
import { app } from '../Firebase/Firebase';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { idData } from '../Redux/Slice/idSlice';
import { idMessageData } from '../Redux/Slice/messageSlice';

function Showlibrary() {

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

                // console.log(user.id);
    
                setDatastore(user);
            }
            catch(err) {
                console.log(err.message)
            }
        };

        fetchLibrary();
    }, [])

    const dispatch = useDispatch();
    function libraryId(id) {
        // console.log(id);

        dispatch(idMessageData(id));
    }

  return (
    <div class="col-md-3">
        <h1>Library</h1>
        <ul class="list-group">
            {
                datastore.map((item) => (
                    <li onClick={() => libraryId(item.id)} key={item.id} class="list-group-item">{item.title}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default Showlibrary
