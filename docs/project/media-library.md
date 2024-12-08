---
outline: deep
---

# Media Library

Managing project files is very easy with Elmapi's advanced Media Library. Upload your files and add them to your content.

::: tip
You can set the maximum file size limit in your `.env` file 
:::

![Media Library](/screenshots/media_library.png)

## Amazon AWS S3 Upload

You can use AWS S3 to upload and retrieve media files. In order to configure Elmapi to use AWS S3 follow the instructions below.

### Step 1: Create a New S3 Bucket

_If you want to use an existing bucket you can skip this part._

1. Go to your AWS console
2. Search for S3 and go to your S3 dashboard
3. Go to **Buckets**
4. Click on the **Create Bucket** button
5. Choose your bucket name
6. Choose bucket's region
7. Select **ACLs enabled**
8. Unselect **Block all public access**
9. Check the option for acknowledging current settings
10. Click on **Create Bucket**

![](https://elmapicms.com/docs/assets/images/aws_s3_1.jpg)

### Step 2: Create a User

_If you want to use an existing user you can skip this part._

1. Go to your AWS console
2. Search for **IAM** and go to your IAM dashboard
3. Go to **Users**
4. Click on the **Add Users** button
5. Choose your user name
6. Select **Access key - Programmatic access**
7. Click on **Next: Permissions**
8. Select **Attach existing policies directly**
9. Search for and select **AmazonS3FullAccess**
10. Click on **Next: Tags**
11. Skip this step and click on **Next: Review**
12. Click on **Create User**
13. Copy your **Access key ID** and **Secret access key**

![](https://elmapicms.com/docs/assets/images/aws_s3_2.jpg)

### Step 3: Add Configuration

1. Open your `.env` file.
2. Change the following lines according to your S3 credentials:
   ```
    AWS_ACCESS_KEY_ID=<your-access-key-id>
    AWS_SECRET_ACCESS_KEY=<your-secret-access-key>
    AWS_DEFAULT_REGION=<your-region>
    AWS_BUCKET=<your-bucket-name>
   ```

### Step 4: Test the configuration

1. Open your CoreCMSAPI dashboard.
2. Go to project settings. You will see the **Default Storage** option
3. Select AWS S3 and click on **Update Project**. You can change the default disk later if you want. When you change this option you can continue to access older files which stored in other option. You can have files in both disk at the same time.
4. Go to project's Media Library.
5. Click on **Upload Files** and upload your files as usual.

#### Access Denied Error

![](https://elmapicms.com/docs/assets/images/aws_s3_3.jpg)

If you get an Access Denied error when you try to upload or access files to your S3 bucket, you need to grant the following permissions to your IAM user:

* PutObject
* GetObject
* ListBucket

You can find more information about this error in the [AWS documentation](https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html).

#### Add Policy

You can also add a Policy to your bucket:

1. Go to your bucket.
2. Click on **Permissions**.
3. Scroll to **Bucket Policy** section and Click on **Edit**.
4. Add the following policy:
   ```json
   {
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicRead",
            "Effect": "Allow",
            "Principal": "*",
            "Action": [
                "s3:GetObject",
                "s3:GetObjectVersion"
            ],
            "Resource": "arn:aws:s3:::your-bucket-name/*"
        }
    ]
   }
   ```