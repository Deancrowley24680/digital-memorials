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
export declare type MemoryCreateFormInputValues = {
    name?: string;
    comment?: string;
    image?: string;
};
export declare type MemoryCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    comment?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MemoryCreateFormOverridesProps = {
    MemoryCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    comment?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MemoryCreateFormProps = React.PropsWithChildren<{
    overrides?: MemoryCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MemoryCreateFormInputValues) => MemoryCreateFormInputValues;
    onSuccess?: (fields: MemoryCreateFormInputValues) => void;
    onError?: (fields: MemoryCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MemoryCreateFormInputValues) => MemoryCreateFormInputValues;
    onValidate?: MemoryCreateFormValidationValues;
} & React.CSSProperties>;
export default function MemoryCreateForm(props: MemoryCreateFormProps): React.ReactElement;
