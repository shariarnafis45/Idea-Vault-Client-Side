"use client";

import { FloppyDisk } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Fieldset,
  Form,
  Input,
  Label,
  Surface,
  TextArea,
  TextField,
  Select,
  ListBox,
} from "@heroui/react";
import { Send } from "lucide-react";
import { redirect } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

export function AddIdeaForm({ categories }) {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newIdea = Object.fromEntries(formData.entries());
    newIdea.tags = newIdea.tags.split(",").map((tag) => tag.trim());
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/add-idea`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newIdea),
    });
    const data = await res.json();
    if (data.acknowledged) {
      toast.success(`Your ${newIdea.ideaTitle} Idea Added Successfully`);
      redirect("/ideas");
    } else {
      toast.error("Idea not added ! Please try again ");
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <Fieldset className="w-full">
        <Fieldset.Group>
          {/* title */}
          <TextField
            isRequired
            name="ideaTitle"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }

              return null;
            }}
            className="group"
          >
            <Label
              className="
      mb-2 block
      text-sm font-semibold
      text-[#111827] dark:text-gray-200
    "
            >
              Idea Title
            </Label>

            <Input
              placeholder="Enter a catchy title for your idea"
              variant="secondary"
              className="
              w-full
                bg-gray-100
                    h-14 rounded-2xl
                    border border-black/5 dark:border-white/10
                    
                     dark:bg-[#111827]/70
                    
                    px-4
                    
                    text-[15px]
                    text-gray-800 dark:text-gray-100
                    
                    placeholder:text-gray-400 dark:placeholder:text-gray-500
                    
                    shadow-[0_4px_20px_rgba(15,23,42,0.04)]
                    dark:shadow-[0_10px_30px_rgba(0,0,0,0.25)]
                    
                    backdrop-blur-xl
                    
                    transition-all duration-300
                    
                    hover:border-[#6D5EF5]/30
                    hover:shadow-[0_10px_30px_rgba(109,94,245,0.08)]
                    
                    focus-within:border-[#6D5EF5]
                    focus-within:ring-4
                    focus-within:ring-[#6D5EF5]/10
                    
                    dark:hover:border-[#8B5CF6]/40
                    dark:focus-within:border-[#8B5CF6]
                    dark:focus-within:ring-[#8B5CF6]/10
                    "
            />

            <FieldError
              className="
                mt-2 text-sm
                text-red-500 dark:text-red-400
                "
            />
          </TextField>
          {/* short des */}
          <TextField
            isRequired
            name="shortDescription"
            validate={(value) => {
              if (value.length < 10) {
                return "Name must be at least 10 characters";
              }

              return null;
            }}
            className="group"
          >
            <Label
              className="
              
      mb-2 block
      text-sm font-semibold
      text-[#111827] dark:text-gray-200
    "
            >
              Short Description
            </Label>

            <Input
              placeholder="Briefly describe your idea in a few sentences"
              variant="secondary"
              className="
               w-full
                    h-20 rounded-2xl
                    border border-black/5 dark:border-white/10
                    
                    bg-gray-100 dark:bg-[#111827]/70
                    
                    px-4
                    
                    text-[15px]
                    text-gray-800 dark:text-gray-100
                    
                    placeholder:text-gray-400 dark:placeholder:text-gray-500
                    
                    shadow-[0_4px_20px_rgba(15,23,42,0.04)]
                    dark:shadow-[0_10px_30px_rgba(0,0,0,0.25)]
                    
                    backdrop-blur-xl
                    
                    transition-all duration-300
                    
                    hover:border-[#6D5EF5]/30
                    hover:shadow-[0_10px_30px_rgba(109,94,245,0.08)]
                    
                    focus-within:border-[#6D5EF5]
                    focus-within:ring-4
                    focus-within:ring-[#6D5EF5]/10
                    
                    dark:hover:border-[#8B5CF6]/40
                    dark:focus-within:border-[#8B5CF6]
                    dark:focus-within:ring-[#8B5CF6]/10
                    "
            />

            <FieldError
              className="
                mt-2 text-sm
                text-red-500 dark:text-red-400
                "
            />
          </TextField>

          {/* Long Description */}
          <TextField
            isRequired
            name="detailedDescription"
            validate={(value) => {
              if (!value || value.length < 20) {
                return "Description must be at least 20 characters";
              }

              return null;
            }}
            className="group"
          >
            <Label
              className="
      mb-2 block
      text-sm font-semibold
      text-[#111827] dark:text-gray-200
    "
            >
              Detailed Description
            </Label>

            <TextArea
              placeholder="Describe your idea in detail. What problem does it solve? How will it work? What makes it unique?"
              rows={5}
              className="
      w-full
      rounded-2xl
      border border-black/5 dark:border-white/10
      
      bg-gray-100 dark:bg-[#111827]/70
      
      px-4 py-4
      
      text-[15px]
      text-gray-800 dark:text-gray-100
      
      placeholder:text-gray-400 dark:placeholder:text-gray-500
      
      shadow-[0_4px_20px_rgba(15,23,42,0.04)]
      dark:shadow-[0_10px_30px_rgba(0,0,0,0.25)]
      
      backdrop-blur-xl
      
      transition-all duration-300
      
      hover:border-[#6D5EF5]/30
      hover:shadow-[0_10px_30px_rgba(109,94,245,0.08)]
      
      focus:border-[#6D5EF5]
      focus:ring-4
      focus:ring-[#6D5EF5]/10
      focus:outline-none
      
      dark:hover:border-[#8B5CF6]/40
      dark:focus:border-[#8B5CF6]
      dark:focus:ring-[#8B5CF6]/10

      resize-none
    "
            />

            <FieldError
              className="
      mt-2 text-sm
      text-red-500 dark:text-red-400
    "
            />
          </TextField>

          {/* Category Dropdown */}
          <Select
            isRequired
            name="category"
            className="w-full "
            placeholder="Select A Category"
          >
            <Label
              className="  mb-2 block
              text-sm font-semibold
              text-[#111827] dark:text-gray-200"
            >
              Category
            </Label>
            <Select.Trigger
              className=" w-full
                     rounded-2xl
                    border border-black/5 dark:border-white/10
                    
                    bg-gray-100 dark:bg-[#111827]/70
                    
                    px-4
                    
                    text-[15px]
                    text-gray-800 dark:text-gray-100
                    
                    
                    
                    shadow-[0_4px_20px_rgba(15,23,42,0.04)]
                    dark:shadow-[0_10px_30px_rgba(0,0,0,0.25)]
                    
                    backdrop-blur-xl
                    
                    transition-all duration-300
                    
                    hover:border-[#6D5EF5]/30
                    hover:shadow-[0_10px_30px_rgba(109,94,245,0.08)]
                    
                    focus-within:border-[#6D5EF5]
                    focus-within:ring-4
                    focus-within:ring-[#6D5EF5]/10
                    
                    dark:hover:border-[#8B5CF6]/40
                    dark:focus-within:border-[#8B5CF6]
                    dark:focus-within:ring-[#8B5CF6]/10
                    "
            >
              <Select.Value className="text-gray-800 dark:text-gray-500 " />
              <Select.Indicator className="text-gray-400 dark:text-gray-500" />
            </Select.Trigger>
            <Select.Popover>
              <ListBox
                className=" 
                    rounded-3xl
                    border border-black/5 dark:border-white/10
                    
                    bg-gray-100 dark:bg-[#111827]/70
                    
                    px-4
                    
                    text-[15px]
                    text-gray-800 dark:text-gray-100
                    
                    
                    
                    shadow-[0_4px_20px_rgba(15,23,42,0.04)]
                    dark:shadow-[0_10px_30px_rgba(0,0,0,0.25)]
                    
                    backdrop-blur-xl
                    
                    transition-all duration-300
                    
                    hover:border-[#6D5EF5]/30
                    hover:shadow-[0_10px_30px_rgba(109,94,245,0.08)]
                    
                    focus-within:border-[#6D5EF5]
                    focus-within:ring-4
                    focus-within:ring-[#6D5EF5]/10
                    
                    dark:hover:border-[#8B5CF6]/40
                    dark:focus-within:border-[#8B5CF6]
                    dark:focus-within:ring-[#8B5CF6]/10
                    "
              >
                {categories.map((category) => (
                  <ListBox.Item
                    key={category._id}
                    id={category.categoryId}
                    textValue={category.title}
                  >
                    {category.title}
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                ))}
              </ListBox>
            </Select.Popover>
          </Select>
          {/* Tags */}
          <TextField name="tags" className="group">
            <Label
              className="
      mb-2 block
      text-sm font-semibold
      text-[#111827] dark:text-gray-200
    "
            >
              Tags (Optional)
            </Label>

            <Input
              placeholder="ai, startup, saas, healthcare"
              variant="secondary"
              className="
              w-full
                bg-gray-100
                    h-14 rounded-2xl
                    border border-black/5 dark:border-white/10
                    
                     dark:bg-[#111827]/70
                    
                    px-4
                    
                    text-[15px]
                    text-gray-800 dark:text-gray-100
                    
                    placeholder:text-gray-400 dark:placeholder:text-gray-500
                    
                    shadow-[0_4px_20px_rgba(15,23,42,0.04)]
                    dark:shadow-[0_10px_30px_rgba(0,0,0,0.25)]
                    
                    backdrop-blur-xl
                    
                    transition-all duration-300
                    
                    hover:border-[#6D5EF5]/30
                    hover:shadow-[0_10px_30px_rgba(109,94,245,0.08)]
                    
                    focus-within:border-[#6D5EF5]
                    focus-within:ring-4
                    focus-within:ring-[#6D5EF5]/10
                    
                    dark:hover:border-[#8B5CF6]/40
                    dark:focus-within:border-[#8B5CF6]
                    dark:focus-within:ring-[#8B5CF6]/10
                    "
            />

            <FieldError
              className="
                mt-2 text-sm
                text-red-500 dark:text-red-400
                "
            />
          </TextField>
          {/* Image Url */}
          <TextField
            isRequired
            name="imageURL"
            className="group"
            validate={(value) => {
              if (!value) return null;

              const urlRegex = /^https?:\/\/.+/i;

              if (!urlRegex.test(value)) {
                return "Please enter a valid URL";
              }

              return null;
            }}
          >
            <Label
              className="
      mb-2 block
      text-sm font-semibold
      text-[#111827] dark:text-gray-200
    "
            >
              Image URL
            </Label>

            <Input
              placeholder="https://example.com/image.jpg"
              variant="secondary"
              className="
              w-full
                bg-gray-100
                    h-14 rounded-2xl
                    border border-black/5 dark:border-white/10
                    
                     dark:bg-[#111827]/70
                    
                    px-4
                    
                    text-[15px]
                    text-gray-800 dark:text-gray-100
                    
                    placeholder:text-gray-400 dark:placeholder:text-gray-500
                    
                    shadow-[0_4px_20px_rgba(15,23,42,0.04)]
                    dark:shadow-[0_10px_30px_rgba(0,0,0,0.25)]
                    
                    backdrop-blur-xl
                    
                    transition-all duration-300
                    
                    hover:border-[#6D5EF5]/30
                    hover:shadow-[0_10px_30px_rgba(109,94,245,0.08)]
                    
                    focus-within:border-[#6D5EF5]
                    focus-within:ring-4
                    focus-within:ring-[#6D5EF5]/10
                    
                    dark:hover:border-[#8B5CF6]/40
                    dark:focus-within:border-[#8B5CF6]
                    dark:focus-within:ring-[#8B5CF6]/10
                    "
            />

            <FieldError
              className="
                mt-2 text-sm
                text-red-500 dark:text-red-400
                "
            />
          </TextField>
          {/* Budget */}
          <TextField name="estimatedBudget" className="group">
            <Label
              className="
      mb-2 block
      text-sm font-semibold
      text-[#111827] dark:text-gray-200
    "
            >
              Estimated Budget (Optional)
            </Label>

            <Input
              placeholder="Enter estimated budget $10000"
              variant="secondary"
              className="
              w-full
                bg-gray-100
                    h-14 rounded-2xl
                    border border-black/5 dark:border-white/10
                    
                     dark:bg-[#111827]/70
                    
                    px-4
                    
                    text-[15px]
                    text-gray-800 dark:text-gray-100
                    
                    placeholder:text-gray-400 dark:placeholder:text-gray-500
                    
                    shadow-[0_4px_20px_rgba(15,23,42,0.04)]
                    dark:shadow-[0_10px_30px_rgba(0,0,0,0.25)]
                    
                    backdrop-blur-xl
                    
                    transition-all duration-300
                    
                    hover:border-[#6D5EF5]/30
                    hover:shadow-[0_10px_30px_rgba(109,94,245,0.08)]
                    
                    focus-within:border-[#6D5EF5]
                    focus-within:ring-4
                    focus-within:ring-[#6D5EF5]/10
                    
                    dark:hover:border-[#8B5CF6]/40
                    dark:focus-within:border-[#8B5CF6]
                    dark:focus-within:ring-[#8B5CF6]/10
                    "
            />

            <FieldError
              className="
                mt-2 text-sm
                text-red-500 dark:text-red-400
                "
            />
          </TextField>
          {/* Target Audience */}
          <TextField isRequired name="targetAudience" className="group">
            <Label
              className="
      mb-2 block
      text-sm font-semibold
      text-[#111827] dark:text-gray-200
    "
            >
              Target Audience
            </Label>

            <Input
              placeholder="Students, startups, healthcare professionals"
              variant="secondary"
              className="
              w-full
                bg-gray-100
                    h-14 rounded-2xl
                    border border-black/5 dark:border-white/10
                    
                     dark:bg-[#111827]/70
                    
                    px-4
                    
                    text-[15px]
                    text-gray-800 dark:text-gray-100
                    
                    placeholder:text-gray-400 dark:placeholder:text-gray-500
                    
                    shadow-[0_4px_20px_rgba(15,23,42,0.04)]
                    dark:shadow-[0_10px_30px_rgba(0,0,0,0.25)]
                    
                    backdrop-blur-xl
                    
                    transition-all duration-300
                    
                    hover:border-[#6D5EF5]/30
                    hover:shadow-[0_10px_30px_rgba(109,94,245,0.08)]
                    
                    focus-within:border-[#6D5EF5]
                    focus-within:ring-4
                    focus-within:ring-[#6D5EF5]/10
                    
                    dark:hover:border-[#8B5CF6]/40
                    dark:focus-within:border-[#8B5CF6]
                    dark:focus-within:ring-[#8B5CF6]/10
                    "
            />

            <FieldError
              className="
                mt-2 text-sm
                text-red-500 dark:text-red-400
                "
            />
          </TextField>
          {/* Problem Statement */}
          <TextField
            isRequired
            name="problemStatement"
            validate={(value) => {
              if (value.length < 10) {
                return "Name must be at least 10 characters";
              }

              return null;
            }}
            className="group"
          >
            <Label
              className="
              
      mb-2 block
      text-sm font-semibold
      text-[#111827] dark:text-gray-200
    "
            >
              Problem Statement
            </Label>

            <Input
              placeholder="What problem does your idea solve?"
              variant="secondary"
              className="
               w-full
                    h-20 rounded-2xl
                    border border-black/5 dark:border-white/10
                    
                    bg-gray-100 dark:bg-[#111827]/70
                    
                    px-4
                    
                    text-[15px]
                    text-gray-800 dark:text-gray-100
                    
                    placeholder:text-gray-400 dark:placeholder:text-gray-500
                    
                    shadow-[0_4px_20px_rgba(15,23,42,0.04)]
                    dark:shadow-[0_10px_30px_rgba(0,0,0,0.25)]
                    
                    backdrop-blur-xl
                    
                    transition-all duration-300
                    
                    hover:border-[#6D5EF5]/30
                    hover:shadow-[0_10px_30px_rgba(109,94,245,0.08)]
                    
                    focus-within:border-[#6D5EF5]
                    focus-within:ring-4
                    focus-within:ring-[#6D5EF5]/10
                    
                    dark:hover:border-[#8B5CF6]/40
                    dark:focus-within:border-[#8B5CF6]
                    dark:focus-within:ring-[#8B5CF6]/10
                    "
            />

            <FieldError
              className="
                mt-2 text-sm
                text-red-500 dark:text-red-400
                "
            />
          </TextField>
          {/* Proposed Solution */}
          <TextField
            isRequired
            name="proposedSolution"
            validate={(value) => {
              if (value.length < 10) {
                return "Name must be at least 10 characters";
              }

              return null;
            }}
            className="group"
          >
            <Label
              className="
              
      mb-2 block
      text-sm font-semibold
      text-[#111827] dark:text-gray-200
    "
            >
              Proposed Solution
            </Label>

            <Input
              placeholder="How does your idea solve this problem?"
              variant="secondary"
              className="
               w-full
                    h-20 rounded-2xl
                    border border-black/5 dark:border-white/10
                    
                    bg-gray-100 dark:bg-[#111827]/70
                    
                    px-4
                    
                    text-[15px]
                    text-gray-800 dark:text-gray-100
                    
                    placeholder:text-gray-400 dark:placeholder:text-gray-500
                    
                    shadow-[0_4px_20px_rgba(15,23,42,0.04)]
                    dark:shadow-[0_10px_30px_rgba(0,0,0,0.25)]
                    
                    backdrop-blur-xl
                    
                    transition-all duration-300
                    
                    hover:border-[#6D5EF5]/30
                    hover:shadow-[0_10px_30px_rgba(109,94,245,0.08)]
                    
                    focus-within:border-[#6D5EF5]
                    focus-within:ring-4
                    focus-within:ring-[#6D5EF5]/10
                    
                    dark:hover:border-[#8B5CF6]/40
                    dark:focus-within:border-[#8B5CF6]
                    dark:focus-within:ring-[#8B5CF6]/10
                    "
            />

            <FieldError
              className="
                mt-2 text-sm
                text-red-500 dark:text-red-400
                "
            />
          </TextField>
        </Fieldset.Group>
        <Fieldset.Actions>
          <Button
            type="submit"
            size="l"
            className="
            w-full
                h-12 px-8
                rounded-xl
                border-0
                bg-gradient-to-r
                from-[#6D5EF5]
                to-[#8B5CF6]
                text-white
                font-semibold
                shadow-lg shadow-[#6D5EF5]/30
                transition-all duration-300
                hover:scale-[1.02]
                hover:shadow-xl hover:shadow-[#6D5EF5]/40
                active:scale-[0.98]
              "
          >
            <Send className="size-4" />
            Submit Idea
          </Button>
        </Fieldset.Actions>
      </Fieldset>
    </Form>
  );
}
