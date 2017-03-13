# clay-entity@1.4.0

Entity class for ClayDB

+ Functions
  + [create(args)](#clay-entity-function-create)
  + [decorate(decorate)](#clay-entity-function-decorate)
+ [`ClayEntity`](#clay-entity-classes) Class
  + [new ClayEntity(attributes)](#clay-entity-classes-clay-entity-constructor)
+ [`DecoratedEntity`](#clay-entity-classes) Class
  + [new DecoratedEntity(entity)](#clay-entity-classes-decorated-entity-constructor)
  + [entity.get(name)](#clay-entity-classes-decorated-entity-get)
  + [entity.set(attributes)](#clay-entity-classes-decorated-entity-set)
  + [entity.set(name, value)](#clay-entity-classes-decorated-entity-set)
  + [entity.at()](#clay-entity-classes-decorated-entity-at)
  + [entity.at(at)](#clay-entity-classes-decorated-entity-at)
  + [entity.by()](#clay-entity-classes-decorated-entity-by)
  + [entity.by(by)](#clay-entity-classes-decorated-entity-by)
  + [entity.seal()](#clay-entity-classes-decorated-entity-seal)
  + [entity.seal(privateKey)](#clay-entity-classes-decorated-entity-seal)
  + [entity.as()](#clay-entity-classes-decorated-entity-as)
  + [entity.as(as)](#clay-entity-classes-decorated-entity-as)
  + [entity.verify(publicKey)](#clay-entity-classes-decorated-entity-verify)
  + [entity.toValues()](#clay-entity-classes-decorated-entity-toValues)

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



<a class='md-heading-link' name="clay-entity-classes"></a>

## `ClayEntity` Class

Entity class for ClayDB




<a class='md-heading-link' name="clay-entity-classes-clay-entity-constructor" ></a>

### new ClayEntity(attributes)

Constructor of ClayEntity class

| Param | Type | Description |
| ----- | --- | -------- |
| attributes | Object | Attributes |


<a class='md-heading-link' name="clay-entity-classes"></a>

## `DecoratedEntity` Class






<a class='md-heading-link' name="clay-entity-classes-decorated-entity-constructor" ></a>

### new DecoratedEntity(entity)

Constructor of DecoratedEntity class

| Param | Type | Description |
| ----- | --- | -------- |
| entity | Entity | Entity to decorate |


<a class='md-heading-link' name="clay-entity-classes-decorated-entity-get" ></a>

### entity.get(name) -> `*`

Get entity attribute.

| Param | Type | Description |
| ----- | --- | -------- |
| name | string | Name of attribute |


<a class='md-heading-link' name="clay-entity-classes-decorated-entity-set" ></a>

### entity.set(attributes) -> `DecoratedEntity`

Set values

| Param | Type | Description |
| ----- | --- | -------- |
| attributes | Object | Attributes to set |


<a class='md-heading-link' name="clay-entity-classes-decorated-entity-set" ></a>

### entity.set(name, value) -> `DecoratedEntity`

Set value

| Param | Type | Description |
| ----- | --- | -------- |
| name | string | Name of attribute to set |
| value | * | Value to set |


<a class='md-heading-link' name="clay-entity-classes-decorated-entity-at" ></a>

### entity.at() -> `Date`

Get $$at attribute

<a class='md-heading-link' name="clay-entity-classes-decorated-entity-at" ></a>

### entity.at(at) -> `DecoratedEntity`

Set $$at attribute

| Param | Type | Description |
| ----- | --- | -------- |
| at | Date | Date data set at |


<a class='md-heading-link' name="clay-entity-classes-decorated-entity-by" ></a>

### entity.by() -> `string`

Get $$by attribute

<a class='md-heading-link' name="clay-entity-classes-decorated-entity-by" ></a>

### entity.by(by) -> `DecoratedEntity`

Set $$by attribute

| Param | Type | Description |
| ----- | --- | -------- |
| by | string | Lump id |


<a class='md-heading-link' name="clay-entity-classes-decorated-entity-seal" ></a>

### entity.seal() -> `string`

Get seal

<a class='md-heading-link' name="clay-entity-classes-decorated-entity-seal" ></a>

### entity.seal(privateKey) -> `DecoratedEntity`

Seal this entity

| Param | Type | Description |
| ----- | --- | -------- |
| privateKey | string | Private key to seal |


<a class='md-heading-link' name="clay-entity-classes-decorated-entity-as" ></a>

### entity.as() -> `string`

Get as

<a class='md-heading-link' name="clay-entity-classes-decorated-entity-as" ></a>

### entity.as(as) -> `DecoratedEntity`

Set resource name as as

| Param | Type | Description |
| ----- | --- | -------- |
| as | string | As |


<a class='md-heading-link' name="clay-entity-classes-decorated-entity-verify" ></a>

### entity.verify(publicKey) -> `boolean`

Verify the entity with public key

| Param | Type | Description |
| ----- | --- | -------- |
| publicKey | string |  |


<a class='md-heading-link' name="clay-entity-classes-decorated-entity-toValues" ></a>

### entity.toValues() -> `Object`

Convert into value object



