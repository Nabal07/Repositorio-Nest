import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm";

const{ nanoid } = require("nanoid")

Entity('Periodos')
export class Periodo {
        @PrimaryColumn()
        id : string; //dev_a7s6da7f
    
        @Column()
        name : string;
    
        @Column()
        school_period: string;
    
        @Column()
        start_date : string;
        
        @Column()
        final_date : string;
        
        @Column()
        create_at : string;
        
        @Column()
        update_at : string;
        
        @Column()
        delete_at : string;

        @BeforeInsert()
        generateId(){
        this.id = `dev_${nanoid()}`
        }
    
}
