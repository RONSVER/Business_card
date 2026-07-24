import type { ProjectEntity } from './ProjectEntity'
import type { ProjectItem } from './Project'

export function mapProjectEntityToItem(entity: ProjectEntity): ProjectItem {
  return {
    title: entity.title,
    description: entity.description,
    globalDescription: entity.globalDescription,

    image: entity.image ?? '',
    photos: entity.photos ?? [],

    link: entity.link ?? undefined,
  }
}
