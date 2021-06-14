import netherTrees from './netherTrees'

const getLogType = (woodType: string): string => netherTrees.includes(woodType as any)
  ? 'stem'
  : 'log'

export default getLogType
