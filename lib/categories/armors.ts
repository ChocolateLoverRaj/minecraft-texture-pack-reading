import { Category } from '../Category'
import customTexturePack from '../customTexturePack'
import resDir from '../resDir'
import { join } from 'path'

// FIXME: Leather armor texture change
const armorTypes = [/* 'leather', */'chainmail', 'iron', 'diamond', 'golden', 'netherite'] as const
const armors = ['helmet', 'chestplate', 'leggings', 'boots'] as const

const armorCategories: Category[] = armors.map<Category>(armor => ({
  name: armor,
  model: {
    parent: 'minecraft:item/generated',
    textures: {
      layer0: `minecraft:${customTexturePack}/${armor}`
    }
  },
  texture: join(resDir, `${armor}.png`),
  items: armorTypes.map(type => `${type}_${armor}`)
}))

export default armorCategories
