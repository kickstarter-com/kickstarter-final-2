const { MongoClient } = require("mongodb");

const projectData = {
  projectId: 1500,
  projectName: "test-ashjansdsds",
  projectTeazer: "protea-testsdsd",
  owner: "onr-testvdgh",
  rate: 11,
  currentFund: "currentFund",
  goalFund: 444,
  numberOfBackers: 11,
  daysToGO: 11,
  BackersIds: 11524545,
  projectImg: "projectImg11",
  majorDescriptionImg: "majorDescriptionImg1",
  majorDescription: "majorDescription1",
  minorDescriptionImg: "minorDescriptionIm1g",
  minorDescription: "minorDescriptio1n"
};

describe("insert", () => {
  let connection;
  let db;
  let URI =
    "mongodb+srv://Kickstarter:kickstarter@cluster0-pucsw.mongodb.net/maindb?retryWrites=true&w=majority";
  let dbName = "maindb";

  beforeAll(async () => {
    connection = await MongoClient.connect(URI, {
      useNewUrlParser: true
    });
    db = await connection.db(dbName);
  });

  afterAll(async () => {
    await connection.close();
    await db.close();
  });

  it("create & save project successfully", async () => {
    const articles = db.collection("articles");

    await articles.insertOne(projectData);
    const insertedProject = await articles.findOne({ projectId: 1500 });
    expect(insertedProject).toEqual(projectData);
  });
});
