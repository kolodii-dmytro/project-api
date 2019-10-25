"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var homeController = __importStar(require("./controllers/home"));
var userController = __importStar(require("./controllers/user"));
var mongoose_1 = __importDefault(require("mongoose"));
var _a = process.env, MONGO_USER = _a.MONGO_USER, MONGO_PASSWORD = _a.MONGO_PASSWORD, MONGO_PATH = _a.MONGO_PATH, PORT = _a.PORT;
console.log(MONGO_PATH, PORT);
mongoose_1.default.connect("mongodb:" + MONGO_PATH, { useNewUrlParser: true })
    .then(function () { return console.log("MongoDB Connected by " + MONGO_PATH); })
    .catch(function (err) { return console.log(err); });
var db = mongoose_1.default.connection;
db.on('error', console.error.bind(console, 'connection error:'));
var reqLogger = function (req, res, next) {
    console.log('got request ' + req.url);
    next();
};
var app = express_1.default();
app.use(reqLogger);
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.get('/', homeController.index);
app.get('//user', userController.getAllUsers);
app.get('//user/:id', userController.getOneUser);
app.put('//user/:id', userController.updateUser);
app.delete('//user/:id', userController.deleteUser);
app.post('//user', userController.createUser);
app.listen(PORT, function () {
    console.log("API isten on " + PORT);
});
