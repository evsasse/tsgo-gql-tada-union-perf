import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4062 } from "./fragment4062";
import type { FragmentToken4063 } from "./fragment4063";

export const FRAGMENT_4064 = gql(`
  fragment Fragment4064 on Member143 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_143
    memberCount_143
    memberMetric_143
  }
`);

type FragmentResult4064 = ResultOf<typeof FRAGMENT_4064>;
type FragmentSelf4064 = NonNullable<FragmentResult4064>;

export type FragmentToken4064 =
  | FragmentSelf4064["__typename"]
  | FragmentSelf4064["typenameHint"] | FragmentToken4062 | FragmentToken4063;
