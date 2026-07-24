import { mapProjectEntityToItem, type ProjectEntity, type ProjectItem } from '@/entities/Project'
import { supabase } from '@/shared/api/supabase'

export async function getProjects(): Promise<ProjectItem[]> {
  const { data, error } = await supabase.from('projects').select('*')

  if (error) {
    throw error
  }

  return (data as ProjectEntity[]).map(mapProjectEntityToItem)
}
