// layout.js는 없어도 동작하지만 있으면 layout.js에 page.js가 들어가서 동작한다. 
export default async function Read(props) {
    const resp = await fetch(process.env.NEXT_PUBLIC_API_URL+`topics/${props.params.id}`
    , {cache: 'no-store'});
    const topic = await resp.json();
    return(
    <>
        <h2>{topic.title}</h2>
        {topic.body}
    </>
    )
}