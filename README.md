# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Repository / Remote 설정

이 프로젝트는 개인 GitHub 저장소와 회사 GitHub 저장소 두 곳에 동시에 push되도록 설정되어 있습니다.

| remote | fetch | push |
| --- | --- | --- |
| `origin` | `https://github.com/ChyoRi/pdms-test.git` | `https://github.com/ChyoRi/pdms-test.git` + `https://github.com/designpscz/PDMS.git` (동시 push) |
| `company` | `https://github.com/designpscz/PDMS.git` | `https://github.com/designpscz/PDMS.git` |

- `git push` (또는 `git push origin <branch>`) 실행 시 개인 저장소(`pdms-test`)와 회사 저장소(`designpscz/PDMS`)에 동시에 반영됩니다.
- `fetch`/`pull`은 여전히 개인 저장소(`origin`)에서만 이루어집니다.
- 회사 저장소에만 별도로 push하고 싶다면 `git push company <branch>`를 사용합니다.
- 관리 중인 브랜치: `master`, `develop`

### 동시 push 설정 방법 (재현용)

```bash
git remote add company https://github.com/designpscz/PDMS.git
git remote set-url --add --push origin https://github.com/ChyoRi/pdms-test.git
git remote set-url --add --push origin https://github.com/designpscz/PDMS.git
```

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
