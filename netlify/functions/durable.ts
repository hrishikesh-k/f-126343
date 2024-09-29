import type {Config} from '@netlify/functions'

export default async function(req : Request) {
  const url = new URL(req.url)
  if (url.pathname.startsWith('/page-1/')) {
    return new Response('page-1', {
      headers: {
        'netlify-cdn-cache-control': 'durable, max-age=3600'
      }
    })
  }
  return new Response('home', {
    headers: {
      'netlify-cdn-cache-control': 'durable, max-age=3600'
    }
  })
}

export const config : Config = {
  path: [
    '/',
    '/page-1/'
  ],
  preferStatic: true
}