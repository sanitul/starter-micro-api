import { Tag, UpdateTagRequest } from '../../../entity/tags';
export declare abstract class ITagsDatabase {
    abstract getTags: (query: Record<string, any>) => Promise<Tag[]>;
    abstract getTag: (query: Record<string, any>) => Promise<Tag | null>;
    abstract createTag: (data: Tag) => Promise<Tag | null>;
    abstract updateTag: (query: Record<string, any>, data: UpdateTagRequest) => Promise<Tag | null>;
}
