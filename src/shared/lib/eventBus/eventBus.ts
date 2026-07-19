import mitt from 'mitt'

export type ScrollEvents = {
  scrollTo: 'projects' | 'contacts'
}

export const eventBus = mitt<ScrollEvents>()
