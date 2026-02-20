import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2878 } from "./fragment2878";
import type { FragmentToken2879 } from "./fragment2879";

export const FRAGMENT_2880 = gql(`
  fragment Fragment2880 on Member79 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_79
    memberCount_79
    memberMetric_79
  }
`);

type FragmentResult2880 = ResultOf<typeof FRAGMENT_2880>;
type FragmentSelf2880 = NonNullable<FragmentResult2880>;

export type FragmentToken2880 =
  | FragmentSelf2880["__typename"]
  | FragmentSelf2880["typenameHint"] | FragmentToken2878 | FragmentToken2879;
