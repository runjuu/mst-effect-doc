import * as React from 'react'
import { urlFor, Development, StyledSheet } from 'monobase'

export default function Template(props: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <StyledSheet app={props.children} />
        <link rel="stylesheet" href={urlFor('/static/styles.css')} />
      </head>
      <body>
        {props.children}
        <Development />
      </body>
    </html>
  )
}
