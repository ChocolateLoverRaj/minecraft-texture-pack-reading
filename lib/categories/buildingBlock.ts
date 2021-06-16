import { Category } from '../Category'
import customTexturePack from '../customTexturePack'
import resDir from '../resDir'
import { join } from 'path'
import minecraftData from '../minecraftData'

const { blocks } = (minecraftData as any).blockCollisionShapes as {
  blocks: Record<string, number>
}

const buildingBlockCategory: Category = {
  name: 'building_block',
  model: {
    parent: 'minecraft:block/cube_all',
    textures: {
      all: `minecraft:${customTexturePack}/building_block`
    }
  },
  texture: join(resDir, 'building_block.png'),
  items: Object.entries(blocks)
    .filter(kv => kv[1] === 1)
    .map(([k]) => k)
}

export default buildingBlockCategory
