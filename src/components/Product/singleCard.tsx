import {MDBBtn, MDBCardImage, MDBCol, MDBIcon, MDBInput, MDBRow, MDBTypography} from "mdb-react-ui-kit";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const SingleCard = ({fields}) => {
    const {brand,category,price,thumbnail} = fields;
    return (
        <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
            <MDBCol md="2" lg="2" xl="2">
                <MDBCardImage
                    src={thumbnail}
                    fluid className="rounded-3" alt="Cotton T-shirt" />
            </MDBCol>
            <MDBCol md="3" lg="3" xl="3">
                <MDBTypography tag="h6" className="text-muted">
                    {(category as string).toUpperCase()}
                </MDBTypography>
                <MDBTypography tag="h6" className="text-black mb-0">
                    {(brand as string).toUpperCase()}
                </MDBTypography>
            </MDBCol>
            <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center">
                <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                    <MDBBtn className="px-3 me-2">
                        <MDBIcon fas icon="minus" />
                    </MDBBtn>

                    <MDBInput defaultValue={1} min={0} type="number" label="Quantity" />

                    <MDBBtn className="px-3 ms-2">
                        <MDBIcon fas icon="plus" />
                    </MDBBtn>
                </div>
            </MDBCol>
            <MDBCol md="3" lg="2" xl="2" className="text-end">
                <MDBTypography tag="h6" className="mb-0">
                    ${price}
                </MDBTypography>
            </MDBCol>
            <MDBCol md="1" lg="1" xl="1" className="text-end">
                <MDBBtn className="px-3 me-2">
                    <MDBIcon fas icon="trash"/>
            </MDBBtn>
            </MDBCol>
        </MDBRow>

    );
};

export default SingleCard;
