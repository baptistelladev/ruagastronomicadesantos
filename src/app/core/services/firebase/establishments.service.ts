import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { getDocs, query, where } from 'firebase/firestore';
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
    return collectionData<any>(itemCollection);
  }

  async getCollectionFilteredBy(collectionName: string, field: string): Promise<IShortEstablishment[]> {
    const itemCollection = collection(this.firestore, collectionName);
    const q = query(itemCollection, where(field, '==', true));

    const querySnapshot = await getDocs(q);

    // Aqui, você pode garantir que os dados estão no formato de IShortEstablishment
    const items: IShortEstablishment[] = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data() as IShortEstablishment // Asegure-se de que os dados correspondam à interface
    }));

    return items;
  }
}
