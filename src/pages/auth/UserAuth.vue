<template>
    <base-card>
        <form @submit.prevent="submitForm">
            <div class="form-control">
                <label for="email">E-mail</label>
                <input type="email" id="email" v-model.trim="email">
            </div>
            <div class="form-control">
                <label for="password">Password</label>
                <input type="password" id="password" v-model.trim="password">
            </div>
            <p v-if="!formIsValid">Please enter a valid email and password (must be at least 6 charachters long).</p>
            <base-button>{{ submitButtonCaption }}</base-button>
            <base-button type="button" mode="flat" @click="switchAuthMode">{{ switchModeButtonCaption }}?</base-button>
        </form>
    </base-card>
</template>

<script>
export default {
    data() {
        return {
            email: {
                val: '',
                isValid: true,
            },
            password: {
                val: '',
                isValid: true,
            },
            formIsValid: true,
            mode: "login",
        }
    },
    computed: {
        submitButtonCaption() {
            if (this.mode === 'login') {
                return "login";
            }
            else {
                return "signup";
            }
        },
        switchModeButtonCaption() {
            if (this.mode === 'login') {
                return "Signup instead";
            }
            else {
                return "Login instead";
            }
        }
    },
    methods: {
        validateForm() {
            this.formIsValid = true;
            if (this.email.val === '' || !this.email.val.includes("@")) {
                this.email.isValid = false;
                this.formIsValid = false;
            }
            if (this.password.val < 6) {
                this.password.isValid = false;
                this.formIsValid = false;
            }
        },
        submitForm() {
            if (!this.validateForm()) {
                return;
            }

        },
        switchAuthMode() {
            if (this.mode === "login") {
                this.mode = "signup";
            }
            else {
                this.mode = "login";
            }
        },
    }
}
</script>

<style scoped>
form {
    margin: 1rem;
    padding: 1rem;
}

.form-control {
    margin: 0.5rem 0;
}

label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
}

input,
textarea {
    display: block;
    width: 100%;
    font: inherit;
    border: 1px solid #ccc;
    padding: 0.15rem;
}

input:focus,
textarea:focus {
    border-color: #3d008d;
    background-color: #faf6ff;
    outline: none;
}
</style>