function deleteFile1() {
  var files = [];
  for (let i = 0; i < localStorage.length; i++) {
    const element = localStorage.key(i)!;
    if (element.slice(0, 5) == "file:") {
      files.push(element.slice(5));
    }
  }
  var fileToDelete = prompt("File to delete\n" + files.join("\n"));
  if (fileToDelete)
    if (localStorage.getItem("file:" + fileToDelete) == null) {
      alert("That file does not exist.");
    } else if (confirm('Are you sure you want to delete "' + fileToDelete + '"?')) {
      localStorage.removeItem("file:" + fileToDelete);
      if (file == "file:" + fileToDelete) {
        edit.value = "";
        file = "file:untitled.txt";
        reloadText();
      }
    }
}

function openFile1(userOpen: boolean) {
  var files = [];
  for (let i = 0; i < localStorage.length; i++) {
    const element = localStorage.key(i)!;
    if (element.slice(0, 5) == "file:") {
      files.push(element.slice(5));
    }
  }
  if (userOpen) var tempFileName = prompt("file\n" + files.join("\n"));
  else var tempFileName = new URL(location.href).searchParams.get("file");

  if (!tempFileName) return;
  if (localStorage.getItem("file:" + tempFileName) == null) {
    if (!confirm("This file does not exist, create it?")) {
      return;
    }
  }
  edit.contentEditable = true + "";
  file = "file:" + tempFileName;
  edit.value = localStorage.getItem(file)!;
  save1(edit.value);
  reloadText();
}
function listFiles1() {
  var files = [];
  for (let i = 0; i < localStorage.length; i++) {
    const element = localStorage.key(i)!;
    if (element.slice(0, 5) == "file:") {
      files.push(element.slice(5));
    }
  }
  return files;
}
function save1(content: string) {
  // var caretPos = getCaretPosition(edit);
  if (localStorage.getItem(file) != null) localStorage.setItem(file, content);
  else {
    var tempName = prompt("Save as...\n" + listFiles1().join("\n"));
    if (tempName) localStorage.setItem("file:" + tempName, content);
  }
  // setSelectionRange(edit, caretPos, caretPos);
}
function getFileDir(filePath: string) {
  var fileDir = filePath.split("/");
  fileDir.splice(fileDir.length - 1, 1);
  return fileDir.join("/") + "/";
}

function getFileName1(filePath: string) {
  return filePath.split("/")[filePath.split("/").length - 1] || "";
}

function getFileExt1(fileName: string) {
  var names = fileName.split(".");
  if (names.length > 1) return names[names.length - 1];
  return "";
}

function rename1(filePath: string, to: string) {
  if (localStorage.getItem("file:" + to) != null) {
    alert("That file already exists.");
  } else if (to && localStorage.getItem("file:" + filePath) != null) {
    if (getFileExt(getFileName(to)) != getFileExt(getFileName(filePath))) {
      if (!confirm("This file has a different file extension than the old name. Are you sure that you want to do this?")) return;
    }
    var data = localStorage.getItem("file:" + filePath)!;
    localStorage.removeItem("file:" + filePath);
    localStorage.setItem("file:" + to, data);
  }
}