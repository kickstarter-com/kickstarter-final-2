const { MongoClient } = require("mongodb");

const projectData = {
  projectId: 1501,
  projectName: "test-ashjansdsdsdsd",
  projectTeazer: "protea-testsdsdsds",
  owner: "onr-testvdghsds",
  rate: 121,
  currentFund: "currentFundsds",
  goalFund: 4443,
  numberOfBackers: 112,
  daysToGO: 111,
  BackersIds: 1152454523,
  projectImg: "projectImg1121",
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
    const insertedProject = await articles.findOne({ projectId: 1501 });
    expect(insertedProject).toEqual(projectData);
  });
});
