import { useState } from "react";
import { useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  function getAllMeetups() {
    fetch(
      "https://react-getting-start-76351-default-rtdb.firebaseio.com/meetups.json"
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }

  useEffect(() => {
    setIsLoading(true);
    getAllMeetups();
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading ...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <ul>
        <MeetupList meetups={loadedMeetups} />
      </ul>
    </section>
  );
}

export default AllMeetupsPage;
