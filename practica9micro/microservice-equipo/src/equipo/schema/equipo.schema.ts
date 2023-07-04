import * as mongoose from 'mongoose';

export const EquipoSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    serie: { type: String, required: true },
  },
  { timestamps: true },
);

EquipoSchema.index({ descripcion: 1 }, { unique: true });
EquipoSchema.index({ nombre: 1 }, { unique: true });
