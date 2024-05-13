# Ejemplo de uso de Plugins de WEB3JS

  

## PLugin de ENS

Este plugin permite:

  

 - Address: Es la dirección a la que llegan los tokens cuando se envían
   al ENS.
   
 - Hash: Es el binario con la información del hash del contenido que   
   está en IPFS.

 - Owner: Es el dueño del ENS. Hay varios roles: owner, manager y ETH   
   record.
   
 - PubKey: Es el par de dirección pública x y asociada al ENS.
 - 
 - Resolver: Es la dirección del contrato resolver asociada al contrato 
   ENS, la cual tiene otros métodos para interactuar con el ENS.

 - TTL: Es el tiempo que se almacena en caché la información del IPFS   
   del dominio. Si es 0, significa que no se guarda la información y   
   cada vez que se consulta se hace directamente al servidor.

 - Result: Ve si está en uso el ENS. Si es true, es que tiene algún   
   dueño o está en período de gracia; si es false, está disponible para 
   comprar.
