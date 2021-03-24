<template>
    <main class="container">
        <h1>Kontakt ze mną</h1>

        <div class="row">
            <section class="col-sm-12 col-md">
                <p>
                    Aneta Cieśla<br/>
                    38-305 Lipinki 626<br/>
                    Tel.: 13 44 77 422<br/>
                    E-Mail <a href="mailto:anetaciesla4@gmail.com">anetaciesla4@gmail.com</a>
                </p>
            </section>

            <section class="col-sm-12 col-md">
                <h3 class="mb-3">Formularz kontaktowy</h3>
                <form action="mailto:anetaciesla4@gmail.com">
                    <div class="mb-3">
                        <input type="email" name="yourEmail" class="form-control" placeholder="Twój adres E-Mail" />
                    </div>

                    <div class="row mb-3">
                        <div class="col">
                            <input type="text" name="firstName" class="form-control" placeholder="Imię" />
                        </div>
                        <div class="col">
                            <input type="text" name="surname" class="form-control" placeholder="Nazwisko" />
                        </div>
                    </div>

                    <div class="mb-3">
                        <textarea name="body" class="form-control" placeholder="Treść twojej wiadomości" />
                    </div>

                    <input type="submit" class="btn btn-primary" value="Wyślij" />
                </form>
            </section>
        </div>
    </main>
</template>

<script>
export default {
    name: 'Contact'
}
</script>

<style type="scss" scoped>

input[type="submit"] { float: right; }

</style>