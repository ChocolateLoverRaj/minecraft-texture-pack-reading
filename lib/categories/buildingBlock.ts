import { Category } from '../Category'
import colors from '../colors'
import corals from '../corals'
import customTexturePack from '../customTexturePack'
import getLogType from '../getLogType'
import getWoodType from '../getWoodType'
import netherTrees from '../netherTrees'
import resDir from '../resDir'
import { join } from 'path'

const buildingBlockCategory: Category = {
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
}

export default buildingBlockCategory
