import { expect, test } from "@playwright/test";

test("homepage exposes identity and navigation", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: "Justin Angelo Perez." }),
  ).toBeVisible();
  await expect(
    page.getByRole("navigation", { name: "Primary navigation" }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Home", exact: true }),
  ).toHaveAttribute("aria-current", "page");
});

test("projects index reaches a project case study", async ({ page }) => {
  await page.goto("/projects");

  await expect(
    page.getByRole("heading", { name: /Ideas turned into systems/i }),
  ).toBeVisible();
  await page.getByRole("link", { name: /Berserk/ }).first().click();

  await expect(page).toHaveURL(/\/projects\/berserk$/);
  await expect(page.getByText("Berserk").first()).toBeVisible();
});

test("legacy work route redirects to projects", async ({ page }) => {
  await page.goto("/work");
  await expect(page).toHaveURL(/\/projects$/);
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
  const response = await page.goto("/projects/not-a-real-project");
  expect(response?.status()).toBe(404);
});
