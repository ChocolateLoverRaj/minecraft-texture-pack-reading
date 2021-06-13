import emptyDir from 'make-empty-dir'
import { join } from 'path'
import { copyFile, mkdir } from 'fs/promises'
import { writeFile } from 'jsonfile'

const distDir = join(__dirname, 'dist')
const resDir = join(__dirname, 'res')
const mcMetaFile = 'pack.mcmeta'
const iconFile = 'pack.png'
const minecraftDir = join(distDir, 'assets', 'minecraft')
const modelsDir = join(minecraftDir, 'models')
const customTexturePack = 'reading'
const customModelsDir = join(modelsDir, `item_${customTexturePack}`)
const vanillaModelsDir = join(modelsDir, 'item')
const customTexturesDir = join(minecraftDir, 'textures', customTexturePack)
const toolIconFile = 'tool.png'
const toolModelFile = 'tool.json'
const toolTypes = ['wooden', 'stone', 'golden', 'iron', 'diamond', 'netherite'] as const
const tools = ['shovel', 'pickaxe', 'axe', 'hoe'] as const

(async () => {
  await emptyDir(distDir)
  await Promise.all([
    copyFile(join(resDir, mcMetaFile), join(distDir, mcMetaFile)),
    copyFile(join(resDir, iconFile), join(distDir, iconFile)),
    mkdir(minecraftDir, { recursive: true }).then(async () => await Promise.all([
      mkdir(modelsDir)
        .then(async () => await Promise.all([
          mkdir(customModelsDir).then(() => writeFile(join(customModelsDir, toolModelFile), {
            parent: 'minecraft:item/handheld',
            textures: {
              layer0: `minecraft:${customTexturePack}/tool`
            }
          }, { spaces: 2 })),
          mkdir(vanillaModelsDir).then(async () => await Promise.all(tools.map(async tool =>
            await Promise.all(toolTypes.map(async toolType => writeFile(join(vanillaModelsDir, `${toolType}_${tool}.json`), {
              parent: `minecraft:item_${customTexturePack}/tool`
            }, { spaces: 2 }))))))
        ])),
      mkdir(customTexturesDir, { recursive: true }).then(async () =>
        await copyFile(join(resDir, toolIconFile), join(customTexturesDir, toolIconFile)))
    ]))
  ])
})()
  .catch(e => {
    console.error(e.message)
    process.exit(1)
  })
