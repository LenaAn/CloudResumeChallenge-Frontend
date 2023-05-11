variable "aws_region" {
  type        = string
  description = "The AWS region to put the bucket into"
  default     = "eu-north-1"
}

variable "bucket_name" {
  type        = string
  description = "The name of S3 bucket"
  default     = "lena-second-bucket"
}