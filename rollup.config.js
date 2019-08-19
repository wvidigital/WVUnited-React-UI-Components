import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';

export default {
  external: [
    'date-input-polyfill',
    'react',
    'react-dom',
    'prop-types',
    'react-slick',
    'styled-components',
    'time-input-polyfill/auto',
  ],
  input: 'src/index.js',
  output: {
    dir: 'build',
    format: 'cjs',
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
      presets: [
        ['@babel/preset-env', { modules: false }],
        '@babel/preset-react',
      ],
    }),
    postcss(),
  ],
};
