import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose'; 

export type BookDocument = Book & Document; 

@Schema()
export class Book {
    @Prop()
    title: string;

    @Prop()
    author: string;

    @Prop()
    year: number;

    @Prop() 
    genre: string;

    @Prop()
    stock: number;
}
  
export const BookSchema = SchemaFactory.createForClass(Book); 