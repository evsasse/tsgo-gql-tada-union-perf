import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4802 } from "./fragment4802";
import type { FragmentToken4803 } from "./fragment4803";

export const FRAGMENT_4804 = gql(`
  fragment Fragment4804 on Member43 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_43
    memberCount_43
    memberMetric_43
  }
`);

type FragmentResult4804 = ResultOf<typeof FRAGMENT_4804>;
type FragmentSelf4804 = NonNullable<FragmentResult4804>;

export type FragmentToken4804 =
  | FragmentSelf4804["__typename"]
  | FragmentSelf4804["typenameHint"] | FragmentToken4802 | FragmentToken4803;
