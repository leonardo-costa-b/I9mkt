import { InputError } from './input-error';
import { InputLabel } from './input-label';
import { InputNormal } from './input-normal';
import { InputRoot } from './input-root';
import { SelectInput } from './input-select';
import { PhoneInput } from './mask/input-phone';

export const Input = {
    Root: InputRoot,
    Label: InputLabel,
    Normal: InputNormal,
    Phone: PhoneInput,
    Select: SelectInput,
    Error: InputError,
};
