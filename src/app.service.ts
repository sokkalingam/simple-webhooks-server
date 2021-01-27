import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  personFeeds
  companyFeeds

  constructor() {
    this.personFeeds = []
    this.companyFeeds = []
  }

  getIndex(): string {
    return 'Server is up and running...';
  }
}
