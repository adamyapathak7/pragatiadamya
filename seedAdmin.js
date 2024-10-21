const bcrypt = require('bcryptjs');
const User  = require('./models/user'); 
const {sequelize} = require('./config/database'); 

async function createAdminUser() {
  try {
    
    await sequelize.sync();

    const hashedPassword = await bcrypt.hash('Admin123!@#', 10); 


    const adminUser = await User.create({
      email: 'admin@codesfortomorrow.com',
      password: hashedPassword,
    });

    console.log('Admin user created:', adminUser);
  } catch (error) {
    console.error('Error creating admin user:', error);
  }
}

createAdminUser();
