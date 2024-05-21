const { nanoid } = require('nanoid');
const books = require('./books');

const addBookHandler = (request, h) => {
    const { 
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        reading
    } = request.payload

    if(name === undefined || name === null){
        const response = h.response({
            status: "fail",
            message: "Gagal menambahkan buku. Mohon isi nama buku"
        });
        response.code(400);
        return response;
    }

    if(readPage > pageCount){
        const response = h.response({
            status: "fail",
            message: "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount"
        });
        response.code(400);
        return response;
    }

    const id = nanoid(16);

    const finished = pageCount === readPage ? true : false;

    const insertedAt = new Date().toISOString();

    const updatedAt = insertedAt;

    const newBook = {
        id,
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        reading,
        finished,
        insertedAt,
        updatedAt
    }

    books.push(newBook);

    const isSuccess = books.filter((book) => book.id === id).length > 0;

    if(isSuccess){
        const response = h.response({
            status: "success",
            message: "Buku berhasil ditambahkan",
            data: {
                bookId: id
            }
        })
        response.code(201);
        return response;
    }

    const response = h.response({
        status: 'fail',
        message: 'Buku gagal ditambahkan',
    });
    response.code(500);
    return response;
};

const getAllBooksHandler = (request, h) => {
    return h.response({
        status: "success",
        data: {
            books: books.map((book) => {
                return {
                    id: book.id,
                    name: book.name,
                    publisher: book.publisher
                }
            })
        }
    }).code(200);
};

const getBookByIdHandler = (request, h) => {
    const { bookId } = request.params

    const book = books.find((book) => book.id === bookId)

    if(book === undefined){
        return h.response({
            status: "fail",
            message: "Buku tidak ditemukan"
        }).code(404)
    }

    return h.response({
        status: "success",
        data: {
            book: book
        }
    })
};

module.exports = { 
    addBookHandler, 
    getAllBooksHandler, 
    getBookByIdHandler 
};
