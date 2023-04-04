import { useState, useEffect } from 'react'

export function trackVisitedLink(link: string) {
  let visitedLinks: string[] = []
  const storedVisitedLinks = localStorage.getItem('visitedLinks')
  if (storedVisitedLinks) {
    const stringify = JSON.parse(storedVisitedLinks)
    visitedLinks = [...stringify]
  }
  const updatedVisitedLinks = [...visitedLinks, link]
  //     setVisitedLinks(updatedVisitedLinks);
  localStorage.setItem('visitedLinks', JSON.stringify(updatedVisitedLinks))
  return updatedVisitedLinks
}
// function MyComponent() {
//   const [visitedLinks, setVisitedLinks] = useState<string[]>([]);
//   function trackVisitedLink(link: string) {
//     const updatedVisitedLinks = [...visitedLinks, link];
//     setVisitedLinks(updatedVisitedLinks);
//     localStorage.setItem("visitedLinks", JSON.stringify(updatedVisitedLinks));
//   }

//   useEffect(() => {
//     const storedVisitedLinks = localStorage.getItem("visitedLinks");
//     if (storedVisitedLinks) {
//       setVisitedLinks(JSON.parse(storedVisitedLinks));
//     }
//   }, []);

//   return (
//     <>
//       <a href="/page1" onClick={() => trackVisitedLink("/page1")}>Page 1</a>
//       <a href="/page2" onClick={() => trackVisitedLink("/page2")}>Page 2</a>
//       <p>Visited Links: {visitedLinks.join(", ")}</p>
//     </>
//   );
// }
