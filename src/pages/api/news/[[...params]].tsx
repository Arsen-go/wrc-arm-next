import { Catch, createHandler, Get, Param, Query } from 'next-api-decorators';
// import { exceptionHandler } from '@/lib/prisma/error';
// import { OnlineCoursesResolver } from '@/lib/prisma/resolvers/online-courses';
// import type { OnlineCoursesQueryParams } from '@/types/queryParams';

// @Catch(exceptionHandler)
class AuthHandler {
  @Get('/tt')
  _getOnlineCoursesList() {
    console.log("*********");
    
    // return OnlineCoursesResolver.getOnlineCourseList(queryParams);
  }
//   @Get('/:id')
//   _getOnlineCourseById(@Param('id') id: string) {
//     console.log("🚀 ~ file: [[...params]].tsx:14 ~ AuthHandler ~ _getOnlineCourseById ~ id:", id)
//     // return OnlineCoursesResolver.getOnlineCourseById(+id);
//   }
}
export default createHandler(AuthHandler);