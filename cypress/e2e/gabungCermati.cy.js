describe('Open Website', () => {
  beforeEach(() => {
    cy.viewport('macbook-15')
    cy.wait(200)
    cy.visit('https://www.cermati.com/app/gabung')
  })

  it('Check spelling input field', () => {
    cy.get('[for="mobilePhone"]').should('have.text', 'No. Handphone')
    // cy.get('[#mobilePhone]').should('have.text', 'Masukkan No. Handphone')
    cy.get(':nth-child(3) > .label_aayJU').should('have.text', 'Email')
    cy.get(':nth-child(4) > .label_aayJU').should('have.text', 'Nama Depan')
    cy.get(':nth-child(5) > .label_aayJU').should('have.text', 'Nama Belakang')
    cy.get('.TermsAndConditions_checkbox__text__Tl4Uv').should('have.text', 'Dengan klik Daftar, Saya telah membaca dan menyetujui Syarat dan Ketentuan dan Kebijakan Privasi dan bersedia untuk dihubungi oleh Cermati.com.')
    cy.get('.RegistrationForm_form-container__button-text__G_fL8').should('have.text', 'Daftar')
  });

})