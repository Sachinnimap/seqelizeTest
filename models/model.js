 
 get.interview.dto
 
 import { IsDateString, IsNumber, IsOptional } from 'class-validator';
import { Transform, Type } from 'class-transformer';

 @ApiProperty()
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  client?: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  technology?: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  candidate?: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  vendor?: number;

  @ApiProperty()
  @IsOptional()
  @Transform(({ value }) => value?.trim())
  status?: string;




  interview.service.ts

125
  if((resourceExist.isExternal == true && !resourceExist.personal_email) || (resourceExist.isExternal == false && !resourceExist.email) ){
      throw new BusinessException('resource email id not found');
    }

173 
    const { limit, offset, search, fromDate, toDate,client,technology,candidate:resource,vendor:vendor_id,status } = param;


    //178
          ...(client && {client}),
      ...(vendor_id && {vendor_id}),
      ...(status && {interview_status : status}),
      ...(resource && {resource : resource}),
      ...(technology && {"$resourceData.primary_skill$" : technology}),


      on update 
      //355

       if((resourceExist.isExternal == true && !resourceExist.personal_email) || (resourceExist.isExternal == false && !resourceExist.email) ){
      throw new BusinessException('resource email id not found');
    }