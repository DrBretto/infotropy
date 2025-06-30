# Maxwell's Demon Module Plan

## Module Description for Description Section

A physics simulation using Matter.js demonstrating Maxwell's Demon concept with bouncing balls, a controllable door, and dynamic background shading based on ball distribution.

## Technical Details

This module will implement a 2D physics simulation using the Matter.js library, rendered onto a canvas element. It will track ball-to-ball collisions and the distribution of balls within a divided arena to dynamically update background colors.

- **Technology:** Matter.js, React, TypeScript, Tailwind CSS, Framer Motion
- **Functionality:**
  - Initialize and manage a Matter.js engine, renderer, and world.
  - Create static boundaries and a central barrier with a controllable door.
  - Generate and manage dynamic circular bodies (balls) with initial random velocities.
  - Disable gravity for continuous bouncing.
  - Detect and count ball-to-ball collisions.
  - Track the number of balls on each side of the central barrier.
  - Dynamically shade the background based on ball distribution imbalance.
  - Implement clickable door control.
  - Display the total ball bounce count.
  - Handle canvas resizing and ensure the simulation fits the window.
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
11. Create a static rectangular body for the door within the central barrier, with increased height and a distinct render color to make it visible and clickable.
12. Implement state variables for `ballBounceCount`, `leftSideCount`, `rightSideCount`, and `isDoorOpen`. Initialize `ballBounceCount` to 0, `leftSideCount` and `rightSideCount` based on initial ball distribution, and `isDoorOpen` to `false`.
13. Generate 20 circular bodies (balls) with appropriate properties, random initial positions, and doubled initial velocities. Set their render color to white.
14. Add all static and dynamic bodies to the Matter.js `World`.
15. Implement the simulation loop using `Matter.Engine.run()` or a `requestAnimationFrame` loop with `Matter.Engine.update()`.
16. Implement collision detection using `Matter.Events.on(engine, 'collisionStart', ...)` to specifically track ball-to-ball collisions and increment `ballBounceCount`.
17. Implement logic within the simulation loop or a separate interval to track ball positions and update `leftSideCount` and `rightSideCount`.
18. Render two background `div` elements behind the canvas for dynamic shading.
19. Implement logic to calculate the ball distribution imbalance based on `leftSideCount` and `rightSideCount`.
20. Investigate and fix the dynamic background shading logic to ensure it correctly reflects the ball distribution imbalance with appropriate color interpolation (red for more balls, blue for fewer balls, fading with imbalance). **(Completed)**
21. Implement click detection on the Matter.js render instance to toggle the door state when the door body is clicked, ensuring it only affects the door and does not interfere with other application events. **(Completed)**
22. Adjust the layout and styling of the simulation area and UI elements to ensure everything fits properly within the `CentralContentWindow` and the ball counts are visible. **(Completed)**
23. Investigate and fix the white border around the main application screen. **(Completed)**
24. Display the `ballBounceCount` state in the component's UI.
25. Apply Tailwind CSS classes for component styling, adhering to the terminal aesthetic.
26. Add Standard CSS rules for the dynamic background shading elements.
27. Consider and potentially implement Framer Motion animations for the module's entry and exit transitions in the `CentralContentWindow`.
28. Update [`src/components/ModuleMenu.tsx`](src/components/ModuleMenu.tsx) to include a menu item for "Maxwell's Demon".
29. Modify the state logic in [`src/App.tsx`](src/App.tsx) to render the `MaxwellsDemon` component when selected.
30. Update the `DescriptionSection` content logic in [`src/App.tsx`](src/App.tsx) to display the description from [`docs/modules/maxwells-demon.md`](docs/modules/maxwells-demon.md).
31. Write unit tests for the ball counting and background color calculation logic.
32. Write integration tests for the `MaxwellsDemon` component, including testing the clickable door functionality.
33. Ensure all tests pass.
34. Update [`docs/modules/maxwells-demon.md`](docs/modules/maxwells-demon.md) with any implementation details. **(Completed)**
35. Update [`docs/todo-maxwells-demon.md`](docs/todo-maxwells-demon.md) by checking off completed items.
36. Commit changes to Git.
37. Push changes to the remote repository.
38. Build the application.
39. Deploy the updated build to S3.

## Implementation Details

The core simulation logic for the Maxwell's Demon module has been implemented in [`src/modules/maxwells-demon/MaxwellsDemon.tsx`](src/modules/maxwells-demon/MaxwellsDemon.tsx). This includes:

- Setting up the Matter.js engine, renderer, and world with gravity disabled.
- Creating the arena walls, central barrier, and the door with increased height and a gray render color.
- Generating and adding 20 balls to the simulation with initial random velocities and white color.
- Implementing collision detection to count ball-to-ball bounces.
- Tracking the number of balls on the left and right sides of the barrier.
- Implementing logic to dynamically update the background color of two overlay `div` elements based on the ball distribution imbalance, using interpolated dark mode friendly red and blue shades. This shading is now visible and working correctly.
- Clickable door functionality has been implemented and correctly toggles the door's state when the door body is clicked.
- The layout and positioning of UI elements have been adjusted to ensure visibility and proper fit within the window. The bottom of the simulation area is no longer cut off.
- The white border around the main application screen has been removed.
- The module has been integrated into the application menu and rendering logic in `App.tsx` and `CentralContentWindow.tsx`.
- Basic Framer Motion animations for the module's entry and exit have been added.

Unit and integration tests have been started in [`src/modules/maxwells-demon/MaxwellsDemon.test.tsx`](src/modules/maxwells-demon/MaxwellsDemon.test.tsx), including tests for ball bounce counting, background color updates, and door toggling. However, there are currently TypeScript errors in the test file related to the mocking of Matter.js types that need to be resolved.

## Testing Strategy

- **Unit Tests:** Focus on pure functions and logic, such as the calculation of background colors based on ball counts and the logic for incrementing the bounce counter.
- **Integration Tests:** Test the `MaxwellsDemon` component's interaction with the UI, specifically the clickable door functionality and the display of the bounce count. Mock the Matter.js engine to isolate component testing from the physics simulation itself.

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
    MaxwellsDemonModule --> ClickableDoor
    MaxwellsDemonModule --> BounceCountDisplay
    MaxwellsDemonModule --> BackgroundShading

    ClickableDoor -- Triggers --> ToggleDoorState
    ToggleDoorState -- Modifies --> MatterJsEngine (add/remove door body)

    MatterJsEngine -- Detects --> Collisions (Ball-to-Ball Confirmed)
    Collisions -- Updates --> BallBounceCountState

    MatterJsEngine -- Tracks --> BallPositions
    BallPositions -- Updates --> BallSideCountsState
    BallSideCountsState -- Updates --> BackgroundShading

    ModuleMenu -- Selects Module --> App (Updates state)
```
