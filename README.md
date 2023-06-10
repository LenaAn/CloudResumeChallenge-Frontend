# CloudResumeChallenge-Frontend
This is the frontend part of my solution to [Cloud Resume Challenge](https://cloudresumechallenge.dev/) in AWS. Backend part is [here](https://github.com/LenaAn/CloudResumeChallenge-BE)

## Infrastructure as a Code
Checkout this repo and run `terraform apply` to create AWS infrastructure for the project.

## Deploy
Push to `main` branch triggers a Github Action to sync the content of `public` dir to S3 bucket. 