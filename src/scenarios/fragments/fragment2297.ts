import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2295 } from "./fragment2295";
import type { FragmentToken2296 } from "./fragment2296";

export const FRAGMENT_2297 = gql(`
  fragment Fragment2297 on Member56 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_56
    memberCount_56
    memberMetric_56
  }
`);

type FragmentResult2297 = ResultOf<typeof FRAGMENT_2297>;
type FragmentSelf2297 = NonNullable<FragmentResult2297>;

export type FragmentToken2297 =
  | FragmentSelf2297["__typename"]
  | FragmentSelf2297["typenameHint"] | FragmentToken2295 | FragmentToken2296;
