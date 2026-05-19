# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: EventPageAPIAssignment.spec.js >> Verify banner for event booking is present
- Location: tests\EventPageAPIAssignment.spec.js:29:6

# Error details

```
Error: locator.waitFor: Target page, context or browser has been closed
Call log:
  - waiting for locator('[data-testid="event-card"]').last() to be visible

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | const userName = "ZionTest@gmail.com";
  4  | const userPwd = "Jesus@2026";
  5  | const SIX_EVENTS_RESPONSE = {
  6  |   data: [
  7  |     { id: 1, title: 'Tech Summit 2025', category: 'Conference', eventDate: '2025-06-01T10:00:00.000Z', venue: 'HICC', city: 'Hyderabad', price: '999', totalSeats: 200, availableSeats: 150, imageUrl: null, isStatic: false },
  8  |     { id: 2, title: 'Rock Night Live',  category: 'Concert',    eventDate: '2025-06-05T18:00:00.000Z', venue: 'Palace Grounds', city: 'Bangalore', price: '1500', totalSeats: 500, availableSeats: 300, imageUrl: null, isStatic: false },
  9  |     { id: 3, title: 'IPL Finals',       category: 'Sports',     eventDate: '2025-06-10T19:30:00.000Z', venue: 'Chinnaswamy', city: 'Bangalore', price: '2000', totalSeats: 800, availableSeats: 50, imageUrl: null, isStatic: false },
  10 |     { id: 4, title: 'UX Design Workshop', category: 'Workshop', eventDate: '2025-06-15T09:00:00.000Z', venue: 'WeWork', city: 'Mumbai', price: '500', totalSeats: 50, availableSeats: 20, imageUrl: null, isStatic: false },
  11 |     { id: 5, title: 'Lollapalooza India', category: 'Festival', eventDate: '2025-06-20T12:00:00.000Z', venue: 'Mahalaxmi Racecourse', city: 'Mumbai', price: '3000', totalSeats: 5000, availableSeats: 2000, imageUrl: null, isStatic: false },
  12 |     { id: 6, title: 'AI & ML Expo',    category: 'Conference',  eventDate: '2025-06-25T10:00:00.000Z', venue: 'Bangalore International Exhibition Centre', city: 'Bangalore', price: '750', totalSeats: 300, availableSeats: 180, imageUrl: null, isStatic: false },
  13 |   ],
  14 |   pagination: { page: 1, totalPages: 1, total: 6, limit: 12 },
  15 | };
  16 | 
  17 | const FOUR_EVENTS_RESPONSE = {
  18 |   data: [
  19 |     { id: 1, title: 'Tech Summit 2025', category: 'Conference', eventDate: '2025-06-01T10:00:00.000Z', venue: 'HICC', city: 'Hyderabad', price: '999', totalSeats: 200, availableSeats: 150, imageUrl: null, isStatic: false },
  20 |     { id: 2, title: 'Rock Night Live',  category: 'Concert',    eventDate: '2025-06-05T18:00:00.000Z', venue: 'Palace Grounds', city: 'Bangalore', price: '1500', totalSeats: 500, availableSeats: 300, imageUrl: null, isStatic: false },
  21 |     { id: 3, title: 'IPL Finals',       category: 'Sports',     eventDate: '2025-06-10T19:30:00.000Z', venue: 'Chinnaswamy', city: 'Bangalore', price: '2000', totalSeats: 800, availableSeats: 50, imageUrl: null, isStatic: false },
  22 |     { id: 4, title: 'UX Design Workshop', category: 'Workshop', eventDate: '2025-06-15T09:00:00.000Z', venue: 'WeWork', city: 'Mumbai', price: '500', totalSeats: 50, availableSeats: 20, imageUrl: null, isStatic: false },
  23 |   ],
  24 |   pagination: { page: 1, totalPages: 1, total: 4, limit: 12 },
  25 | };
  26 | 
  27 |  
  28 | 
  29 | test.only('Verify banner for event booking is present', async({page})=>{
  30 | 
  31 | await page.goto('https://eventhub.rahulshettyacademy.com/login');
  32 | await page.locator('input#email').fill(userName);
  33 | await page.locator('input#password').fill(userPwd);
  34 | 
  35 | await page.route("**/api/events**", async route=>{
  36 |     const response = await page.request.fetch(route.request());
  37 |     let body = JSON.stringify(SIX_EVENTS_RESPONSE);
  38 |     route.fulfill({
  39 |        response,
  40 |        body,
  41 |     });
  42 | });
  43 | await page.locator('#login-btn').click();
  44 | await page.pause();
> 45 | await page.locator('[data-testid="event-card"]').last().waitFor();
     |                                                         ^ Error: locator.waitFor: Target page, context or browser has been closed
  46 | await expect(page.locator('[data-testid="event-card"]').first()).toBeVisible();
  47 | expect(await page.locator('[data-testid="event-card"]').count()).toBe(6);
  48 | await expect(page.getByText(/sandbox holds up to/)).toBeVisible();
  49 | expect(await page.getByText(/sandbox holds up to/).textContent()).toContain('9 bookings');
  50 | 
  51 | 
  52 | })
  53 | 
  54 | test('Verify banner for event booking is not present', async({page})=>{
  55 | 
  56 | await page.goto('https://eventhub.rahulshettyacademy.com/login');
  57 | await page.locator('input#email').fill(userName);
  58 | await page.locator('input#password').fill(userPwd);
  59 | 
  60 | await page.route("**/api/events**", async route=>{
  61 |     const response = await page.request.fetch(route.request());
  62 |     let body = JSON.stringify(FOUR_EVENTS_RESPONSE);
  63 |     route.fulfill({
  64 |        response,
  65 |        body,
  66 |     });
  67 | });
  68 | await page.locator('#login-btn').click();
  69 | await expect(page.locator('[data-testid="event-card"]').first()).toBeVisible();
  70 | expect(await page.locator('[data-testid="event-card"]').count()).toBe(4);
  71 | expect(await page.getByText(/sandbox holds up to/).toBeVisible()).toBeFalsy();
  72 | 
  73 | })
```