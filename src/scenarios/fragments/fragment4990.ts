import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4988 } from "./fragment4988";
import type { FragmentToken4989 } from "./fragment4989";

export const FRAGMENT_4990 = gql(`
  fragment Fragment4990 on Member229 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_229
    memberCount_229
    memberMetric_229
  }
`);

type FragmentResult4990 = ResultOf<typeof FRAGMENT_4990>;
type FragmentSelf4990 = NonNullable<FragmentResult4990>;

export type FragmentToken4990 =
  | FragmentSelf4990["__typename"]
  | FragmentSelf4990["typenameHint"] | FragmentToken4988 | FragmentToken4989;
