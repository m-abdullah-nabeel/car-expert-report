import React from 'react';
import { useForm } from 'react-hook-form';

export default function Accident() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Accident Details" {...register("Accident Details", {})} />
            <input type="text" placeholder="Inspection Party" {...register("Inspection Party", { required: true, maxLength: 80 })} />
            <input type="text" placeholder="Address" {...register("Address", {})} />
            <input type="text" placeholder="Police" {...register("Police", {})} />
            <input type="datetime" placeholder="Date" {...register("Date", {})} />

            <input type="submit" />
        </form>
    );
}