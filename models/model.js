 
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




// ____________________________________________________________________________________________






   @ApiProperty()
  @IsOptional()
  @IsString()
  client?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  technology?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  candidate?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  vendor?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  status?: string;


const { limit, offset, search, fromDate, toDate,client,technology,candidate,vendor,status } = param;
    

    // converted string array ("[]") to array
    const clients =  client ? client.split(",").map(Number) : []
    const vendors =  vendor ? vendor.split(",") : []
    const statusList = status ? status.split(",") : []
    const candidates = candidate ? candidate.split(",") : []
    const technologies = technology ? technology.split(",") : []
    

    const whereClause: any = {
      deleted: false,
        ...(clients.length > 0 && {client : {[Op.in]: clients}}),
      ...(vendors.length > 0 && {vendor_id : {[Op.in]:vendors}}),
      ...(statusList.length > 0 && {interview_status :  {[Op.in]: statusList}}),
      ...(candidates.length > 0 && {resource :  {[Op.in]: candidates}}),
      ...(technologies.length > 0 && {"$resourceData.primary_skill$" : {[Op.in]:technologies }}),



      __________________________________________________________________________________



      import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { InjectModel } from "@nestjs/sequelize";
import axios from "axios";
import moment from "moment";
import { Interview } from "src/modules/interview/models/interview.model";
import { Client } from "src/modules/client/models/client.model";
import { Resource } from "src/modules/resource/models/resource.model";
import { Vendor } from "src/modules/vendor/models/vendor.model";
import { User } from "src/modules/user/models/user.model";
import { Template } from "src/modules/templates/models/template.model";

   @Injectable()
  export class CreateAndUpdateFFCTemplate{

    constructor(
        private configService: ConfigService,
        @InjectModel(Interview) private interviewModel: typeof Interview,
        @InjectModel(Client) private clientModel : typeof Client,
        @InjectModel(Resource) private resourceModel: typeof Resource,
        @InjectModel(Vendor) private vendorModel:typeof Vendor,
        @InjectModel(User) private userModel:typeof User,
        @InjectModel(Template) private templateModel : typeof Template
    )
    {}


    async handleFfcTemplate(type,id){
        
        let data:any;
        if(type = "interview"){
            //only create template and pass to comment which will be common
            data = await  this.interviewData(id)
        }


        const res = await axios.post(
        process.env.FFC_COMMENT_URL,
        // {
        //   LeadId: clientExist.lead_id,
        //   opportunityid : createInterviewDto?.opportunity_id,
        //   ScheduledByEmail: interViewData.useraData.email,
        //   UserEmail:!resourceExist.isExternal ? resourceExist.email : resourceExist.personal_email ,
        //   Notes,
        // },
        data,
        {
          headers: {
            ApiKey: this.configService.get('ffc.api_key'),
            Email: this.configService.get('ffc.email'),
          },
        },
      );

    }




async interviewData(id){
  const result = await this.interviewModel.findOne({
      where: {
        id,
      },
      include: [
        {
          model: this.clientModel,
          attributes: ['client_name', 'lead_id'],
        },
        {
          model: this.resourceModel,
          attributes: ['fname', 'lname',"isExternal","personal_email","email"],
          include: [
            {
              model: this.vendorModel,
              attributes: ['company_name'],
            },
          ],
        },
        {
          model: this.userModel,
          attributes: ['email', 'name'],
        },
      ],
    })

    console.log("result",result)

    const Notes = await this.createAndUpdateFFCTemplate({
        interviewType: result?.interview_type,
        vendorName: result?.resourceData?.vendorData?.company_name ?? "-",
        clientName: result?.clientData?.client_name,
        resourceName: `${result?.resourceData?.fname} ${result?.resourceData?.lname}`,
        pointOfContact: result?.contact_person,
        mode: result?.mode,
        internalExternal: `${result?.isExternal ? 'External' : 'Internal'}`,
        location: result?.location,
        arrangedBy: result?.useraData?.name,
        contactNumber: result?.contact ?? "-",
        dateTime: moment(result?.datetime).format('dddd, MMMM D, YYYY, [at] h:mm A'),
      });

      return {
          LeadId: result?.clientData?.lead_id,
          opportunityid : result?.opportunity_id,
          ScheduledByEmail: result.useraData.email,
          UserEmail:!result?.resourceData?.isExternal ? result?.resourceData?.email : result?.resourceData?.personal_email ,
          Notes,
        }
    }

   
//    const interViewData = await this.addComment(addInterview.id)
  
  
    //   const Notes = await this.createAndUpdateFFCTemplate({
    //     interviewType: createInterviewDto.interview_type,
    //     vendorName: interViewData?.resourceData?.vendorData?.company_name ?? "-",
    //     clientName: clientExist?.client_name,
    //     resourceName: `${resourceExist?.fname} ${resourceExist?.lname}`,
    //     pointOfContact: createInterviewDto?.contact_person,
    //     mode: createInterviewDto?.mode,
    //     internalExternal: `${createInterviewDto?.isExternal ? 'External' : 'Internal'}`,
    //     location: createInterviewDto?.location,
    //     arrangedBy: interViewData?.useraData?.name,
    //     contactNumber: createInterviewDto?.contact ?? "-",
    //     dateTime: moment(createInterviewDto?.datetime).format('dddd, MMMM D, YYYY, [at] h:mm A'),
    //   });
    //   const res = await axios.post(
    //     process.env.FFC_COMMENT_URL,
    //     {
    //       LeadId: clientExist.lead_id,
    //       opportunityid : createInterviewDto?.opportunity_id,
    //       ScheduledByEmail: interViewData.useraData.email,
    //       UserEmail:!resourceExist.isExternal ? resourceExist.email : resourceExist.personal_email ,
    //       Notes,
    //     },
    //     {
    //       headers: {
    //         ApiKey: this.configService.get('ffc.api_key'),
    //         Email: this.configService.get('ffc.email'),
    //       },
    //     },
    //   );
    //   console.log(res)
  
  
  
  
  async createAndUpdateFFCTemplate({
    remark = false,
    interviewType,
    mode,
    clientName,
    resourceName,
    vendorName,
    dateTime,
    arrangedBy,
    pointOfContact,
    contactNumber,
    location,
    internalExternal,
    
  }) {
    let msg = (await this.templateModel.findOne({
      where: {
        event: "FFC_Create"
      }
    })).content
    const replacements = {
      '<resourceName>': resourceName ?? "-",
      '<vendorName>': vendorName ?? "-",
      '<dateTime>': dateTime ?? "-",
      '<arrangedBy>': arrangedBy ?? "-",
      '<pointOfContact>': pointOfContact ?? "-",
      '<mode>': mode ?? "-",
      '<contactNumber>': contactNumber ?? "-",
      '<location>': location ?? "-",
      '<clientName>': clientName ?? "-",
      '<internalExternal>': internalExternal ?? "-",
      '<interviewType>': interviewType ?? "-",
    };
    for (const [placeholder, value] of Object.entries(replacements)) {
      msg = msg.replace(new RegExp(placeholder, 'g'), value);
    }
    msg = remark ? `Update : ${msg}` : msg
    return msg
  }
}