import { Category } from '../Category'
import customTexturePack from '../customTexturePack'
import resDir from '../resDir'
import { join } from 'path'
import minecraftData from '../minecraftData'

const foodCategory: Category = {
  name: 'food',
  model: {
    parent: 'minecraft:item/generated',
    textures: {
      layer0: `minecraft:${customTexturePack}/food`
    }
  },
  texture: join(resDir, 'food.png'),
  items: minecraftData.foodsArray
    .map(({ name }) => name)
    .filter(name => name !== 'honey_bottle')
}

export default foodCategory
