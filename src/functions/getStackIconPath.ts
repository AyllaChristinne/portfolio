import stacksData from '../data/stacks.json'

interface IStack {
  name: string
  icon: string
}

export function getStackIconPath(stacks: Array<string>) {
  const stacksMap = new Map<string, string>(
    (stacksData as Array<IStack>).map((item) => [
      item.name.toLowerCase(),
      item.icon,
    ])
  )

  return stacks
    .map((stackName) => stacksMap.get(stackName.toLowerCase()))
    .filter(Boolean)
}
