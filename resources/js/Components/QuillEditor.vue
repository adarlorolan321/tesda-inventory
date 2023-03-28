<template>
    <div ref="quillEditorToolbar" v-show="!isLoading">
        <span class="ql-formats">
            <select class="ql-font"></select>
            <select class="ql-size"></select>
        </span>
        <span class="ql-formats">
            <button class="ql-bold"></button>
            <button class="ql-italic"></button>
            <button class="ql-underline"></button>
            <button class="ql-strike"></button>
        </span>
        <span class="ql-formats">
            <select class="ql-color"></select>
            <select class="ql-background"></select>
        </span>
        <span class="ql-formats">
            <button class="ql-script" value="sub"></button>
            <button class="ql-script" value="super"></button>
        </span>
        <span class="ql-formats">
            <button class="ql-header" value="1"></button>
            <button class="ql-header" value="2"></button>
            <button class="ql-blockquote"></button>
            <button class="ql-code-block"></button>
        </span>
        <span class="ql-formats">
            <button class="ql-clean"></button>
        </span>
    </div>
    <div ref="quillEditor" v-show="!isLoading">
        <p v-html="loadedValue"></p>
    </div>
    <div v-show="isLoading" class="loading-quill">Loading</div>
</template>
<script>
export default {
    props: {
        modelValue: {
            default: null,
        },
        defaultValue: {
            default: null,
        },
    },
    data: function () {
        return {
            isLoading: true,
            editor: null,
            loadedValue: null,
        };
    },
    mounted: function () {
        this.setContent();
        this.isLoading = true;
        console.log("Initialized");
        setTimeout(() => {
            this.isLoading = false;
            this.initialize();
        }, 1000);
    },
    unmounted: function () {
        // this.editor.destory();
    },
    methods: {
        initialize: function () {
            var self = this;
            self.editor = new Quill(this.$refs.quillEditor, {
                bounds: this.$refs.quillEditor,
                modules: {
                    formula: true,
                    toolbar: this.$refs.quillEditorToolbar,
                },
                theme: "snow",
            });
            self.editor.on("text-change", function (delta, oldDelta, source) {
                var editorContent =
                    self.$refs.quillEditor.querySelector(
                        ".ql-editor"
                    ).innerHTML;
                self.$emit("update:modelValue", editorContent);
            });
        },
        setContent: function () {
            this.loadedValue = this.defaultValue;
            console.log("not loading");
        },
    },
};
</script>
<style>
.loading-quill {
    min-height: 240px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border: 0.0625rem solid #dbdade;
}
</style>
