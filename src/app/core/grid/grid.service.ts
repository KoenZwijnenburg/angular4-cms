import { Injectable } from '@angular/core';

export interface Column {
  key: string;
  label: string;
  type?: string;
  options?: Array<any>;
}

export interface Option {
  type: string;
  action: string;
  id: string;
}

@Injectable()
export class GridService {

  constructor() { }

}
