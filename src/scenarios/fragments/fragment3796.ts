import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3794 } from "./fragment3794";
import type { FragmentToken3795 } from "./fragment3795";

export const FRAGMENT_3796 = gql(`
  fragment Fragment3796 on Member155 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_155
    memberCount_155
    memberMetric_155
  }
`);

type FragmentResult3796 = ResultOf<typeof FRAGMENT_3796>;
type FragmentSelf3796 = NonNullable<FragmentResult3796>;

export type FragmentToken3796 =
  | FragmentSelf3796["__typename"]
  | FragmentSelf3796["typenameHint"] | FragmentToken3794 | FragmentToken3795;
