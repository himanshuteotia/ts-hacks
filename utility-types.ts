
// Partial<Type>
// Constructs a type with all properties of Type set to optional. This utility will return a type that represents all subsets of a given type.

interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});


// Readonly<Type>
// Constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type cannot be reassigned.

interface Todo {
  title: string;
}

const todo: Readonly<Todo> = {
  title: "Delete inactive users",
};

// Cannot assign to 'title' because it is a read-only property.
// todo.title = "Hello";


// Record<Keys,Type>
// Constructs a type with a set of properties Keys of type Type. This utility can be used to map the properties of a type to another type.


interface PageInfo {
  title: string;
}

type Page = "home" | "about" | "contact";

const nav: Record<Page, PageInfo> = {
  about: { title: "about" },
  contact: { title: "contact" },
  home: { title: "home" },
};



// Pick<Type, Keys>
// Constructs a type by picking the set of properties Keys from Type.

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};



// Omit<Type, Keys>
// Constructs a type by picking all properties from Type and then removing Keys.

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Omit<Todo, "description">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};





































