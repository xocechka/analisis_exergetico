import { defineStore } from 'pinia';
import { ref, computed, watch, Ref } from 'vue';
import { QInput } from 'quasar';

interface IForm {
  fields: FormField[];
}

type FormField = {
  [key: string]: Field;
};

interface Field {
  value?: string | number;
  isValid: boolean;
  isRequired: boolean;
  ref?: Ref<QInput | undefined>;
}

class Form {
  // private labels: (keyof FormField[])[];
  private fields: FormField[];
  public labels: string[];

  constructor(public form: IForm) {
    // type FieldName = keyof typeof this.form.fields;
    // this.labels = Object.keys(this.form.fields) as FieldName[];
    // console.log(this.labels);
    this.fields = this.form.fields;
    this.labels = [];
    for (const key in this.fields) {
      this.labels.push(key);
    }
  }

  getField(label: string) {
    const formField = this.fields.find((field) =>
      Object.keys(field).includes(label)
    );
    console.log(formField);

    if (formField) {
      return formField[label];
    }
  }

  isValid() {
    for (const key of this.labels) {
      const field = this.getField(key);
      if (field) {
        if (!field[key.toString()].isValid) return false;
      }
    }
    return true;
  }

  reset() {
    this.labels.forEach((key) => {
      const field = this.getField(key);
      if (field) {
        field[key.toString()].value = undefined;
        field[key.toString()].isValid = false;
      }
    });
  }
}

type State = 'BINDING' | 'INITIAL' | 'RESETTING' | 'ERROR';

export const useFormStore = defineStore('Form', () => {
  const state = ref<State>('INITIAL');

  const form = ref<Form>(
    new Form({
      fields: [],
    })
  );

  type FieldName = keyof typeof form.value.form.fields;
  const fieldsName = Object.keys(form.value) as FieldName[];

  const formIsValid = computed(() => form.value.isValid());

  async function validateField(fieldName: string) {
    const formField = form.value.getField(fieldName);
    if (formField) {
      const field = formField[fieldName.toString()];
      const isValid = await field.ref?.value?.validate(field.value);
      if (isValid !== undefined) {
        field.isValid = isValid;
      }
    }
  }

  function watchAllFields() {
    form.value.labels.forEach((key) => {
      const field = form.value.getField(key);
      watch(form.value.form[key], async () => {
        // if (options) {
        //   if (options.exclude.filter((field) => field === key).length > 0)
        //     return;
        // }
        if (!field?.isRequired) {
          return;
        }

        if (state.value === 'RESETTING') return;
        await validateField(key);
      });
    });
  }

  function bind(
    refsMap: { ref: Ref<QInput | undefined>; fieldName: string }[]
  ) {
    state.value = 'BINDING';
    refsMap.forEach(({ ref, fieldName }) => {
      const field = form.value.getField(fieldName);
      if (field) {
        if (field.ref?.value) {
          field.ref.value = ref.value;
        }
      }
    });
    state.value = 'INITIAL';
  }

  function reset() {
    state.value = 'RESETTING';
    form.value.reset();
    state.value = 'INITIAL';
  }
  return {
    state,
    form,
    fieldsName,

    formIsValid,

    bind,
    reset,
    watchAllFields,
  };
});
