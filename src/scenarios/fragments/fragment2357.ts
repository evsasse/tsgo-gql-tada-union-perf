import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2355 } from "./fragment2355";
import type { FragmentToken2356 } from "./fragment2356";

export const FRAGMENT_2357 = gql(`
  fragment Fragment2357 on Member116 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_116
    memberCount_116
    memberMetric_116
  }
`);

type FragmentResult2357 = ResultOf<typeof FRAGMENT_2357>;
type FragmentSelf2357 = NonNullable<FragmentResult2357>;

export type FragmentToken2357 =
  | FragmentSelf2357["__typename"]
  | FragmentSelf2357["typenameHint"] | FragmentToken2355 | FragmentToken2356;
