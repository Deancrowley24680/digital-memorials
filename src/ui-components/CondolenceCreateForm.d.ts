/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CondolenceCreateFormInputValues = {
    name?: string;
    comment?: string;
};
export declare type CondolenceCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    comment?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CondolenceCreateFormOverridesProps = {
    CondolenceCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    comment?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CondolenceCreateFormProps = React.PropsWithChildren<{
    overrides?: CondolenceCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CondolenceCreateFormInputValues) => CondolenceCreateFormInputValues;
    onSuccess?: (fields: CondolenceCreateFormInputValues) => void;
    onError?: (fields: CondolenceCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CondolenceCreateFormInputValues) => CondolenceCreateFormInputValues;
    onValidate?: CondolenceCreateFormValidationValues;
} & React.CSSProperties>;
export default function CondolenceCreateForm(props: CondolenceCreateFormProps): React.ReactElement;
