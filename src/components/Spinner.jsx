export const Spinner = () => {
    return (
        <div className="d-flex justify-content-center min-vh-100" style={{ position: "relative", marginTop: '8rem' }}>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">No Posts</span>
            </div>
            <p style={{ marginLeft: "0.5rem" }}>Loading...</p>
        </div>
    )
}