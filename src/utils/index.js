

exports.addMusic = async (collection, dataObj) => {
    try {
      const band = await collection.insertOne(dataObj);
      console.log(band)
    } catch (error) { 
        console.log(error)
    }
}



exports.updateMusic = async (collection, dataObj) => {
    try {
      const updateResult = await collection.findOneAndUpdate({band: dataObj.band} , {$set: {band:dataObj.newBand}});
      console.log("Updated document =>", updateResult);
    } catch (error) {
      console.log(error);
    }
  }





exports.listMusic = async (collection) => {
    try {
        const listAll = await collection.find().toArray();
        console.log(listAll);
    } catch (error) {
        console.log(error);
    }
};





exports.deleteMusic = async (collection, dataObj) => {
    try {
      const deleteResult = await collection.deleteOne({band: dataObj});
      console.log("Deleted documents =>", deleteResult);
    } catch (error) {
      console.log(error);
    }
  }

