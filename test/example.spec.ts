import {test, expect} from "../extend-test";

test("check", async ({basePage}) => {
  await basePage.page.goto("http://localhost:3000");

  await expect(basePage.getByTestId("test-button").locator("text=First")).toBeVisible();
  await expect(basePage.getByTestId("test-button").locator("text=Second")).toBeVisible();
  await expect(basePage.getByTestId("test-button").locator("text=Third")).toBeVisible();
});
