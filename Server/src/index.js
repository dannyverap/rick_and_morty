const { conn } = require('./DB_connection');
const server = require('./App');
const PORT = 3001;

//! Sync database and start server
conn.sync({ force: true }).then(() =>
   server.listen(PORT, () => console.log(`server raised in port: ${PORT}`))
);