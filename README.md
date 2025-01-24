This is a demo of the Resend Node.js SDK v4.1.2-canary.0.

This version fixes the issue with the `replyTo` when using the Batch API. See more on [this GitHub issue](https://github.com/resend/resend-node/issues/421#issuecomment-2608631832).

To run the demo or test the API, you can just run the following command using your email address:

```bash
curl -X POST https://resend-node-4-1-2-canary-0-demo-iota.vercel.app/api/send \
  -H "Content-Type: application/json" \
  -d '{"to": "your@email.here"}'
```

And the API will send you a test email using the `replyTo` setting along with the Batch API. See more [here](https://github.com/joaopcm/resend-node-4.1.2-canary.0-demo/blob/main/src/app/api/send/route.ts#L14).
