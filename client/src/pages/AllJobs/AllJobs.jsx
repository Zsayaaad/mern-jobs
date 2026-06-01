import { useLoaderData } from "react-router-dom";
import { JobsContainer, SearchFilterContainer } from "../../components";

const AllJobs = () => {
  const { data } = useLoaderData();

  console.log(data);

  return (
    <>
      <SearchFilterContainer />
      <JobsContainer />
    </>
  );
};

export default AllJobs;
