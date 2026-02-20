import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2283 } from "./fragment2283";
import type { FragmentToken2284 } from "./fragment2284";

export const FRAGMENT_2285 = gql(`
  fragment Fragment2285 on Member44 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_44
    memberCount_44
    memberMetric_44
  }
`);

type FragmentResult2285 = ResultOf<typeof FRAGMENT_2285>;
type FragmentSelf2285 = NonNullable<FragmentResult2285>;

export type FragmentToken2285 =
  | FragmentSelf2285["__typename"]
  | FragmentSelf2285["typenameHint"] | FragmentToken2283 | FragmentToken2284;
