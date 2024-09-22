const App = () => {
  return (
    <div>
      <Tweet
        props={{
          username: "tabiusgrapefoot",
          name: "Roger Zelazny",
          date: "09/26/2004",
          message: "This would be a tweet",
        }}
      />
      <Tweet
        props={{
          username: "tabiusgrapefoot",
          name: "Isaac Asimov",
          date: "10/04/2011",
          message: "This would be another tweet",
        }}
      />
      <Tweet
        props={{
          username: "tabiusgrapefoot",
          name: "Jack Williamson",
          date: "01/12/2008",
          message: "This would be yet another tweet",
        }}
      />
    </div>
  );
};
