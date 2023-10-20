
import fs from "fs/promises";

const readingFile = async () => {
    const filePatch = "./files/file.txt";
    const text = await fs.readFile(filePatch, "utf-8");

    console.log(text);
}
readingFile();


const fileOperator = async () => {
    const filePatch = "./files/file.txt";

    // Дописати
    // await fs.appendFile(filePatch, "\njs forever");
    // Змінити
    // await fs.writeFile(filePatch, "Pryvit!");
    // Видалити файл
    // await fs.unlink(filePatch);
}
fileOperator();



// const func = async () => {
//     const filePatch = "./files/file.txt";
//     const buffer = await fs.readFile(filePatch);
//     const text = buffer.toString();

//     console.log(text);
// }
// func();


// fs.readFile("./files/file.txt")
//     .then(data => console.log(data))
//     .catch(error => console.log(error))


// import fs from "fs";

// fs.readFile("./files/file.txt", (error, data) => {
//     console.log(error);
//     console.log(data);
// })