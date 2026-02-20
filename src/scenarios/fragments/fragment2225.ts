import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2223 } from "./fragment2223";
import type { FragmentToken2224 } from "./fragment2224";

export const FRAGMENT_2225 = gql(`
  fragment Fragment2225 on Member264 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_264
    memberCount_264
    memberMetric_264
  }
`);

type FragmentResult2225 = ResultOf<typeof FRAGMENT_2225>;
type FragmentSelf2225 = NonNullable<FragmentResult2225>;

export type FragmentToken2225 =
  | FragmentSelf2225["__typename"]
  | FragmentSelf2225["typenameHint"] | FragmentToken2223 | FragmentToken2224;
