const data = require("./model");

const getlots = async (req, res) => {
  let array = [];
  let title = req.query.Title;
  let total_pages = 0;
  let pageno = parseInt(req.query.page);
  let skip_pages = pageno * 10;
  let string_titles = [];
  let data_title = ".*" + title + ".*";

  let data_get = await data
    .find(
      {},
      {
        data: { $elemMatch: { Title: { $regex: data_title, $options: "i" } } },
      }
    )
    .sort({
      _id: 1,
    })
    .skip(skip_pages)
    .limit(10);
  total_pages = data_get.length;
  for (let i = 0; i < data_get.length; i++) {
    if (data_get[i].data.length != 0) {
      array.push(data_get[i].data);
    }
  }
  array.forEach((ele) => {
    string_titles.push(ele[0]);
  });
  total = array.length;
  res.status(200).json({
    message: "The retrieved datas are",
    response: {
      page: pageno,
      per_page: 10,
      total: total,
      total_pages: total_pages,
      data: string_titles,
    },
  });
};

const createlots = async (req, res) => {
  let dataarray = [];
  for (let i = 0; i < req.body.data.length; i++) {
    let data_in = {
      Title: req.body.data[i].Title,
      Year: req.body.data[i].Year,
      imdbID: req.body.data[i].imdbID,
    };
    dataarray.push(data_in);
  }
  let lots2 = new data({
    data: dataarray,
  });
  let check_var = await data.find(req.body);
  if (check_var.length != 0) {
    await res.status(300).json({ message: "Data is already exist" });
  } else {
    try {
      await lots2.save();

      res.status(201).json({ message: "Created Successfully" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
};

module.exports.getlots = getlots;
module.exports.createlots = createlots;
