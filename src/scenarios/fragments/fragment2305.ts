import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2303 } from "./fragment2303";
import type { FragmentToken2304 } from "./fragment2304";

export const FRAGMENT_2305 = gql(`
  fragment Fragment2305 on Member64 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_64
    memberCount_64
    memberMetric_64
  }
`);

type FragmentResult2305 = ResultOf<typeof FRAGMENT_2305>;
type FragmentSelf2305 = NonNullable<FragmentResult2305>;

export type FragmentToken2305 =
  | FragmentSelf2305["__typename"]
  | FragmentSelf2305["typenameHint"] | FragmentToken2303 | FragmentToken2304;
