# Development

## Deployment

To staging:

```
aws s3 sync . s3://dev.coprocure.us --exclude node_modules
