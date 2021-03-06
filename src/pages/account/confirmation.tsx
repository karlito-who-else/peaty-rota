import { navigate } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import { Link } from "@material-ui/core";

import Layout from "../../components/Layout";
import withLocation from "../../components/withLocation";

const CustomQueryStringComponent = ({ location, search }): ReactElement => {
  const { username } = search;

  const goToHome = (event: React.SyntheticEvent) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <Layout pathname={location.pathname}>
      <main>
        <h1>Organization Settings</h1>
        <p>Account creation confirmed for </p>
        <Link href="/" onClick={goToHome} color="inherit">
          Continue to site
        </Link>
      </main>
    </Layout>
  );
};

CustomQueryStringComponent.propTypes = {
  location: PropTypes.object,
  search: PropTypes.object
};

export default withLocation(CustomQueryStringComponent);
