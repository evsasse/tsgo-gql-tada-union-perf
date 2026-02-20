import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2642 } from "./fragment2642";
import type { FragmentToken2643 } from "./fragment2643";

export const FRAGMENT_2644 = gql(`
  fragment Fragment2644 on Member123 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_123
    memberCount_123
    memberMetric_123
  }
`);

type FragmentResult2644 = ResultOf<typeof FRAGMENT_2644>;
type FragmentSelf2644 = NonNullable<FragmentResult2644>;

export type FragmentToken2644 =
  | FragmentSelf2644["__typename"]
  | FragmentSelf2644["typenameHint"] | FragmentToken2642 | FragmentToken2643;
