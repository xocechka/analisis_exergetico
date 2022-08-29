import { BaseModel } from 'src/utils/types';
import { SustanciaEnFlujo } from './sustancia-en-flujo';

export type FlujoBase = BaseModel;

export type FlujoCreateBase = FlujoBase;
export type FlujoUpdateBase = FlujoBase;

export interface Flujo extends FlujoBase {
  id: number;
  sustancias: SustanciaEnFlujo[];
}

export type TipoFlujo = 'Entrada' | 'Salida';
