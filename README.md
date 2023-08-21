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

Strict Mode en React
El modo estricto ("strict mode") en React es una opción que puedes habilitar para habilitar ciertas comprobaciones y restricciones adicionales en tu aplicación. Al habilitar el modo estricto, se activan varias características que buscan ayudar a evitar errores y mejorar la calidad del código, como:

La validación de las propiedades de los componentes de clase.

La validación de los nombres de los métodos de los componentes de clase.

La verificación de que se están usando los métodos de los ciclos de vida de forma correcta.

La verificación de que se están usando los métodos de la interfaz del navegador de forma segura.

Si decides eliminar el modo estricto de tu aplicación, se desactivarán estas comprobaciones y restricciones adicionales. Esto puede hacer que sea más fácil escribir código, pero también puede aumentar el riesgo de errores y problemas en la aplicación. Por lo tanto, es importante tener en cuenta esto al tomar la decisión de eliminar el modo estricto.