import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2838 } from "./fragment2838";
import type { FragmentToken2839 } from "./fragment2839";

export const FRAGMENT_2840 = gql(`
  fragment Fragment2840 on Member39 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_39
    memberCount_39
    memberMetric_39
  }
`);

type FragmentResult2840 = ResultOf<typeof FRAGMENT_2840>;
type FragmentSelf2840 = NonNullable<FragmentResult2840>;

export type FragmentToken2840 =
  | FragmentSelf2840["__typename"]
  | FragmentSelf2840["typenameHint"] | FragmentToken2838 | FragmentToken2839;
