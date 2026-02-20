import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2510 } from "./fragment2510";
import type { FragmentToken2511 } from "./fragment2511";

export const FRAGMENT_2512 = gql(`
  fragment Fragment2512 on Member271 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_271
    memberCount_271
    memberMetric_271
  }
`);

type FragmentResult2512 = ResultOf<typeof FRAGMENT_2512>;
type FragmentSelf2512 = NonNullable<FragmentResult2512>;

export type FragmentToken2512 =
  | FragmentSelf2512["__typename"]
  | FragmentSelf2512["typenameHint"] | FragmentToken2510 | FragmentToken2511;
