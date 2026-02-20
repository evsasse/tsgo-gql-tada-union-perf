import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2836 } from "./fragment2836";
import type { FragmentToken2837 } from "./fragment2837";

export const FRAGMENT_2838 = gql(`
  fragment Fragment2838 on Member37 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_37
    memberCount_37
    memberMetric_37
  }
`);

type FragmentResult2838 = ResultOf<typeof FRAGMENT_2838>;
type FragmentSelf2838 = NonNullable<FragmentResult2838>;

export type FragmentToken2838 =
  | FragmentSelf2838["__typename"]
  | FragmentSelf2838["typenameHint"] | FragmentToken2836 | FragmentToken2837;
