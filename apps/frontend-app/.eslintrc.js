module.exports = {
root: true,
env: {
    browser: true,
    node: true,
    es2020: true
},
extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended'
],
parser: '@typescript-eslint/parser',
parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
    jsx: true
    }
},
plugins: [
    '@typescript-eslint',
    '@nx'
],
settings: {
    react: {
    version: 'detect'
    }
},
rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@next/next/no-html-link-for-pages': 'error',
    '@nx/enforce-module-boundaries': ['error', {
    enforceBuildableLibDependency: true,
    allow: [],
    depConstraints: [{ sourceTag: '*', onlyDependOnLibsWithTags: ['*'] }]
    }]
},
overrides: [
    {
    files: ['*.ts', '*.tsx'],
    rules: {
        '@typescript-eslint/explicit-function-return-type': ['warn', {
        allowExpressions: true,
        allowTypedFunctionExpressions: true
        }]
    }
    }
],
ignorePatterns: [
    '.next/**/*',
    'node_modules/**/*',
    'out/**/*',
    'build/**/*',
    '*.config.js'
]
};
