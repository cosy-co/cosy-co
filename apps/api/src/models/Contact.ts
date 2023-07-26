import {
  HydratedDocument,
  Schema,
  SchemaTimestampsConfig,
  model,
} from 'mongoose';

import { Contact } from '@/typings/core';

export interface ContactSchema extends Contact, SchemaTimestampsConfig {}

export type ContactDocument = HydratedDocument<ContactSchema>;

export const ContactModel = model<ContactDocument>(
  'Contact',
  new Schema<ContactSchema>(
    {
      firstName: {
        type: String,
        required: true,
        min: 2,
        max: 100,
      },
      lastName: {
        type: String,
        required: true,
        min: 2,
        max: 100,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        min: 5,
        max: 100,
      },
      phone: {
        type: String,
        required: true,
        min: 10,
        max: 20,
      },
      message: {
        type: String,
        required: true,
        min: 10,
        max: 1000,
      },
    },
    { timestamps: true }
  )
);
