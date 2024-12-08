# Users & Roles

In this section you can manage user access to your your project. There are two roles you can use. Admin roles can manage project collections and content. Editors can only manage content. Super admin accounts have the admin role for all your projects.

![User Roles](/screenshots/user_roles.png)

When you're assigning a user to a project you can create a new user.

![Create User](/screenshots/create_user.png)

## Create Super Admins

By default, the project consists of only one super admin. It can, however, have multiple super admin users.

To add a user as super admin, type the following command on your console

```bash
$ php artisan create:super-admin
```

You will be then prompted to create a new user by providing its details, including name, unique email address, and a strong password (min 8 character length).

This newly created user is now a super admin of the project.