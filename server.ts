// index.js
import { serve } from 'https://deno.land/std@0.140.0/http/server.ts'

interface ServerOptions {
  port: number;
}
serve({ port: 8080 } as ServerOptions, async (req: any) => {
  await req.respond({
    status: 200,
    body: Deno.readTextFile('./index.html')
  })
})
