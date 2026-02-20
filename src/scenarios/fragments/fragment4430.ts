import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4428 } from "./fragment4428";
import type { FragmentToken4429 } from "./fragment4429";

export const FRAGMENT_4430 = gql(`
  fragment Fragment4430 on Member229 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_229
    memberCount_229
    memberMetric_229
  }
`);

type FragmentResult4430 = ResultOf<typeof FRAGMENT_4430>;
type FragmentSelf4430 = NonNullable<FragmentResult4430>;

export type FragmentToken4430 =
  | FragmentSelf4430["__typename"]
  | FragmentSelf4430["typenameHint"] | FragmentToken4428 | FragmentToken4429;
