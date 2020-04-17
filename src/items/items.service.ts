import { dbInstance, saveDBToFile as dbSave } from "../common/database";

/**
 * Data Model Interfaces
 */

 import { Item } from "./item.interface";
 import { Items } from "./items.interface";

/**
 * In-Memory Store
 */
let items = JSON.parse(JSON.stringify(dbInstance));

/**
 * Service Methods
 */

export const findAll = async (): Promise<Items> => {
  let items = JSON.parse(JSON.stringify(dbInstance));
  return items;
};

 export const find = async (id: number): Promise<Item> => {
  const item = items[id];
  const record: Item = item;

  if (record) {
    return record;
  }

  throw new Error("No record found");
};

export const create = async (newItem: Item): Promise<void> => {
  const id = new Date().valueOf();
  items[id] = {
    ...newItem,
    id
  };
};

export const update = async (updatedItem: Item): Promise<void> => {
  if (items[updatedItem.id]) {
    items[updatedItem.id] = updatedItem;
    return;
  }

  throw new Error("No record found to update");
};

export const remove = async (id: number): Promise<void> => {
  const record: Item = items[id];

  if (record) {
    delete items[id];
    return;
  }

  throw new Error("No record found to delete");
};
