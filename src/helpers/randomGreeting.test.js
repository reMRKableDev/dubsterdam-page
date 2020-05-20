import sayRandomGreetingTest from "./randomGreeting";
import { validateRandomGreeting } from "../utils/testValidators";

describe("Helper function unit test", () => {
  test("should pick a random greeting from the list", () => {
    const dummyHelloEnglish = "Hello";
    const dummyHelloSwedish = "Hej";
    const dummyHelloSwahili = "Mambo";

    const dummyGreetingList = [
      dummyHelloEnglish,
      dummyHelloSwahili,
      dummyHelloSwedish,
    ];

    const dummyGreeting = sayRandomGreetingTest(dummyGreetingList);

    validateRandomGreeting(dummyGreeting, dummyGreetingList);
  });
});
