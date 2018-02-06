import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Person } from './classes/person';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PersonService {

  private personsUrl = 'app/persons';
  private persons: Person[];

  constructor(
    private http: HttpClient
  ) { }

  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.personsUrl)
      .pipe(
      tap(persons => console.log(`fetched persons`)),
      catchError(this.handleError('getPersons', []))
      );
  }

  getPerson(id: number): Observable<Person> {
    const url = `${this.personsUrl}/${id}`;
    return this.http.get<Person>(url).pipe(
      tap(_ => console.log(`fetched person id=${id}`)),
      catchError(this.handleError<Person>(`getPerson id=${id}`))
    );
  }

  searchPersonsByCpf(term: string): Observable<Person[]> {
    if (!term.trim()) {
      // if not search term, return empty person array.
      return of([]);
    }
    return this.http.get<Person[]>(`api/person/?cpf=${term}`).pipe(
      tap(_ => console.log(`found persons matching "${term}"`)),
      catchError(this.handleError<Person[]>('searchpersones', []))
    );
  }

  searchPersonsByCnpj(term: string): Observable<Person[]> {
    if (!term.trim()) {
      // if not search term, return empty person array.
      return of([]);
    }
    return this.http.get<Person[]>(`api/person/?cpf=${term}`).pipe(
      tap(_ => console.log(`found persons matching "${term}"`)),
      catchError(this.handleError<Person[]>('searchpersones', []))
    );
  }

  addPerson(person: Person): Observable<Person> {
    return this.http.post<Person>(this.personsUrl, person, httpOptions).pipe(
      catchError(this.handleError<Person>('addperson'))
    );
  }

  deletePerson(person: Person | number): Observable<Person> {
    const id = typeof person === 'number' ? person : person.id;
    const url = `${this.personsUrl}/${id}`;
    return this.http.delete<Person>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted person id=${id}`)),
      catchError(this.handleError<Person>('deleteperson'))
    );
  }

  updatePerson(person: Person): Observable<any> {
    return this.http.put(this.personsUrl, person, httpOptions).pipe(
      tap(_ => console.log(`updated person id=${person.id}`)),
      catchError(this.handleError<any>('updateperson'))
    );
  }



  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
