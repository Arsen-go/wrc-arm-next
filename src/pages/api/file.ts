/* eslint-disable import/no-anonymous-default-export */
import formidable from "formidable";
import fs from "fs";
import prisma from "../../../prisma/prisma";

export const config = {
  api: {
    bodyParser: false,
  },
};

const post = async (req: any, res: any) => {
  const form = formidable();

  form.parse(req, async function (err, fields, files) {
    const savedFile = await saveFile(files.file);

    return res.status(201).send({ file: savedFile });
  });
};

const saveFile = async (file: any) => {
  try {
    const data = fs.readFileSync(file[0].filepath);

    const fileName = new Date().getTime() + "_" + file[0].originalFilename;
    const path = `./public/uploads/${fileName}`;

    fs.writeFileSync(path, data);

    fs.unlinkSync(file[0].filepath);

    const savedFile = await prisma.files.create({
      data: { name: fileName, path: `/uploads/${fileName}` },
    });

    return { ok: true, data: savedFile };
  } catch (error) {
    return { ok: false, data: null };
  }
};

export default (req: any, res: any) => {
  req.method === "POST"
    ? post(req, res)
    : req.method === "PUT"
    ? console.log("PUT")
    : req.method === "DELETE"
    ? console.log("DELETE")
    : req.method === "GET"
    ? console.log("GET")
    : res.status(404).send("");
};
