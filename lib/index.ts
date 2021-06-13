import emptyDir from 'make-empty-dir'
import { join } from 'path'
import { copyFile, mkdir } from 'fs/promises'
import { writeFile } from 'jsonfile'
import multiplyArrays from './multiplyArrays'

const distDir = join(__dirname, '../dist')
const resDir = join(__dirname, '../res')
const mcMetaFile = 'pack.mcmeta'
const iconFile = 'pack.png'
const minecraftDir = join(distDir, 'assets', 'minecraft')
const modelsDir = join(minecraftDir, 'models')
const customTexturePack = 'reading'
const customModelsDir = join(modelsDir, `item_${customTexturePack}`)
const vanillaModelsDir = join(modelsDir, 'item')
const customTexturesDir = join(minecraftDir, 'textures', customTexturePack)
const toolTypes = ['wooden', 'stone', 'golden', 'iron', 'diamond', 'netherite'] as const
const tools = ['shovel', 'pickaxe', 'axe', 'hoe'] as const

interface Category {
  items: string[]
  texture: string
  name: string
  model: object
}

const itemModel = {
  parent: 'minecraft:item/handheld',
  textures: {
    layer0: `minecraft:${customTexturePack}/tool`
  }
}
const categories: Category[] = [{
  name: 'tool',
  model: itemModel,
  texture: join(resDir, 'tool.png'),
  items: multiplyArrays(toolTypes, tools).map(([type, tool]) => `${type}_${tool}`)
}, {
  name: 'bucket',
  model: itemModel,
  texture: join(resDir, 'bucket.png'),
  items: [
    'bucket',
    'water_bucket',
    'lava_bucket',
    'powder_snow_bucket',
    'milk_bucket',
    'pufferfish_bucket',
    'salmon_bucket',
    'cod_bucket',
    'tropical_fish_bucket',
    'axolotl_bucket'
  ]
}];

(async () => {
  await emptyDir(distDir)
  await Promise.all([
    copyFile(join(resDir, mcMetaFile), join(distDir, mcMetaFile)),
    copyFile(join(resDir, iconFile), join(distDir, iconFile)),
    mkdir(minecraftDir, { recursive: true }).then(async () => await Promise.all([
      mkdir(modelsDir)
        .then(async () => await Promise.all([
          mkdir(customModelsDir).then(async () => await Promise.all(categories.map(async ({ name }) =>
            await writeFile(join(customModelsDir, `${name}.json`), {
              parent: 'minecraft:item/handheld',
              textures: {
                layer0: `minecraft:${customTexturePack}/${name}`
              }
            }, { spaces: 2 })))),
          mkdir(vanillaModelsDir).then(async () => await Promise.all(categories.map(async ({ items, name }) =>
            await Promise.all(items.map(async item => await writeFile(join(vanillaModelsDir, `${item}.json`), {
              parent: `minecraft:item_${customTexturePack}/${name}`
            }, { spaces: 2 }))))))
        ])),
      mkdir(customTexturesDir, { recursive: true }).then(async () =>
        await Promise.all(categories.map(async ({ name, texture }) =>
          await copyFile(texture, join(customTexturesDir, `${name}.png`)))))
    ]))
  ])
})()
  .catch(e => {
    console.error(e.message)
    process.exit(1)
  })
