import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {hello: `${process.env.mongoUrl}`};
  }
}
