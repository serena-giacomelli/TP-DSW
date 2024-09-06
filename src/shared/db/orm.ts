//config de orm
import { MikroORM } from "@mikro-orm/core";
import { MongoDriver } from "@mikro-orm/mongodb";
import { SqlHighlighter } from "@mikro-orm/sql-highlighter";

export const orm = await MikroORM.init({
    entities: ['dist/**/*.entity.js'],
    entitiesTs: ['src/**/*.entity.ts'],
    dbName: 'TP-DSW',
    type: 'mongo',
    clientUrl: 'mongodb://localhost:27017',
    driver: MongoDriver,
    highlighter: new SqlHighlighter(),	
    debug: true,
    /*schemaGenerator: {
        disableForeignKeys: true,
        createForeignKeyConstraints: true,
        ignoreSchema: []*/
    } as Parameters<typeof MikroORM.init>[0]);

    export const syncSchema = async () => {
        const generator = orm.getSchemaGenerator()
        /*   
        await generator.dropSchema()
        await generator.createSchema()
        */
        await generator.updateSchema()
      } //no se si esto va para mongo db
      