import ContentBox from "../ui/content-box";

export default function Home({ breakpoint }) {
  return <ContentBox breakpoint={breakpoint} content={<div><h1>Hello World!</h1><p>This is a complete new beginning for the site. And there is more to come...</p></div>}></ContentBox>;
}
