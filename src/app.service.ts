import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  maxSize
  personFeeds
  companyFeeds

  constructor() {
    this.personFeeds = []
    this.companyFeeds = []
    this.maxSize = 1000
  }

  getIndex(): string {
    return 'Server is up and running...'
  }

  addToPersonFeeds(headers, body) {
    this.personFeeds.push({headers: headers, body: body})
    this.personFeeds = this.personFeeds.slice(Math.max(this.personFeeds.length - this.maxSize, 0))
  }

  addToCompanyFeeds(headers, body) {
    this.companyFeeds.push({headers: headers, body: body})
    this.companyFeeds = this.companyFeeds.slice(Math.max(this.companyFeeds.length - this.maxSize, 0))
  }

}
