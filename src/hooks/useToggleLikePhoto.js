import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

const LIKE_PHOTO = gql`
  mutation($input: LikePhoto!) {
    likePhoto(input: $input) {
      id
      likes
      liked
    }
  }
`

export const useToggleLikePhoto = () => {
  const [toggleLikePhoto] = useMutation(LIKE_PHOTO)

  const handleClick = async id => {
    await toggleLikePhoto({ variables: { input: { id } } })
  }

  return { handleClick }
}
