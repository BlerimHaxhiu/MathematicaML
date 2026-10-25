import katex from 'katex';
import {useMemo} from 'react';
export function MathText({children,block=false}:{children:string;block?:boolean}) {
 const html=useMemo(()=>katex.renderToString(children,{displayMode:block,throwOnError:false,strict:'ignore',output:'htmlAndMathml'}),[children,block]);
 return <span className={block?'math display':'math'} dangerouslySetInnerHTML={{__html:html}}/>;
}
