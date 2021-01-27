import { Body, Controller, Headers, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  index(): string {
    return this.appService.getIndex();
  }

  @Post('/feeds/person')
  personFeeds(@Headers() headers, @Body() requestBody) {
    this.appService.addToPersonFeeds(headers, requestBody)
  }

  @Post('/feeds/company')
  companyFeeds(@Headers() headers, @Body() requestBody) {
    this.appService.addToCompanyFeeds(headers, requestBody)
  }

  @Get('/feeds/person')
  getPersonFeeds() {
    return this.appService.personFeeds
  }

  @Get('/feeds/company')
  getCompanyFeeds() {
    return this.appService.companyFeeds
  }

  @Get('/clearFeeds/person')
  clearPersonFeeds() {
    this.appService.personFeeds = []
  }

  @Get('/clearFeeds/company')
  clearCompanyFeeds() {
    this.appService.companyFeeds = []
  }


}
