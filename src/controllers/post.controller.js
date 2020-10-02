const Sequelize = require("sequelize");
const post = require("../models").post;

const postCtrl = {};

postCtrl.createPost = async (req, res) => {
  const { nombre, descripcion } = req.body;
  try {
    const postRes = await post.create({
      nombre: nombre,
      descripcion: descripcion,
    });

    res.status(201).send(postRes.dataValues);
  } catch (e) {
    res.status(400).send(e);
  }
};

postCtrl.getPosts = async (req, res) => {
  try {
    const postRes = await post.findAll({
      attributes: ["id", "nombre", "descripcion"],
    });
    const posts = postRes.map((post) => {
      return {
        id: post.dataValues.id,
        nombre: post.dataValues.nombre,
        descripcion: post.dataValues.descripcion,
      };
    });

    res.status(200).send(posts);
  } catch (e) {
    res.status(400).send(e);
  }
};

postCtrl.deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    const postRes = await post.destroy({
      where: {
        id: id,
      },
    });

    res.status(200).send({ id: postRes });
  } catch (e) {
    res.status(400).send(e);
  }
};

module.exports = postCtrl;
