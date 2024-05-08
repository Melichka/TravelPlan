import { UserService } from '../user/user.service';

export async function initAdmin(userService: UserService) {
  const admin = await userService.findOne('admin@example.com');
  if (!admin) {
    await userService.createUserAdmin({
      name: 'Admin',
      surname: 'User',
      email: 'admin@example.com',
      password: '11223344',
    });
    console.log('Admin user created successfully.');
  } else {
    console.log('Admin user already exists.');
  }
}
