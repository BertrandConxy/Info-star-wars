import ButtonPag from '../Common/ButtonPag'

interface iProps {
  currentPage: number
  totalPages: number
  handleClick: (page: number) => void
}

export default function Pagination({
  currentPage,
  totalPages,
  handleClick,
}: iProps) {
  const pages = []
  const prevPage = currentPage - 1
  const nextPage = currentPage + 1
  if (prevPage > 0) {
    pages.push(
      <ButtonPag
        key="prev"
        handleClick={() => handleClick(prevPage)}
        text="Prev"
      />,
    )
  }

  for (let i = 1; i <= totalPages; i++) {
    const active = i === currentPage
    pages.push(
      <ButtonPag
        key={i}
        handleClick={() => handleClick(i)}
        text={i}
        active={active}
      />,
    )
  }

  if (nextPage <= totalPages) {
    pages.push(
      <ButtonPag
        key="next"
        handleClick={() => handleClick(nextPage)}
        text="Next"
      />,
    )
  }

  return pages
}
