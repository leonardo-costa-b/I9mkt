import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends('next/core-web-vitals', 'next/typescript'),
    ...compat.env({
        browser: true,
        es2021: true,
        node: true,
    }),
    ...compat.plugins(
        'react',
        '@typescript-eslint',
        'eslint-plugin-prettier',
        'import',
        'simple-import-sort',
    ),
    ...compat.config({
        parser: '@typescript-eslint/parser',
        parserOptions: {
            sourceType: 'module',
        },
        rules: {
            'prettier/prettier': [
                'error',
                {
                    printWidth: 100,
                    tabWidth: 4,
                    singleQuote: true,
                    trailingComma: 'all',
                    arrowParens: 'always',
                    semi: true,
                    endOfLine: 'auto',
                    bracketSpacing: true,
                },
            ],
            'linebreak-style': 0,
            quotes: ['error', 'single'],
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            'react/react-in-jsx-scope': 'off',
            'react/jsx-uses-react': 'off',
            'react/jsx-filename-extension': [
                1,
                {
                    extensions: ['.js', '.jsx', '.ts', '.tsx'],
                },
            ],
            'require-await': 'error',
            'comma-dangle': [
                'error',
                {
                    arrays: 'only-multiline',
                    objects: 'only-multiline',
                    imports: 'only-multiline',
                    exports: 'only-multiline',
                    functions: 'only-multiline',
                },
            ],
            'simple-import-sort/imports': 'error',
            'simple-import-sort/exports': 'error',
            'import/order': [
                'error',
                {
                    groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index']],
                    'newlines-between': 'always',
                },
            ],
        },
    }),
    {
        ignores: ['.next/**/*', 'next-env.d.ts', 'src/prisma/generated'],
    },
];

export default eslintConfig;
