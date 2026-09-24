import { expect, test } from "@playwright/test";

test("homepage exposes identity and navigation", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: "Justin Angelo Perez" }),
  ).toBeVisible();
  await expect(
    page.getByRole("navigation", { name: "Primary navigation" }),
  ).toBeVisible();
});

test("work index reaches a project case study", async ({ page }) => {
  await page.goto("/work");

  await expect(page.getByRole("heading", { name: "Work" })).toBeVisible();
  await page.getByRole("link", { name: /Berserk/ }).first().click();

  await expect(page).toHaveURL(/\/work\/berserk$/);
  await expect(page.getByText("Berserk").first()).toBeVisible();
});

test("skip link moves focus to main content", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");

  const skipLink = page.getByRole("link", { name: "Skip to main content" });
  await expect(skipLink).toBeFocused();
  await skipLink.press("Enter");

  await expect(page.locator("#main-content")).toBeFocused();
});

test("unknown project returns 404", async ({ page }) => {
  const response = await page.goto("/work/not-a-real-project");
  expect(response?.status()).toBe(404);
});
