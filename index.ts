// index.ts
import { serve } from 'https://deno.land/std@0.141.0/http/server.ts'
import { build } from 'https://x.nest.land/vuepress@2.1.3/dist/node/index.js' 

const port = 8080

build().then((app) => {
  serve(app.handlers.getMiddleware({
    port, 
  }))
})