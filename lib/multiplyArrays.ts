import { multiply } from 'array-math'

type Arrays<T extends unknown[] = any[]> = {
  [K in keyof T]: ReadonlyArray<T[K]>
}

const multiplyArrays = <T extends unknown[] = any[]>(...arrays: Arrays<T>): T[] => {
  const result: T[] = []
  const totalElements = multiply(arrays.map(({ length }) => length))
  for (let i = 0; i < totalElements; i++) {
    result.push([] as any)
  }
  for (let i = 0; i < arrays.length; i++) {
    const array = arrays[i]
    const elementItems = multiply(arrays.slice(i + 1).map(({ length }) => length))
    const cycleCount = multiply(arrays.slice(0, i).map(({ length }) => length))
    for (let j = 0; j < cycleCount; j++) {
      for (let k = 0; k < array.length; k++) {
        for (let h = 0; h < elementItems; h++) {
          result[j * array.length * elementItems + k * elementItems + h][i] = array[k]
        }
      }
    }
  }
  return result
}

export default multiplyArrays
