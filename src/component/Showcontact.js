import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { collection, getFirestore, getDocs, query, where } from 'firebase/firestore';
import { app } from '../Firebase/Firebase';

function Showcontact() {

  let id = useSelector(state => state.idValue.value);
  // console.log(id);

  const [contactData, setContactData] = useState([]);

  const firestore = getFirestore(app);
  useEffect(() => {

    const contactData = async () => {
      try {
        const contactQuery = query(
          collection(firestore, "contact"),
          where("groupId", "==", id)
        );

        const snapshot = await getDocs(contactQuery);
        const contactList = snapshot.docs.map(doc => doc.data());
        setContactData(contactList);
      }
      catch(err) {
        console.log(err.message);
      }
    }

    contactData();

  }, [id])

  return (
    <div class="col-md-3 offset-md-4 mt-5">
        <h1>Contacts</h1>
        {contactData.map((contact, index) => {
          return (
            <ul className='list-group' key={index}>
              <li className="list-group-item">Name: {contact.name}</li>
              <li className="list-group-item">Mobile: {contact.mobile}</li>
              <li className="list-group-item">Group ID: {contact.groupId}</li>
            </ul>
          );
        })}
    </div>
  )
}

export default Showcontact

