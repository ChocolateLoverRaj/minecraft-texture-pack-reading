import emptyDir from 'make-empty-dir'
import { join } from 'path'
import { copyFile, mkdir } from 'fs/promises'
import { writeFile } from 'jsonfile'
import multiplyArrays from './multiplyArrays'
import getLogType from './getLogType'
import netherTrees from './netherTrees'
import getWoodType from './getWoodType'
import colors from './colors'
import corals from './corals'

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
// FIXME: Leather armor texture change
const armorTypes = [/* 'leather', */'chainmail', 'iron', 'diamond', 'golden', 'netherite'] as const
const armors = ['helmet', 'chestplate', 'leggings', 'boots'] as const

interface Category {
  items: readonly string[]
  texture: string
  name: string
  model: object
}

const categories: Category[] = [{
  name: 'tool',
  model: {
    parent: 'minecraft:item/handheld',
    textures: {
      layer0: `minecraft:${customTexturePack}/tool`
    }
  },
  texture: join(resDir, 'tool.png'),
  items: multiplyArrays(toolTypes, tools).map(([type, tool]) => `${type}_${tool}`)
}, {
  name: 'bucket',
  model: {
    parent: 'minecraft:item/handheld',
    textures: {
      layer0: `minecraft:${customTexturePack}/bucket`
    }
  },
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
}, ...armors.map<Category>(armor => ({
  name: armor,
  model: {
    parent: 'minecraft:item/generated',
    textures: {
      layer0: `minecraft:${customTexturePack}/${armor}`
    }
  },
  texture: join(resDir, `${armor}.png`),
  items: armorTypes.map(type => `${type}_${armor}`)
})), {
  name: 'ore',
  model: {
    parent: 'minecraft:item/generated',
    textures: {
      layer0: `minecraft:${customTexturePack}/ore`
    }
  },
  texture: join(resDir, 'ore.png'),
  items: [
    'coal',
    'charcoal',
    'diamond',
    'emerald',
    'lapis_lazuli',
    'quartz',
    'amethyst_shard',
    'raw_iron',
    'iron_ingot',
    'raw_copper',
    'copper_ingot',
    'raw_gold',
    'gold_ingot',
    'netherite_ingot',
    'netherite_scrap',
    'redstone'
  ]
}, {
  name: 'food',
  model: {
    parent: 'minecraft:item/generated',
    textures: {
      layer0: `minecraft:${customTexturePack}/food`
    }
  },
  texture: join(resDir, 'food.png'),
  items: [
    'apple',
    'baked_potato',
    'beetroot',
    'beetroot_soup',
    'bread',
    'cake',
    'cake',
    'carrot',
    'chorus_fruit',
    'cooked_chicken',
    'cooked_cod',
    'cooked_mutton',
    'cooked_porkchop',
    'cooked_rabbit',
    'cooked_salmon',
    'cookie',
    'dried_kelp',
    'enchanted_golden_apple',
    'golden_apple',
    'glow_berries',
    'golden_carrot',
    'melon_slice',
    'mushroom_stew',
    'poisonous_potato',
    'potato',
    'pufferfish',
    'pumpkin_pie',
    'rabbit_stew',
    'beef',
    'chicken',
    'cod',
    'mutton',
    'porkchop',
    'rabbit',
    'salmon',
    'rotten_flesh',
    'spider_eye',
    'cooked_beef',
    'suspicious_stew',
    'suspicious_stew',
    'sweet_berries',
    'tropical_fish'
  ]
}, {
  name: 'stick',
  model: {
    parent: 'minecraft:item/handheld',
    textures: {
      layer0: `minecraft:${customTexturePack}/stick`
    }
  },
  texture: join(resDir, 'stick.png'),
  items: ['stick', 'blaze_rod']
}, {
  name: 'building_block',
  model: {
    parent: 'minecraft:block/cube_all',
    textures: {
      all: `minecraft:${customTexturePack}/building_block`
    }
  },
  texture: join(resDir, 'building_block.png'),
  items: [
    'grass_block',
    'dirt',
    'stone',
    'granite',
    'polished_granite',
    'diorite',
    'polished_diorite',
    'andesite',
    'polished_andesite',
    'deepslate',
    'cobbled_deepslate',
    'polished_deepslate',
    'calcite',
    'tuff',
    'dripstone_block',
    'coarse_dirt',
    'podzol',
    'rooted_dirt',
    'crimson_nylium',
    'warped_nylium',
    'cobblestone',
    ...[
      'oak',
      'spruce',
      'birch',
      'jungle',
      'acacia',
      'dark_oak',
      ...netherTrees
    ].map(type => {
      const logType = getLogType(type)
      const woodType = getWoodType(type)
      return [
      `${type}_planks`,
      `${type}_${logType}`,
      `stripped_${type}_${logType}`,
      `${type}_${woodType}`,
      `stripped_${type}_${woodType}`
      ]
    }).flat(1),
    'bedrock',
    'sand',
    'red_sand',
    'gravel',
    'sandstone',
    'chiseled_sandstone',
    'cut_sandstone',
    ...colors.map(color => `${color}_wool`),
    'smooth_quartz_block',
    'smooth_red_sandstone',
    'smooth_sandstone',
    'smooth_stone',
    'bricks',
    'bookshelf',
    'mossy_cobblestone',
    'obsidian',
    'purpur_block',
    'purpur_pillar',
    'farmland',
    'ice',
    'snow_block',
    'clay',
    'jukebox',
    'netherrack',
    'soul_sand',
    'soul_soil',
    'basalt',
    'polished_basalt',
    'smooth_basalt',
    'glowstone',
    'stone_bricks',
    'mossy_stone_bricks',
    'cracked_stone_bricks',
    'chiseled_stone_bricks',
    'deepslate_bricks',
    'cracked_deepslate_bricks',
    'deepslate_tiles',
    'cracked_deepslate_tiles',
    'chiseled_deepslate',
    'mycelium',
    'nether_bricks',
    'cracked_nether_bricks',
    'chiseled_nether_bricks',
    'end_stone',
    'end_stone_bricks',
    ...colors.map(color => `${color}_terracotta`),
    'terracotta',
    'packed_ice',
    'prismarine',
    'prismarine_bricks',
    'dark_prismarine',
    'red_sandstone',
    'chiseled_red_sandstone',
    'cut_red_sandstone',
    'magma_block',
    'nether_wart_block',
    'warped_wart_block',
    'red_nether_bricks',
    'bone_block',
    ...colors.map(color => `${color}_concrete`),
    ...colors.map(color => `${color}_concrete_powder`),
    'sponge',
    'wet_sponge',
    'infested_stone',
    'infested_cobblestone',
    'infested_stone_bricks',
    'infested_mossy_stone_bricks',
    'infested_cracked_stone_bricks',
    'infested_chiseled_stone_bricks',
    'infested_deepslate',
    'chiseled_quartz_block',
    'quartz_block',
    'quartz_bricks',
    'quartz_pillar',
    'dirt_path',
    ...corals.map(coral => `${coral}_coral_block`),
    ...corals.map(coral => `dead_${coral}_coral_block`),
    'blu_ice',
    'crying_obsidian',
    'blackstone',
    'polished_blackstone',
    'chiseled_polished_blackstone',
    'polished_blackstone_bricks',
    'cracked_polished_blackstone_bricks'
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
