<template>
    <form action="" @submit.prevent="submitFrom">
        <div class="form-control">
            <label for="firstname">Firstname</label>
            <input type="text" name="" id="firstname" v-model.trim="firstName">
        </div>
        <div class="form-control">
            <label for="secondname">Secondname</label>
            <input type="text" name="" id="secondname" v-model.trim="lastName">
        </div>
        <div class="form-control">
            <label for="description">Description</label>
            <textarea type="text" name="" id="description" rows="5" v-model.trim="description"></textarea>
        </div>
        <div class="form-control">
            <label for="rate">Hourly Rate</label>
            <input type="number" name="" id="rate" v-model.number="rate">
        </div>
        <div class="form-control">
            <h3>Areas of Expertise</h3>
            <div>
                <input type="checkbox" id="frontend" value="frontend" v-model="areas">
                <label for="frontend">Frontend Development</label>
            </div>
            <div>
                <input type="checkbox" id="backend" value="backend" v-model="areas">
                <label for="backend">Backend Development</label>
            </div>
            <div>
                <input type="checkbox" id="career" value="career" v-model="areas">
                <label for="career">Career Advisory</label>
            </div>
        </div>
        <base-button>Register</base-button>
    </form>
</template>
<script>
export default {
    emits: ['save-data'],
    data() {
        return {
            firstName: '',
            lastName: '',
            description: '',
            rate: '',
            areas: [],
            formIsValid: true,
        }

    },
    methods: {
        validateForm() {
            
        },
        submitFrom() {
            this.validateForm();
            const formData = {
                first: this.firstName,
                last: this.firstName,
                desc: this.description,
                rate: this.rate,
                areas: this.areas
            };
            this.$emit('save-data', formData);
        }
    }
}
</script>

<style scoped>
.form-control {
    margin: 0.5rem 0;
}

label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
}

input[type='checkbox']+label {
    font-weight: normal;
    display: inline;
    margin: 0 0 0 0.5rem;
}

input,
textarea {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
}

input:focus,
textarea:focus {
    background-color: #f0e6fd;
    outline: none;
    border-color: #3d008d;
}

input[type='checkbox'] {
    display: inline;
    width: auto;
    border: none;
}

input[type='checkbox']:focus {
    outline: #3d008d solid 1px;
}

h3 {
    margin: 0.5rem 0;
    font-size: 1rem;
}

.invalid label {
    color: red;
}

.invalid input,
.invalid textarea {
    border: 1px solid red;
}
</style>