export default function handler(req, res) {
    const { method } = req 
    if (method === "POST") {
        res.status(200).json({
            message: `You have been registered successfully with the email: XXX`
        })
    }
}