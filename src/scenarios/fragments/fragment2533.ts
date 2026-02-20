import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2531 } from "./fragment2531";
import type { FragmentToken2532 } from "./fragment2532";

export const FRAGMENT_2533 = gql(`
  fragment Fragment2533 on Member12 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_12
    memberCount_12
    memberMetric_12
  }
`);

type FragmentResult2533 = ResultOf<typeof FRAGMENT_2533>;
type FragmentSelf2533 = NonNullable<FragmentResult2533>;

export type FragmentToken2533 =
  | FragmentSelf2533["__typename"]
  | FragmentSelf2533["typenameHint"] | FragmentToken2531 | FragmentToken2532;
