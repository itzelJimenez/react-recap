import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    const apiUrl =
      "https://react-getting-start-76351-default-rtdb.firebaseio.com/meetups.json";

    fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(meetupData),
      header: {
        "Content-Type": "application/json",
      },
    }).then(() => history.replace("/"));
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
