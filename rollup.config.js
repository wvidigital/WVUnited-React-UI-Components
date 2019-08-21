import path from 'path';
import postcssUrl from 'postcss-url';
import alias from 'rollup-plugin-alias';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';

export default {
  external: [
    'chart.js',
    'date-input-polyfill',
    'polished',
    'prop-types',
    'react',
    'react-dom',
    'react-chartjs-2',
    'react-slick',
    'slick-carousel',
    'styled-components',
    'time-input-polyfill',
  ],
  input: 'src/index.js',
  output: {
    dir: 'build',
    format: 'cjs',
  },
  plugins: [
    alias({
      'styled-components': path.resolve(
        process.cwd(),
        'node_modules',
        'styled-components',
      ),
    }),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env', '@babel/preset-react'],
    }),
    resolve(),
    postcss({
      plugins: [postcssUrl({ url: 'inline' })],
    }),
    commonjs({ ignore: ['node_modules/styled-components/**'] }),
  ],
};
