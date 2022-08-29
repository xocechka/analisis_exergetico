import { BaseModel } from 'src/utils/types';
import { Flujo } from './flujo';

export interface ProyectoBase extends BaseModel {
  nombre: string;
  descripcion?: string;
}

export type ProyectoCreateBase = ProyectoBase;
export type ProyectoUpdateBase = ProyectoBase;

export interface Proyecto extends ProyectoBase {
  id: number;
  idFlujoEntrada: number;
  idFlujoSalida: number;
  flujoEntrada: Flujo;
  flujoSalida: Flujo;
}
