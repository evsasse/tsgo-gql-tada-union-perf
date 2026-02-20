import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2360 } from "./fragment2360";
import type { FragmentToken2361 } from "./fragment2361";

export const FRAGMENT_2362 = gql(`
  fragment Fragment2362 on Member121 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_121
    memberCount_121
    memberMetric_121
  }
`);

type FragmentResult2362 = ResultOf<typeof FRAGMENT_2362>;
type FragmentSelf2362 = NonNullable<FragmentResult2362>;

export type FragmentToken2362 =
  | FragmentSelf2362["__typename"]
  | FragmentSelf2362["typenameHint"] | FragmentToken2360 | FragmentToken2361;
