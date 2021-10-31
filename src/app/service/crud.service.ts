import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private fireStore:AngularFirestore) { }

  create_NewStudent(record){
    return this.fireStore.collection('usuarios').add(record);
  }

  read_students() {
    return this.fireStore.collection('usuarios').snapshotChanges();
  }

  update_student(recordID, record) {
    this.fireStore.doc('usuarios' + '/' + recordID).update(record);
  }

  delete_student(record_id) {
    this.fireStore.doc('usuarios' + '/' + record_id).delete();
  }
}
