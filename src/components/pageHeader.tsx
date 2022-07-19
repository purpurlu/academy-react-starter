interface PageHeaderProps {
  title: string;
}

function PageHeader(props: PageHeaderProps):JSX.Element {
  return (
    <>
      <h1> {props.title} </h1>
    </>
  );
}
export default PageHeader;
