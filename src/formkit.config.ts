import "@formkit/themes/genesis"
import { close, down, fileDoc, check, circle } from "@formkit/icons"
import { DefaultConfigOptions } from '@formkit/vue'
import { FormKitValidation, FormKitValidationMessage } from '@formkit/validation'

const required: FormKitValidationMessage = ({ name }) => {
  return `${name} is required`
}


const config: DefaultConfigOptions = {
  messages: {
    en: {
      required
    }
  },
  icons: { close, down, fileDoc, check, circle, checkboxDecorator: check }
}

export default config
