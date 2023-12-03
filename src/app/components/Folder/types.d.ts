interface IFolder{
  Icon: IconType
  label: string
}

interface IFolderModal{
  children: any
  toggle: () => void
  title: string
  isOpen: boolean
}