import React from 'react';
import { useSelector } from 'react-redux';
import { getFirestore } from 'firebase/firestore';
import { app } from '../Firebase/Firebase';
import { useState, useEffect } from 'react';
import { getDocs, query, collection, where } from 'firebase/firestore';

function Showmessage() {

    let id = useSelector(state => state.idMessage.value);
    // console.log(id);

    const [contactData, setContactData] = useState([]);
    
      const firestore = getFirestore(app);
      useEffect(() => {
    
        const contactData = async () => {
          try {
            const contactQuery = query(
              collection(firestore, "message"),
              where("groupId", "==", id)
            );
    
            const snapshot = await getDocs(contactQuery);
            const contactList = snapshot.docs.map(doc => doc.data());
            // console.log(contactList);
            setContactData(contactList);
          }
          catch(err) {
            console.log(err.message);
          }
        }
    
        contactData();
    
      }, [id])

  return (
    <div class="col-md-3 mt-5">
        <h1>Message</h1>
        <ul class="list-group">
          {
            contactData.map((item) => {
              return (
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">{item.message}</div>
                  </div>
                </li>
              )
            })
          }
        </ul>
    </div>
  )
}

export default Showmessage
