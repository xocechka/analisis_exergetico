import { BaseModel } from 'src/utils/types';
import { Sustancia } from './sustancia';

export interface SustanciaEnFlujoBase extends BaseModel {
  idFlujo: number;
  idSustancia?: number;
}

export type SustanciaEnFlujoCreateBase = SustanciaEnFlujoBase;
export type SustanciaEnFlujoUpdateBase = SustanciaEnFlujoBase;

export interface SustanciaEnFlujo extends SustanciaEnFlujoBase {
  id: number;
  sustancia?: Sustancia;
}
