import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2855 } from "./fragment2855";
import type { FragmentToken2856 } from "./fragment2856";

export const FRAGMENT_2857 = gql(`
  fragment Fragment2857 on Member56 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_56
    memberCount_56
    memberMetric_56
  }
`);

type FragmentResult2857 = ResultOf<typeof FRAGMENT_2857>;
type FragmentSelf2857 = NonNullable<FragmentResult2857>;

export type FragmentToken2857 =
  | FragmentSelf2857["__typename"]
  | FragmentSelf2857["typenameHint"] | FragmentToken2855 | FragmentToken2856;
