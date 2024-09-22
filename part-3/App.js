const App = () => {
  return (
    <div>
      <Person
        name="Thessalonius Monk"
        age={16}
        hobbies={[
          "underwater basketweaving",
          "cat tossing",
          "Nogales night fishing",
        ]}
      />
      <Person
        name="Mary"
        age={24}
        hobbies={[
          "morbidly caterwauling",
          "triumphantly scitter scattering",
          "erroneously pontificating",
        ]}
      />
      <Person
        name="Hieronius Nojastorian"
        age={37}
        hobbies={[
          "neverwinter spelunking",
          "menzoberranzen drowing",
          "arunsun blackstaffing",
        ]}
      />
    </div>
  );
};
