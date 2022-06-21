import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "components/Button";
import Input from "designs/Input";
import Paragraph from "designs/Paragraph";
import Select, { ISelectValue } from "designs/Select";
import ParagraphLayout from "layouts/ParagraphLayout";
import Condition from "./Condition";
import Question, { IQuestion } from "./Question";

import {
  BottomContainer,
  ConditionContainer,
  FormContainer,
  InputContainer,
  InputWrapper,
  TextContainer,
} from "./styles";

export interface ICondition {
  id: string;
  title: string;
  content: string;
}

interface IValues {
  email: string;
  firstname: string;
  lastname: string;
  company: string;
  jobtitle: string;
  industry: string | undefined;
  country: string | undefined;
  marketingBudget: string;
  numberOfEmployees: string;
  estimatedBudget: string;
  policy: boolean;
  consent: boolean;
}

const INDUSTRY_LIST: ISelectValue[] = [
  {
    id: 1,
    value: "Arts, Entertainment and Recreation",
  },
  {
    id: 2,
    value: "Mining",
  },
  {
    id: 3,
    value: "Educational Services",
  },
  {
    id: 4,
    value: "Transportation and Warehousing",
  },
  {
    id: 5,
    value: "Retail Trade",
  },
  {
    id: 6,
    value: "Manufacturing",
  },
];

const COUNTRY_LIST: ISelectValue[] = [
  {
    id: 1,
    value: "Armenia",
  },
  {
    id: 2,
    value: "Australia",
  },
  {
    id: 3,
    value: "Philippines",
  },
  {
    id: 4,
    value: "Vietnam",
  },
];

const QUESTION_LIST: IQuestion[] = [
  {
    id: 1,
    key: "marketingBudget",
    title:
      "Q1: What is your monthly company level digital marketing spending/ budget?",
    options: [
      {
        id: 1,
        value: "< $25,000",
      },
      {
        id: 2,
        value: "> $250,00",
      },
      {
        id: 3,
        value: "$100,000 to $250,000",
      },
      {
        id: 4,
        value: "$25,000 to $100,00",
      },
    ],
  },
  {
    id: 2,
    key: "estimatedBudget",
    title: "Q2: What is your estimated digital marketing spend on TikTok?",
    options: [
      {
        id: 1,
        value: "< $25,000",
      },
      {
        id: 2,
        value: "> $250,00",
      },
      {
        id: 3,
        value: "$100,000 to $250,000",
      },
      {
        id: 4,
        value: "$25,000 to $100,00",
      },
    ],
  },
  {
    id: 3,
    key: "numberOfEmployees",
    title: "Q3: What is the approximate number of employees in your company?",
    options: [
      {
        id: 1,
        value: "1 to 49",
      },
      {
        id: 2,
        value: "1,000 to 4,999",
      },
      {
        id: 3,
        value: "> 15,000",
      },
      {
        id: 4,
        value: "50 to 999",
      },
      {
        id: 5,
        value: "5,000 to 15,000",
      },
    ],
  },
];

const CONDITION_LIST: ICondition[] = [
  {
    id: "policy",
    title: "Privacy Policy and Terms and Conditions",
    content:
      "I have read and accept the Privacy Policy and Terms and Conditions.",
  },
  {
    id: "consent",
    title: "Consent to receiving marketing materials",
    content:
      "By submitting my contact information, I agree to receive emails from TikTok For Business including newsletters and information about TikTok's products and services.",
  },
];

const initFormData: IValues = {
  email: "",
  firstname: "",
  lastname: "",
  company: "",
  jobtitle: "",
  industry: undefined,
  country: undefined,
  marketingBudget: QUESTION_LIST[0].options[0].id + "",
  numberOfEmployees: QUESTION_LIST[1].options[0].id + "",
  estimatedBudget: QUESTION_LIST[2].options[0].id + "",
  policy: false,
  consent: false,
};

// Schema
const formValidateSchema = Yup.object({
  email: Yup.string()
    .email("Email invalid, please try again!!")
    .required("Email is required!!"),
  firstname: Yup.string()
    .min(5, "First name must be more than 5 characters!!")
    .max(20, "First name must be less than 20 characters!!")
    .required("First name is required!!"),
  lastname: Yup.string()
    .min(5, "Last name must be more than 5 characters!!")
    .max(20, "Last name must be less than 20 characters!!")
    .required("Last name is required!!"),
  company: Yup.string().required("Company's name is required!!"),
  jobtitle: Yup.string().required("Job title is required!!"),
  industry: Yup.string().required("Industry is required!!"),
  country: Yup.string().required("Country is required!!"),
  estimatedBudget: Yup.string().required("This field is required!!"),
  marketingBudget: Yup.string().required("This field is required!!"),
  numberOfEmployees: Yup.string().required("This field is required!!"),
  policy: Yup.bool().oneOf([true], "Field must be checked"),
  consent: Yup.bool().oneOf([true], "Field must be checked"),
});

const ContactSection: React.FC = () => {
  const handleSubmit = (values: IValues) => {
    const sendBackend = {
      ...values,
      industry: INDUSTRY_LIST[parseInt(values.industry as string)],
      country: COUNTRY_LIST[parseInt(values.country as string)],
      estimatedBudget:
        QUESTION_LIST[0].options[parseInt(values.estimatedBudget as string)],
      marketingBudget:
        QUESTION_LIST[0].options[parseInt(values.marketingBudget as string)],
      numberOfEmployees:
        QUESTION_LIST[0].options[parseInt(values.numberOfEmployees as string)],
    };
    console.log(sendBackend);
  };

  const formik = useFormik({
    initialValues: initFormData,
    validationSchema: formValidateSchema,
    onSubmit: handleSubmit,
  });

  return (
    <FormContainer id="contact" onSubmit={formik.handleSubmit}>
      {/* Top left container */}
      <TextContainer>
        <ParagraphLayout mainTitle="Contact" subTitle="With Us">
          <Paragraph>
            Want to speak to someone from the partnerships' team? Leave your
            contacts and the team will be in touch.
          </Paragraph>
        </ParagraphLayout>
      </TextContainer>

      {/* Top right container */}
      <InputContainer>
        <Input
          className="w-full mb-5"
          id="email"
          label="Email"
          placeholder="Enter your email"
          value={formik.values.email}
          errorMessage={
            !!(formik.touched.email && formik.errors.email)
              ? formik.errors.email
              : ""
          }
          onChange={formik.handleChange}
        />

        <InputWrapper>
          <Input
            id="firstname"
            label="First name"
            placeholder="Enter your first name"
            value={formik.values.firstname}
            errorMessage={
              !!(formik.touched.firstname && formik.errors.firstname)
                ? formik.errors.firstname
                : ""
            }
            onChange={formik.handleChange}
          />
          <Input
            id="lastname"
            label="Last name"
            placeholder="Enter your last name"
            value={formik.values.lastname}
            errorMessage={
              !!(formik.touched.lastname && formik.errors.lastname)
                ? formik.errors.lastname
                : ""
            }
            onChange={formik.handleChange}
          />
          <Input
            id="company"
            label="Company"
            placeholder="Enter your Company's name"
            value={formik.values.company}
            errorMessage={
              !!(formik.touched.company && formik.errors.company)
                ? formik.errors.company
                : ""
            }
            onChange={formik.handleChange}
          />
          <Input
            id="jobtitle"
            label="Job title"
            placeholder="Enter your job title"
            value={formik.values.jobtitle}
            errorMessage={
              !!(formik.touched.jobtitle && formik.errors.jobtitle)
                ? formik.errors.jobtitle
                : ""
            }
            onChange={formik.handleChange}
          />
          <Select
            label="Industry"
            id="industry"
            placeholder="Select your industry"
            optionList={INDUSTRY_LIST}
            value={formik.values.industry}
            errorMessage={
              !!(formik.touched.industry && formik.errors.industry)
                ? formik.errors.industry
                : ""
            }
            onChange={(value) => {
              formik.setFieldValue("industry", value);
            }}
          />
          <Select
            label="Country"
            id="country"
            placeholder="Select your country"
            optionList={COUNTRY_LIST}
            value={formik.values.country}
            errorMessage={
              !!(formik.touched.country && formik.errors.country)
                ? formik.errors.country
                : ""
            }
            onChange={(value) => {
              formik.setFieldValue("country", value);
            }}
          />
        </InputWrapper>
      </InputContainer>

      {/* Bottom container */}
      <BottomContainer>
        <Question
          key={QUESTION_LIST[0].key}
          value={formik.values.estimatedBudget}
          question={QUESTION_LIST[0]}
          onChange={(value) => {
            console.log(value);
            formik.setFieldValue("estimatedBudget", value);
          }}
          errorMessage={
            !!(formik.touched.estimatedBudget && formik.errors.estimatedBudget)
              ? formik.errors.estimatedBudget
              : ""
          }
        />
        <Question
          key={QUESTION_LIST[2].key}
          value={formik.values.numberOfEmployees}
          question={QUESTION_LIST[2]}
          onChange={(value) => {
            formik.setFieldValue("numberOfEmployees", value);
          }}
          errorMessage={
            !!(
              formik.touched.numberOfEmployees &&
              formik.errors.numberOfEmployees
            )
              ? formik.errors.numberOfEmployees
              : ""
          }
        />
        <Question
          key={QUESTION_LIST[1].key}
          value={formik.values.marketingBudget}
          question={QUESTION_LIST[1]}
          onChange={(value) => {
            formik.setFieldValue("marketingBudget", value);
          }}
          errorMessage={
            !!(formik.touched.marketingBudget && formik.errors.marketingBudget)
              ? formik.errors.marketingBudget
              : ""
          }
        />
        <ConditionContainer>
          <Condition
            key={CONDITION_LIST[0].id}
            condition={CONDITION_LIST[0]}
            value={formik.values.policy}
            errorMessage={
              !!(formik.touched.policy && formik.errors.policy)
                ? formik.errors.policy
                : ""
            }
            onChange={(value) => {
              formik.setFieldValue("policy", value);
            }}
          />
          <Condition
            key={CONDITION_LIST[1].id}
            condition={CONDITION_LIST[1]}
            value={formik.values.consent}
            errorMessage={
              !!(formik.touched.consent && formik.errors.consent)
                ? formik.errors.consent
                : ""
            }
            onChange={(value) => {
              formik.setFieldValue("consent", value);
            }}
          />
        </ConditionContainer>
      </BottomContainer>
      <Button type="submit" className="mt-5 laptop:mt-0">
        Submit
      </Button>
    </FormContainer>
  );
};

export default ContactSection;
