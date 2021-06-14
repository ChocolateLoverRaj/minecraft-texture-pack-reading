import { Category } from '../Category'
import customTexturePack from '../customTexturePack'
import resDir from '../resDir'
import { join } from 'path'

const foodCategory: Category = {
  name: 'food',
  model: {
    parent: 'minecraft:item/generated',
    textures: {
      layer0: `minecraft:${customTexturePack}/food`
    }
  },
  texture: join(resDir, 'food.png'),
  items: [
    'apple',
    'baked_potato',
    'beetroot',
    'beetroot_soup',
    'bread',
    'cake',
    'cake',
    'carrot',
    'chorus_fruit',
    'cooked_chicken',
    'cooked_cod',
    'cooked_mutton',
    'cooked_porkchop',
    'cooked_rabbit',
    'cooked_salmon',
    'cookie',
    'dried_kelp',
    'enchanted_golden_apple',
    'golden_apple',
    'glow_berries',
    'golden_carrot',
    'melon_slice',
    'mushroom_stew',
    'poisonous_potato',
    'potato',
    'pufferfish',
    'pumpkin_pie',
    'rabbit_stew',
    'beef',
    'chicken',
    'cod',
    'mutton',
    'porkchop',
    'rabbit',
    'salmon',
    'rotten_flesh',
    'spider_eye',
    'cooked_beef',
    'suspicious_stew',
    'suspicious_stew',
    'sweet_berries',
    'tropical_fish'
  ]
}

export default foodCategory
