import noteReducer from "./noteReducer";
import deepFreeze from "deep-freeze";

describe("noteReducer", () => {

  it("should change importance when toggle", () => {
    const state = [
      {
        id: 1,
        isImportant: true,
        content: "Comer bien",
      },
      {
        id: 2,
        isImportant: false,
        content: "Hacer ejercicio",
      },
    ];

    const action = {
      type: "TOGGLE_IMPORTANCE",
      payload: {
        id: 2,
      },
    };

    deepFreeze(state);

    const newState = noteReducer(state, action);
    expect(newState).toHaveLength(2);
    expect(newState).toContainEqual(state[0]);
    expect(newState).toContainEqual({
      id: 2,
      isImportant: true,
      content: "Hacer ejercicio",
    });
  });
});
