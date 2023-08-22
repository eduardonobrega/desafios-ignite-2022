import { useForm } from 'react-hook-form'
import { SearchContainer } from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

interface SearchProps {
  amountPosts: number
  onFetchPosts: (text?: string) => Promise<void>
}
const searchFormSchema = zod.object({
  query: zod.string(),
})

type SearchFormInputs = zod.infer<typeof searchFormSchema>

export function Search({ amountPosts, onFetchPosts }: SearchProps) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      query: '',
    },
  })

  async function handlePostQuery(data: SearchFormInputs) {
    await onFetchPosts(data.query)
  }

  return (
    <SearchContainer>
      <div>
        <h2>Publicações</h2>
        <span>{amountPosts} publicações</span>
      </div>
      <form onSubmit={handleSubmit(handlePostQuery)}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          disabled={isSubmitting}
          {...register('query')}
        />
      </form>
    </SearchContainer>
  )
}
