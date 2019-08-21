import postcssUrl from 'postcss-url';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';

export default {
  external: [
    'chart.js',
    'date-input-polyfill',
    'react',
    'react-dom',
    'prop-types',
    'react-chartjs-2',
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
      presets: ['@babel/preset-env', '@babel/preset-react'],
    }),
    postcss({
      plugins: [postcssUrl({ url: 'inline' })],
    }),
  ],
};
