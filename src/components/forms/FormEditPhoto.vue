<template>
    <div>

        <div @click="lanzadorDeArchivos()">
            <slot name="activador"></slot>
        </div>

        <input type="file" ref="file" :name="uploadFieldName"
            @change="onFileChange($event.target.name, $event.target.files)" style="display:none">
        <Dialogo titulo="Formato de imagen incorrercto." content="normal" />
    </div>
</template>

<script>
import Dialogo from '@/components/panels/Dialogo.vue'

export default {
    name: 'form-edit-photo',
    components: {
        Dialogo,
    },

    data() {
        return {
            uploadFieldName: 'file',
            size: 2048,
        };
    },
    methods: {
        lanzadorDeArchivos() {
            this.$refs.file.click()
        },
        onFileChange(fieldName, file) {
            const { maxSize } = this
            let imageFile = file[0]

            if (file.length > 0) {
                let size = imageFile.size / maxSize / maxSize
                if (!imageFile.type.match('image.*')) {
                    // check whether the upload is an image
                    this.errorText = 'Please choose an image file'
                    this.errorDialog = true

                } else if (size > 1) {
                    // check whether the size is greater than the size limit
                    this.errorDialog = true
                    this.errorText = 'Your file is too big! Please select an image under 1MB'
                } else {
                    // Append file into FormData and turn file into image URL
                    let formData = new FormData()
                    let imageURL = URL.createObjectURL(imageFile)
                    formData.append(fieldName, imageFile)
                    // Emit the FormData and image URL to the parent component
                    this.$emit('input', { formData, imageURL })
                }
            }
        }
    }

}

</script>