 
//  get.interview.dto
 
//  import { IsDateString, IsNumber, IsOptional } from 'class-validator';
// import { Transform, Type } from 'class-transformer';

//  @ApiProperty()
//   @IsOptional()
//   @IsNumber()
//   @Type(() => Number)
//   client?: number;

//   @ApiProperty()
//   @IsOptional()
//   @IsNumber()
//   @Type(() => Number)
//   technology?: number;

//   @ApiProperty()
//   @IsOptional()
//   @IsNumber()
//   @Type(() => Number)
//   candidate?: number;

//   @ApiProperty()
//   @IsOptional()
//   @IsNumber()
//   @Type(() => Number)
//   vendor?: number;

//   @ApiProperty()
//   @IsOptional()
//   @Transform(({ value }) => value?.trim())
//   status?: string;




//   interview.service.ts

// 125
//   if((resourceExist.isExternal == true && !resourceExist.personal_email) || (resourceExist.isExternal == false && !resourceExist.email) ){
//       throw new BusinessException('resource email id not found');
//     }

// 173 
//     const { limit, offset, search, fromDate, toDate,client,technology,candidate:resource,vendor:vendor_id,status } = param;


//     //178
//           ...(client && {client}),
//       ...(vendor_id && {vendor_id}),
//       ...(status && {interview_status : status}),
//       ...(resource && {resource : resource}),
//       ...(technology && {"$resourceData.primary_skill$" : technology}),


//       on update 
//       //355

//        if((resourceExist.isExternal == true && !resourceExist.personal_email) || (resourceExist.isExternal == false && !resourceExist.email) ){
//       throw new BusinessException('resource email id not found');
//     }







// ______________________________________________________________________________

// //get-interview.dto.ts
// import { IsArray, IsDateString, IsInt, IsNumber, IsOptional, IsString } from 'class-validator';
  
//     @ApiProperty()
//     @IsOptional()
//     @IsArray()
//     @Type(() => Number)
//     @IsInt({ each: true, message: 'client ids must be a number.' })
//     client?: number[];

    
//     @ApiProperty()
//     @IsOptional()
//     @IsArray()
//     @Type(() => String)
//     @IsString({ each: true, message: 'technology must be a string.' })
//     technology?: string[];
 


//    @ApiProperty()
//     @IsOptional()
//     @IsArray()
//     @Type(() => Number)
//     @IsInt({ each: true, message: 'candidate ids must be a number.' })
//     candidate?: number[];


//      @ApiProperty()
//     @IsOptional()
//     @IsArray()
//     @Type(() => Number)
//     @IsInt({ each: true, message: 'vendor ids must be a number.' })
//     vendor: number[];


//      @ApiProperty()
//     @IsOptional()
//     @IsArray()
//     @Type(() => String)
//     @IsString({ each: true, message: 'status must be a string.' })
//     status?: string[];


// ______________________________________________________________________________

//     const { limit, offset, search, fromDate, toDate,client,technology,candidate,vendor,status } = param;


//                 ...(client && JSON.parse(client.toString()).length > 0 && {client : {[Op.in]: client}}),
//         ...(vendor && JSON.parse(vendor.toString()).length > 0 && {vendor_id : {[Op.in]:vendor}}),
//         ...(status && JSON.parse(status.toString()).length > 0 && {interview_status :  {[Op.in]: status}}),
//         ...(candidate && JSON.parse(candidate.toString()).length > 0 && {resource :  {[Op.in]: candidate}}),
//         ...(technology && JSON.parse(technology.toString()).length > 0 && {"$resourceData.primary_skill$" : {[Op.in]:technology }}),






________________________________________________________________


//    @ApiProperty()
//     @IsOptional()
//     @IsArray()
//     client?: number[];
    
//     @ApiProperty()
//     @IsOptional()
//     @IsArray()
//     technology?: string[];
 
//    @ApiProperty()
//     @IsOptional()
//     @IsArray()
//     candidate?: number[];


//      @ApiProperty()
//     @IsOptional()
//     @IsArray()
//     vendor: number[];

//      @ApiProperty()
//     @IsOptional()
//     @IsArray()
//     status?: string[];




//         const { limit, offset, search, fromDate, toDate,client,technology,candidate,vendor,status } = param;
    
//     // converted string array ("[]") to array
//     const clients =  client ? JSON.parse(client.toString()) : []
//     const vendors =  vendor ? JSON.parse(vendor.toString()) : []
//     const statusList = status ? JSON.parse(status.toString()) : []
//     const candidates = candidate ? JSON.parse(candidate.toString()) : []
//     const technologies = technology ? JSON.parse(technology.toString()) : []

//         ...(clients.length > 0 && {client : {[Op.in]: clients}}),
//       ...(vendors.length > 0 && {vendor_id : {[Op.in]:vendors}}),
//       ...(statusList.length > 0 && {interview_status :  {[Op.in]: statusList}}),
//       ...(candidates.length > 0 && {resource :  {[Op.in]: candidates}}),
//       ...(technologies.length > 0 && {"$resourceData.primary_skill$" : {[Op.in]:technologies }}),
