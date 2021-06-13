import emptyDir from 'make-empty-dir'
import { join } from 'path'
import { copyFile } from 'fs/promises'

const distDir = join(__dirname, 'dist')
const resDir = join(__dirname, 'res')
const mcMetaFile = 'pack.mcmeta'
const iconFile = 'pack.png';

(async () => {
  await emptyDir(distDir)
  await copyFile(join(resDir, mcMetaFile), join(distDir, mcMetaFile))
  await copyFile(join(resDir, iconFile), join(distDir, iconFile))
})()
  .catch(e => {
    console.error(e.message)
    process.exit(1)
  })
