# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Al crear un custom hook podemos hacer un return de un objeto o de un array. Por ejemplo

    const useCustomHook = () =>{
        
        // Code...
     
    return {dato1, func1} || return [dato1, func1]
    }

Pero al momento de usar el hook y desestructurar el objeto o el array. debemos tener cuidado. Si exportamos un array podemos cambiar el nombre de los elementos dentro del array,  porque se hace por el índice, pero si lo exportamos en forma de objeto(por error o gusto), no podemos cambiar el nombre de los items en el destructuring y tendremos errores. 