import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const GET_NUMBERS = gql`
  query getNumbers($count: Int!, $min: Int, $max: Int) {
    numbers(count: $count, min: $min, max: $max)
  }
`;

@Injectable({
  providedIn: 'root',
})
export class NumbersService {
  constructor(private apollo: Apollo) {}

  getNumbers(count: number, min?: number, max?: number): Observable<number[]> {
    const numbers = this.apollo
      .watchQuery({
        query: GET_NUMBERS,
        variables: { count, min, max },
        fetchPolicy: 'no-cache',
      })
      .valueChanges.pipe(
        map((result: any) => {
          return result?.data?.numbers ?? [];
        })
      );

    return numbers;
  }
}
