export const parseForm = (formData: FormData) =>
    Array.from(formData.entries())
        .reduce((memo, pair) => {
            const formName = pair[0];
            const formValue = pair[1];
            if (formName.includes("[]")) {
                const validKey = formName.replace("[]", "");
                if (memo.hasOwnProperty(validKey)) {
                    const array = (memo as any)[validKey];
                    return {
                        ...memo,
                        [validKey]: [...array, formValue],
                    }
                }
                return {
                    ...memo,
                    [validKey]: [formValue]
                }
            }
            return {
                ...memo,
                [formName]: formValue,
            };
        }, {});