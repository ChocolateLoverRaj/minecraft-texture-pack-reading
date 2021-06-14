import netherTrees from './netherTrees'

const getWoodType = (woodType: string): string => netherTrees.includes(woodType as any)
  ? 'hyphae'
  : 'wood'

export default getWoodType
