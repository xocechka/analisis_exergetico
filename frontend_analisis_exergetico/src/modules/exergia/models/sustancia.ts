import { BaseModel } from 'src/utils/types';

export interface SustanciaBase extends BaseModel {
  nombre: string;
  exergia: number;
}

export type SustanciaCreateBase = SustanciaBase;
export type SustanciaUpdateBase = SustanciaBase;

export interface Sustancia extends SustanciaBase {
  id: number;
}
