import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4121 } from "./fragment4121";
import type { FragmentToken4122 } from "./fragment4122";

export const FRAGMENT_4123 = gql(`
  fragment Fragment4123 on Member202 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_202
    memberCount_202
    memberMetric_202
  }
`);

type FragmentResult4123 = ResultOf<typeof FRAGMENT_4123>;
type FragmentSelf4123 = NonNullable<FragmentResult4123>;

export type FragmentToken4123 =
  | FragmentSelf4123["__typename"]
  | FragmentSelf4123["typenameHint"] | FragmentToken4121 | FragmentToken4122;
