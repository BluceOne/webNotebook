// index.js
import { serve } from 'https://deno.land/std@0.140.0/http/server.ts'
import { Request } from 'https://deno.land/std@0.140.0/http/server.ts';

serve({ port: 8080 }, async (req: Request) => {
  await req.respond({
    status: 200,
    body: Deno.readTextFile('./index.html')
  })
})
