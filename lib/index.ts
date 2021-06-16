import emptyDir from 'make-empty-dir'
import { join } from 'path'
import { copyFile, mkdir } from 'fs/promises'
import { writeFile } from 'jsonfile'
import customTexturePack from './customTexturePack'
import { Category } from './Category'
import resDir from './resDir'
import toolCategory from './categories/tool'
import bucketCategory from './categories/bucket'
import armorCategories from './categories/armors'
import oreIngotCategory from './categories/oreIngot'
import foodCategory from './categories/food'
import stickCategory from './categories/stickCategory'
import buildingBlockCategory from './categories/buildingBlock'
import slabCategory from './categories/slab'
import stairsCategory from './categories/stairs'
import seedCategory from './categories/seed'

const distDir = join(__dirname, '../dist')
const mcMetaFile = 'pack.mcmeta'
const iconFile = 'pack.png'
const minecraftDir = join(distDir, 'assets', 'minecraft')
const modelsDir = join(minecraftDir, 'models')
const customModelsDir = join(modelsDir, `item_${customTexturePack}`)
const vanillaModelsDir = join(modelsDir, 'item')
const customTexturesDir = join(minecraftDir, 'textures', customTexturePack)

const categories: Category[] = [
  toolCategory,
  bucketCategory,
  ...armorCategories,
  oreIngotCategory,
  foodCategory,
  stickCategory,
  buildingBlockCategory,
  slabCategory,
  stairsCategory,
  seedCategory
];

(async () => {
  await emptyDir(distDir)
  await Promise.all([
    copyFile(join(resDir, mcMetaFile), join(distDir, mcMetaFile)),
    copyFile(join(resDir, iconFile), join(distDir, iconFile)),
    mkdir(minecraftDir, { recursive: true }).then(async () => await Promise.all([
      mkdir(modelsDir)
        .then(async () => await Promise.all([
          mkdir(customModelsDir).then(async () => await Promise.all(categories.map(async ({ name, model }) =>
            await writeFile(join(customModelsDir, `${name}.json`), model, { spaces: 2 })))),
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
