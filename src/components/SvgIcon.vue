<script setup lang="ts">

withDefaults(
    defineProps<{
        icon: string,
        size: string | number,
    }>(),
    {
        size:16
    }
)

</script>
<template>
    <el-icon :size="20">
        <component :is="icon"></component>
    </el-icon>
</template>

<style lang='scss' scoped></style>