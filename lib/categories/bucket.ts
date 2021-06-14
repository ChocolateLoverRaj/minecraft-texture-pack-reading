import { Category } from '../Category'
import customTexturePack from '../customTexturePack'
import resDir from '../resDir'
import { join } from 'path'

const bucketCategory: Category = {
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
}

export default bucketCategory
