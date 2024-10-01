const keyGen = require("./keyGenerator.js")
const modalCreator  = (title,description,category = "All")=>{
    const key = keyGen();
    const modal = {
        heading: title,
        description:description,
        category:category,
        key:key
    }
    return modal;
}
export default modalCreator;