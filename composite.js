class Entity {
  getSize() {
    // returns size
  }

  getPath() {

  }

  rename(newName) {

  }
}

class File extends Entity {
  getSize() {
    return this.size;
  }
}

class Folder extends Entity {
  getSize() {
    return this.fileList.length;
  }
}