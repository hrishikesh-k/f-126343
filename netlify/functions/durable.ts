import type {Config} from '@netlify/functions'

export default async function(req : Request) {
  const headers = new Headers({
    'netlify-cdn-cache-control': 'durable, max-age=3600',
    'netlify-vary': 'query'
  })
  const url = new URL(req.url)
  if (url.pathname.startsWith('/page-1/')) {
    return new Response('page-1', {
      headers
    })
  }
  return new Response('home', {
    headers
  })
}

export const config : Config = {
  path: [
    '/',
    '/page-1/'
  ],
  preferStatic: true
}