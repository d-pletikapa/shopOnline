import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/index.html'),
        cart: path.resolve(__dirname, 'src/cart.html'),
        blog: path.resolve(__dirname, 'src/blog.html'),
        article: path.resolve(__dirname, 'src/article.html'),
        product: path.resolve(__dirname, 'src/product.html'),
        category: path.resolve(__dirname, 'src/category.html'),
      },
      output: {
        entryFileNames: 'js/[name]-[hash].js',
        chunkFileNames: 'js/[name]-[hash].js',
        assetFileNames: ({ name }) => {
          if (name && name.endsWith('.css')) return 'css/[name]-[hash][extname]';
          if (name && /\.(woff2?|ttf|eot|otf)$/.test(name)) return 'fonts/[name]-[hash][extname]';
          return 'assets/[name]-[hash][extname]';
        }
      }
    },
  },
  server: {
    open: '/index.html',
  },
  css: {
    preprocessorOptions: {
      scss: {},
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
