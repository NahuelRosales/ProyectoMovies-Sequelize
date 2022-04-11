module.exports = (sequelize, dataTypes) => {

    const alias = "Movie";

    const cols = {

    };

    const config = {
        tableName: "movies"
    };

    const Movie = sequelize.define(alias, cols, config);

    return Movie
}