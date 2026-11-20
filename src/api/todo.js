import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

const API_URL = 'https://6aac8504a2413bf0ec10d4af.mockapi.io/furniture-shop'

const useUsers = () => {
  const queryClient = useQueryClient()

  const users = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axios.get(API_URL)
      return res.data
    },
  })

  const deleteUser = useMutation({
    mutationFn: async (id) => {
      await axios.delete(`${API_URL}/${id}`)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
    },
  })

  return { ...users, deleteUser }
}

export default useUsers