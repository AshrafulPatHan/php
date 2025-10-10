#!/bin/bash

echo "Type your commit :";
read commit;

# send to github
git add .
git commit -m "$commit"
git push