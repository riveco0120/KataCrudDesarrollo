package co.com.sofka.crud.mapper;

import co.com.sofka.crud.dto.TodoDto;
import co.com.sofka.crud.models.Todo;

public interface IMapperTodo {
    public TodoDto entitymapperdto();
    public Todo dtomapperentity();

}
