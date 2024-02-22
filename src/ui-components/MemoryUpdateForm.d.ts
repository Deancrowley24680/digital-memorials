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
export declare type MemoryUpdateFormInputValues = {
    name?: string;
    comment?: string;
    image?: string;
};
export declare type MemoryUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    comment?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MemoryUpdateFormOverridesProps = {
    MemoryUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    comment?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MemoryUpdateFormProps = React.PropsWithChildren<{
    overrides?: MemoryUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    memory?: any;
    onSubmit?: (fields: MemoryUpdateFormInputValues) => MemoryUpdateFormInputValues;
    onSuccess?: (fields: MemoryUpdateFormInputValues) => void;
    onError?: (fields: MemoryUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MemoryUpdateFormInputValues) => MemoryUpdateFormInputValues;
    onValidate?: MemoryUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MemoryUpdateForm(props: MemoryUpdateFormProps): React.ReactElement;
