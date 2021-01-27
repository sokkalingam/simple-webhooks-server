import { Injectable } from '@nestjs/common';
import * as _ from "lodash";

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
    this.personFeeds = _.drop(this.personFeeds, Math.max(this.personFeeds.length - this.maxSize, 0))
  }

  addToCompanyFeeds(headers, body) {
    this.companyFeeds.push({headers: headers, body: body})
    this.companyFeeds = _.drop(this.companyFeeds, Math.max(this.companyFeeds.length - this.maxSize, 0))
  }

}
