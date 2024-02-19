import { useRouter } from 'next/router'
import { Accordion } from '@/components/ui'
import { useQuery } from '@/hooks'
import { api } from '@/utils/api'
import { CollectionType } from '@prisma/client'

export const ProductCategory = () => {
  const router = useRouter()
  const { addQuery, removeQuery } = useQuery({ shallow: true, scroll: true })
  const { slug, cate: slectedCate = '' } = router.query

  console.log('route query', router.query)

  if (!slug) return null

  const { data: categories } = api.collection.getAllBySlug.useQuery({
    type: slug[0].toUpperCase() as CollectionType,
    slug: slug[1],
  })

  const subCate: { name: string; slug: string }[] = []
  categories?.map((item) => {
    return subCate.push({ name: item.name, slug: item.slug })
  })

  const selectedCate = [slectedCate].flat(1).filter(Boolean)

  const handleChange = (option: string) => {
    if (!selectedCate.includes(option)) selectedCate.push(option)
    else selectedCate.splice(selectedCate.indexOf(option), 1)

    if (selectedCate.length === 0) removeQuery('cate')
    else addQuery('cate', selectedCate)
  }

  return (
    <div className="rounded-lg bg-neutral-100">
      <Accordion open>
        <Accordion.Header className="flex w-full items-center justify-between px-2.5 py-2.5 text-sm font-semibold text-neutral-600">
          Type
        </Accordion.Header>
        <Accordion.Body>
          <ul className="flex flex-col gap-3 px-2.5 pb-2.5">
            {subCate &&
              subCate.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id={item.slug}
                    className="h-4 w-4 rounded border-gray-300 text-violet-700 focus:ring-violet-700"
                    checked={selectedCate.includes(item.slug)}
                    onChange={() => handleChange(item.slug)}
                  />
                  <label
                    htmlFor={item.slug}
                    className="flex items-center gap-1"
                  >
                    <span className="text-sm font-medium">{item.name}</span>
                  </label>
                </li>
              ))}
          </ul>
        </Accordion.Body>
      </Accordion>
    </div>
  )
}
