<template>
    <div class="notes">
        <div class="card has-background-success-dark p-4 mb-5">
            <div class="field">
                <div class="control">
                    <textarea
                        class="textarea"
                        placeholder="Adicione uma nova nota"
                    />
                </div>
            </div>

            <div class="field is-grouped is-grouped-right">
                <div class="control">
                    <button class="button is-link has-background-success">
                        Adicionar nova nota
                    </button>
                </div>
            </div>
        </div>

        <div v-for="n in 3" class="card mb-4">
            <div class="card-content">
                <div class="content">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Perferendis deserunt temporibus, itaque, obcaecati totam quo
                    reprehenderit consequatur eaque distinctio quaerat
                    laboriosam sit earum placeat consequuntur ea illum
                    praesentium voluptas illo.
                </div>
            </div>
            <footer class="card-footer">
                <a href="#" class="card-footer-item">Edit</a>
                <a href="#" class="card-footer-item">Delete</a>
            </footer>
        </div>
    </div>
</template>
