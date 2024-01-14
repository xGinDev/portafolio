import {Input, Button} from "@nextui-org/react";
import { SlEnvolope } from "react-icons/sl";
export default function Newsletter(){
    return (
        <div className={'flex flex-col justify-center items-center p-6 bg-primary'}>
            {/*<h1>Newsletter</h1>*/}
            <div className="flex sm:flex-col lg:flex-row gap-4">
                <Input type="email" label="Email" />
                <Input type="text" label="Name" />
                <Button radius="full">
                    Submit
                </Button>
            </div>
        </div>
    )
}