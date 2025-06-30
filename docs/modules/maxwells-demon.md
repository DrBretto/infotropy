# Maxwell's Demon Module Plan

## Module Description for Description Section

A physics simulation using Matter.js demonstrating Maxwell's Demon concept with bouncing balls, a controllable door, and dynamic background shading based on ball distribution.

## Technical Details

This module will implement a 2D physics simulation using the Matter.js library, rendered onto a canvas element. It will track ball-to-ball collisions and the distribution of balls within a divided arena to dynamically update background colors.

- **Technology:** Matter.js, React, TypeScript, Tailwind CSS, Framer Motion
- **Functionality:**
  - Initialize and manage a Matter.js engine, renderer, and world.
  - Create static boundaries and a central barrier with a controllable door.
  - Generate and manage dynamic circular bodies (balls).
  - Disable gravity for continuous bouncing.
  - Detect and count ball-to-ball collisions.
  - Track the number of balls on each side of the central barrier.
  - Dynamically shade the background based on ball distribution imbalance.
  - Provide a UI control to open and close the door.
  - Display the total ball bounce count.
  - Handle canvas resizing.
  - Clean up Matter.js instance on component unmount.

## Component Structure

- [`src/modules/maxwells-demon/MaxwellsDemon.tsx`](src/modules/maxwells-demon/MaxwellsDemon.tsx): The main React component for the simulation.
- [`src/modules/maxwells-demon/MaxwellsDemon.test.tsx`](src/modules/maxwells-demon/MaxwellsDemon.test.tsx): Test file for the component.
- [`docs/modules/maxwells-demon.md`](docs/modules/maxwells-demon.md): This documentation file.
- [`docs/todo-maxwells-demon.md`](docs/todo-maxwells-demon.md): Module-specific to-do checklist.

## Detailed Implementation Steps

1.  Create the module directory `src/modules/maxwells-demon/`.
2.  Create the main component file [`src/modules/maxwells-demon/MaxwellsDemon.tsx`](src/modules/maxwells-demon/MaxwellsDemon.tsx).
3.  Create the test file [`src/modules/maxwells-demon/MaxwellsDemon.test.tsx`](src/modules/maxwells-demon/MaxwellsDemon.test.tsx).
4.  Create the module documentation file [`docs/modules/maxwells-demon.md`](docs/modules/maxwells-demon.md) (this file).
5.  Create the module-specific to-do checklist file [`docs/todo-maxwells-demon.md`](docs/todo-maxwells-demon.md).
6.  In [`MaxwellsDemon.tsx`](src/modules/maxwells-demon/MaxwellsDemon.tsx), set up the basic React component structure and a ref for the Matter.js canvas.
7.  Implement a `useEffect` hook for initializing and cleaning up the Matter.js engine, renderer, and world.
8.  Configure the Matter.js engine to disable gravity.
9.  Create static rectangular bodies for the arena walls (top, bottom, left, right).
10. Create a static rectangular body for the central barrier.
11. Create a static rectangular body for the door within the central barrier.
12. Implement state variables for `ballBounceCount`, `leftSideCount`, `rightSideCount`, and `isDoorOpen`. Initialize `ballBounceCount` to 0, `leftSideCount` and `rightSideCount` based on initial ball distribution, and `isDoorOpen` to `false`.
13. Generate 20 circular bodies (balls) with appropriate properties and random initial positions within the arena.
14. Add all static and dynamic bodies to the Matter.js `World`.
15. Implement the simulation loop using `Matter.Engine.run()` or a `requestAnimationFrame` loop with `Matter.Engine.update()`.
16. Implement collision detection using `Matter.Events.on(engine, 'collisionStart', ...)` to specifically track ball-to-ball collisions and increment `ballBounceCount`.
17. Implement logic within the simulation loop or a separate interval to track ball positions and update `leftSideCount` and `rightSideCount`.
18. Render two background `div` elements behind the canvas for dynamic shading.
19. Implement logic to calculate the ball distribution imbalance based on `leftSideCount` and `rightSideCount`.
20. Dynamically update the background color of the shading `div`s based on the imbalance, using dark mode friendly red and blue shades that fade with the degree of imbalance.
21. Implement the `toggleDoor()` function to switch the `isDoorOpen` state.
22. Use a `useEffect` hook dependent on `isDoorOpen` to add or remove the door body from the Matter.js `World`.
23. Add a button to the component's UI that calls `toggleDoor()`. Update the button text based on `isDoorOpen`.
24. Display the `ballBounceCount` state in the component's UI.
25. Apply Tailwind CSS classes for component styling, adhering to the terminal aesthetic.
26. Add Standard CSS rules for the dynamic background shading elements.
27. Consider and potentially implement Framer Motion animations for the module's entry and exit transitions in the `CentralContentWindow`.
28. Update [`src/components/ModuleMenu.tsx`](src/components/ModuleMenu.tsx) to include a menu item for "Maxwell's Demon".
29. Modify the state logic in [`src/App.tsx`](src/App.tsx) to render the `MaxwellsDemon` component when selected.
30. Update the `DescriptionSection` content logic in [`src/App.tsx`](src/App.tsx) to display the description from [`docs/modules/maxwells-demon.md`](docs/modules/maxwells-demon.md).
31. Write unit tests for the ball counting and background color calculation logic.
32. Write integration tests for the `MaxwellsDemon` component, including testing the door button functionality.
33. Ensure all tests pass.
34. Update [`docs/modules/maxwells-demon.md`](docs/modules/maxwells-demon.md) with any implementation details.
35. Update [`docs/todo-maxwells-demon.md`](docs/todo-maxwells-demon.md) by checking off completed items.
36. Commit changes to Git.
37. Push changes to the remote repository.
38. Build the application.
39. Deploy the updated build to S3.

## Implementation Details

The core simulation logic for the Maxwell's Demon module has been implemented in [`src/modules/maxwells-demon/MaxwellsDemon.tsx`](src/modules/maxwells-demon/MaxwellsDemon.tsx). This includes:

- Setting up the Matter.js engine, renderer, and world with gravity disabled.
- Creating the arena walls, central barrier, and the door.
- Generating and adding 20 balls to the simulation.
- Implementing collision detection to count ball-to-ball bounces.
- Tracking the number of balls on the left and right sides of the barrier.
- Implementing logic to dynamically update the background color of two overlay `div` elements based on the ball distribution imbalance, using interpolated dark mode friendly red and blue shades.
- Adding a button to toggle the door state and displaying the ball bounce count in the UI.
- Integrating the module into the application by adding it to the `ModuleMenu` and updating the rendering logic in `App.tsx` and `CentralContentWindow.tsx`.
- Added basic Framer Motion animations for the module's entry and exit.

Unit and integration tests have been started in [`src/modules/maxwells-demon/MaxwellsDemon.test.tsx`](src/modules/maxwells-demon/MaxwellsDemon.test.tsx), including tests for ball bounce counting, background color updates, and door toggling. However, there are currently TypeScript errors in the test file related to the mocking of Matter.js types that need to be resolved.

## Testing Strategy

- **Unit Tests:** Focus on pure functions and logic, such as the calculation of background colors based on ball counts and the logic for incrementing the bounce counter.
- **Integration Tests:** Test the `MaxwellsDemon` component's interaction with the UI, specifically the door button toggling and the display of the bounce count. Mock the Matter.js engine to isolate component testing from the physics simulation itself.

## Animation Considerations

- Utilize Framer Motion for smooth transitions when the `MaxwellsDemon` module is rendered within the `CentralContentWindow`, following the patterns established in [`docs/ANIMATION.md`](docs/ANIMATION.md).

## Future Enhancements

- Add controls for adjusting the number of balls.
- Implement different types of particles or interactions.
- Add visualizations for other physical properties (e.g., velocity).
- Integrate with the chat interface for interactive control or data display.

```mermaid
graph TD
    App -- State (activeModule) --> CentralContentWindow
    App -- State (activeModule) --> DescriptionSection

    CentralContentWindow -- Renders based on state --> ModuleMenu
    CentralContentWindow -- Renders based on state --> MaxwellsDemonModule

    MaxwellsDemonModule --> SimulationCanvas
    MaxwellsDemonModule --> DoorButton
    MaxwellsDemonModule --> BounceCountDisplay
    MaxwellsDemonModule --> BackgroundShading (Dynamic CSS)

    MaxwellsDemonModule -- Uses --> MatterJsEngine
    MatterJsEngine -- Detects --> Collisions
    Collisions -- Updates --> BallBounceCountState
    MatterJsEngine -- Tracks --> BallPositions
    BallPositions -- Updates --> BallSideCountsState
    BallSideCountsState -- Updates --> BackgroundShading

    DoorButton -- Triggers --> ToggleDoorState
    ToggleDoorState -- Modifies --> MatterJsEngine (add/remove door body)

    ModuleMenu -- Selects Module --> App (Updates state)
```
