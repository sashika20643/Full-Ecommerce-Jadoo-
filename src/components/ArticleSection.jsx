import React from 'react'
import ButtonLink from './ButtonLink'
import articleimg1 from '../assets/images/article1.png'
import articleimg2 from '../assets/images/article2.png'
import articleimg3 from '../assets/images/article3.png'
import ArticleCard from './ArticleCard'

export default function ArticleSection() {
    const articles=[
        {name:"7 ways to decor your home",image:articleimg1,link:"www.google.com"},
        {name:"Kitchen organization",image:articleimg2,link:"www.google.com"},
        {name:"Decor your bedroom",image:articleimg3,link:"www.google.com"},
    ]
  return (
    <div className='mt-20'>
        <div className="flex justify-between">
<h1 className=' text-2xl font-bold w-1/2 text-left'>Articles</h1>
<ButtonLink url={"www.ggogl.com"}>
More Articles
</ButtonLink>

        </div>
        <div className="flex mt-10 flex-wrap gap-5 justify-between">
{articles.map((article,index)=>(
<ArticleCard article={article}/>
))}
        </div>
    </div>
  )
}
