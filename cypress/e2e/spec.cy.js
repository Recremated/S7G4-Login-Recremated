describe("Login Form - Geçersiz Email", () => {
  it("Geçersiz email girildiğinde hata mesajı görünmeli", () => {
    cy.visit("http://localhost:5173/");

    // Geçersiz bir email gir
    cy.get('input[type="email"]').type("test@com");

    // Doğru şifreyi gir
    cy.get('input[type="password"]').type("Test@1234");

    // Şartları kabul et
    cy.get('input[type="checkbox"]').check();

    // Hata mesajının görünüp görünmediğini kontrol et
    cy.contains("Geçerli bir email girin").should("be.visible");
  });
});

describe("Login Form - Geçersiz Email", () => {
  it("Geçersiz email girildiğinde buton disabled olmalı", () => {
    cy.visit("http://localhost:5173/");

    // Geçersiz bir email gir
    cy.get('input[type="email"]').type("test@com");

    // Doğru şifreyi gir
    cy.get('input[type="password"]').type("Test@1234");

    // Şartları kabul et
    cy.get('input[type="checkbox"]').check();

    // Butonun disabled olmasını kontrol et
    cy.get('button[type="submit"]').should("be.disabled");
  });
});

describe("Login Form - Geçersiz Şifre", () => {
  it("Geçersiz şifre girildiğinde hata mesajı görünmeli", () => {
    cy.visit("http://localhost:5173/");

    // Geçerli bir email gir
    cy.get('input[type="email"]').type("test@example.com");

    // Geçersiz bir şifre gir
    cy.get('input[type="password"]').type("123");

    // Şartları kabul et
    cy.get('input[type="checkbox"]').check();

    // Hata mesajının görünüp görünmediğini kontrol et
    cy.contains(
      "Şifre 8 ila 15 karakter olmalı, bir büyük harf, bir özel karakter ve bir rakam içermeli"
    ).should("be.visible");
  });
});

describe("Login Form - Geçersiz Şifre", () => {
  it("Geçersiz şifre girildiğinde buton disabled olmalı", () => {
    cy.visit("http://localhost:5173/");

    // Geçerli bir email gir
    cy.get('input[type="email"]').type("test@example.com");

    // Geçersiz bir şifre gir
    cy.get('input[type="password"]').type("123");

    // Şartları kabul et
    cy.get('input[type="checkbox"]').check();

    // Butonun disabled olmasını kontrol et
    cy.get('button[type="submit"]').should("be.disabled");
  });
});

describe("Login Form - Şartları Kabul Etmeden Giriş", () => {
  it("Şartlar kabul edilmeden giriş yapılamaz ve hata mesajı görünmeli", () => {
    cy.visit("http://localhost:5173/");

    // Geçerli bir email ve şifre gir
    cy.get('input[type="email"]').type("test@example.com");
    cy.get('input[type="password"]').type("Test@1234");

    // Şartları kabul etme
    cy.get('input[type="checkbox"]').uncheck();

    // Hata mesajının görünüp görünmediğini kontrol et
    cy.contains("Şartları kabul etmelisiniz").should("be.visible");
  });
});

describe("Login Form - Şartları Kabul Etmeden Giriş", () => {
  it("Şartlar kabul edilmeden buton disabled olmalı", () => {
    cy.visit("http://localhost:5173/");

    // Geçerli bir email ve şifre gir
    cy.get('input[type="email"]').type("test@example.com");
    cy.get('input[type="password"]').type("Test@1234");

    // Şartları kabul etme
    cy.get('input[type="checkbox"]').uncheck();

    // Butonun disabled olmasını kontrol et
    cy.get('button[type="submit"]').should("be.disabled");
  });
});

describe("Login Form - Başarılı Giriş", () => {
  it("Başarılı form doldurulduğunda success sayfasına yönlendirilmeliyim", () => {
    cy.visit("http://localhost:5173/");

    // Geçerli bir email ve şifre gir
    cy.get('input[type="email"]').type("test@example.com");
    cy.get('input[type="password"]').type("Test@1234");

    // Şartları kabul et
    cy.get('input[type="checkbox"]').check();

    // Formu submit et
    cy.get('button[type="submit"]').click();

    // Başarı sayfasına yönlendirilip yönlendirilmediğini kontrol et
    cy.url().should("include", "/Success");
    cy.contains("Başarıyla giriş yaptınız!").should("be.visible");
  });
});
