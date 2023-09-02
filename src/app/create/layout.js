// 없어도 동작하지만 있으면 layout.js에 page.js가 들어가서 동작한다. 
export default function Create(props) {
    return (
      <form>
        <h2>Create</h2>
        {props.children}
      </form>
    )
  }
  