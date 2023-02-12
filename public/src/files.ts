import { loadDesktopFiles } from "./desktop";
var files = [];
export function deleteFile(fileToDelete: string) {
  for (let i = 0; i < localStorage.length; i++) {
    const element = localStorage.key(i)!;
    if (element.slice(0, 5) == "file:") {
      files.push(element.slice(5));
    }
  }
  var filePath = fileToDelete;
  var fileName = filePath.split("/")[filePath.split("/").length - 1];
  if (localStorage.getItem("file:" + fileToDelete) == null) {
    alert("That file does not exist.");
  } else if (confirm('Are you sure you want to delete "' + fileName + '"?')) {
    localStorage.removeItem("file:" + fileToDelete);
  }
}

export function openFile(userOpen: boolean, elem: HTMLElement) {
  var files = [];
  for (let i = 0; i < localStorage.length; i++) {
    const element = localStorage.key(i)!;
    if (element.slice(0, 5) == "file:") {
      files.push(element.slice(5));
    }
  }
  if (userOpen) var tempFileName = prompt("file\n" + files.join("\n"));
  else {
    var tempFileName = new URL(location.href).searchParams.get("file");
  }
  if (!tempFileName) return;
  if (localStorage.getItem("file:" + tempFileName) == null) {
    if (!confirm("This file does not exist, create it?")) {
      return;
    }
  }
}

export function createFile(dir: string) {
  var tempFileName = prompt("Name of the file?");
  if (!tempFileName) return;
  if (localStorage.getItem("file:" + dir + tempFileName) == null) {
    localStorage.setItem("file:" + dir + tempFileName, "");
    loadDesktopFiles();
  } else {
    alert("That file already exists.");
  }
}

export function getFileName(filePath: string) {
  return filePath.split("/")[filePath.split("/").length - 1] || "";
}

function getFileExt(fileName: string) {
  var names = fileName.split(".");
  if (names.length > 1) return names[names.length - 1];
  return "";
}

export function rename(filePath: string, to: string) {
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