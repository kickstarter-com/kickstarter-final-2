const { MongoClient } = require("mongodb");

const projectData = {
  projectId: 1111,
  projectName: "pro-unique",
  projectTeazer: "proteazer-unique",
  owner: "the owner",
  rate: 11,
  currentFund: "currentFund",
  goalFund: 444,
  numberOfBackers: 11,
  daysToGO: 11,
  BackersIds: 123456,
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
    const insertedProject = await articles.findOne({ projectId: 110 });
    expect(insertedProject).toEqual(projectData);
  });
});
