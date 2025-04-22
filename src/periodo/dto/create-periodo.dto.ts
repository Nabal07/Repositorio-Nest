import { IsDateString, IsString } from "class-validator"

export class CreatePeriodoDto {
        
        @IsString()
        name : string;

        @IsString()
        school_period: string;

        @IsDateString()
        start_date : string;
        
        @IsDateString()
        final_date : string;
        
        @IsDateString()
        create_at : string;
        
        @IsDateString()
        update_at : string;
        
        @IsDateString()
        delete_at : string;

}
