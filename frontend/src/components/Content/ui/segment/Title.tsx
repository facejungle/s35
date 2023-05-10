import { ContentTitleType } from '../../model/type';

export function ContentTitle({ title }: { title: ContentTitleType }): React.ReactElement {
   const titleText = 'Title text not found';
   if (title.size === 1) return <h1 key={title.id} id={title.hashtag}>{title.text || titleText}</h1>;
   if (title.size === 2) return <h2 key={title.id} id={title.hashtag}>{title.text || titleText}</h2>;
   if (title.size === 3) return <h3 key={title.id} id={title.hashtag}>{title.text || titleText}</h3>;
   if (title.size === 4) return <h4 key={title.id} id={title.hashtag}>{title.text || titleText}</h4>;
   if (title.size === 5) return <h5 key={title.id} id={title.hashtag}>{title.text || titleText}</h5>
   return <>Oops! Problem with size title?</>
}