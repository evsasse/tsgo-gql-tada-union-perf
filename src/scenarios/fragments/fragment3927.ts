import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3925 } from "./fragment3925";
import type { FragmentToken3926 } from "./fragment3926";

export const FRAGMENT_3927 = gql(`
  fragment Fragment3927 on Member06 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_06
    memberCount_06
    memberMetric_06
  }
`);

type FragmentResult3927 = ResultOf<typeof FRAGMENT_3927>;
type FragmentSelf3927 = NonNullable<FragmentResult3927>;

export type FragmentToken3927 =
  | FragmentSelf3927["__typename"]
  | FragmentSelf3927["typenameHint"] | FragmentToken3925 | FragmentToken3926;
