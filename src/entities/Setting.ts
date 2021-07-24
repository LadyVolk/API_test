
import{Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn, EntityRepository} from "typeorm"

import {v4 as uuid } from "uuid" 

@Entity("settings")

class Setting{

    @PrimaryColumn()
    id: string;

    @Column()
    username: string;

    @Column()
    chat: boolean;

    @UpdateDateColumn()
    update_at: Date;

    @UpdateDateColumn()
    create_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}

export {Setting}