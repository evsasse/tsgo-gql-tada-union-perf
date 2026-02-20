import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4277 } from "./fragment4277";
import type { FragmentToken4278 } from "./fragment4278";

export const FRAGMENT_4279 = gql(`
  fragment Fragment4279 on Member78 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_78
    memberCount_78
    memberMetric_78
  }
`);

type FragmentResult4279 = ResultOf<typeof FRAGMENT_4279>;
type FragmentSelf4279 = NonNullable<FragmentResult4279>;

export type FragmentToken4279 =
  | FragmentSelf4279["__typename"]
  | FragmentSelf4279["typenameHint"] | FragmentToken4277 | FragmentToken4278;
