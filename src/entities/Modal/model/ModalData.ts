import type { ProjectItem } from '@/entities/Project'

export type ModalData = Pick<ProjectItem, 'title' | 'globalDescription' | 'photos' | 'link'>
