import * as yup from 'yup'

export const validationSettingForm = yup.object().shape({
   rowName: yup.string().required(),
   salary: yup.string().required(),
   equipmentCosts: yup.string().required(),
   overheads: yup.string().required(),
   estimatedProfit: yup.string().required(),
})