import { Category } from '../Category'
import customTexturePack from '../customTexturePack'
import resDir from '../resDir'
import { join } from 'path'

const oreIngotCategory: Category = {
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
    'redstone',
    'gold_nugget',
    'iron_nugget'
  ]
}

export default oreIngotCategory
