export const FormatterService = {
    valorMonetario(value: number): string {
        return value.toLocaleString(
            "pt-BR",
            {
                minimumFractionDigits: 2,
                style: "currency",
                currency: "BRL"
            },
        );
    },
    limitarTexto(content_: string, maxLength: number): string {
        if (content_.length <= maxLength) {
            return content_;
        }
        return content_.slice(0, maxLength) + "...";
    }
}
