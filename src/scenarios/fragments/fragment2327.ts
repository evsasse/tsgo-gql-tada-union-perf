import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2325 } from "./fragment2325";
import type { FragmentToken2326 } from "./fragment2326";

export const FRAGMENT_2327 = gql(`
  fragment Fragment2327 on Member86 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_86
    memberCount_86
    memberMetric_86
  }
`);

type FragmentResult2327 = ResultOf<typeof FRAGMENT_2327>;
type FragmentSelf2327 = NonNullable<FragmentResult2327>;

export type FragmentToken2327 =
  | FragmentSelf2327["__typename"]
  | FragmentSelf2327["typenameHint"] | FragmentToken2325 | FragmentToken2326;
