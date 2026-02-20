import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4771 } from "./fragment4771";
import type { FragmentToken4772 } from "./fragment4772";

export const FRAGMENT_4773 = gql(`
  fragment Fragment4773 on Member12 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_12
    memberCount_12
    memberMetric_12
  }
`);

type FragmentResult4773 = ResultOf<typeof FRAGMENT_4773>;
type FragmentSelf4773 = NonNullable<FragmentResult4773>;

export type FragmentToken4773 =
  | FragmentSelf4773["__typename"]
  | FragmentSelf4773["typenameHint"] | FragmentToken4771 | FragmentToken4772;
