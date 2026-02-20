import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2288 } from "./fragment2288";
import type { FragmentToken2289 } from "./fragment2289";

export const FRAGMENT_2290 = gql(`
  fragment Fragment2290 on Member49 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_49
    memberCount_49
    memberMetric_49
  }
`);

type FragmentResult2290 = ResultOf<typeof FRAGMENT_2290>;
type FragmentSelf2290 = NonNullable<FragmentResult2290>;

export type FragmentToken2290 =
  | FragmentSelf2290["__typename"]
  | FragmentSelf2290["typenameHint"] | FragmentToken2288 | FragmentToken2289;
