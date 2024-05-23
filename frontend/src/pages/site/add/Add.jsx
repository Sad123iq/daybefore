import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'

const Add = () => {
    const [data, setData] = useState()
    useEffect(() => {
        axios.get('http://localhost:8080/api/products')
            .then(res => {
                setData(res.data);
            })
    }, [])
    const formik = useFormik({
        initialValues: {
            title: '',
            image: '',
            desc: '',
            price: '',
        },
        validationSchema: Yup.object({
            title: Yup.string()
                .required('Required'),
            price: Yup.string()
                .required('Required'),
        }),
        onSubmit: values => {
            axios.post("http://localhost:8080/api/products", values
                // {
                //     title: values.title,
                //     image: values.image,
                //     desc: values.desc,
                //     price: values.price,
                //     count: 1,
                //     totalPrice: values.price
                // }
            )
        },
    });
    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.title}
                />
                {formik.touched.title && formik.errors.title ? (
                    <div>{formik.errors.title}</div>
                ) : null}

                <label htmlFor="image">Image</label>
                <input
                    id="image"
                    name="image"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.image}
                />
                {formik.touched.image && formik.errors.image ? (
                    <div>{formik.errors.image}</div>
                ) : null}

                <label htmlFor="desc">Descripton</label>
                <input
                    id="desc"
                    name="desc"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.desc}
                />
                {formik.touched.desc && formik.errors.desc ? (
                    <div>{formik.errors.desc}</div>
                ) : null}

                <label htmlFor="price">Price</label>
                <input
                    id="price"
                    name="price"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.price}
                />
                {formik.touched.price && formik.errors.price ? (
                    <div>{formik.errors.price}</div>
                ) : null}

                <button type="submit">Submit</button>
            </form>
            <div className="container">


                <table class="table table-striped-columns mt-5">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Image</th>
                            <th scope="col">Desc</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data ? data.map(elem => {
                            return (<tr>
                                <th scope="row">1</th>
                                <td>{elem.title}</td>
                                <td><img src={elem.image} alt="" /></td>
                                <td>{elem.desc}</td>
                                <td>{elem.price} $ </td>
                            </tr>)
                        }) : ''}

                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Add