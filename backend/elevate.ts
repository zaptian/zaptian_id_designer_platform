import { sequelize } from './config/db.js'; 

sequelize.query("UPDATE users SET role = 'SUPER_ADMIN'").then(() => { 
    console.log('Successfully elevated users'); 
    process.exit(0); 
});
