import { join } from 'path'
import { Category } from '../Category'
import customTexturePack from '../customTexturePack'
import resDir from '../resDir'

const stickCategory: Category = {
  name: 'stick',
  model: {
    parent: 'minecraft:item/handheld',
    textures: {
      layer0: `minecraft:${customTexturePack}/stick`
    }
  },
  texture: join(resDir, 'stick.png'),
  items: ['stick', 'blaze_rod']
}

export default stickCategory
