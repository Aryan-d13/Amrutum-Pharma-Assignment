// app/services/routineService.ts
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';
import { Routine } from '../redux/slices/routinesSlice';

export async function addRoutineToFirestore(routine: Routine) {
  const docRef = await addDoc(collection(db, 'routines'), routine);
  return docRef.id;
}

export async function fetchRoutinesFromFirestore() {
    const querySnapshot = await getDocs(collection(db, 'routines'));
    const routines: any[] = [];
    querySnapshot.forEach((doc) => {
      routines.push({ ...doc.data(), firestoreId: doc.id });
    });
    return routines;
  }