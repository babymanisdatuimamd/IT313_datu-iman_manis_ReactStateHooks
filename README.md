
# IT313 Laboratory 5 - React State & Hooks

## Problem
This project is a Lab Timer and Practice Tracker built with React Native and Expo. It helps students track solved practice problems and their laboratory session time.

## Approach
- useState stores the solved count and timer running status.
- useEffect manages the stopwatch interval and cleanup.
- Conditional rendering displays "Great job!" and the timer status.
- Lifting state up allows PracticeTracker and Stopwatch to share state through LabScreen.
- The custom useStopwatch hook manages the elapsed seconds.

## How to Run
1. Install Node.js and Expo Go.
2. Open the project folder in VS Code.
3. Run `npm install` if dependencies need to be installed.
4. Run `npx expo start`.
5. Open Expo Go on your phone and scan the QR code.

## Components
- LabScreen
- PracticeTracker
- Stopwatch
- useStopwatch
