<template lang="">
    <div>
        <a 
            v-if="isExternalLink"
            target= "_blank"
            :href="link.to"
            :class="normal-link"
        >
            {{link.name}}
        </a>
        <router-link
            v-else
            :to="link.to"
            v-slot="{href, isActive}"
        >
            <a  :href="href"
                :class=" isActive ? 'is-active' : 'normal-link' "
            >
                {{link.name}}
            </a>
        </router-link>
    </div>
</template>

<script>
export default {
    props: {
        link: {
            type: Object,
            required: true
        }
    },
    computed: {
        isExternalLink(){
            return this.link.to.startsWith('https')
        }
    }
}
</script>

<style scoped>
    .is-active{
        color: aquamarine;
    }
    .normal-link{
        color: #c6c5c5;
    }
</style>