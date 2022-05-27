<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

function msg($success,$status,$message,$extra = []){
    return array_merge([
        'success' => $success,
        'status' => $status,
        'message' => $message
    ],$extra);
}

// INCLUDING DATABASE AND MAKING OBJECT
require __DIR__.'/classes/Database.php';
$db_connection = new Database();
$conn = $db_connection->dbConnection();

// GET DATA FORM REQUEST
$data = json_decode(file_get_contents("php://input"));
$returnData = [];

// IF REQUEST METHOD IS NOT POST
if($_SERVER["REQUEST_METHOD"] != "POST"):
    $returnData = msg(0,404,'Page Not Found!');

// CHECKING EMPTY FIELDS
elseif(!isset($data->name) 
    || !isset($data->email) 
    || !isset($data->password)
    || empty(trim($data->name))
    || empty(trim($data->email))
    || empty(trim($data->password))
    ):

    $fields = ['fields' => ['name','email','password']];
    $returnData = msg(0,422,'¡Por favor, rellene todos los campos obligatorios!',$fields);

// IF THERE ARE NO EMPTY FIELDS THEN-
else:
    
    $name = trim($data->name);
    $email = trim($data->email);
    $password = trim($data->password);
    $tipo_usuario = trim($data->tipo_usuario);
    /*$nick = trim($data->nick);
    $apellidos = trim($data->apellidos);
    $tdoc = trim($data->tdoc);
    $documento = trim($data->documento);
    $telefono = trim($data->telefono);
    $genero = trim($data->genero);
    $fechanacimiento = trim($data->fechanacimiento);
    $edad = trim($data->edad);
    $modulo = trim($data->modulo);
    $deporte = trim($data->deporte);
    $subdeporte = trim($data->subdeporte);
    $pais = trim($data->pais);
    $departamento = trim($data->departamento);
    $ciudad = trim($data->ciudad);
    $comercio_natural = trim($data->comercio_natural);
    $nacionalidad = trim($data->nacionalidad);
    $direccion = trim($data->direccion);
    $ciudad_nacionalidad = trim($data->ciudad_nacionalidad);
     $emailc = trim($data->emailc);*/

    if(!filter_var($email, FILTER_VALIDATE_EMAIL)):
        $returnData = msg(0,422,'Invalid Email Address!');
    
    elseif(strlen($password) < 8):
        $returnData = msg(0,422,'¡Su contraseña debe tener al menos 8 caracteres!');

    elseif(strlen($name) < 3):
        $returnData = msg(0,422,'¡Tu nombre debe tener al menos 3 caracteres!');

    else:
        try{

            $check_email = "SELECT `email` FROM `usuarios` WHERE `email`=:email";
            $check_email_stmt = $conn->prepare($check_email);
            $check_email_stmt->bindValue(':email', $email,PDO::PARAM_STR);
            $check_email_stmt->execute();

            if($check_email_stmt->rowCount()):
                $returnData = msg(0,422, '¡Este correo electrónico ya está en uso!');
            
            else:
               /* $insert_query = "INSERT INTO `usuarios`(`name`,`email`,`password`,`tipo_usuario`,`nick`,`apellidos`,`tdoc`,`documento`,`telefono`,`genero`,`fechanacimiento`,`edad`,`modulo`,`deporte`,`subdeporte`,`pais`,`departamento`,`ciudad`,`comercio_natural`,`nacionalidad`,`direccion`,`ciudad_nacionalidad`,`emailc`) VALUES(:name,:email,:password,:tipo_usuario,:nick,:apellidos,:tdoc,:documento,:telefono,:genero,:fechanacimiento,:edad,:modulo,:deporte,:subdeporte,:pais,:departamento,:ciudad,:comercio_natural,:nacionalidad,:direccion,:ciudad_nacionalidad,:emailc)";

                $insert_stmt = $conn->prepare($insert_query);

                // DATA BINDING
                $insert_stmt->bindValue(':name', htmlspecialchars(strip_tags($name)),PDO::PARAM_STR);
                $insert_stmt->bindValue(':email', $email,PDO::PARAM_STR);
                $insert_stmt->bindValue(':password', password_hash($password, PASSWORD_DEFAULT),PDO::PARAM_STR);
                $insert_stmt->bindValue(':tipo_usuario', $tipo_usuario,PDO::PARAM_STR);
                $insert_stmt->bindValue(':nick', $nick,PDO::PARAM_STR);
                $insert_stmt->bindValue(':apellidos', $apellidos,PDO::PARAM_STR);
                $insert_stmt->bindValue(':tdoc', $tdoc,PDO::PARAM_STR);
                $insert_stmt->bindValue(':documento', $documento,PDO::PARAM_STR);
                $insert_stmt->bindValue(':telefono', $telefono,PDO::PARAM_STR);
                $insert_stmt->bindValue(':genero', $genero,PDO::PARAM_STR);
                $insert_stmt->bindValue(':fechanacimiento', $fechanacimiento,PDO::PARAM_STR);
                $insert_stmt->bindValue(':edad', $edad,PDO::PARAM_STR);
                $insert_stmt->bindValue(':modulo', $modulo,PDO::PARAM_STR);
                $insert_stmt->bindValue(':deporte', $deporte,PDO::PARAM_STR);
                $insert_stmt->bindValue(':subdeporte', $subdeporte,PDO::PARAM_STR);
                $insert_stmt->bindValue(':pais', $pais,PDO::PARAM_STR);
                $insert_stmt->bindValue(':departamento', $departamento,PDO::PARAM_STR);
                $insert_stmt->bindValue(':ciudad', $ciudad,PDO::PARAM_STR);
                $insert_stmt->bindValue(':comercio_natural', $comercio_natural,PDO::PARAM_STR);
                $insert_stmt->bindValue(':nacionalidad', $nacionalidad,PDO::PARAM_STR);
                $insert_stmt->bindValue(':direccion', $direccion,PDO::PARAM_STR);
                $insert_stmt->bindValue(':ciudad_nacionalidad', $ciudad_nacionalidad,PDO::PARAM_STR);
                $insert_stmt->bindValue(':emailc', $emailc,PDO::PARAM_STR);*/
                
                
                $insert_query = "INSERT INTO `usuarios`(`name`,`email`,`password`,`tipo_usuario`) VALUES(:name,:email,:password,:tipo_usuario)";

                $insert_stmt = $conn->prepare($insert_query);

                // DATA BINDING
                $insert_stmt->bindValue(':name', htmlspecialchars(strip_tags($name)),PDO::PARAM_STR);
                $insert_stmt->bindValue(':email', $email,PDO::PARAM_STR);
                $insert_stmt->bindValue(':password', password_hash($password, PASSWORD_DEFAULT),PDO::PARAM_STR);
                $insert_stmt->bindValue(':tipo_usuario', $tipo_usuario,PDO::PARAM_STR);

                $insert_stmt->execute();

                $returnData = msg(1,201,'Se ha registrado exitosamente.');

            endif;

        }
        catch(PDOException $e){
            $returnData = msg(0,500,$e->getMessage());
        }
    endif;
    
endif;

echo json_encode($returnData);