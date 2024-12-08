---
outline: deep
---

# Installation

## Server Requirements

- PHP >= 8.2
- MySQL >= 5.7.8
- BCMath PHP Extension
- Ctype PHP Extension
- DOM PHP Extension
- Fileinfo PHP Extension
- JSON PHP Extension
- Mbstring PHP Extension
- OpenSSL PHP Extension
- PCRE PHP Extension
- PDO PHP Extension
- Tokenizer PHP Extension
- XML PHP Extension

## Unzipping Files

After downloading the application unzip all files to your root folder and move all files inside `public` folder to your `public_html` folder.

The directory structure should look like this:

```
.
..
/app
/bootstrap
/config
/database
/public_html
.....
```

## Installing Dependencies

To manage the Laravel project's dependencies, you will need to use Composer, a dependency manager for PHP. Here are the steps to install dependencies for the project via SSH:

1. Open your SSH terminal application
2. Connect to your server via ssh using the following command:
   ```bash
   $ ssh username@your-server-ip
   ```
3. Navigate to the project directory:
   ```bash
    $ cd /path/to/cms-script
    ```
4. If you haven't installed Composer on your server, you can do so by running the following commands:
   ```bash
   $ curl -sS https://getcomposer.org/installer | php
   $ sudo mv composer.phar /usr/local/bin/composer
   ```
5. Once you are in the project directory, you can install all the dependencies listed in your composer.json file by running:
   ```bash
   $ composer install
   ```
6. You can verify that the dependencies have been installed correctly by checking the vendor directory, which should now contain all the necessary packages.

## Directory Permissions

Make sure your `storage` and the `bootstrap/cache` directories are writable.

You can change directory permissions either via your SSH terminal or your FTP client. Here’s how to do it for both methods:

### Using SSH Terminal

1. Open SSH terminal
2. Login to your server via SSH:
    ```bash
    $ ssh username@your-server-ip
    ```
3. Navigate to the project directory:
    ```bash
    $ cd /path/to/cms-script
    ```
4. Change the permissions of the directories:
    ```bash
    $ chmod -R 777 storage/ bootstrap/cache/
    ```
   
### Using FTP Client

1. Open your FTP client (e.g., FileZilla, Cyberduck).
2. Connect to your server using your FTP credentials.
3. Navigate to the project directory.
4. Locate the `storage` and `bootstrap/cache` directories.
5. Right-click on each directory and select File Permissions (or similar option).
6. Set the numeric value to `777` and apply the changes.

## Configure .env file

`.env` file contains basic configuration for your application.

#### Change the Application URL

The `APP_URL` variable defines the base URL of your Laravel application, which is used for generating links and redirects throughout the application.

```
APP_URL=https://your-domain.com
```

#### Change the Session Domain URL

The `SESSION_DOMAIN` variable specifies the domain that the session cookie should be valid for. This is important for maintaining user sessions across subdomains.

Typically, this value is the same as the `APP_URL`.

```
SESSION_DOMAIN=https://your-domain.com
```

#### Configure Database

The database configuration section allows you to set up the connection details for your database.

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=database_name
DB_USERNAME=database_username
DB_PASSWORD=database_password
```

#### Set max file size for the media library

The `MAX_FILE_SIZE` variable defines the maximum allowable file size for uploads to the media library.
```
MAX_FILE_SIZE=64M
```

## Database

#### Run Migrations

This command executes the migrations defined in the application, creating the necessary tables and relationships in the database required for the core functionality.

```bash
$ php artisan migrate
```

#### Seed Database

This command populates your database with initial data using seeders, setting up essential records that the application needs to function properly, such as default users or configuration settings.

```bash
$ php artisan db:seed
```

::: warning
Do NOT run these commands after the application has been deployed to a production environment. Executing these commands can alter the database schema and overwrite existing data, potentially leading to data loss or application instability.
:::

## Storage

#### Link Storage

This command creates a symbolic link from the `public/storage` directory to the `storage/app/public` directory, enabling access to files stored in your application's storage from the web.

Make sure that your current working directory is the root of the project.

```bash
$ php artisan storage:link
```

## Login to Application

After the installation you can login to application with your newly created super admin account.

```
email: admin@admin.com
password: password
```

::: tip
You should change this account e-mail and password after logging in.
:::