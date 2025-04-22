// modal-component/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import cssInjectedByJs from 'vite-plugin-css-injected-by-js';
import path from 'path';

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic'
    }),
    cssInjectedByJs()
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'Modal',
      fileName: (format) => `modal.${format}.js`,
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'prop-types',
        'react-icons',
        /^react-icons\/.*/,
        'react/jsx-runtime',
        'react/jsx-dev-runtime'
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'prop-types': 'PropTypes',
          'react-icons': 'ReactIcons',
          'react/jsx-runtime': 'ReactJSXRuntime',
          'react/jsx-dev-runtime': 'ReactJSXDevRuntime'
        },
        interop: 'auto'
      }
    },
    sourcemap: true,
    minify: false,
    cssCodeSplit: false,
    outDir: 'dist',
    assetsDir: ''
  },
  optimizeDeps: {
    exclude: [
      'react',
      'react-dom',
      'prop-types',
      'react-icons',
      'react/jsx-runtime',
      'react/jsx-dev-runtime'
    ]
  },
  resolve: {
    alias: {
      react: 'react',
      'react-dom': 'react-dom',
      'react/jsx-runtime': 'react/jsx-runtime',
      'react/jsx-dev-runtime': 'react/jsx-dev-runtime'
    }
  },
  css: {
    modules: false,
    preprocessorOptions: {
      scss: {
        additionalData: ''
      }
    },
    devSourcemap: true
  }
});