import { createElement } from 'react';
// import { Fragment } from 'react/jsx-runtime';

// Without JSX
// 1) function + explicit return

// eslint-disable-next-line react/function-component-definition
export function App() {
  return createElement('h1', { className: 'greeting' }, 'Hello');
}
// Funkce App je React komponenta, která nepoužívá JSX, ale místo toho přímo volá funkci createElement z knihovny React. Tato funkce vytváří element typu h1 s atributem className nastaveným na hodnotu 'greeting' a s textovým obsahem 'Hello'. Výsledkem je HTML element <h1 class="greeting">Hello</h1>.


// 2) arrow function + implicit return
// export const App = () => createElement('h1', { className: 'greeting' }, 'Hello');
// Tato verze funkce App je React komponenta definovaná jako šipková funkce s implicitním návratem. Stejně jako předchozí příklad nepoužívá JSX, ale přímo volá funkci createElement z knihovny React. Vytváří element typu h1 s atributem className nastaveným na 'greeting' a textovým obsahem 'Hello'. Výsledkem je HTML element <h1 class="greeting">Hello</h1>.

// With JSX
// 3) function + explicit return
// // eslint-disable-next-line react/function-component-definition
// export function App() {
//   return <h1 className="greeting">Hello</h1>;
// }
// Tato verze funkce App je React komponenta, která používá JSX k vytvoření elementu. Funkce vrací element <h1> s atributem className nastaveným na 'greeting' a textovým obsahem 'Hello'. Výsledkem je HTML element <h1 class="greeting">Hello</h1>.

// 4) arrow function + implicit return
// export const X = () => <h1 className="greeting">Hello</h1>;

// 5) arrow function + implicit return
// With JSX
// export const App = () => (
//   <div className="text-center">
//     <h1 className="text-3xl font-bold underline">Wall</h1>
//     <div className="my-2">
//       <p>
//         Edit <code>src/App.tsx</code> and save to test HMR
//       </p>
//     </div>
//   </div>
// );

// Without JSX
// 6) function + explicit return
// export const App = () =>
//   createElement(
//     'div',
//     { className: 'text-center' },
//     createElement('h1', { className: 'text-3xl font-bold underline' }, 'Wall'),
//     createElement(
//       'div',
//       { className: 'my-2' },
//       createElement('p', null, 'Edit ', createElement('code', null, 'src/App.tsx'), ' and save to test HMR'),
//     ),
//   );

// 7) array of elements
// export const App = () => [<div key="1">1</div>, <p key="2">2</p>];

// 8) fragment
// export const App = () => (
//   <Fragment>
//     <div className="text-center">
//       <h1 className="text-3xl font-bold underline">Wall</h1>
//       <div className="my-2">
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//     </div>
//     <p>Text</p>
//   </Fragment>
// );

// 9) default export
// const App = () => (
//   <>
//     <div className="text-center">
//       <h1 className="text-3xl font-bold underline">Wall</h1>
//       <div className="my-2">
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//     </div>
//     <p>Text</p>
//   </>
// );
// export default App;
