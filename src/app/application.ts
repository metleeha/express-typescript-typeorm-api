import express, {Express} from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';

export class Application {
  private _server: Express;

  constructor() {
    this._server = express();
    this._server.set('host', process.env.NODE_SERVER_HOSTNAME || 'localhost');
    this._server.set('port', process.env.NODE_SERVER_PORT || 3000);
    this._server.use(bodyParser.json());
    this._server.use(bodyParser.urlencoded({extended: true}));
    // 로그 기록
    if (process.env.NODE_ENV === 'production') {
      this._server.use(morgan('combined')); // 배포환경이면
    } else {
      this._server.use(morgan('dev')); // 개발환경이면
    }
    this._server.use(cors());
  }

  public startServer(): void {
    const host: string = this._server.get('host');
    const port: number = this._server.get('port');
    this._server.listen(port, host, () => {
      console.log(`Server started at http://${host}:${port}`);
    });
  }
}
