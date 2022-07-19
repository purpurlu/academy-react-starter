interface PageHeaderProps{
    title: string
}


function PageHeader(props: PageHeaderProps) {
    return (
        <>
        <h1> {props.title} </h1>
        </>
    )
}
export default PageHeader 