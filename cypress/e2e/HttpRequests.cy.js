describe("HTTP Requests", () => {
  it("Response should contain itens in response", () => {

    cy.request({
      method: "GET",
      url: "https://api.trello.com/1/actions/592f11060f95a3d3d46a987a",
    })
      .then(response => {
        expect(response.status).to.equal(200);
        cy.log('Nome da Lista:', response.body.data.list.name);
    })
  })

})
