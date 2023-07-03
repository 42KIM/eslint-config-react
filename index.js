module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['jsx-a11y'],
  rules: {
    'react/destructuring-assignment': ['error', 'always'],
    'react/hook-use-state': ['warn', { 'allowDestructuredState': true }],
    'react/jsx-boolean-value': ['warn', 'never'],
    'react/jsx-closing-bracket-location': ['warn', 'line-aligned'],
    'react/jsx-closing-tag-location': 'warn',
    'react/jsx-curly-brace-presence': ['warn', 'never'],
    'react/jsx-curly-spacing': ['warn', 'never'],
    'react/jsx-equals-spacing': ['warn', 'never'],
    'react/jsx-filename-extension': ['warn', { 'extensions': ['.jsx', '.tsx'] }],
    'react/jsx-first-prop-new-line': ['warn', 'multiline'],
    'react/jsx-max-props-per-line': ['warn', { 'maximum':  { 'single': 2, 'multi': 1 } }],
    'react/jsx-no-useless-fragment': ['warn'],
    'react/jsx-pascal-case': 'error',
    'react/jsx-tag-spacing': 'error',
    'react/no-array-index-key': 'error',
    'react/react-in-jsx-scope': 'off'
  }
}