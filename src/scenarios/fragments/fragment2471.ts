import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2469 } from "./fragment2469";
import type { FragmentToken2470 } from "./fragment2470";

export const FRAGMENT_2471 = gql(`
  fragment Fragment2471 on Member230 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_230
    memberCount_230
    memberMetric_230
  }
`);

type FragmentResult2471 = ResultOf<typeof FRAGMENT_2471>;
type FragmentSelf2471 = NonNullable<FragmentResult2471>;

export type FragmentToken2471 =
  | FragmentSelf2471["__typename"]
  | FragmentSelf2471["typenameHint"] | FragmentToken2469 | FragmentToken2470;
