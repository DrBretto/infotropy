# Maxwell's Demon Module To-Do Checklist

This checklist tracks the implementation tasks for the Maxwell's Demon module. Check off items (`[x]`) only after successful implementation and verification.

## Implementation Tasks

- [x] Create the module directory `src/modules/maxwells-demon/`.
- [x] Create the main component file [`src/modules/maxwells-demon/MaxwellsDemon.tsx`](src/modules/maxwells-demon/MaxwellsDemon.tsx).
- [x] Create the test file [`src/modules/maxwells-demon/MaxwellsDemon.test.tsx`](src/modules/maxwells-demon/MaxwellsDemon.test.tsx).
- [x] Create the module documentation file [`docs/modules/maxwells-demon.md`](docs/modules/maxwells-demon.md).
- [x] Create the module-specific to-do checklist file [`docs/todo-maxwells-demon.md`](docs/todo-maxwells-demon.md).
- [x] In [`MaxwellsDemon.tsx`](src/modules/maxwells-demon/MaxwellsDemon.tsx), set up the basic React component structure and a ref for the Matter.js canvas.
- [x] Implement a `useEffect` hook for initializing and cleaning up the Matter.js engine, renderer, and world.
- [x] Configure the Matter.js engine to disable gravity.
- [x] Create static rectangular bodies for the arena walls (top, bottom, left, right).
- [x] Create a static rectangular body for the central barrier.
- [x] Create a static rectangular body for the door within the central barrier.
- [x] Implement state variables for `ballBounceCount`, `leftSideCount`, `rightSideCount`, and `isDoorOpen`. Initialize `ballBounceCount` to 0, `leftSideCount` and `rightSideCount` based on initial ball distribution, and `isDoorOpen` to `false`.
- [x] Generate 20 circular bodies (balls) with appropriate properties and random initial positions within the arena.
- [x] Add all static and dynamic bodies to the Matter.js `World`.
- [x] Implement the simulation loop using `Matter.Engine.run()` or a `requestAnimationFrame` loop with `Matter.Engine.update()`.
- [x] Implement collision detection using `Matter.Events.on(engine, 'collisionStart', ...)` to specifically track ball-to-ball collisions and increment `ballBounceCount`.
- [x] Implement logic within the simulation loop or a separate interval to track ball positions and update `leftSideCount` and `rightSideCount`.
- [x] Render two background `div` elements behind the canvas for dynamic shading.
- [x] Implement logic to calculate the ball distribution imbalance based on `leftSideCount` and `rightSideCount`.
- [x] Dynamically update the background color of the shading `div`s based on the imbalance, using dark mode friendly red and blue shades that fade with the degree of imbalance.
- [x] Implement the `toggleDoor()` function to switch the `isDoorOpen` state.
- [x] Use a `useEffect` hook dependent on `isDoorOpen` to add or remove the door body from the Matter.js `World`.
- [x] Add a button to the component's UI that calls `toggleDoor()`. Update the button text based on `isDoorOpen`.
- [x] Display the `ballBounceCount` state in the component's UI.
- [x] Apply Tailwind CSS classes for component styling, adhering to the terminal aesthetic.
- [x] Add Standard CSS rules for the dynamic background shading elements.
- [x] Consider and potentially implement Framer Motion animations for the module's entry and exit transitions in the `CentralContentWindow`.
- [x] Update [`src/components/ModuleMenu.tsx`](src/components/ModuleMenu.tsx) to include a menu item for "Maxwell's Demon".
- [x] Modify the state logic in [`src/App.tsx`](src/App.tsx) to render the `MaxwellsDemon` component when selected.
- [x] Update the `DescriptionSection` content logic in [`src/App.tsx`](src/App.tsx) to display the description from [`docs/modules/maxwells-demon.md`](docs/modules/maxwells-demon.md).
- [ ] Write unit tests for the ball counting and background color calculation logic.
- [ ] Write integration tests for the `MaxwellsDemon` component, including testing the door button functionality.
- [ ] Ensure all tests pass.
- [ ] Update [`docs/modules/maxwells-demon.md`](docs/modules/maxwells-demon.md) with any implementation details.
- [x] Update [`docs/todo-maxwells-demon.md`](docs/todo-maxwells-demon.md) by checking off completed items.
- [ ] Commit changes to Git.
- [ ] Push changes to the remote repository.
- [ ] Build the application.
- [ ] Deploy the updated build to S3.
