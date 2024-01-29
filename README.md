# Пример вставки HTML, CSS, и JS на страницу из реакт компонента

Запуск проекта:
```bash
yarn install
yarn dev
```

Сборка проекта:
```bash
yarn build
```

## Особенности реализации
Согласно [этому комментарию](https://stackoverflow.com/questions/60618844/react-hooks-useeffect-is-called-twice-even-if-an-empty-array-is-used-as-an-ar), 
из-за использования `React.StrictMode`, dev-сервер может вызывать `useEffect` несколько раз. После сборки все работает нормально.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
