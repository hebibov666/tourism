import {blockContent} from './schemaTypes/blockContent'
import {category} from './schemaTypes/category'
import {post} from './schemaTypes/post'
import {about} from "./schemaTypes/about"
import {author} from './schemaTypes/author'

export const schema = {
  types: [post, author, category, about, blockContent],
}
