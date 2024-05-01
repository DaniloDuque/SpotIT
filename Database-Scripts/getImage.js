const mysql = require('mysql');
const fs = require('fs');





const connection = mysql.createConnection({
    host: 'spotit-db.cfw26wk6i0xn.us-east-2.rds.amazonaws.com',
    port: 3306,
    user: 'root',
    database: 'spotit_db',
    password: 'B3$cYZpijX>tfT+',
});






connection.connect(function (err) {
    if (err) console.error(err.stack);
});






const query = `
    SELECT data FROM image WHERE id_image = 73;
`;





connection.query(query, (error, results, fields) => {

    if (error) {
        console.error(error);
        connection.end();
        return;
    }

    if (results.length > 0){

        if (results[0].data){

            const filePath = '/home/danilo/SpotIT-Game/image.png'; //path
            fs.writeFile(filePath, results[0].data, (err) => {
                if (err)  console.error(err);
                else console.log('Image saved successfully!');
            });

        } else console.log('Image data is undefined.');
        
    }else console.log('No image found in the database.');
    connection.end();


});
