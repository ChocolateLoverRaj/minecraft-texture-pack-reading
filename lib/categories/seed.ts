import { Category } from '../Category'
import { join } from 'path'
import customTexturePack from '../customTexturePack'
import resDir from '../resDir'

const seedCategory: Category = {
  name: 'seed',
  model: {
    parent: 'minecraft:item/generated',
    textures: {
      layer0: `minecraft:${customTexturePack}/seed`
    }
  },
  texture: join(resDir, 'seed.png'),
  items: [
    'wheat_seeds',
    'pumpkin_seeds',
    'melon_seeds',
    'beetroot_seeds',
    'cocoa_beans',
    'nether_wart'
  ]
}

export default seedCategory
