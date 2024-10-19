import Item from './item'
export default function ListItem() {
  return (
    <div className="grid gap-2 grid-cols-4 mx-auto mt-4">
        <Item />
        <Item />
        <Item />
        <Item />
    </div>
  )
}
