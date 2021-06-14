import { join } from 'path'
import { Category } from '../Category'
import customTexturePack from '../customTexturePack'
import minecraftData from '../minecraftData'
import resDir from '../resDir'

const slabPath = `minecraft:${customTexturePack}/slab`

const slabCategory: Category = {
  name: 'slab',
  model: {
    parent: 'minecraft:block/slab',
    textures: {
      bottom: slabPath,
      top: slabPath,
      side: slabPath
    }
  },
  texture: join(resDir, 'slab.png'),
  items: minecraftData.blocksArray
    .map(({ name }) => name)
    .filter(name => name.endsWith('_slab'))
}

export default slabCategory
