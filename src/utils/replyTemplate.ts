export const replyContactTemplate = ({
  text,
}: {
  text: string;
}) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Template</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }

        .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h1 {
            color: #3498db;
        }

        p {
            margin-bottom: 20px;
        }

        .reply-content {
            border: 1px solid #ddd;
            padding: 10px;
            margin-top: 20px;
            background-color: #fafafa;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Thank you for your message.</h1>
        <div class="reply-content">
            <blockquote>
                ${text}
            </blockquote>
        </div>
    </div>
</body>
</html>
`;
