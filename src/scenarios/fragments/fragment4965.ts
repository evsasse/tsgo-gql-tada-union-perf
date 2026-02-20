import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4963 } from "./fragment4963";
import type { FragmentToken4964 } from "./fragment4964";

export const FRAGMENT_4965 = gql(`
  fragment Fragment4965 on Member204 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_204
    memberCount_204
    memberMetric_204
  }
`);

type FragmentResult4965 = ResultOf<typeof FRAGMENT_4965>;
type FragmentSelf4965 = NonNullable<FragmentResult4965>;

export type FragmentToken4965 =
  | FragmentSelf4965["__typename"]
  | FragmentSelf4965["typenameHint"] | FragmentToken4963 | FragmentToken4964;
