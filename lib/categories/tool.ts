import { Category } from '../Category'
import customTexturePack from '../customTexturePack'
import { join } from 'path'
import multiplyArrays from '../multiplyArrays'
import resDir from '../resDir'

const toolTypes = ['wooden', 'stone', 'golden', 'iron', 'diamond', 'netherite'] as const
const tools = ['shovel', 'pickaxe', 'axe', 'hoe'] as const

const toolCategory: Category = {
  name: 'tool',
  model: {
    parent: 'minecraft:item/handheld',
    textures: {
      layer0: `minecraft:${customTexturePack}/tool`
    }
  },
  texture: join(resDir, 'tool.png'),
  items: multiplyArrays(toolTypes, tools).map(([type, tool]) => `${type}_${tool}`)
}

export default toolCategory
