const express = require('express')
const passport = require('passport')
const Song = require('../models/song')

const customErrors = require('../../lib/custom_errors')
const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership

const removeBlanks = require('../../lib/remove_blank_fields')
const requireToken = passport.authenticate('bearer', { session: false })
const router = express.Router()

// INDEX
// GET /songs
router.get('/songs', requireToken, (req, res, next) => {
  const userId = req.user._id
  Song.findAll({owner: userId})
    .then(songs => {
      return songs.map(song => song.toObject())
    })
    .then(songs => res.status(200).json({ songs: songs }))
    .catch(next)
})

// SHOW
// GET /songs/5a7db6c74d55bc51bdf39793
router.get('/songs/:id', (req, res, next) => {
  // req.params.id will be set based on the `:id` in the route
  Song.findById(req.params.id)
    .then(handle404)
    // if `findById` is succesful, respond with 200 and "song" JSON
    .then(song => res.status(200).json({ song: song.toObject() }))
    // if an error occurs, pass it to the handler
    .catch(next)
})

// CREATE
// POST /songs
router.post('/songs', requireToken, (req, res, next) => {
  req.body.song.owner = req.user.id

  Song.create(req.body.song)
    .then(song => res.status(201).json({ song: song.toObject() }))
    .catch(next)
})

// UPDATE
// PATCH /songs/5a7db6c74d55bc51bdf39793
router.patch('/songs/:id', requireToken, removeBlanks, (req, res, next) => {
  Song.findById(req.params.id)
    .then(handle404)
    .then(song => {
      // pass the `req` object and the Mongoose record to `requireOwnership`
      // it will throw an error if the current user isn't the owner
      requireOwnership(req, song)
      // pass the result of Mongoose's `.update` to the next `.then`
      return Song.findOneAndUpdate({_id: req.params.id}, req.body.song, {new: true, runValidators: true})
    })
    .then(song => res.status(201).json({ song: song.toObject() }))
    .catch(next)
})

// DESTROY
// DELETE /songs/5a7db6c74d55bc51bdf39793
router.delete('/songs/:id', requireToken, (req, res, next) => {
  Song.findById(req.params.id)
    .then(handle404)
    .then(song => {
      // throw an error if current user doesn't own `song`
      requireOwnership(req, song)
      // delete the song ONLY IF the above didn't throw
      song.deleteOne()
    })
    // send back 204 and no content if the deletion succeeded
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router
