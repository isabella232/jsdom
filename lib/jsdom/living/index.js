"use strict";

exports.DOMException = require("../web-idl/DOMException");
exports.NamedNodeMap = require("./attributes").NamedNodeMap;
exports.Attr = require("./generated/Attr").interface;
exports.Node = require("./generated/Node").interface;
exports.Element = require("./generated/Element").interface;
exports.DocumentFragment = require("./generated/DocumentFragment").interface;
exports.Document = exports.HTMLDocument = require("./generated/Document").interface;
exports.CharacterData = require("./generated/CharacterData").interface;
exports.Comment = require("./generated/Comment").interface;
exports.DocumentType = require("./generated/DocumentType").interface;
exports.DOMImplementation = require("./generated/DOMImplementation").interface;
exports.ProcessingInstruction = require("./generated/ProcessingInstruction").interface;
exports.Text = require("./generated/Text").interface;

exports.Event = require("./generated/Event").interface;
exports.CustomEvent = require("./generated/CustomEvent").interface;
exports.MessageEvent = require("./generated/MessageEvent").interface;
exports.ErrorEvent = require("./generated/ErrorEvent").interface;
exports.HashChangeEvent = require("./generated/HashChangeEvent").interface;
exports.UIEvent = require("./generated/UIEvent").interface;
exports.MouseEvent = require("./generated/MouseEvent").interface;
exports.KeyboardEvent = require("./generated/KeyboardEvent").interface;
exports.TouchEvent = require("./generated/TouchEvent").interface;
exports.MutationEvent = require("./generated/MutationEvent").interface;
exports.ProgressEvent = require("./generated/ProgressEvent").interface;
exports.EventTarget = require("./generated/EventTarget").interface;

require("./register-wrappers")(exports);

// These need to be cleaned up...
require("../level2/style")(exports);
require("../level3/xpath")(exports);

// These are OK but need migration to webidl2js eventually.
require("./html-collection")(exports);
require("./node-filter")(exports);
require("./node-iterator")(exports);
require("./node-list")(exports);
require("./blob")(exports);
require("./file")(exports);
require("./filelist")(exports);
require("./form-data")(exports);
require("./xmlhttprequest-event-target")(exports);
require("./xmlhttprequest-upload")(exports);

exports.DOMTokenList = require("./dom-token-list").DOMTokenList;
exports.URL = require("whatwg-url-compat").createURLConstructor();
