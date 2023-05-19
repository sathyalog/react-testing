import {render, screen} from '@testing-library/react';
import {Greet} from "./greet";

describe("Greet",() => {
    test("renders correctly",()=>{
        render(<Greet />)
        const txtElement = screen.getByText('Hello');
        expect(txtElement).toBeInTheDocument();
    })

    test("renders name",()=>{
        render(<Greet name="Sathya"/>);
        const element = screen.getByText('Hello Sathya');
        expect(element).toBeInTheDocument();
    })
})
