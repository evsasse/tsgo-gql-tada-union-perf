import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2476 } from "./fragment2476";
import type { FragmentToken2477 } from "./fragment2477";

export const FRAGMENT_2478 = gql(`
  fragment Fragment2478 on Member237 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_237
    memberCount_237
    memberMetric_237
  }
`);

type FragmentResult2478 = ResultOf<typeof FRAGMENT_2478>;
type FragmentSelf2478 = NonNullable<FragmentResult2478>;

export type FragmentToken2478 =
  | FragmentSelf2478["__typename"]
  | FragmentSelf2478["typenameHint"] | FragmentToken2476 | FragmentToken2477;
