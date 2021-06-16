import { join } from 'path'
import { Category } from '../Category'
import customTexturePack from '../customTexturePack'
import minecraftData from '../minecraftData'
import resDir from '../resDir'

const stairsPath = `minecraft:${customTexturePack}/stairs`

const stairsCategory: Category = {
  name: 'stairs',
  model: {
    parent: 'minecraft:block/stairs',
    textures: {
      bottom: stairsPath,
      top: stairsPath,
      side: stairsPath
    }
  },
  texture: join(resDir, 'stairs.png'),
  items: minecraftData.blocksArray
    .map(({ name }) => name)
    .filter(name => name.endsWith('_stairs'))
}

export default stairsCategory
