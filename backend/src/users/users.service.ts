import { Logger, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { BookUserDto } from './dto/book-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { Book, BookDocument } from '../books/schemas/book.schema';
import { Request } from 'express'; 
import { BooksService } from 'src/books/books.service';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);

  constructor( 
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  @Inject(BooksService)
  private readonly booksService: BooksService;

  async create(createUserDto: CreateUserDto): Promise<User> { 
    return await this.userModel.create(createUserDto); 
  }

  async findAll(request: Request): Promise<User[]> { 
    return await this.userModel
      .find(request.query) 
      .setOptions({ sanitizeFilter: true }) 
      .exec();
  }

  async findOne(id: string): Promise<User | null> { 
    return await this.userModel.findOne({ _id: id }).exec(); 
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User | null> { 
    return await this.userModel.findOneAndUpdate({ _id: id }, updateUserDto, { 
      new: true, 
    });
  }

  async remove(id: string) { 
    return await this.userModel.findByIdAndDelete({ _id: id }).exec(); 
  }

  async addBook(bookUser: BookUserDto): Promise<User | null> {
    let book: Book | null = await this.booksService.findOne(bookUser.bookId);
    let user: UserDocument | null = await this.userModel.findById(bookUser.userId);
    if(user != null && book != null && book.stock > 0) {
      book.stock = book.stock - 1;
      user.books.push(book);
      await this.booksService.removeStock(bookUser.bookId);
      await user.save();
    }   
    return user;
  }

  async removeBook(bookUser: BookUserDto): Promise<User | null> {
    await this.booksService.addStock(bookUser.bookId);
    return await this.userModel.findOneAndUpdate(
      { _id: bookUser.userId },
      { $pull: { books: { _id: bookUser.bookId } } },
      { new: true },
    );
  }
}