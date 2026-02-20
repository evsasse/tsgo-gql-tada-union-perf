import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3927 } from "./fragment3927";
import type { FragmentToken3928 } from "./fragment3928";

export const FRAGMENT_3929 = gql(`
  fragment Fragment3929 on Member08 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_08
    memberCount_08
    memberMetric_08
  }
`);

type FragmentResult3929 = ResultOf<typeof FRAGMENT_3929>;
type FragmentSelf3929 = NonNullable<FragmentResult3929>;

export type FragmentToken3929 =
  | FragmentSelf3929["__typename"]
  | FragmentSelf3929["typenameHint"] | FragmentToken3927 | FragmentToken3928;
