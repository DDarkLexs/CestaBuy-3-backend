import knexobj from "knex"
import sqllite from "sqlite3"
const sqllite3 = sqllite.verbose()
 



const db = new sqllite3.Database(`${__dirname}/database/db.db`);
    
    // db.serialize(function() {
    //   db.run("CREATE TABLE lorem (info TEXT)");
    
    //   var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
    //   for (var i = 0; i < 10; i++) {
    //       stmt.run("Ipsum " + i);
    //   }
    //   stmt.finalize();
    
    //   db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
    //       console.log(row.id + ": " + row.info);
    //   });
    // });

const knex = knexobj({
    client: 'sqlite3',
    connection: {
      filename: `${__dirname}/database/db.db`,
    },
});


export const queryBuilder = knex.queryBuilder()

/* async function test(){

  console.log(await queryBuilder.select("*").from("negocio"))

}

test()
 */


export const negocio = knex("negocio")

export const funcionario = knex("funcionario")