import nextConfig from 'eslint-config-next';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-config-prettier';

const config = [
  ...nextConfig,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      // TypeScript rules
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
  prettier,
  {
    rules: {
      // Next.js rules
      '@next/next/no-img-element': 'off', // Project uses unoptimized images
      // React rules
      'react/react-in-jsx-scope': 'off', // Next.js no requiere importar React
    },
  },
  {
    ignores: [
      // Default ignores of eslint-config-next:
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
      // Additional ignores:
      'node_modules/**',
      '.next/dev/**',
      'pnpm-lock.yaml',
      'jest.config.cjs',
    ],
  },
];

export default config;
