import React from 'react';
import { ListContainer } from "meteor/utilities:react-list-container";
import Categories from "meteor/nova:categories";

const CustomPostsListHeader = () => {
  return (
    <div>
      <div className="posts-list-header">
        <div className="posts-lists-header-categories">
          <ListContainer 
            collection={Categories} 
            limit={0} 
            resultsPropName="categories" 
            component={Telescope.components.CategoriesList}
            listId="categories"
          />
        </div>

        <Telescope.components.PostsViews />

        <Telescope.components.SearchForm/>
        
        <Telescope.components.SlackButton/>
      </div>
    </div>
  );
};

CustomPostsListHeader.displayName = "CustomPostsListHeader";

Telescope.components.PostsListHeader = CustomPostsListHeader;