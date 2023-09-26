import { test, expect } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await expect(page).toHaveTitle(/Movie Finder/)
})

test('perform search', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await page.getByLabel('search-input').fill('Titanic')
  await page.getByRole('button', { name: 'Search' }).click()

  const list = await page.getByTestId('search-list')
  await expect(list.getByRole('listitem')).toHaveCount(10)
})
