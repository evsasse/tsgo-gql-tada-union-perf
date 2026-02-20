import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken523 } from "./fragment523";
import type { FragmentToken524 } from "./fragment524";

export const FRAGMENT_525 = gql(`
  fragment Fragment525 on Member244 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_244
    memberCount_244
    memberMetric_244
  }
`);

type FragmentResult525 = ResultOf<typeof FRAGMENT_525>;
type FragmentSelf525 = NonNullable<FragmentResult525>;

export type FragmentToken525 =
  | FragmentSelf525["__typename"]
  | FragmentSelf525["typenameHint"] | FragmentToken523 | FragmentToken524;
