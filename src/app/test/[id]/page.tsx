export default  function ({ params }: { params: { id: string } }) {

    return (
        <div>
            <div>abc</div>
            {params.id}
        </div>
    )
}