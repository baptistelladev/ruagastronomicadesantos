import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { doc, getDoc, getDocs, query, where } from 'firebase/firestore';
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

  public async getCollectionFilteredBy(collectionName: string, field: string): Promise<IShortEstablishment[]> {
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

  public async getDocumentByValue(collectionName: string, fieldName: string, value: string): Promise<IShortEstablishment | null> {
    try {
        const q = query(collection(this.firestore, collectionName), where(fieldName, '==', value));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            const docSnap = querySnapshot.docs[0]; // Pega o primeiro documento encontrado
            const data = docSnap.data() as IShortEstablishment; // Cast para IShortEstablishment
            return { id: docSnap.id, ...data }; // Retorna o documento com o ID
        } else {
            console.log("Documento não encontrado!");
            return null;
        }
    } catch (error) {
        console.error("Erro ao obter o documento:", error);
        return null; // Retorna null em caso de erro
    }
  }
}
