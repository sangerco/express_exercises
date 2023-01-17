const express = require('express');
const ExpressError = require('./expressError');
const { getMean, getMode, getMedian } = require('./functions')

const app = express();

app.use(express.json());

app.get('/mean', (req, res, next) => {
    try {
        if (!req.query.nums || req.query.nums === '') {throw new ExpressError('Nums are required', 400)}
        let arr = req.query.nums.split(',');
        let newArr = [];
        for (let i = 0; i < arr.length; i++){
            if (isNaN(parseInt(arr[i]))) {throw new ExpressError(`${arr[i]} is not a number`, 400)}
            newArr.push(parseInt(arr[i]));
        } 
        return res.json({response: {
            operation: 'mean',
            value: getMean(newArr)
        }
        })
    } catch (e) {
        next(e)
    }
})

app.get('/median', (req, res, next) => {    
    try {
        if (!req.query.nums || req.query.nums === '') {throw new ExpressError('Nums are required', 400)}
        let arr = req.query.nums.split(',');
        let newArr = [];
        for (let i = 0; i < arr.length; i++){
            if (isNaN(parseInt(arr[i]))) {throw new ExpressError(`${arr[i]} is not a number`, 400)}
            newArr.push(parseInt(arr[i]));
        } 
        return res.json({response: {
            operation: 'median',
            value: getMedian(newArr)
        }
        })
    } catch (e) {
        next(e)
    }
})

app.get('/mode', (req, res, next) => {
    try {
        if (!req.query.nums || req.query.nums === '') {throw new ExpressError('Nums are required', 400)}
        let arr = req.query.nums.split(',');
        let newArr = [];
        for (let i = 0; i < arr.length; i++){
            if (isNaN(parseInt(arr[i]))) {throw new ExpressError(`${arr[i]} is not a number`, 400)}
            newArr.push(parseInt(arr[i]));
        } 
        return res.json({response: {
            operation: 'mode',
            value: getMode(newArr)
        }
        })
    } catch (e) {
        next(e)
    }
})

app.get('/all', (req, res, next) => {
    try {
        if (!req.query.nums || req.query.nums === '') {throw new ExpressError('Nums are required', 400)}
        let arr = req.query.nums.split(',');
        let newArr = [];
        for (let i = 0; i < arr.length; i++){
            if (isNaN(parseInt(arr[i]))) {throw new ExpressError(`${arr[i]} is not a number`, 400)}
            newArr.push(parseInt(arr[i]));
        } 
        return res.json({response: {
            operation: 'all',
            mean: getMean(newArr),
            median: getMedian(newArr),
            mode: getMode(newArr)
        }
        })
    } catch (e) {
        next(e)
    }
})

app.use((req,res,next) => {
    const e = new ExpressError("Page Not Found!", 404);
    next(e)
})

app.use((err, req, res, next) => {
    console.log(err.msg)
    let status = err.status || 500;
    let msg = err.msg;

    res.status(status).json({
        error: {msg, status}
    })
})


app.listen(3000, () => {
    console.log('Server started on port 3000');
})