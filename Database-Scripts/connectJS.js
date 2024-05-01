// For this to work, you must install node_modules to be able to include 'mysql'
const mysql = require('mysql'); // including 'mysql'





const connection = mysql.createConnection({
    host: 'spotit-db.cfw26wk6i0xn.us-east-2.rds.amazonaws.com',
    port: 3306,
    user: 'root',
    database: 'spotit_db',
    password: 'B3$cYZpijX>tfT+',
});



connection.connect(function(err) {  // if it could not connect, it will give an error
    if (err) {
        console.error(err.stack)
        return;
    } 
});


const query = `
    SELECT * FROM image;
`;

connection.query(query, (error, results, fields) => {
    if (error) {
        console.error(error);
        return;
    } console.log(results);
});




connection.end();
