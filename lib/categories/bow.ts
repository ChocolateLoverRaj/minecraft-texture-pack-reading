import { Category } from '../Category'
import customTexturePack from '../customTexturePack'
import { join } from 'path'
import resDir from '../resDir'

const bowCategory: Category = {
  name: 'bow',
  model: {
    parent: 'item/generated',
    textures: {
      layer0: 'item/bow'
    },
    display: {
      thirdperson_righthand: {
        rotation: [-80, 260, -40],
        translation: [-1, -2, 2.5],
        scale: [0.9, 0.9, 0.9]
      },
      thirdperson_lefthand: {
        rotation: [-80, -280, 40],
        translation: [-1, -2, 2.5],
        scale: [0.9, 0.9, 0.9]
      },
      firstperson_righthand: {
        rotation: [0, -90, 25],
        translation: [1.13, 3.2, 1.13],
        scale: [0.68, 0.68, 0.68]
      },
      firstperson_lefthand: {
        rotation: [0, 90, -25],
        translation: [1.13, 3.2, 1.13],
        scale: [0.68, 0.68, 0.68]
      }
    },
    overrides: [
      {
        predicate: {
          pulling: 1
        },
        model: `${customTexturePack}/bow_pulling_0`
      },
      {
        predicate: {
          pulling: 1,
          pull: 0.65
        },
        model: `${customTexturePack}/bow_pulling_1`
      },
      {
        predicate: {
          pulling: 1,
          pull: 0.9
        },
        model: `${customTexturePack}/bow_pulling_2`
      }
    ]
  },
  texture: [
    join(resDir, 'bow.png'),
    join(resDir, 'bow_pulling_0.png'),
    join(resDir, 'bow_pulling_1.png'),
    join(resDir, 'bow_pulling_2.png')
  ],
  items: ['bow', 'arrow', 'crossbow', 'trident']
}

export default bowCategory
