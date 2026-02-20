import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken284 } from "./fragment284";
import type { FragmentToken285 } from "./fragment285";

export const FRAGMENT_286 = gql(`
  fragment Fragment286 on Member05 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_05
    memberCount_05
    memberMetric_05
  }
`);

type FragmentResult286 = ResultOf<typeof FRAGMENT_286>;
type FragmentSelf286 = NonNullable<FragmentResult286>;

export type FragmentToken286 =
  | FragmentSelf286["__typename"]
  | FragmentSelf286["typenameHint"] | FragmentToken284 | FragmentToken285;
