import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2968 } from "./fragment2968";
import type { FragmentToken2969 } from "./fragment2969";

export const FRAGMENT_2970 = gql(`
  fragment Fragment2970 on Member169 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_169
    memberCount_169
    memberMetric_169
  }
`);

type FragmentResult2970 = ResultOf<typeof FRAGMENT_2970>;
type FragmentSelf2970 = NonNullable<FragmentResult2970>;

export type FragmentToken2970 =
  | FragmentSelf2970["__typename"]
  | FragmentSelf2970["typenameHint"] | FragmentToken2968 | FragmentToken2969;
