## Web app for posting and reading articles using React.js

- Built REST API using Express.js and mongoose
- Integrated Cloudinary for easier storing and retrieving pictures
- Added markdown for making posts more eye-pleasing

### REST API

Currently supports:

- **/**
  - GET - returns all articles
  - POST - add an article
- **/:id**
  - GET - finds an article by id and returns it

---

### 🚀 Quick start

1. **Clone the repository**

   ```shell
   git clone https://github.com/bojangabric/post-and-read
   ```

2. **Create your [MongoDB account](https://account.mongodb.com/account/login) and get your connection string**

3. **Place the connection string inside of a `.env` file with the name of `MONGODB_URL`**

4. **Navigate into your cloned repository and start it up**

   ```shell
   cd post-and-read
   npm install
   npm run dev
   ```

5. **Open the source code and start editing**

   Your site is now running at `http://localhost:3000`!

## License

See the [LICENSE](LICENSE) file for license rights and limitations (MIT).
