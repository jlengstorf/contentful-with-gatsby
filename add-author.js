module.exports = migration => {
  const guest = migration.createContentType("guest", {
    name: "Guest",
    description: "Who’s on the show?",
  })

  guest.createField("name", {
    name: "Name",
    type: "Symbol",
    required: true,
  })

  guest.createField("url", {
    name: "Twitter",
    type: "Symbol",
    required: false,
  })
}
