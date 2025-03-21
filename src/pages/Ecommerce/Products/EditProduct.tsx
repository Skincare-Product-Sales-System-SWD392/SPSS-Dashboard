import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Select from "react-select";
import Dropzone from "react-dropzone";
import { UploadCloud, Plus, Trash2 } from "lucide-react";
import BreadCrumb from "Common/BreadCrumb";
import { getFirebaseBackend } from "../../../helpers/firebase_helper";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { getProductById } from 'slices/product/thunk';

// Define interfaces
interface ProductImage {
  file: File | null;
  preview: string;
  formattedSize: string;
}

interface VariationOption {
  id: string;
  value: string;
  variationId?: string;
  variationDto2?: {
    id: string;
    name: string;
  };
}

interface Variation {
  id: string;
  name: string;
  variationOptions: VariationOption[];
  productCategory?: any;
}

interface ProductItem {
  id?: string;  // Make it optional since new items won't have an ID yet
  variationOptionIds: string[];
  price: number;
  marketPrice: number;
  quantityInStock: number;
  imageUrl?: string;
  imageFile?: File;  // Add this property
}

export default function EditProduct() {
  const dispatch = useDispatch<any>();
  const location = useLocation();
  
  // Get product ID from URL query parameter
  const productId = new URLSearchParams(location.search).get('id');
  
  // Create selector for product data
  const productSelector = createSelector(
    (state: any) => state.product,
    (product) => ({
      productData: product?.selectedProduct || null,
      loading: product?.loading || false,
      error: product?.error || null,
    })
  );
  
  const { productData, loading } = useSelector(productSelector);
  
  // Fetch product data when component mounts
  useEffect(() => {
    if (productId) {
      dispatch(getProductById(productId));
    }
  }, [dispatch, productId]);
  
  // Handle form initialization separately
  useEffect(() => {
    if (productData && !loading) {
      // Set form values based on product data
      productFormik.setValues({
        title: productData.name || '',
        description: productData.description || '',
        quantity: productData.soldCount?.toString() || '0',
        brand: productData.brand?.id || '',
        category: productData.category?.id || '',
        productType: productData.productType || '',
        gender: productData.gender || '',
        price: productData.price?.toString() || '',
        marketPrice: productData.marketPrice?.toString() || '',
        skinType: productData.skinTypes?.map((type: any) => type.id) || [],
        variationOptions: [],
        detailedIngredients: productData.specifications?.detailedIngredients || '',
        mainFunction: productData.specifications?.mainFunction || '',
        texture: productData.specifications?.texture || '',
        englishName: productData.specifications?.englishName || '',
        keyActiveIngredients: productData.specifications?.keyActiveIngredients || '',
        storageInstruction: productData.specifications?.storageInstruction || '',
        usageInstruction: productData.specifications?.usageInstruction || '',
        expiryDate: productData.specifications?.expiryDate || '',
        skinIssues: productData.specifications?.skinIssues || '',
        status: productData.status || 'Draft',
        visibility: productData.visibility || 'Public',
        tags: productData.tags?.join(', ') || ''
      });
      
      // Set thumbnail if available
      if (productData.thumbnail) {
        setThumbnail({
          preview: productData.thumbnail,
          file: null,
          formattedSize: "Existing image"
        });
      }
    }
  }, [productData, loading]);

  const [availableVariations, setAvailableVariations] = useState<Variation[]>([]);
  
  // Now the useEffect that depends on availableVariations
  useEffect(() => {
    if (productData && !loading && availableVariations.length > 0) {
      // Extract variation data from product items
      if (productData.productItems && productData.productItems.length > 0) {
        // Get the first product item to extract variation info
        const firstItem = productData.productItems[0];
        
        if (firstItem.configurations && firstItem.configurations.length > 0) {
          // Extract variation info from the first configuration
          const config = firstItem.configurations[0];
          
          // Find the variation in available variations
          const matchingVariation = availableVariations.find(v => v.name === config.variationName);
          
          if (matchingVariation) {
            // Set up a single variation with the matching option
            setProductVariations([{
              id: matchingVariation.id,
              variationId: matchingVariation.id,
              variationOptionIds: [config.optionId]
            }]);
          }
        }
        
        // Set up product items
        const items = productData.productItems.map((item: any) => {
          // Create an entry in productItemImages for existing images
          if (item.imageUrl) {
            const itemKey = item.id || `temp-${productData.productItems.indexOf(item)}`;
            setProductItemImages(prev => ({
              ...prev,
              [itemKey]: {
                preview: item.imageUrl,
                file: null,
                formattedSize: "Existing image"
              } as ProductImage
            }));
          }
          
          // Extract variation option IDs from configurations
          const variationOptionIds = item.configurations ? 
            item.configurations.map((config: any) => config.optionId) : [];
          
          return {
            id: item.id,
            variationOptionIds,
            quantityInStock: item.quantityInStock || 0,
            price: item.price || 0,
            marketPrice: item.marketPrice || 0,
            imageUrl: item.imageUrl || ""
          };
        });
        
        setProductItems(items);
      }
    }
  }, [productData, loading, availableVariations]);

  const [thumbnail, setThumbnail] = useState<any>(null);
  const [productImages, setProductImages] = useState<ProductImage[]>([]);
  const [brandOptions, setBrandOptions] = useState<any[]>([]);
  const [categoryOptions, setCategoryOptions] = useState<any[]>([]);
  const [skinTypeOptions, setSkinTypeOptions] = useState<any[]>([]);
  const [variationOptions, setVariationOptions] = useState<VariationOption[]>([]);
  const [variations, setVariations] = useState<Variation[]>([]);
  const [productItems, setProductItems] = useState<ProductItem[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [productVariations, setProductVariations] = useState<any[]>([]);
  const [productItemImages, setProductItemImages] = useState<Record<string, ProductImage>>({});
  const [productItemErrors, setProductItemErrors] = useState<{ [key: number]: { [key: string]: string } }>({});

  const handleThumbnailUpload = (files: File[]) => {
    if (files && files[0]) {
      const file = files[0];
      setThumbnail({
        file,
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      });
    }
  };

  const handleProductImagesUpload = (files: File[]) => {
    const newImages = files.map((file: File) => ({
      file,
      preview: URL.createObjectURL(file),
      formattedSize: formatBytes(file.size),
    }));
    setProductImages([...productImages, ...newImages].slice(0, 3)); // Limit to 3 images
  };

  const removeProductImage = (index: number) => {
    setProductImages(productImages.filter((_, i) => i !== index));
  };

  const formatBytes = (bytes: number, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };

  // Add this function to format file sizes
  const formatFileSize = (bytes: number, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };

  useEffect(() => {
    fetchOptions();
  }, []);

  const fetchOptions = async () => {
    try {
      // Fetch brands
      const brandsResponse = await axios.get("https://spssapi-hxfzbchrcafgd2hg.southeastasia-01.azurewebsites.net/api/brands");
      if (brandsResponse.data && brandsResponse.data.items) {
        setBrandOptions(
          brandsResponse.data.items.map((item: any) => ({
            value: item.id,
            label: item.name,
          }))
        );
      }

      // Fetch skin types
      const skinTypesResponse = await axios.get("https://spssapi-hxfzbchrcafgd2hg.southeastasia-01.azurewebsites.net/api/skin-types");
      if (skinTypesResponse.data && skinTypesResponse.data.items) {
        setSkinTypeOptions(
          skinTypesResponse.data.items.map((item: any) => ({
            value: item.id,
            label: item.name,
          }))
        );
      }

      // Fetch categories
      const categoriesResponse = await axios.get("https://spssapi-hxfzbchrcafgd2hg.southeastasia-01.azurewebsites.net/api/product-categories");
      if (categoriesResponse.data && categoriesResponse.data.items) {
        setCategoryOptions(
          categoriesResponse.data.items.map((item: any) => ({
            value: item.id,
            label: item.categoryName,
          }))
        );
      }

      // Fetch variations
      const variationsResponse = await axios.get("https://spssapi-hxfzbchrcafgd2hg.southeastasia-01.azurewebsites.net/api/variations");
      console.log("Variations response:", variationsResponse.data);
      
      let variationsData = [];
      if (variationsResponse.data && variationsResponse.data.success && variationsResponse.data.data && variationsResponse.data.data.items) {
        variationsData = variationsResponse.data.data.items;
      } else if (variationsResponse.data && variationsResponse.data.items) {
        variationsData = variationsResponse.data.items;
      } else {
        console.error("Unexpected variations response structure:", variationsResponse.data);
      }
      
      // Fetch variation options for each variation
      const variationsWithOptions = await Promise.all(
        variationsData.map(async (variation: any) => {
          try {
            const optionsResponse = await axios.get(
              `https://spssapi-hxfzbchrcafgd2hg.southeastasia-01.azurewebsites.net/api/variations/${variation.id}/options`
            );
            
            let options = [];
            if (optionsResponse.data && optionsResponse.data.success && optionsResponse.data.data) {
              options = optionsResponse.data.data;
            } else if (optionsResponse.data && optionsResponse.data.items) {
              options = optionsResponse.data.items;
            }
            
            return {
              ...variation,
              variationOptions: options.map((opt: any) => ({
                id: opt.id,
                value: opt.value,
                variationId: variation.id
              }))
            };
          } catch (error) {
            console.error(`Error fetching options for variation ${variation.id}:`, error);
            return {
              ...variation,
              variationOptions: []
            };
          }
        })
      );
      
      console.log("Variations with options:", variationsWithOptions);
      setAvailableVariations(variationsWithOptions);
      
    } catch (error) {
      console.error("Error fetching options:", error);
      setErrorMessage("Failed to load form options. Please refresh the page.");
    }
  };

  // Update the addProductItem function to use the selected variation options
  const addProductItem = () => {
    // Get all selected variation options from the variations
    const allSelectedVariationOptions: string[] = [];
    productVariations.forEach(variation => {
      if (variation.variationOptionIds && variation.variationOptionIds.length > 0) {
        allSelectedVariationOptions.push(...variation.variationOptionIds);
      }
    });
    
    // If no variation options are selected, show an error
    if (allSelectedVariationOptions.length === 0) {
      setErrorMessage("Please add and select variation options before adding product items");
      return;
    }
    
    const newItem = {
      variationOptionIds: allSelectedVariationOptions, // Use all selected variation options
      quantityInStock: 0,
      price: 0,
      marketPrice: 0,
      imageUrl: ""
    };
    
    const newItems = [...productItems, newItem];
    setProductItems(newItems);
    
    // Validate the new item
    const errors = validateProductItem(newItem, newItems.length - 1);
    setProductItemErrors({
      ...productItemErrors,
      [newItems.length - 1]: errors
    });
  };

  // Remove a product item
  const removeProductItem = (index: number) => {
    setProductItems(productItems.filter((_, i) => i !== index));
  };

  // Update a product item
  const updateProductItem = (index: number, field: string, value: any) => {
    const updatedItems = [...productItems];
    updatedItems[index] = { ...updatedItems[index], [field]: value };
    setProductItems(updatedItems);
    
    // Validate the updated item
    const errors = validateProductItem(updatedItems[index], index);
    setProductItemErrors({
      ...productItemErrors,
      [index]: errors
    });
  };

  // Add this function for price formatting
  const formatPrice = (value: string): string => {
    // Remove non-numeric characters
    const numericValue = value.replace(/[^\d]/g, '');
    // Format with spaces for thousands
    return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  // Add this function to handle price input changes
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    const formattedValue = formatPrice(e.target.value);
    const numericValue = formattedValue.replace(/\s/g, '');
    
    // Update the display value with formatting
    e.target.value = formattedValue;
    
    // Update formik with numeric value
    productFormik.setFieldValue(fieldName, numericValue);
  };

  // Add function to add a new variation
  const addVariation = () => {
    setProductVariations([
      ...productVariations,
      {
        id: Date.now().toString(), // Temporary ID for UI purposes
        variationId: "", // Add this field
        variationOptionIds: []
      }
    ]);
  };

  // Add function to remove a variation
  const removeVariation = (index: number) => {
    setProductVariations(productVariations.filter((_, i) => i !== index));
  };

  // Update the updateVariation function to also update product items
  const updateVariation = (index: number, field: string, value: any) => {
    const updatedVariations = [...productVariations];
    updatedVariations[index] = { ...updatedVariations[index], [field]: value };
    
    // If the variation is changed, clear the selected options
    if (field === 'variationId') {
      updatedVariations[index].variationOptionIds = [];
    }
    
    setProductVariations(updatedVariations);
    
    // No need to update product items here as the useEffect will handle it
  };

  // Add this function to format price with spaces for thousands
  const formatPriceDisplay = (price: number | string): string => {
    if (!price) return '';
    // Convert to string, remove non-digits, then format with spaces
    return String(price).replace(/\D/g, '')
      .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }

  // Update the handleProductItemImageUpload function
  const handleProductItemImageUpload = (index: number, acceptedFiles: File[]) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      const formattedSize = formatBytes(file.size);
      const preview = URL.createObjectURL(file);
      
      console.log("Image uploaded:", { file, preview, formattedSize });
      
      // Find the item ID or use a temporary ID
      const itemId = productItems[index]?.id || `temp-${index}`;
      
      // Update the productItemImages state
      setProductItemImages(prev => ({
        ...prev,
        [itemId]: {
          file,
          preview,
          formattedSize
        }
      }));
      
      // Update the product item with the file info
      const updatedItems = [...productItems];
      updatedItems[index] = { 
        ...updatedItems[index], 
        imageFile: file 
      };
      setProductItems(updatedItems);
    }
  };

  // Update the removeProductItemImage function
  const removeProductItemImage = (index: number) => {
    // Create a copy of the current productItemImages
    const updatedImages = { ...productItemImages };
    
    // Get the item ID or use the index as fallback
    const itemId = productItems[index]?.id || `temp-${index}`;
    
    // If there's an image for this item, remove it
    if (updatedImages[itemId]) {
      // Revoke the object URL to prevent memory leaks
      if (updatedImages[itemId]?.preview) {
        URL.revokeObjectURL(updatedImages[itemId]!.preview);
      }
      // Delete the image entry
      delete updatedImages[itemId];
      setProductItemImages(updatedImages);
    }
    
    // Also clear the imageUrl and imageFile from the product item
    const updatedItems = [...productItems];
    updatedItems[index] = { 
      ...updatedItems[index], 
      imageUrl: "",
      imageFile: undefined
    };
    setProductItems(updatedItems);
  };

  // Update the validateProductItem function to remove quantity validation
  const validateProductItem = (item: any, index: number) => {
    const errors: { [key: string]: string } = {};
    
    // Get all selected variation options from the variations
    const allSelectedVariationOptions: string[] = [];
    productVariations.forEach(variation => {
      if (variation.variationOptionIds && variation.variationOptionIds.length > 0) {
        allSelectedVariationOptions.push(...variation.variationOptionIds);
      }
    });
    
    // Validate variation options
    if (!item.variationOptionIds || item.variationOptionIds.length === 0) {
      errors.variationOptionIds = "Variation options are required";
    } else {
      // Check if all variation options in the item are in the selected variation options
      const invalidOptions = item.variationOptionIds.filter(
        (optionId: string) => !allSelectedVariationOptions.includes(optionId)
      );
      
      if (invalidOptions.length > 0) {
        errors.variationOptionIds = "Some selected options are not available in the variations";
      }
    }
    
    // Validate price
    if (item.price === undefined || item.price === null || item.price === 0) {
      errors.price = "Price is required";
    } else if (item.price < 0) {
      errors.price = "Price cannot be negative";
    }
    
    // Validate market price
    if (item.marketPrice === undefined || item.marketPrice === null || item.marketPrice === 0) {
      errors.marketPrice = "Market price is required";
    } else if (item.marketPrice < 0) {
      errors.marketPrice = "Market price cannot be negative";
    }
    
    // Validate image
    const itemId = item.id || `temp-${index}`;
    const hasImage = 
      item.imageUrl || 
      (productItemImages[itemId] && productItemImages[itemId]?.file) || 
      (productItemImages[itemId] && productItemImages[itemId]?.preview) || 
      item.imageFile;
      
    if (!hasImage) {
      errors.image = "Product image is required";
    }
    
    return errors;
  };

  // Add an effect to update product items when variations change
  useEffect(() => {
    // Get all selected variation options from the variations
    const allSelectedVariationOptions: string[] = [];
    productVariations.forEach(variation => {
      if (variation.variationOptionIds && variation.variationOptionIds.length > 0) {
        allSelectedVariationOptions.push(...variation.variationOptionIds);
      }
    });
    
    // Update all product items to use the selected variation options
    if (productItems.length > 0 && allSelectedVariationOptions.length > 0) {
      const updatedItems = productItems.map(item => ({
        ...item,
        variationOptionIds: allSelectedVariationOptions
      }));
      
      setProductItems(updatedItems);
      
      // Validate all updated items
      const newErrors: { [key: number]: { [key: string]: string } } = {};
      updatedItems.forEach((item, index) => {
        const errors = validateProductItem(item, index);
        if (Object.keys(errors).length > 0) {
          newErrors[index] = errors;
        }
      });
      
      setProductItemErrors(newErrors);
    }
  }, [productVariations]);

  // Create a simplified form with Formik
  const productFormik = useFormik({
    initialValues: {
      title: '',
      quantity: '',
      brand: '',
      category: '',
      productType: '',
      gender: '',
      price: '',
      marketPrice: '',
      skinType: [] as string[],
      variationOptions: [] as string[],
      description: '',
      detailedIngredients: '',
      mainFunction: '',
      texture: '',
      englishName: '',
      keyActiveIngredients: '',
      storageInstruction: '',
      usageInstruction: '',
      expiryDate: '',
      skinIssues: '',
      status: 'Draft',
      visibility: 'Public',
      tags: ''
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Product title is required'),
      brand: Yup.string().required('Brand is required'),
      category: Yup.string().required('Category is required'),
      price: Yup.number().required('Price is required').min(0, 'Price must be positive'),
      marketPrice: Yup.number().required('Market price is required').min(0, 'Market price must be positive'),
      skinType: Yup.array().min(1, 'At least one skin type must be selected').required('Skin type is required'),
      description: Yup.string().required('Description is required'),
      detailedIngredients: Yup.string().required('Detailed ingredients are required'),
      mainFunction: Yup.string().required('Main function is required'),
      texture: Yup.string().required('Texture is required'),
      englishName: Yup.string().required('English name is required'),
      keyActiveIngredients: Yup.string().required('Key active ingredients are required'),
      storageInstruction: Yup.string().required('Storage instruction is required'),
      usageInstruction: Yup.string().required('Usage instruction is required'),
      expiryDate: Yup.string().required('Expiry date is required'),
      skinIssues: Yup.string().required('Skin issues are required'),
    }),
    onSubmit: async (values) => {
      try {
        // console.log("Form submission started with values:", values);
        // console.log("Product items:", productItems);
        
        // Validate all product items
        let hasProductItemErrors = false;
        const allProductItemErrors: { [key: number]: { [key: string]: string } } = {};
        
        if (productItems.length === 0) {
          setErrorMessage("At least one product item is required");
          console.error("Validation failed: No product items");
          return;
        }
        
        productItems.forEach((item, index) => {
          const errors = validateProductItem(item, index);
          if (Object.keys(errors).length > 0) {
            hasProductItemErrors = true;
            allProductItemErrors[index] = errors;
            console.error(`Validation errors for item #${index + 1}:`, errors);
          }
        });
        
        if (hasProductItemErrors) {
          setProductItemErrors(allProductItemErrors);
          setErrorMessage("Please fix all errors in product items");
          return;
        }
        
        setIsSubmitting(true);
        setErrorMessage("");
        
        // Get Firebase backend instance
        const firebaseBackend = getFirebaseBackend();
        console.log("Firebase backend initialized");
        
        // Upload thumbnail if exists
        let thumbnailUrl = "";
        if (thumbnail?.file) {
          console.log("Uploading thumbnail...");
          try {
            thumbnailUrl = await firebaseBackend.uploadFileWithDirectory(thumbnail.file, "SPSS/Product-Thumbnail");
            console.log("Thumbnail uploaded successfully:", thumbnailUrl);
          } catch (uploadError) {
            console.error("Error uploading thumbnail:", uploadError);
            setErrorMessage("Failed to upload thumbnail. Please try again.");
            setIsSubmitting(false);
            return;
          }
        } else if (productData?.thumbnailUrl) {
          // Use existing thumbnail URL if no new file is uploaded
          thumbnailUrl = productData.thumbnailUrl;
        }
        
        // Upload product images if exist
        let productImageUrls: string[] = [];
        if (productImages.length > 0) {
          console.log("Uploading product images...");
          try {
            const imageFiles = productImages.map(image => image.file).filter(Boolean);
            const existingUrls = productImages
              .filter(image => !image.file && image.preview)
              .map(image => image.preview);
            
            // Upload new files
            if (imageFiles.length > 0) {
              const uploadPromises = imageFiles.map(file => 
                firebaseBackend.uploadFileWithDirectory(file, "SPSS/Product-Images")
              );
              
              // Wait for all uploads to complete
              const uploadedUrls = await Promise.all(uploadPromises);
              productImageUrls = [...existingUrls, ...uploadedUrls];
            } else {
              productImageUrls = existingUrls;
            }
            
            console.log("Product images processed successfully:", productImageUrls);
          } catch (uploadError) {
            console.error("Error uploading product images:", uploadError);
            setErrorMessage("Failed to upload product images. Please try again.");
            setIsSubmitting(false);
            return;
          }
        } else if (productData?.productImageUrls) {
          // Use existing product image URLs if no new files are uploaded
          productImageUrls = productData.productImageUrls;
        }
        
        // Upload product item images if exist
        console.log("Processing product items...");
        const updatedProductItems = await Promise.all(productItems.map(async (item, index) => {
          let imageUrl = item.imageUrl || "";
          
          // Get the item ID or use a temporary ID
          const itemId = item.id || `temp-${index}`;
          
          // If there's an image file for this item, upload it
          if (productItemImages[itemId]?.file) {
            console.log(`Uploading image for product item #${index + 1}...`);
            try {
              imageUrl = await firebaseBackend.uploadFileWithDirectory(
                productItemImages[itemId]!.file, 
                "SPSS/Product-Item-Images"
              );
              console.log(`Image for product item #${index + 1} uploaded successfully:`, imageUrl);
            } catch (uploadError) {
              console.error(`Error uploading image for product item #${index + 1}:`, uploadError);
              throw new Error(`Failed to upload image for product item #${index + 1}`);
            }
          }
          
          return {
            ...item,
            imageUrl
          };
        }));
        
        // Combine all image URLs - ensure thumbnail and all product images are included
        const allProductImageUrls = [];
        
        // Add thumbnail if exists
        if (thumbnailUrl) {
          allProductImageUrls.push(thumbnailUrl);
        }
        
        // Add all product images
        if (productImageUrls.length > 0) {
          allProductImageUrls.push(...productImageUrls);
        }
        
        console.log("All product image URLs:", allProductImageUrls);
        
        // Get values from formik
        const values = productFormik.values;
        
        // Prepare data for API submission - match the API structure
        const updateProductData = {
          id: productId, // Include product ID for update
          brandId: values.brand,
          productCategoryId: values.category,
          name: values.title,
          description: values.description,
          price: parseFloat(values.price.toString().replace(/\s/g, '')),
          marketPrice: parseFloat(values.marketPrice.toString().replace(/\s/g, '')),
          skinTypeIds: values.skinType,
          productImageUrls: allProductImageUrls,
          variations: productVariations.map(variation => ({
            id: variation.variationId,
            variationOptionIds: variation.variationOptionIds
          })),
          variationCombinations: updatedProductItems.map(item => ({
            variationOptionIds: item.variationOptionIds,
            imageUrl: item.imageUrl,
            price: parseFloat(item.price.toString().replace(/\s/g, '')),
            marketPrice: parseFloat(item.marketPrice.toString().replace(/\s/g, '')),
            quantityInStock: parseInt(item.quantityInStock.toString())
          })),
          detailedIngredients: values.detailedIngredients,
          mainFunction: values.mainFunction,
          texture: values.texture,
          englishName: values.englishName,
          keyActiveIngredients: values.keyActiveIngredients,
          storageInstruction: values.storageInstruction,
          usageInstruction: values.usageInstruction,
          expiryDate: values.expiryDate,
          skinIssues: values.skinIssues
        };
        
        console.log("Prepared product data for submission:", updateProductData);
        
        // Make API call to update the product using PATCH instead of PUT
        console.log(`Making API call to: https://spssapi-hxfzbchrcafgd2hg.southeastasia-01.azurewebsites.net/api/products/${productId}`);
        
        const response = await axios.patch( // Changed from PUT to PATCH
          `https://spssapi-hxfzbchrcafgd2hg.southeastasia-01.azurewebsites.net/api/products/${productId}`,
          updateProductData,
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        );
        
        console.log("API response:", response.data);
        
        if (response.data && response.data.success) {
          setSuccessMessage("Product updated successfully!");
          // Optionally redirect to products list after a delay
          setTimeout(() => {
            window.location.href = "/ecommerce/products";
          }, 2000);
        } else {
          const errorMsg = response.data?.message || "Failed to update product. Please try again.";
          console.error("API error message:", errorMsg);
          setErrorMessage(errorMsg);
        }
      } catch (error: any) {
        console.error("Error updating product:", error);
        setErrorMessage(error.message || "Failed to update product. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  });

  // Add this function to debug form validation errors
  const debugFormValidation = () => {
    console.log("Form values:", productFormik.values);
    console.log("Form errors:", productFormik.errors);
    console.log("Form touched:", productFormik.touched);
    console.log("Form isValid:", productFormik.isValid);
    console.log("Form dirty:", productFormik.dirty);
    console.log("Product items:", productItems);
    console.log("Product item errors:", productItemErrors);
  };

  // Update the form title and button text based on whether this is an edit or create
  const formTitle = productId ? "Edit Product" : "Add New Product";
  const submitButtonText = productId ? "Update Product" : "Create Product";

  // Add this function inside the EditProduct component
  const handleUpdateProduct = async () => {
    try {
      console.log("Direct update function called");
      
      // Validate form first
      const formErrors = await productFormik.validateForm();
      if (Object.keys(formErrors).length > 0) {
        console.log("Form validation errors:", formErrors);
        productFormik.setTouched(
          Object.keys(formErrors).reduce((acc, key) => ({ ...acc, [key]: true }), {})
        );
        setErrorMessage("Please fix all errors in the form");
        return;
      }
      
      // Continue with the rest of your update logic...
      setIsSubmitting(true);
      
      // Get Firebase backend instance
      const firebaseBackend = getFirebaseBackend();
      console.log("Firebase backend initialized");
      
      // Upload thumbnail if exists
      let thumbnailUrl = "";
      if (thumbnail?.file) {
        console.log("Uploading thumbnail...");
        try {
          thumbnailUrl = await firebaseBackend.uploadFileWithDirectory(thumbnail.file, "SPSS/Product-Thumbnail");
          console.log("Thumbnail uploaded successfully:", thumbnailUrl);
        } catch (uploadError) {
          console.error("Error uploading thumbnail:", uploadError);
          setErrorMessage("Failed to upload thumbnail. Please try again.");
          setIsSubmitting(false);
          return;
        }
      } else if (productData?.thumbnailUrl) {
        // Use existing thumbnail URL if no new file is uploaded
        thumbnailUrl = productData.thumbnailUrl;
      }
      
      // Upload product images if exist
      let productImageUrls: string[] = [];
      if (productImages.length > 0) {
        console.log("Uploading product images...");
        try {
          const imageFiles = productImages.map(image => image.file).filter(Boolean);
          const existingUrls = productImages
            .filter(image => !image.file && image.preview)
            .map(image => image.preview);
          
          // Upload new files
          if (imageFiles.length > 0) {
            const uploadPromises = imageFiles.map(file => 
              firebaseBackend.uploadFileWithDirectory(file, "SPSS/Product-Images")
            );
            
            // Wait for all uploads to complete
            const uploadedUrls = await Promise.all(uploadPromises);
            productImageUrls = [...existingUrls, ...uploadedUrls];
          } else {
            productImageUrls = existingUrls;
          }
          
          console.log("Product images processed successfully:", productImageUrls);
        } catch (uploadError) {
          console.error("Error uploading product images:", uploadError);
          setErrorMessage("Failed to upload product images. Please try again.");
          setIsSubmitting(false);
          return;
        }
      } else if (productData?.productImageUrls) {
        // Use existing product image URLs if no new files are uploaded
        productImageUrls = productData.productImageUrls;
      }
      
      // Upload product item images if exist
      console.log("Processing product items...");
      const updatedProductItems = await Promise.all(productItems.map(async (item, index) => {
        let imageUrl = item.imageUrl || "";
        
        // Get the item ID or use a temporary ID
        const itemId = item.id || `temp-${index}`;
        
        // If there's an image file for this item, upload it
        if (productItemImages[itemId]?.file) {
          console.log(`Uploading image for product item #${index + 1}...`);
          try {
            imageUrl = await firebaseBackend.uploadFileWithDirectory(
              productItemImages[itemId]!.file, 
              "SPSS/Product-Item-Images"
            );
            console.log(`Image for product item #${index + 1} uploaded successfully:`, imageUrl);
          } catch (uploadError) {
            console.error(`Error uploading image for product item #${index + 1}:`, uploadError);
            throw new Error(`Failed to upload image for product item #${index + 1}`);
          }
        }
        
        return {
          ...item,
          imageUrl
        };
      }));
      
      // Combine all image URLs - ensure thumbnail and all product images are included
      const allProductImageUrls = [];
      
      // Add thumbnail if exists
      if (thumbnailUrl) {
        allProductImageUrls.push(thumbnailUrl);
      }
      
      // Add all product images
      if (productImageUrls.length > 0) {
        allProductImageUrls.push(...productImageUrls);
      }
      
      console.log("All product image URLs:", allProductImageUrls);
      
      // Prepare data from formik values
      const values = productFormik.values;
      
      // Prepare data for API submission - match the API structure
      const updateProductData = {
        id: productId, // Include product ID for update
        brandId: values.brand,
        productCategoryId: values.category,
        name: values.title,
        description: values.description,
        price: parseFloat(values.price.toString().replace(/\s/g, '')),
        marketPrice: parseFloat(values.marketPrice.toString().replace(/\s/g, '')),
        skinTypeIds: values.skinType,
        productImageUrls: allProductImageUrls,
        variations: productVariations.map(variation => ({
          id: variation.variationId,
          variationOptionIds: variation.variationOptionIds
        })),
        variationCombinations: updatedProductItems.map(item => ({
          variationOptionIds: item.variationOptionIds,
          imageUrl: item.imageUrl,
          price: parseFloat(item.price.toString().replace(/\s/g, '')),
          marketPrice: parseFloat(item.marketPrice.toString().replace(/\s/g, '')),
          quantityInStock: parseInt(item.quantityInStock.toString())
        })),
        detailedIngredients: values.detailedIngredients,
        mainFunction: values.mainFunction,
        texture: values.texture,
        englishName: values.englishName,
        keyActiveIngredients: values.keyActiveIngredients,
        storageInstruction: values.storageInstruction,
        usageInstruction: values.usageInstruction,
        expiryDate: values.expiryDate,
        skinIssues: values.skinIssues
      };
      
      console.log("Prepared product data for submission:", updateProductData);
      
      // Make API call to update the product using PATCH instead of PUT
      console.log(`Making API call to: https://spssapi-hxfzbchrcafgd2hg.southeastasia-01.azurewebsites.net/api/products/${productId}`);
      
      const response = await axios.patch( // Changed from PUT to PATCH
        `https://spssapi-hxfzbchrcafgd2hg.southeastasia-01.azurewebsites.net/api/products/${productId}`,
        updateProductData,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      
      console.log("API response:", response.data);
      
      if (response.data && response.data.success) {
        setSuccessMessage("Product updated successfully!");
        // Optionally redirect to products list after a delay
        setTimeout(() => {
          window.location.href = "/ecommerce/products";
        }, 2000);
      } else {
        const errorMsg = response.data?.message || "Failed to update product. Please try again.";
        console.error("API error message:", errorMsg);
        setErrorMessage(errorMsg);
      }
    } catch (error: any) {
      console.error("Error updating product:", error);
      setErrorMessage(error.message || "Failed to update product. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <React.Fragment>
      <BreadCrumb title={formTitle} pageTitle='Products' />
      
      {loading ? (
        <div className="flex items-center justify-center h-60">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-x-5">
          <div className="xl:col-span-12">
            <div className="card">
              <div className="card-body">
                <h6 className="mb-4 text-15">Create Product</h6>
                
                {successMessage && (
                  <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg">
                    {successMessage}
                  </div>
                )}
                
                {errorMessage && (
                  <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg">
                    {errorMessage}
                  </div>
                )}

                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    console.log("Form submitted");
                    productFormik.handleSubmit();
                  }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-12 mb-5">
                    {/* Product Thumbnail Section - Simplified */}
                    <div className="xl:col-span-12">
                      <label className="inline-block mb-2 text-base font-medium">
                        Product Thumbnail
                      </label>
                      <Dropzone
                        onDrop={(acceptedFiles) => handleThumbnailUpload(acceptedFiles)}
                        maxFiles={1}
                        accept={{
                          "image/*": [".png", ".jpg", ".jpeg"],
                        }}
                      >
                        {({ getRootProps, getInputProps }) => (
                          <div
                            className="border-2 border-dashed rounded-lg border-slate-200 dark:border-zink-500"
                            {...getRootProps()}
                          >
                            <input {...getInputProps()} />
                            <div className="p-4 text-center">
                              {thumbnail ? (
                                <div className="relative">
                                  <img
                                    src={thumbnail.preview}
                                    alt="Thumbnail"
                                    className="h-32 mx-auto object-contain"
                                  />
                                  <p className="mt-2 text-sm text-slate-500">
                                    {thumbnail.formattedSize || "Existing image"}
                                  </p>
                                </div>
                              ) : (
                                <>
                                  <UploadCloud className="size-6 mx-auto mb-3" />
                                  <h5 className="mb-1">
                                    Drop thumbnail here or click to upload.
                                  </h5>
                                  <p className="text-slate-500 dark:text-zink-200">
                                    Maximum size: 2MB
                                  </p>
                                </>
                              )}
                            </div>
                          </div>
                        )}
                      </Dropzone>
                    </div>
                  </div>

                  {/* Basic Product Information */}
                  <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-12">
                    <div className="xl:col-span-6">
                      <label htmlFor="title" className="inline-block mb-2 text-base font-medium">
                        Product Title <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        className={`form-input w-full ${
                          productFormik.touched.title && productFormik.errors.title ? 'border-red-500' : 'border-slate-200'
                        }`}
                        placeholder="Product title"
                        value={productFormik.values.title}
                        onChange={productFormik.handleChange}
                        onBlur={productFormik.handleBlur}
                      />
                      {productFormik.touched.title && productFormik.errors.title && (
                        <p className="mt-1 text-sm text-red-500">{productFormik.errors.title}</p>
                      )}
                    </div>

                    <div className="xl:col-span-6">
                      <label htmlFor="description" className="inline-block mb-2 text-base font-medium">
                        Description <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        className={`form-input w-full ${
                          productFormik.touched.description && productFormik.errors.description ? 'border-red-500' : 'border-slate-200'
                        }`}
                        placeholder="Enter product description"
                        rows={3}
                        value={productFormik.values.description}
                        onChange={productFormik.handleChange}
                        onBlur={productFormik.handleBlur}
                      ></textarea>
                      {productFormik.touched.description && productFormik.errors.description && (
                        <p className="mt-1 text-sm text-red-500">{productFormik.errors.description}</p>
                      )}
                    </div>

                    <div className="xl:col-span-6">
                      <label htmlFor="brand" className="inline-block mb-2 text-base font-medium">
                        Brand <span className="text-red-500">*</span>
                      </label>
                      <Select
                        className="react-select"
                        options={brandOptions}
                        isSearchable={true}
                        name="brand"
                        id="brand"
                        placeholder="Select brand..."
                        value={brandOptions.find(option => option.value === productFormik.values.brand)}
                        onChange={(option) => productFormik.setFieldValue('brand', option?.value || '')}
                        onBlur={() => productFormik.setFieldTouched('brand', true)}
                      />
                      {productFormik.touched.brand && productFormik.errors.brand && (
                        <p className="mt-1 text-sm text-red-500">{productFormik.errors.brand}</p>
                      )}
                    </div>

                    <div className="xl:col-span-6">
                      <label htmlFor="category" className="inline-block mb-2 text-base font-medium">
                        Category <span className="text-red-500">*</span>
                      </label>
                      <Select
                        className="react-select"
                        options={categoryOptions}
                        isSearchable={true}
                        name="category"
                        id="category"
                        placeholder="Select category..."
                        value={categoryOptions.find(option => option.value === productFormik.values.category)}
                        onChange={(option) => productFormik.setFieldValue('category', option?.value || '')}
                        onBlur={() => productFormik.setFieldTouched('category', true)}
                      />
                      {productFormik.touched.category && productFormik.errors.category && (
                        <p className="mt-1 text-sm text-red-500">{productFormik.errors.category}</p>
                      )}
                    </div>

                    <div className="xl:col-span-6">
                      <label htmlFor="price" className="inline-block mb-2 text-base font-medium">
                        Price (VND) <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="price"
                          name="price"
                          className={`form-input w-full ${
                            productFormik.touched.price && productFormik.errors.price ? 'border-red-500' : 'border-slate-200'
                          }`}
                          placeholder="0"
                          value={formatPrice(productFormik.values.price.toString())}
                          onChange={(e) => handlePriceChange(e, 'price')}
                          onBlur={productFormik.handleBlur}
                        />
                      </div>
                      {productFormik.touched.price && productFormik.errors.price && (
                        <p className="mt-1 text-sm text-red-500">{productFormik.errors.price}</p>
                      )}
                    </div>

                    <div className="xl:col-span-6">
                      <label htmlFor="marketPrice" className="inline-block mb-2 text-base font-medium">
                        Market Price (VND) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="marketPrice"
                        name="marketPrice"
                        className="form-input w-full border-slate-200"
                        placeholder="0"
                        value={productFormik.values.marketPrice ? formatPrice(productFormik.values.marketPrice.toString()) : ''}
                        onChange={(e) => {
                          const formattedValue = formatPrice(e.target.value);
                          const numericValue = parseFloat(formattedValue.replace(/\s/g, '')) || 0;
                          productFormik.setFieldValue('marketPrice', numericValue);
                        }}
                        onBlur={productFormik.handleBlur}
                      />
                      {productFormik.touched.marketPrice && productFormik.errors.marketPrice && (
                        <p className="mt-1 text-sm text-red-500">{productFormik.errors.marketPrice}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-12">
                      <div className="xl:col-span-12">
                        <label htmlFor="skinType" className="inline-block mb-2 text-base font-medium">
                          Skin Type
                        </label>
                        <Select
                          className="react-select w-full"
                          styles={{
                            control: (base) => ({
                              ...base,
                              minHeight: '42px',
                              width: '100%'
                            })
                          }}
                          options={skinTypeOptions}
                          isSearchable={true}
                          isMulti={true}
                          name="skinType"
                          id="skinType"
                          placeholder="Select skin types..."
                          value={skinTypeOptions.filter(option => 
                            productFormik.values.skinType.includes(option.value)
                          )}
                          onChange={(selectedOptions) => {
                            const selectedIds = selectedOptions ? selectedOptions.map((option: any) => option.value) : [];
                            productFormik.setFieldValue('skinType', selectedIds);
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Variations Section - Simplified for single variation */}
                  <div className="mt-8">
                    <div className="flex justify-between items-center mb-4">
                      <h6 className="text-15 font-medium">Variation</h6>
                    </div>
                    
                    <div className="p-4 mb-4 border rounded-lg bg-white shadow-sm">
                      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                        <div>
                          <label className="inline-block mb-2 text-sm font-medium">
                            Variation Type <span className="text-red-500">*</span>
                          </label>
                          <Select
                            className="react-select"
                            options={availableVariations.map(v => ({
                              value: v.id,
                              label: v.name
                            }))}
                            isSearchable={true}
                            placeholder="Select variation type..."
                            value={productVariations.length > 0 ? 
                              availableVariations
                                .filter(v => v.id === productVariations[0].variationId)
                                .map(v => ({
                                  value: v.id,
                                  label: v.name
                                }))[0] : null
                            }
                            onChange={(option) => {
                              if (option) {
                                setProductVariations([{
                                  id: option.value,
                                  variationId: option.value,
                                  variationOptionIds: []
                                }]);
                              } else {
                                setProductVariations([]);
                              }
                            }}
                          />
                        </div>
                        
                        <div>
                          <label className="inline-block mb-2 text-sm font-medium">
                            Variation Option <span className="text-red-500">*</span>
                          </label>
                          <Select
                            className="react-select"
                            options={
                              productVariations.length > 0 ?
                                availableVariations
                                  .find(v => v.id === productVariations[0].variationId)?.variationOptions
                                  ?.map(option => ({
                                    value: option.id,
                                    label: option.value
                                  })) || [] : []
                            }
                            isSearchable={true}
                            placeholder={productVariations.length > 0 ? "Select option..." : "Select a variation type first"}
                            isDisabled={productVariations.length === 0}
                            value={
                              productVariations.length > 0 && productVariations[0].variationOptionIds.length > 0 ?
                                (availableVariations
                                  .find(v => v.id === productVariations[0].variationId)?.variationOptions || [])
                                  .filter(option => productVariations[0].variationOptionIds.includes(option.id))
                                  .map(option => ({
                                    value: option.id,
                                    label: option.value
                                  }))[0] : null
                            }
                            onChange={(option) => {
                              if (option && productVariations.length > 0) {
                                const updatedVariations = [...productVariations];
                                updatedVariations[0] = {
                                  ...updatedVariations[0],
                                  variationOptionIds: [option.value]
                                };
                                setProductVariations(updatedVariations);
                              }
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Product Items Section */}
                  <div className="mt-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-medium">Product Items</h4>
                      <button
                        type="button"
                        onClick={addProductItem}
                        className="inline-flex items-center gap-1 px-3 py-1.5 text-white transition-all duration-200 ease-linear rounded-md bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-200"
                      >
                        <Plus className="size-4" />
                        Add Item
                      </button>
                    </div>
                    
                    {productItems.length === 0 ? (
                      <div className="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg">
                        Add product items after selecting variation options.
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {productItems.map((item, index) => (
                          <div key={item.id || `item-${index}`} className="mb-6 p-4 border rounded-lg bg-white">
                            <div className="flex justify-between items-center mb-4">
                              <h6 className="text-sm font-medium">Item #{index + 1}</h6>
                              <button
                                type="button"
                                onClick={() => removeProductItem(index)}
                                className="text-red-500 hover:text-red-700"
                              >
                                <Trash2 className="size-4" />
                              </button>
                            </div>
                            
                            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                              <div>
                                <label className="inline-block mb-2 text-sm font-medium">
                                  Quantity <span className="text-red-500">*</span>
                                </label>
                                <input
                                  type="number"
                                  className={`form-input w-full ${
                                    productItemErrors[index]?.quantityInStock ? 'border-red-500' : 'border-slate-200'
                                  }`}
                                  placeholder="Enter quantity"
                                  value={item.quantityInStock}
                                  onChange={(e) => updateProductItem(index, 'quantityInStock', parseInt(e.target.value) || 0)}
                                />
                                {productItemErrors[index]?.quantityInStock && (
                                  <p className="mt-1 text-sm text-red-500">{productItemErrors[index]?.quantityInStock}</p>
                                )}
                              </div>
                              
                              <div>
                                <label className="inline-block mb-2 text-sm font-medium">
                                  Price (VND) <span className="text-red-500">*</span>
                                </label>
                                <input
                                  type="text"
                                  className={`form-input w-full ${
                                    productItemErrors[index]?.price ? 'border-red-500' : 'border-slate-200'
                                  }`}
                                  placeholder="Enter price"
                                  value={formatPriceDisplay(item.price)}
                                  onChange={(e) => {
                                    const numericValue = e.target.value.replace(/\D/g, '');
                                    updateProductItem(index, 'price', numericValue ? parseInt(numericValue) : 0);
                                  }}
                                />
                                {productItemErrors[index]?.price && (
                                  <p className="mt-1 text-sm text-red-500">{productItemErrors[index]?.price}</p>
                                )}
                              </div>
                              
                              <div>
                                <label className="inline-block mb-2 text-sm font-medium">
                                  Market Price (VND) <span className="text-red-500">*</span>
                                </label>
                                <input
                                  type="text"
                                  className={`form-input w-full ${
                                    productItemErrors[index]?.marketPrice ? 'border-red-500' : 'border-slate-200'
                                  }`}
                                  placeholder="Enter market price"
                                  value={formatPriceDisplay(item.marketPrice)}
                                  onChange={(e) => {
                                    const numericValue = e.target.value.replace(/\D/g, '');
                                    updateProductItem(index, 'marketPrice', numericValue ? parseInt(numericValue) : 0);
                                  }}
                                />
                                {productItemErrors[index]?.marketPrice && (
                                  <p className="mt-1 text-sm text-red-500">{productItemErrors[index]?.marketPrice}</p>
                                )}
                              </div>
                              
                              <div className="lg:col-span-3">
                                <label className="inline-block mb-2 text-sm font-medium">
                                  Product Image <span className="text-red-500">*</span>
                                </label>
                                <Dropzone
                                  onDrop={(acceptedFiles) => handleProductItemImageUpload(index, acceptedFiles)}
                                  maxFiles={1}
                                  accept={{
                                    "image/*": [".png", ".jpg", ".jpeg", ".webp"],
                                  }}
                                >
                                  {({ getRootProps, getInputProps }) => (
                                    <div
                                      className={`border-2 border-dashed rounded-lg ${
                                        productItemErrors[index]?.image 
                                          ? 'border-red-500' 
                                          : 'border-slate-200 dark:border-zink-500'
                                      }`}
                                      {...getRootProps()}
                                    >
                                      <input {...getInputProps()} />
                                      <div className="p-4 text-center">
                                        {/* Check for image in multiple places */}
                                        {productItemImages[item.id || `temp-${index}`]?.preview ? (
                                          <div className="relative">
                                            <img
                                              src={productItemImages[item.id || `temp-${index}`]?.preview}
                                              alt={`Product Item ${index + 1}`}
                                              className="h-32 mx-auto object-contain"
                                            />
                                            <button
                                              type="button"
                                              onClick={(e) => {
                                                e.stopPropagation();
                                                removeProductItemImage(index);
                                              }}
                                              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 size-5 flex items-center justify-center"
                                            >
                                              ×
                                            </button>
                                            <p className="mt-2 text-sm text-slate-500">
                                              {productItemImages[item.id || `temp-${index}`]?.formattedSize || "Uploaded image"}
                                            </p>
                                          </div>
                                        ) : item.imageUrl ? (
                                          <div className="relative">
                                            <img
                                              src={item.imageUrl}
                                              alt={`Product Item ${index + 1}`}
                                              className="h-32 mx-auto object-contain"
                                            />
                                            <button
                                              type="button"
                                              onClick={(e) => {
                                                e.stopPropagation();
                                                removeProductItemImage(index);
                                              }}
                                              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 size-5 flex items-center justify-center"
                                            >
                                              ×
                                            </button>
                                            <p className="mt-2 text-sm text-slate-500">Existing image</p>
                                          </div>
                                        ) : (
                                          <>
                                            <UploadCloud className="size-6 mx-auto mb-3" />
                                            <h5 className="mb-1">
                                              Drop image here or click to upload.
                                            </h5>
                                            <p className="text-slate-500 dark:text-zink-200">
                                              Maximum size: 2MB
                                            </p>
                                          </>
                                        )}
                                      </div>
                                    </div>
                                  )}
                                </Dropzone>
                                {productItemErrors[index]?.image && (
                                  <p className="mt-1 text-sm text-red-500">{productItemErrors[index]?.image}</p>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Product Specifications */}
                  <div className="mt-8">
                    <h6 className="mb-4 text-15 font-medium">Product Specifications</h6>
                    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-12">
                      <div className="xl:col-span-6">
                        <label htmlFor="detailedIngredients" className="inline-block mb-2 text-base font-medium">
                          Detailed Ingredients <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="detailedIngredients"
                          name="detailedIngredients"
                          className={`form-input w-full ${
                            productFormik.touched.detailedIngredients && productFormik.errors.detailedIngredients ? 'border-red-500' : 'border-slate-200'
                          }`}
                          placeholder="Enter detailed ingredients"
                          rows={3}
                          value={productFormik.values.detailedIngredients}
                          onChange={productFormik.handleChange}
                          onBlur={productFormik.handleBlur}
                        ></textarea>
                        {productFormik.touched.detailedIngredients && productFormik.errors.detailedIngredients && (
                          <p className="mt-1 text-sm text-red-500">{productFormik.errors.detailedIngredients}</p>
                        )}
                      </div>

                      <div className="xl:col-span-6">
                        <label htmlFor="mainFunction" className="inline-block mb-2 text-base font-medium">
                          Main Function <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="mainFunction"
                          name="mainFunction"
                          className={`form-input w-full ${
                            productFormik.touched.mainFunction && productFormik.errors.mainFunction ? 'border-red-500' : 'border-slate-200'
                          }`}
                          placeholder="Enter main function"
                          value={productFormik.values.mainFunction}
                          onChange={productFormik.handleChange}
                          onBlur={productFormik.handleBlur}
                        />
                        {productFormik.touched.mainFunction && productFormik.errors.mainFunction && (
                          <p className="mt-1 text-sm text-red-500">{productFormik.errors.mainFunction}</p>
                        )}
                      </div>

                      <div className="xl:col-span-6">
                        <label htmlFor="texture" className="inline-block mb-2 text-base font-medium">
                          Texture
                        </label>
                        <input
                          type="text"
                          id="texture"
                          name="texture"
                          className="form-input w-full border-slate-200"
                          placeholder="Enter texture"
                          value={productFormik.values.texture}
                          onChange={productFormik.handleChange}
                        />
                      </div>

                      <div className="xl:col-span-6">
                        <label htmlFor="englishName" className="inline-block mb-2 text-base font-medium">
                          English Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="englishName"
                          name="englishName"
                          className={`form-input w-full ${
                            productFormik.touched.englishName && productFormik.errors.englishName ? 'border-red-500' : 'border-slate-200'
                          }`}
                          placeholder="Enter English name"
                          value={productFormik.values.englishName}
                          onChange={productFormik.handleChange}
                          onBlur={productFormik.handleBlur}
                        />
                        {productFormik.touched.englishName && productFormik.errors.englishName && (
                          <p className="mt-1 text-sm text-red-500">{productFormik.errors.englishName}</p>
                        )}
                      </div>

                      <div className="xl:col-span-6">
                        <label htmlFor="keyActiveIngredients" className="inline-block mb-2 text-base font-medium">
                          Key Active Ingredients <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="keyActiveIngredients"
                          name="keyActiveIngredients"
                          className={`form-input w-full ${
                            productFormik.touched.keyActiveIngredients && productFormik.errors.keyActiveIngredients ? 'border-red-500' : 'border-slate-200'
                          }`}
                          placeholder="Enter key active ingredients"
                          value={productFormik.values.keyActiveIngredients}
                          onChange={productFormik.handleChange}
                          onBlur={productFormik.handleBlur}
                        />
                        {productFormik.touched.keyActiveIngredients && productFormik.errors.keyActiveIngredients && (
                          <p className="mt-1 text-sm text-red-500">{productFormik.errors.keyActiveIngredients}</p>
                        )}
                      </div>

                      <div className="xl:col-span-6">
                        <label htmlFor="storageInstruction" className="inline-block mb-2 text-base font-medium">
                          Storage Instruction <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="storageInstruction"
                          name="storageInstruction"
                          className={`form-input w-full ${
                            productFormik.touched.storageInstruction && productFormik.errors.storageInstruction ? 'border-red-500' : 'border-slate-200'
                          }`}
                          placeholder="Enter storage instructions"
                          value={productFormik.values.storageInstruction}
                          onChange={productFormik.handleChange}
                          onBlur={productFormik.handleBlur}
                        />
                        {productFormik.touched.storageInstruction && productFormik.errors.storageInstruction && (
                          <p className="mt-1 text-sm text-red-500">{productFormik.errors.storageInstruction}</p>
                        )}
                      </div>

                      <div className="xl:col-span-6">
                        <label htmlFor="usageInstruction" className="inline-block mb-2 text-base font-medium">
                          Usage Instruction <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="usageInstruction"
                          name="usageInstruction"
                          className={`form-input w-full ${
                            productFormik.touched.usageInstruction && productFormik.errors.usageInstruction ? 'border-red-500' : 'border-slate-200'
                          }`}
                          placeholder="Enter usage instructions"
                          rows={3}
                          value={productFormik.values.usageInstruction}
                          onChange={productFormik.handleChange}
                          onBlur={productFormik.handleBlur}
                        ></textarea>
                        {productFormik.touched.usageInstruction && productFormik.errors.usageInstruction && (
                          <p className="mt-1 text-sm text-red-500">{productFormik.errors.usageInstruction}</p>
                        )}
                      </div>

                      <div className="xl:col-span-6">
                        <label htmlFor="expiryDate" className="inline-block mb-2 text-base font-medium">
                          Expiry Date <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="expiryDate"
                          name="expiryDate"
                          className={`form-input w-full ${
                            productFormik.touched.expiryDate && productFormik.errors.expiryDate ? 'border-red-500' : 'border-slate-200'
                          }`}
                          placeholder="Enter expiry date (e.g., 12/2025)"
                          value={productFormik.values.expiryDate}
                          onChange={productFormik.handleChange}
                          onBlur={productFormik.handleBlur}
                        />
                        {productFormik.touched.expiryDate && productFormik.errors.expiryDate && (
                          <p className="mt-1 text-sm text-red-500">{productFormik.errors.expiryDate}</p>
                        )}
                      </div>

                      <div className="xl:col-span-6">
                        <label htmlFor="skinIssues" className="inline-block mb-2 text-base font-medium">
                          Skin Issues <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="skinIssues"
                          name="skinIssues"
                          className={`form-input w-full ${
                            productFormik.touched.skinIssues && productFormik.errors.skinIssues ? 'border-red-500' : 'border-slate-200'
                          }`}
                          placeholder="Enter skin issues this product addresses"
                          value={productFormik.values.skinIssues}
                          onChange={productFormik.handleChange}
                          onBlur={productFormik.handleBlur}
                        />
                        {productFormik.touched.skinIssues && productFormik.errors.skinIssues && (
                          <p className="mt-1 text-sm text-red-500">{productFormik.errors.skinIssues}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end gap-2 mt-6">
                    <button
                      type="button"
                      onClick={() => {
                        window.location.href = "/ecommerce/products";
                      }}
                      className="text-red-500 bg-white btn hover:text-red-500 hover:bg-red-100 focus:text-red-500 focus:bg-red-100"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        console.log("Update button clicked");
                        handleUpdateProduct();
                      }}
                      disabled={isSubmitting}
                      className="text-white btn bg-custom-500 hover:text-white hover:bg-custom-600 focus:text-white focus:bg-custom-600"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="mr-2 animate-spin">
                            <i className="mdi mdi-loading"></i>
                          </span>
                          Updating...
                        </>
                      ) : (
                        "Update Product"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}