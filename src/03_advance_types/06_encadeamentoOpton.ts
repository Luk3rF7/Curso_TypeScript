type Documents = {
  title: string;
  text: string;
  date?: Date;
};

const documents: Documents = {
  title: "the Title",
  text: "lorem is upem....",
  //date: new Date()
};

console.log(documents.date?.toDateString() ?? "don't exists Date.");
