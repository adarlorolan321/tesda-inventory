<template>
    <div ref="quillEditor" v-show="!isLoading"></div>
    <div v-show="isLoading" class="loading-quill">
        Loading Texteditor. . .
    </div>
</template>
<script>
export default {
    props: {
        modelValue: {
            default: null
        },
        defaultValue: {
            default: null
        },
    },
    // watch: {
    //     defaultValue: function(val)
    //     {
    //         if(val != this.modelValue)
    //         {
    //             this.setContent();
    //         }
    //     }
    // },
    data: function () {
        return {
            isLoading: true,
            editor: null,
            toolBar: [
                [{ font: [] }, { size: [] }],
                ["bold", "italic", "underline", "strike"],
                [{ color: [], }, { background: [] }],
                [{ script: "super", }, { script: "sub", }],
                [{ header: "1", }, { header: "2", }, "blockquote", "code-block"],
                [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
                ["direction", { align: [] }],
                ["link", "image", "video", "formula"],
                ["clean"],
            ],
        };
    },
    mounted: function () {
        this.isLoading = true;
            setTimeout(() => {
            this.initialize()
            this.setContent();
            this.isLoading = false
        }, 1000);
    },
    methods: {
        initialize: function(){
            var self = this;
            self.editor = new Quill(self.$refs.quillEditor, {
                bounds: self.$refs.quillEditor,
                placeholder: "Type Something...",
                modules: {
                    formula: true,
                    toolbar: self.toolBar,
                },
                theme: "snow",
            });
            self.editor.on('text-change', function(delta, oldDelta, source) {
                var editorContent = self.$refs.quillEditor.querySelector('.ql-editor').innerHTML
                self.$emit('update:modelValue', editorContent)
            });
        },
        setContent: function(){
            var self = this;
            if(!self.editor) {
                self.initialize()
            }
            self.editor.clipboard.dangerouslyPasteHTML(self.defaultValue)
        }
    }
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
