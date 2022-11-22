import {test as base} from "@playwright/test";
import {BasePage} from "./page-objects/base-page";

type CustomFixtures = {
  basePage: BasePage;
};

const test = base.extend<CustomFixtures>({
  basePage: async ({page}, use) => {
    const basePage = new BasePage(page);
    await use(basePage);
  },
});

export {expect} from "@playwright/test";
export {test};
