import { Page } from '@playwright/test'
import { mockElasticHome } from './home'
import { mockElasticNodes } from './nodes'
import { mockElasticIndices } from './indices'

export const mockElastic1 = async (page: Page, { health }: { health: string } = { health: 'green' }) => {
  await mockElasticHome(page, { health })
  await mockElasticNodes(page)
  await mockElasticIndices(page)
}