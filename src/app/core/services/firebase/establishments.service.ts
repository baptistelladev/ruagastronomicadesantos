import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IShortEstablishment } from 'src/app/shared/models/Establishment';

@Injectable({
  providedIn: 'root'
})
export class EstablishmentsService {

  constructor(
    private firestore : Firestore
  ) { }

  public getCollection(collectionName: string): Observable<IShortEstablishment[]> {
    const itemCollection = collection(this.firestore, collectionName);
    return collectionData<any>(itemCollection)
  }
}
