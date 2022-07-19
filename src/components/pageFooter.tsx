interface PageFooterProps {
  title: string;
}

function PageFooter(props: PageFooterProps):JSX.Element {
  return (
    <>
      <h1> {props.title} </h1>
    </>
  );
}
export default PageFooter;
