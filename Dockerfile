FROM nginx:alpine

# Copy the public directory to nginx's html directory
COPY public /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]