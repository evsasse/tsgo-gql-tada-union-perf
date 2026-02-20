import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4648 } from "./fragment4648";
import type { FragmentToken4649 } from "./fragment4649";

export const FRAGMENT_4650 = gql(`
  fragment Fragment4650 on Member169 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_169
    memberCount_169
    memberMetric_169
  }
`);

type FragmentResult4650 = ResultOf<typeof FRAGMENT_4650>;
type FragmentSelf4650 = NonNullable<FragmentResult4650>;

export type FragmentToken4650 =
  | FragmentSelf4650["__typename"]
  | FragmentSelf4650["typenameHint"] | FragmentToken4648 | FragmentToken4649;
