import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3644 } from "./fragment3644";
import type { FragmentToken3645 } from "./fragment3645";

export const FRAGMENT_3646 = gql(`
  fragment Fragment3646 on Member05 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_05
    memberCount_05
    memberMetric_05
  }
`);

type FragmentResult3646 = ResultOf<typeof FRAGMENT_3646>;
type FragmentSelf3646 = NonNullable<FragmentResult3646>;

export type FragmentToken3646 =
  | FragmentSelf3646["__typename"]
  | FragmentSelf3646["typenameHint"] | FragmentToken3644 | FragmentToken3645;
