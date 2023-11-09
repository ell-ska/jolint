import { slugify } from '@/utils/slugify'
import { colors } from '@/tailwind.config'

type colorObject = { [key: string]: colorObject | string }

const extractHexColors = (colors: colorObject) => {
  let hexColors: string[] = []

  for (const key in colors) {
    if (typeof colors[key] === 'string') {
      hexColors.push(colors[key] as string)
    } else {
      hexColors.push(...extractHexColors(colors[key] as colorObject))
    }
  }

  return hexColors
}

const getColors = (values: string[]) => {
  const hexColors = extractHexColors(colors)
  return values.map((value, index) => ({
    id: slugify(value),
    color: hexColors[index],
  }))
}

export { getColors, extractHexColors }
