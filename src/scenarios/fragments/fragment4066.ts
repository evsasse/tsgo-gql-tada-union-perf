import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4064 } from "./fragment4064";
import type { FragmentToken4065 } from "./fragment4065";

export const FRAGMENT_4066 = gql(`
  fragment Fragment4066 on Member145 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_145
    memberCount_145
    memberMetric_145
  }
`);

type FragmentResult4066 = ResultOf<typeof FRAGMENT_4066>;
type FragmentSelf4066 = NonNullable<FragmentResult4066>;

export type FragmentToken4066 =
  | FragmentSelf4066["__typename"]
  | FragmentSelf4066["typenameHint"] | FragmentToken4064 | FragmentToken4065;
