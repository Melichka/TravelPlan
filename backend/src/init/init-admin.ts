import * as argon2 from 'argon2';

import { UserService } from '../user/user.service';

export async function initAdmin(userService: UserService) {
  const admin = await userService.findOne('admin@example.com');
  if (!admin) {
    const hashedPassword = await argon2.hash('11223344');
    await userService.createUserAdmin({
      name: 'Admin',
      surname: 'User',
      email: 'admin@example.com',
      password: hashedPassword,
    });
    console.log('Admin user created successfully.');
  } else {
    console.log('Admin user already exists.');
  }
}
