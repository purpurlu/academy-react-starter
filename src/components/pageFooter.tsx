interface PageFooterProps{
    title: string
}


function PageFooter(props: PageFooterProps) {
    return (
        <>
        <h1> {props.title} </h1>
        </>
    )
}
export default PageFooter 