import {Page, selectors} from "@playwright/test";

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  getByTestId(selector: string) {
    selectors.setTestIdAttribute("data-autotest-id");
    return this.page.getByTestId(selector);
  }
}
