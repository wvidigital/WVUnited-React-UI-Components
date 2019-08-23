import svgr from '@svgr/rollup';
import path from 'path';
import postcssUrl from 'postcss-url';
import alias from 'rollup-plugin-alias';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import url from 'rollup-plugin-url';

const defaultConfig = {
  external: [
    'chart.js',
    'date-input-polyfill',
    'polished',
    'prop-types',
    'react',
    'react-dom',
    'react-chartjs-2',
    'react-slick',
    'rebass',
    'rebass/styled-components',
    'slick-carousel',
    'styled-components',
    'time-input-polyfill',
  ],
  output: {
    format: 'cjs',
  },
  plugins: [
    alias({
      rebass: path.resolve(process.cwd(), 'node_modules', 'rebass'),
      'styled-components': path.resolve(
        process.cwd(),
        'node_modules',
        'styled-components',
      ),
    }),
    url(),
    svgr(),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env', '@babel/preset-react'],
    }),
    resolve(),
    postcss({
      plugins: [postcssUrl({ url: 'inline' })],
    }),
    commonjs(),
  ],
};

export default [
  {
    ...defaultConfig,
    input: 'src/index.js',
    output: {
      ...defaultConfig.output,
      dir: 'build',
    },
  },
  // This is temporary and to be removed once all previous components have been updated
  // https://github.com/wvidigital/WVUnited-React-UI-Components/issues/15
  {
    ...defaultConfig,
    input: 'src/prev/index.js',
    output: {
      ...defaultConfig.output,
      dir: 'prev',
    },
  },
];
