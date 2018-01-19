# clay-entity@2.1.3

Entity class for ClayDB

+ Functions
  + [create(args)](#clay-entity-function-create)
  + [decorate(decorate)](#clay-entity-function-decorate)
  + [isEntity(obj)](#clay-entity-function-is-entity)
+ [`DecoratedEntity`](#clay-entity-class) Class
  + [new DecoratedEntity(entity)](#clay-entity-class-decorated-entity-constructor)
  + [entity.get(name)](#clay-entity-class-decorated-entity-get)
  + [entity.set(name, value)](#clay-entity-class-decorated-entity-set)
  + [entity.set(attributes, options)](#clay-entity-class-decorated-entity-set)
  + [entity.at(at)](#clay-entity-class-decorated-entity-at)
  + [entity.at()](#clay-entity-class-decorated-entity-at)
  + [entity.by(by)](#clay-entity-class-decorated-entity-by)
  + [entity.by()](#clay-entity-class-decorated-entity-by)
  + [entity.seal(privateKey)](#clay-entity-class-decorated-entity-seal)
  + [entity.seal()](#clay-entity-class-decorated-entity-seal)
  + [entity.as(as)](#clay-entity-class-decorated-entity-as)
  + [entity.as()](#clay-entity-class-decorated-entity-as)
  + [entity.num(num)](#clay-entity-class-decorated-entity-num)
  + [entity.num()](#clay-entity-class-decorated-entity-num)
  + [entity.verify(publicKey)](#clay-entity-class-decorated-entity-verify)
  + [entity.toValues()](#clay-entity-class-decorated-entity-toValues)

## Functions

<a class='md-heading-link' name="clay-entity-function-create" ></a>

### create(args) -> `Entity`

Create a Entity instance

| Param | Type | Description |
| ----- | --- | -------- |
| args | * |  |

<a class='md-heading-link' name="clay-entity-function-decorate" ></a>

### decorate(decorate) -> `DecoratedEntity`

Decorate an entity

| Param | Type | Description |
| ----- | --- | -------- |
| decorate | Entity |  |

<a class='md-heading-link' name="clay-entity-function-is-entity" ></a>

### isEntity(obj) -> `boolean`

Detect a instance is entity or not

| Param | Type | Description |
| ----- | --- | -------- |
| obj | * | Object to check |



<a class='md-heading-link' name="clay-entity-class"></a>

## `DecoratedEntity` Class






<a class='md-heading-link' name="clay-entity-class-decorated-entity-constructor" ></a>

### new DecoratedEntity(entity)

Constructor of DecoratedEntity class

| Param | Type | Description |
| ----- | --- | -------- |
| entity | Entity | Entity to decorate |


<a class='md-heading-link' name="clay-entity-class-decorated-entity-get" ></a>

### entity.get(name) -> `*`

Get entity attribute.

| Param | Type | Description |
| ----- | --- | -------- |
| name | string | Name of attribute |


<a class='md-heading-link' name="clay-entity-class-decorated-entity-set" ></a>

### entity.set(name, value) -> `DecoratedEntity`

Set value

| Param | Type | Description |
| ----- | --- | -------- |
| name | string | Name of attribute to set |
| value | * | Value to set |


<a class='md-heading-link' name="clay-entity-class-decorated-entity-set" ></a>

### entity.set(attributes, options) -> `DecoratedEntity`

Set values

| Param | Type | Description |
| ----- | --- | -------- |
| attributes | Object | Attributes to set |
| options | Object | Optional settings |
| options.allowReserved | boolean | Allow to set reserved |


<a class='md-heading-link' name="clay-entity-class-decorated-entity-at" ></a>

### entity.at(at) -> `DecoratedEntity`

Set $$at attribute

| Param | Type | Description |
| ----- | --- | -------- |
| at | Date | Date data set at |


<a class='md-heading-link' name="clay-entity-class-decorated-entity-at" ></a>

### entity.at() -> `Date`

Get $$at attribute

<a class='md-heading-link' name="clay-entity-class-decorated-entity-by" ></a>

### entity.by(by) -> `DecoratedEntity`

Set $$by attribute

| Param | Type | Description |
| ----- | --- | -------- |
| by | string | Lump id |


<a class='md-heading-link' name="clay-entity-class-decorated-entity-by" ></a>

### entity.by() -> `string`

Get $$by attribute

<a class='md-heading-link' name="clay-entity-class-decorated-entity-seal" ></a>

### entity.seal(privateKey) -> `DecoratedEntity`

Seal this entity

| Param | Type | Description |
| ----- | --- | -------- |
| privateKey | string | Private key to seal |


<a class='md-heading-link' name="clay-entity-class-decorated-entity-seal" ></a>

### entity.seal() -> `string`

Get seal

<a class='md-heading-link' name="clay-entity-class-decorated-entity-as" ></a>

### entity.as(as) -> `DecoratedEntity`

Set resource name as as

| Param | Type | Description |
| ----- | --- | -------- |
| as | string | As |


<a class='md-heading-link' name="clay-entity-class-decorated-entity-as" ></a>

### entity.as() -> `string`

Get as

<a class='md-heading-link' name="clay-entity-class-decorated-entity-num" ></a>

### entity.num(num) -> `DecoratedEntity`

Set entity number as num

| Param | Type | Description |
| ----- | --- | -------- |
| num | string | As |


<a class='md-heading-link' name="clay-entity-class-decorated-entity-num" ></a>

### entity.num() -> `string`

Get num

<a class='md-heading-link' name="clay-entity-class-decorated-entity-verify" ></a>

### entity.verify(publicKey) -> `boolean`

Verify the entity with public key

| Param | Type | Description |
| ----- | --- | -------- |
| publicKey | string |  |


<a class='md-heading-link' name="clay-entity-class-decorated-entity-toValues" ></a>

### entity.toValues() -> `Object`

Convert into value object



