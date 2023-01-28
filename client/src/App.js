import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./scenes/dashboard/Dashboard";
import Layout from "./scenes/layout/Layout";
import { themeSettings } from "./theme";

function App() {
  const mode = useSelector((state) => state.global.mode);
  //console.log(mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  //console.log(theme.palette.background); // "#191f45";

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

/*
The useMemo hook is a way to optimize the performance of a function in a React application. It takes a function as an argument and an array of dependencies, and it returns a memoized version of the function. The memoized version of the function will only be recomputed if one of the dependencies has changed.

In the code you provided, the useMemo hook is being used to create a custom theme using the createTheme function from Material-UI. The theme is created by calling the themeSettings function and passing it the mode variable as an argument. The mode variable is included in the array of dependencies for the useMemo hook, so the theme will only be recomputed if the value of mode changes.

Here's a more detailed breakdown of what's happening in the code:

The useMemo hook is called with a function as the first argument and an array of dependencies as the second argument.
The function passed to useMemo calls the createTheme function from Material-UI and passes it the result of calling the themeSettings function with the mode variable as an argument.
The useMemo hook returns a memoized version of the theme created by the createTheme function.
The memoized theme is only recomputed if the value of mode changes.
Overall, this code is using the useMemo hook to optimize the performance of the theme creation process by only recomputing the theme when necessary.
*/

/*
2. What is memoized version of useMemo() hook in react app?
In computer science, memoization is a technique for optimizing the performance of a function by caching its results. When a memoized function is called with the same arguments as a previous call, it can return the cached result instead of computing the result again. This can significantly improve the performance of a function, particularly if it is computationally expensive or if it is called frequently with the same arguments.

The useMemo hook in React is a way to use memoization to optimize the performance of functional components. When you call useMemo with a function and an array of dependencies, it returns a memoized version of the function. This means that the function will only be recomputed if one of the dependencies has changed.

For example, consider the following code:

Copy code
const expensiveFunction = (arg1, arg2) => {
  // Expensive computation here...
  return result;
}

const memoizedFunction = useMemo(() => expensiveFunction, [arg1, arg2]);
In this example, the memoizedFunction is a memoized version of the expensiveFunction. When memoizedFunction is called, it will check the values of arg1 and arg2 to see if they have changed since the last time it was called. If they have not changed, it will return the cached result from the previous call. If they have changed, it will call the expensiveFunction and cache the result for future calls.

This can help improve the performance of a React application by avoiding unnecessary computations.
*/

/*
What is CssBaseline in material-ui.com?
CssBaseline is a component in the Material-UI library that helps to reset and normalize the styles of an application. It is designed to be used as the root component of a React application and should be placed at the top of the component tree.

Using CssBaseline can help ensure that the styles applied to your application are consistent across different browsers and devices. It resets and normalizes styles for things like margins, paddings, font sizes, and more. It also applies a default font and color scheme to the application.

To use CssBaseline, you will need to have Material-UI installed in your project. You can install Material-UI by running the following command in your terminal:

Copy code
npm install @material-ui/core
Once you have Material-UI installed, you can import the CssBaseline component and use it in your code like this:

Copy code
import { CssBaseline } from '@material-ui/core';

function App() {
  return (
    <>
      <CssBaseline />
      // Other components go here
    </>
  );
}
This will reset and normalize the styles for your application and apply a default font and color scheme. You can then build on top of this baseline to create your own custom styles.

For more information about CssBaseline and how to use it, you can refer to the Material-UI documentation:
*/
