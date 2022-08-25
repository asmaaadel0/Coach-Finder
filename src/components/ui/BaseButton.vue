<template>
    <button v-if="!link" :class="mode">
        <slot></slot>
    </button>
    <router-link v-else :to="to" :class="mode">
        <slot></slot>
    </router-link>
</template>
<script>
export default {
    props: {
        mode: {
            type: String,
            required: false,
            default: null,
        },
        link: {
            type: Boolean,
            required: false,
            default: false,
        }
    }
}
</script>
<style scoped>
button,
a {
    text-decoration: none;
    padding: 0.75rem 1.5rem;
    font: inherit;
    background-color: #1c3638;
    border: 1px solid #1c3638;
    color: white;
    cursor: pointer;
    border-radius: 30px;
    margin-right: 0.5rem;
    display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
    background-color: #025a5d;
    border-color: #025a5d;
}

.flat {
    background-color: transparent;
    color: #069ea3;
    border: none;
}

.outline {
    background-color: transparent;
    border-color: #08c0c6;
    color: #08c0c6;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
    background-color: #defafb;
}
</style>