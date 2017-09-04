import { Injectable } from '@angular/core';

export interface Column {
  key: string;
  label: string;
  type?: string;
  options?: Array<any>;
}

@Injectable()
export class GridService {

  constructor() { }

}
