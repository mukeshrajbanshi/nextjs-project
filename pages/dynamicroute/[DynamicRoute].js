import { useRouter } from "next/router";

const DynamicRoute = () => {
  const router = useRouter();
  const pageNumber = router.query.DynamicRoute;
  return <div> {pageNumber} content using dynamicRoute</div>;
}

export default DynamicRoute;
