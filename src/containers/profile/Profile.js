import React, {useState, useEffect, lazy, Suspense} from "react";
import {openSource} from "../../portfolio";
import Contact from "../contact/Contact";
import Loading from "../loading/Loading";

const renderLoader = () => <Loading />;
const GithubProfileCard = lazy(() =>
  import("../../components/githubProfileCard/GithubProfileCard")
);
export default function Profile() {
  const [prof, setrepo] = useState([]);
  function setProfileFunction(array) {
    setrepo(array);
  }

  useEffect(() => {
    console.log("I was called");
    if (openSource.showGithubProfile === "true") {
      console.log("Profile is true")
      const getProfileData = () => {
        fetch("/profile.json")
          .then(result => {
            console.log("Result: ", result)
            if (result.ok) {
              return result.json();
            }
          })
          .then(response => {
            console.log("REsponse data user: ", response.data.user)
            setProfileFunction(response.data.user);
          })
          .catch(function (error) {
            console.error(
              `${error} (because of this error GitHub contact section could not be displayed. Contact section has reverted to default)`
            );
            setProfileFunction("Error");
            openSource.showGithubProfile = "false";
          });
      };
      getProfileData();
    }
  }, []);
  // if (
  //   openSource.display &&
  //   openSource.showGithubProfile === "true" &&
  //   !(typeof prof === "string" || prof instanceof String)
  // ) {
  //   return (
  //     <Suspense fallback={renderLoader()}>
  //       <GithubProfileCard prof={prof} key={prof.id} />
  //     </Suspense>
  //   );
  // } else {
    return <Contact />;
  // }
}
