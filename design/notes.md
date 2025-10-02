# USIU First-Year Companion - Design Notes

## Wireframe 1: Home/Greeting Screen

This wireframe shows the initial landing page with a personalized greeting message. The JavaScript will prompt for the student's name on page load and display a welcome message like "Hello, [Name] 👋". The page includes three main action buttons: "Run Estimator" to trigger the cost calculation, "Toggle Theme" to switch between day and night modes, and "Reset" to clear the summary. The layout is mobile-first with a clean header containing the USIU branding and a footer with copyright information.

## Wireframe 2: Estimator Input Flow

This wireframe illustrates the sequence of prompt dialogs that appear when the user clicks "Run Estimator". The JavaScript will trigger four consecutive prompts asking for: 1) days on campus per week, 2) transport cost per trip, 3) snacks per day, and 4) price per snack. Each input is validated and converted to a number using the Number() function. The wireframe shows how these prompts appear on mobile devices with clear instructions and example values to guide the user.

## Wireframe 3: Summary Display

This wireframe demonstrates how the calculated results are displayed in the summary section. The JavaScript formats the output with clear labels for each cost category (transport, snacks, total) and shows the potential savings with a 10% reduction. The summary is displayed in a pre-formatted block with proper spacing and alignment. The wireframe also shows the console.log output that developers can use for debugging, displaying all input values and calculated results in a structured format.

## Design Decisions

1. **Mobile-First Approach**: All wireframes prioritize mobile layout with touch-friendly buttons and readable text sizes.

2. **USIU Branding**: The design incorporates USIU colors (blue accent) and terminology (Karibu for welcome) to create a familiar environment for new students.

3. **Progressive Disclosure**: Information is revealed in stages - first the greeting, then the estimator inputs, and finally the summary - to avoid overwhelming new students.

4. **Accessibility**: High contrast colors and clear typography ensure readability in both light and dark themes.

5. **Simplified Input**: Using prompt dialogs keeps the implementation simple while still gathering all necessary information for calculations.