import AuthenticatedLayout from "@/components/layouts/authenticated-layout";
import GotoTop from "@/components/ui/goto-top";

import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Hospital Pharmacy Management System | Home</title>
      </Helmet>
      <AuthenticatedLayout>
        <div></div>
      </AuthenticatedLayout>
      <GotoTop />
    </>
  );
};
export default Home;
