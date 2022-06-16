import React from 'react'
import clsx from 'clsx'
import styles from './HomepageFeatures.module.css'

const FeatureList = [
  {
    title: '支持 Markdown',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    // description: (
    //   <>
    //     你只须专注于使用 Markdown/MDX 格式编写文档和文章即可， Docusaurus
    //     会自动生成可以对外发布的静态 HTML 文件。 借助 MDX，你甚至可以将 JSX
    //     组件嵌入到 Markdown 中。
    //   </>
    // ),
  },
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    // description: <>内容可搜索,让你轻松地在文档中找到所需的内容。</>,
  },
  {
    title: '基于 React 技术构建',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    // description: (
    //   <>
    //     Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
    //     ahead and move your docs into the <code>docs</code> directory.
    //   </>
    // ),
  },
]

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center'>
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className='text--center padding-horiz--md'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
