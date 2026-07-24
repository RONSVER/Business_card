export interface ProjectEntity {
  id: number
  created_at: Date
  updated_at: Date | null

  title: string
  description: string
  globalDescription: string

  image: string
  photos: string[] | null

  link: string | null
}
