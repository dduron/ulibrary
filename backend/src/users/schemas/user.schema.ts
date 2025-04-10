import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose'; 
import { Book, BookSchema } from '../../books/schemas/book.schema';

export type UserDocument = User & Document; 

@Schema() 
export class User {
  @Prop() 
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  email: string;

  @Prop()
  role: string;

  @Prop([BookSchema]) 
  books: Book[]; 
}

export const UserSchema = SchemaFactory.createForClass(User);