import { Greetings } from "./greetings";
import { StudentList } from "./students";
import { MentorsList } from "./mentors";

import { validateNotEmpty } from "../utils/testValidators";

describe("Data sources unit tests", () => {
  it("should validate that data sources are not empty ", () => {
    validateNotEmpty(Greetings);
    validateNotEmpty(StudentList);
    validateNotEmpty(MentorsList);
  });
});
