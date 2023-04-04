export function trackVisitedLink(link: string) {
  let visitedLinks: string[] = []
  const storedVisitedLinks = localStorage.getItem('visitedLinks')
  if (storedVisitedLinks) {
    const stringify = JSON.parse(storedVisitedLinks)
    visitedLinks = [...stringify]
  }
  const updatedVisitedLinks = [...visitedLinks, link]
  localStorage.setItem('visitedLinks', JSON.stringify(updatedVisitedLinks))
}
