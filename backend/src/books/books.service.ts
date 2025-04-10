import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Book, BookDocument } from './schemas/book.schema';
import { Model } from 'mongoose';
import { Request } from 'express';

@Injectable()
export class BooksService {
  constructor( 
    @InjectModel(Book.name) private readonly bookModel: Model<BookDocument>, 
  ) {}

  async create(createBookDto: CreateBookDto): Promise<Book> { 
    return await this.bookModel.create(createBookDto); 
  }

  async findAll(request: Request): Promise<Book[]> { 
    return await this.bookModel
      .find(request.query)
      .setOptions({ sanitizeFilter: true }) 
      .exec();
  }

  async findAllAvailable(): Promise<Book[]> { 
    return await this.bookModel
      .find({ stock: { $gt: 0 } })
      .setOptions({ sanitizeFilter: false }) 
      .exec();
  }

  async findOne(id: string): Promise<Book | null> { 
    return await this.bookModel.findOne({ _id: id }).exec(); 
  }

  async update(id: string, updateBookDto: UpdateBookDto): Promise<Book | null> { 
    return await this.bookModel.findOneAndUpdate({ _id: id }, updateBookDto, { 
      new: true, 
    });
  }

  async remove(id: string) { 
    return await this.bookModel.findByIdAndDelete({ _id: id }).exec(); 
  }

  async removeStock(id: string): Promise<Book | null>  {
    return await this.bookModel.findOneAndUpdate({ _id: id }, {$inc: {stock: -1}}, { 
      new: true, 
    });
  }

  async addStock(id: string): Promise<Book | null>  {
    return await this.bookModel.findOneAndUpdate({ _id: id }, {$inc: {stock: 1}}, { 
      new: true, 
    });
  }
}