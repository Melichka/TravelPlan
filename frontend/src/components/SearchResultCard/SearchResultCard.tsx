import React from "react";
import { Card, CardContent, Typography, Chip } from "@mui/material";

const SearchResultCard = ({ name, description, tags }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        {tags && tags.length > 0 && (
          <div>
            {tags.map((tag) => (
              <Chip key={tag.id} label={tag.name} variant="outlined" />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SearchResultCard;
