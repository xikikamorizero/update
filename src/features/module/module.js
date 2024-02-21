import katex from "katex";
class EJLaTeX {
    constructor({ data, config }) {
        this.data = data?.math || "";

        if (config && config.css) {
            this.addCss(config.css);
        }
    }

    static get toolbox() {
        return {
            title: "Math",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><line x1="5" y1="5" x2="19" y2="19"></line></svg>`,
        };
    }
    render() {
        const wrapper = document.createElement("div");
        const preview = document.createElement("p");
        const input = document.createElement("input");

        wrapper.classList.add("math-input-wrapper");
        preview.classList.add("math-preview");
        input.classList.add("math-input");

        input.setAttribute("placeholder", "Введите LaTeX-формулу здесь");

        if (this.data) {
            input.value = this.data;
            katex.render(input.value, preview, {
                throwOnError: false,
            });
        }

        let timeout;
        input.addEventListener("input", () => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                katex.render(input.value, preview, {
                    throwOnError: false,
                });
            }, 500);
        });

        wrapper.appendChild(preview);
        wrapper.appendChild(input);
        return wrapper;
    }

    save(blockContent) {
        return {
            math: blockContent.childNodes[1].value,
        };
    }

    static get isReadOnlySupported() {
        return true;
    }

    addCss(cssRules) {
        const head = document.head;
        let css = document.createElement("style");
        if (css.styleSheet) {
            css.styleSheet.cssText = cssRules;
        } else {
            css.appendChild(document.createTextNode(cssRules));
        }

        head.appendChild(css);
    }
}

if (typeof window !== "undefined") {
    window.EJLaTeX = EJLaTeX;
}

export default EJLaTeX;
