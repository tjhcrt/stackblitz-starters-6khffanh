// docs/vite.config.ts
import { defineConfig } from 'vite'
import decap, { createFolderCollection, createField } from 'vite-plugin-decap-cms'

export default defineConfig({
  plugins: [
    decap({
      config: {
        backend: {
          name: 'git-gateway',
          branch: 'main',
        },
        media_folder: 'public/img',
        public_folder: '/img',
        collections: [
          createFolderCollection({
            name: 'guide',
            label: '指南',
            folder: 'guide',
            fields: [
              createField('string', { name: 'title', label: '标题' }),
              createField('string', { name: 'description', label: '描述' }),
              createField('markdown', { name: 'body', label: '正文' }),
            ],
          }),
        ],
      },
    }),
  ],
})