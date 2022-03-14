
import {db} from '../Config/Firebase'
import { collection, addDoc } from "firebase/firestore"; 


 async function AddNgos  (orgName, orgEmail,orgTell, orgPhone, orgAddress, orgCity, orgZip, Latitude, longitude, orgDescription, orgAbout) {
    try {
        const docRef = await addDoc(collection(db, "ngos"), {
          orgName:orgName,
          orgEmail:orgEmail,
          orgPhone:orgPhone,
          orgTell:orgTell,
          orgAddress:orgAddress,
          orgDescription:orgDescription,
          orgAbout:orgAbout,
          orgCity:orgCity,
          orgZip:orgZip,
          Latitude:Latitude,
          longitude:longitude,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error( e);
      }
 };
 async function Campaign  (campName, campEmail,campDescription,  campPhone, campType){
  try {
      const docRef = await addDoc(collection(db, "Campaign"), {
        campName:campName,
        campEmail:campEmail,
        campDescription:campDescription,
        campPhone:campPhone,
        campType:campType,
        
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error( e);
    }
}
 export {AddNgos, Campaign}
   



     