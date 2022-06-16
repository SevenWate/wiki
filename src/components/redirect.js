import React from 'react'
import { Redirect } from '@docusaurus/router'
import { useEffect } from 'react'

export function Open({ go }) {
  useEffect(() => {
    window.open(go, '_blank')
  }, [])
  return (
    <div>
      {redirectContent()}
      👉 或者手动点击<strong>本篇文章阅读地址</strong>: &nbsp;
      <a href={go} target='_blank'>
        {go}
      </a>
    </div>
  )
}

function redirectContent() {
  return (
    <div>
      <h4>✨ 为了更好的浏览体验，浏览器将自动跳转至其他页面阅读。</h4>
      <h4>🖐 请允许浏览器自动跳转~</h4>
    </div>
  )
}
