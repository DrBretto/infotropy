# AWS Setup

This document provides instructions for setting up the necessary AWS infrastructure for the Infotropy front-end project.

**CRITICAL INSTRUCTION:** All AWS operations related to this project **MUST explicitly use the "personal" AWS profile**. Do NOT use the default profile or any other profile.

## 1. Configure AWS CLI

Ensure you have the AWS Command Line Interface (CLI) installed and configured on your machine. You should have a configured profile named "personal" that has the necessary permissions to create and manage S3 buckets and their contents in the `us-east-1` region.

You can check your configured profiles by listing them:

```bash
aws configure list-profiles
```

If the "personal" profile is not configured, you can configure it:

```bash
aws configure --profile personal
```

Follow the prompts to enter your AWS Access Key ID, Secret Access Key, default region (`us-east-1`), and default output format.

## 2. Create S3 Bucket

A dedicated S3 bucket is required to host the static website files.

- **Bucket Name:** `infotropy-website-bucket`
- **Region:** `us-east-1`

Create the bucket using the AWS CLI, ensuring you specify the "personal" profile:

```bash
aws s3api create-bucket --bucket infotropy-website-bucket --region us-east-1 --profile personal --create-bucket-configuration LocationConstraint=us-east-1
```

_Note: For the `us-east-1` region, the `LocationConstraint` is technically not required in the `create-bucket-configuration`, but including it is harmless._

## 3. Configure Static Website Hosting

Configure the created S3 bucket for static website hosting.

- **Index Document:** `index.html`
- **Error Document:** `index.html` (for client-side routing)

Configure static website hosting using the AWS CLI, specifying the "personal" profile:

```bash
aws s3api put-bucket-website --bucket infotropy-website-bucket --profile personal --website-configuration file://website-config.json
```

You will need to create a `website-config.json` file with the following content:

```json
{
  "IndexDocument": {
    "Suffix": "index.html"
  },
  "ErrorDocument": {
    "Key": "index.html"
  }
}
```

## 4. Configure Bucket Policy

To make the website publicly accessible, you need to attach a bucket policy that allows public read access to the objects in the bucket.

Create a JSON file (e.g., `bucket-policy.json`) with the following content. Replace `infotropy-website-bucket` with the actual bucket name if different.

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::infotropy-website-bucket/*"
    }
  ]
}
```

Apply the bucket policy using the AWS CLI, specifying the "personal" profile:

```bash
aws s3api put-bucket-policy --bucket infotropy-website-bucket --profile personal --policy file://bucket-policy.json
```

## 5. Record Website Endpoint

Once static website hosting is enabled, you can find the website endpoint URL in the S3 bucket properties in the AWS Management Console, or you can construct it. For the `us-east-1` region, the endpoint format is typically `http://<bucket-name>.s3-website-us-east-1.amazonaws.com`.

Record this endpoint as it is the URL where your website will be accessible after deployment.

## AI Agent Checklist

- Verify AWS CLI is installed and configured with the "personal" profile.
- Create the S3 bucket `infotropy-website-bucket` in `us-east-1` using the "personal" profile.
- Configure static website hosting for the bucket using `index.html` as index and error documents, using the "personal" profile.
- Apply a bucket policy to allow public read access to the bucket contents, using the "personal" profile.
- Note the S3 static website endpoint URL.
